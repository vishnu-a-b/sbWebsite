import express, { Router } from 'express';
import {
  createFellowship,
  listFellowships,
  getFellowshipById,
  updateFellowship,
  pauseFellowship,
  resumeFellowship,
  cancelFellowship,
  getFellowshipStats,
  getOverduePayments,
  verifyEmail,
  getFellowshipByEmail
} from './fellowship.controller.js';
import { requireAuth, requireRole } from '../../middleware/auth.middleware.js';
import { AdminRole } from '../admin/admin.model.js';

const router: Router = express.Router();

// Public routes
router.post('/subscribe', createFellowship);
router.get('/verify/:token', verifyEmail);
router.get('/lookup/:email', getFellowshipByEmail);

// Protected routes - require authentication
router.get('/stats',
  requireAuth,
  requireRole(AdminRole.SUPER_ADMIN, AdminRole.ACCOUNTS),
  getFellowshipStats
);

router.get('/overdue',
  requireAuth,
  requireRole(AdminRole.SUPER_ADMIN, AdminRole.ACCOUNTS, AdminRole.AGENT),
  getOverduePayments
);

router.get('/',
  requireAuth,
  listFellowships
);

router.get('/:id',
  requireAuth,
  getFellowshipById
);

router.put('/:id',
  requireAuth,
  requireRole(AdminRole.SUPER_ADMIN, AdminRole.AGENT),
  updateFellowship
);

router.put('/:id/pause',
  requireAuth,
  requireRole(AdminRole.SUPER_ADMIN, AdminRole.AGENT),
  pauseFellowship
);

router.put('/:id/resume',
  requireAuth,
  requireRole(AdminRole.SUPER_ADMIN, AdminRole.AGENT),
  resumeFellowship
);

router.put('/:id/cancel',
  requireAuth,
  requireRole(AdminRole.SUPER_ADMIN),
  cancelFellowship
);

export default router;
