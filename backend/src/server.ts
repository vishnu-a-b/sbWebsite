import dotenv from 'dotenv';
import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import routes
import bannerRoutes from './modules/banner/banner.routes.js';
import paymentRoutes from './modules/payment/payment.routes.js';
import volunteerRoutes from './modules/volunteer/volunteer.routes.js';
import contactRoutes from './modules/contact/contact.routes.js';
import statsRoutes from './modules/stats/stats.routes.js';
// CMS Routes
import serviceRoutes from './modules/service/service.routes.js';
import servicesPageRoutes from './modules/service/services-page.routes.js';
import projectRoutes from './modules/featured-project/featured-project.routes.js';
import awardRoutes from './modules/award/award.routes.js';
import newsEventRoutes from './modules/news-event/news-event.routes.js';
import teamMemberRoutes from './modules/team-member/team-member.routes.js';
import homeSectionRoutes from './modules/home-section/home-section.routes.js';
import aboutRoutes from './modules/about/about.routes.js';
import benevityRoutes from './modules/benevity/benevity.routes.js';
import adminRoutes from './modules/admin/admin.routes.js';
import donationRoutes from './modules/donation/donation.routes.js';
import fellowshipRoutes from './modules/fellowship/fellowship.routes.js';
import campaignRoutes from './modules/campaign/campaign.routes.js';
import footerRoutes from './modules/footer/footer.routes.js';

// Load environment variables
dotenv.config();

const app: Express = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} | Origin: ${req.headers.origin}`);
  next();
});

app.use(cors({
  origin: true, // Allow any origin
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, '../public')));

// Routes - Operations
app.use('/api/banner', bannerRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/volunteer', volunteerRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/stats', statsRoutes);

// Routes - CMS Content
app.use('/api/about', aboutRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/services-page', servicesPageRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/awards', awardRoutes);
app.use('/api/news-events', newsEventRoutes);
app.use('/api/team', teamMemberRoutes);
app.use('/api/homepage', homeSectionRoutes);
app.use('/api/benevity', benevityRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/donation', donationRoutes);
app.use('/api/fellowship', fellowshipRoutes);
app.use('/api/campaign', campaignRoutes);
app.use('/api/footer', footerRoutes);

// Health check route
app.get('/api/health', (_req: Request, res: Response): void => {
  res.json({ status: 'OK', message: 'Backend server is running' });
});

// Error handling middleware
interface ErrorWithStack extends Error {
  stack?: string;
}

app.use((err: ErrorWithStack, _req: Request, res: Response, _next: NextFunction): void => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!',
    message: err.message
  });
});

const PORT: number = parseInt(process.env.PORT || '5001', 10);

app.listen(PORT, (): void => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
});
