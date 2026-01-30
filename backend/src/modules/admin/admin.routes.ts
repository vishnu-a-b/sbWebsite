import express, { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import type { StringValue } from 'ms';
import Admin, { AdminRole } from './admin.model.js';
import { requireAuth, requireRole } from '../../middleware/auth.middleware.js';

const router: Router = express.Router();

interface LoginRequestBody {
  username: string;
  password: string;
}

interface CreateAdminRequestBody {
  username: string;
  email: string;
  password: string;
  role: AdminRole;
}

// Generate tokens
const generateTokens = (adminId: string, role: string) => {
  const jwtSecret = process.env.JWT_SECRET;
  const refreshSecret = process.env.JWT_REFRESH_SECRET || jwtSecret;

  if (!jwtSecret) {
    throw new Error('JWT_SECRET not configured');
  }

  // Access token - short lived (15 minutes)
  const accessToken = jwt.sign(
    { adminId, role, type: 'access' },
    jwtSecret,
    { expiresIn: '15m' as StringValue }
  );

  // Refresh token - long lived (7 days)
  const refreshToken = jwt.sign(
    { adminId, role, type: 'refresh' },
    refreshSecret!,
    { expiresIn: '7d' as StringValue }
  );

  return { accessToken, refreshToken };
};

// Login
router.post('/login', async (req: Request<{}, {}, LoginRequestBody>, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ success: false, error: 'Username and password are required' });
      return;
    }

    const admin = await Admin.findOne({ username, isActive: true });
    if (!admin) {
      res.status(401).json({ success: false, error: 'Invalid credentials' });
      return;
    }

    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      res.status(401).json({ success: false, error: 'Invalid credentials' });
      return;
    }

    const { accessToken, refreshToken } = generateTokens(admin._id.toString(), admin.role);

    res.json({
      success: true,
      accessToken,
      refreshToken,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, error: 'Login failed' });
  }
});

// Refresh token endpoint
router.post('/refresh', async (req: Request, res: Response): Promise<void> => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      res.status(400).json({ success: false, error: 'Refresh token is required' });
      return;
    }

    const refreshSecret = process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET;
    if (!refreshSecret) {
      throw new Error('JWT secrets not configured');
    }

    // Verify refresh token
    const decoded = jwt.verify(refreshToken, refreshSecret) as { adminId: string; role: string; type: string };

    if (decoded.type !== 'refresh') {
      res.status(401).json({ success: false, error: 'Invalid token type' });
      return;
    }

    // Check if admin still exists and is active
    const admin = await Admin.findOne({ _id: decoded.adminId, isActive: true });
    if (!admin) {
      res.status(401).json({ success: false, error: 'Admin not found or inactive' });
      return;
    }

    // Generate new tokens
    const tokens = generateTokens(admin._id.toString(), admin.role);

    res.json({
      success: true,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).json({ success: false, error: 'Refresh token expired' });
      return;
    }
    console.error('Refresh token error:', error);
    res.status(401).json({ success: false, error: 'Invalid refresh token' });
  }
});

// Get current admin profile
router.get('/profile', requireAuth, async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.admin) {
      res.status(401).json({ success: false, error: 'Not authenticated' });
      return;
    }

    res.json({
      success: true,
      admin: {
        id: req.admin._id,
        username: req.admin.username,
        email: req.admin.email,
        role: req.admin.role
      }
    });
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch profile' });
  }
});

// Create new admin (Super Admin only)
router.post(
  '/users',
  requireAuth,
  requireRole(AdminRole.SUPER_ADMIN),
  async (req: Request<{}, {}, CreateAdminRequestBody>, res: Response): Promise<void> => {
    try {
      const { username, email, password, role } = req.body;

      if (!username || !email || !password || !role) {
        res.status(400).json({ success: false, error: 'All fields are required' });
        return;
      }

      // Check if username or email already exists
      const existingAdmin = await Admin.findOne({
        $or: [{ username }, { email }]
      });

      if (existingAdmin) {
        res.status(400).json({ success: false, error: 'Username or email already exists' });
        return;
      }

      const newAdmin = await Admin.create({
        username,
        email,
        passwordHash: password, // Will be hashed by pre-save hook
        role
      });

      res.status(201).json({
        success: true,
        admin: {
          id: newAdmin._id,
          username: newAdmin.username,
          email: newAdmin.email,
          role: newAdmin.role
        }
      });
    } catch (error) {
      console.error('Create admin error:', error);
      res.status(500).json({ success: false, error: 'Failed to create admin user' });
    }
  }
);

// List all admin users (Super Admin only)
router.get(
  '/users',
  requireAuth,
  requireRole(AdminRole.SUPER_ADMIN),
  async (_req: Request, res: Response): Promise<void> => {
    try {
      const admins = await Admin.find()
        .select('-passwordHash')
        .sort({ createdAt: -1 });

      res.json({
        success: true,
        admins: admins.map(admin => ({
          id: admin._id,
          username: admin.username,
          email: admin.email,
          role: admin.role,
          isActive: admin.isActive,
          createdAt: admin.createdAt
        }))
      });
    } catch (error) {
      console.error('List admins error:', error);
      res.status(500).json({ success: false, error: 'Failed to fetch admin users' });
    }
  }
);

// Update admin user (Super Admin only)
router.put(
  '/users/:id',
  requireAuth,
  requireRole(AdminRole.SUPER_ADMIN),
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const updates = req.body;

      // Don't allow updating passwordHash directly through this endpoint
      delete updates.passwordHash;

      const admin = await Admin.findByIdAndUpdate(
        id,
        updates,
        { new: true, runValidators: true }
      ).select('-passwordHash');

      if (!admin) {
        res.status(404).json({ success: false, error: 'Admin user not found' });
        return;
      }

      res.json({
        success: true,
        admin: {
          id: admin._id,
          username: admin.username,
          email: admin.email,
          role: admin.role,
          isActive: admin.isActive
        }
      });
    } catch (error) {
      console.error('Update admin error:', error);
      res.status(500).json({ success: false, error: 'Failed to update admin user' });
    }
  }
);

// Delete/deactivate admin user (Super Admin only)
router.delete(
  '/users/:id',
  requireAuth,
  requireRole(AdminRole.SUPER_ADMIN),
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      // Don't allow deleting self
      if (req.admin && req.admin._id.toString() === id) {
        res.status(400).json({ success: false, error: 'Cannot delete your own account' });
        return;
      }

      // Soft delete - just deactivate
      const admin = await Admin.findByIdAndUpdate(
        id,
        { isActive: false },
        { new: true }
      );

      if (!admin) {
        res.status(404).json({ success: false, error: 'Admin user not found' });
        return;
      }

      res.json({ success: true, message: 'Admin user deactivated successfully' });
    } catch (error) {
      console.error('Delete admin error:', error);
      res.status(500).json({ success: false, error: 'Failed to delete admin user' });
    }
  }
);

export default router;
