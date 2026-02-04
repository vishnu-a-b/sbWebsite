import express, { Router } from 'express';
import {
  getActiveCampaigns,
  getCampaignBySlug,
  getFeaturedCampaigns,
  createCampaign,
  listCampaigns,
  getCampaignById,
  updateCampaign,
  updateCampaignStatus,
  deleteCampaign,
  getCampaignStats
} from './campaign.controller.js';
import { requireAuth, requireRole } from '../../middleware/auth.middleware.js';
import { AdminRole } from '../admin/admin.model.js';

const router: Router = express.Router();

// Public routes
router.get('/active', getActiveCampaigns);
router.get('/featured', getFeaturedCampaigns);
router.get('/slug/:slug', getCampaignBySlug);

// Admin routes
router.get('/stats',
  requireAuth,
  requireRole(AdminRole.SUPER_ADMIN, AdminRole.ACCOUNTS),
  getCampaignStats
);

router.get('/',
  requireAuth,
  listCampaigns
);

router.get('/:id',
  requireAuth,
  getCampaignById
);

router.post('/',
  requireAuth,
  requireRole(AdminRole.SUPER_ADMIN),
  createCampaign
);

router.put('/:id',
  requireAuth,
  requireRole(AdminRole.SUPER_ADMIN),
  updateCampaign
);

router.put('/:id/status',
  requireAuth,
  requireRole(AdminRole.SUPER_ADMIN),
  updateCampaignStatus
);

router.delete('/:id',
  requireAuth,
  requireRole(AdminRole.SUPER_ADMIN),
  deleteCampaign
);

export default router;
