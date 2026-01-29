import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Admin, { AdminRole, IAdminDocument } from '../modules/admin/admin.model.js';

// Extend Express Request type to include admin
declare global {
  namespace Express {
    interface Request {
      admin?: IAdminDocument;
    }
  }
}

interface JwtPayload {
  adminId: string;
  role: AdminRole;
}

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      res.status(401).json({ success: false, error: 'Authentication required' });
      return;
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error('JWT_SECRET not configured');
    }

    const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
    const admin = await Admin.findById(decoded.adminId);

    if (!admin || !admin.isActive) {
      res.status(401).json({ success: false, error: 'Invalid or inactive account' });
      return;
    }

    req.admin = admin;
    next();
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ success: false, error: 'Invalid or expired token' });
  }
};

export const requireRole = (...allowedRoles: AdminRole[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.admin) {
      res.status(401).json({ success: false, error: 'Authentication required' });
      return;
    }

    if (!allowedRoles.includes(req.admin.role)) {
      res.status(403).json({
        success: false,
        error: 'Insufficient permissions',
        required: allowedRoles,
        current: req.admin.role
      });
      return;
    }

    next();
  };
};

// Permission helper to check if user can perform action
export const canPerformAction = (
  admin: IAdminDocument,
  action: 'add_offline' | 'approve_payment' | 'view_reports' | 'manage_users'
): boolean => {
  switch (action) {
    case 'add_offline':
      return [AdminRole.AGENT, AdminRole.SUPER_ADMIN].includes(admin.role);
    case 'approve_payment':
      return [AdminRole.APPROVER, AdminRole.SUPER_ADMIN].includes(admin.role);
    case 'view_reports':
      return [AdminRole.ACCOUNTS, AdminRole.SUPER_ADMIN].includes(admin.role);
    case 'manage_users':
      return admin.role === AdminRole.SUPER_ADMIN;
    default:
      return false;
  }
};
