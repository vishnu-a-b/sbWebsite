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

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error('JWT_SECRET not configured');
    }

    const token = jwt.sign(
      { adminId: admin._id, role: admin.role },
      jwtSecret,
      { expiresIn: (process.env.JWT_EXPIRES_IN || '7d') as StringValue }
    );

    res.json({
      success: true,
      token,
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
