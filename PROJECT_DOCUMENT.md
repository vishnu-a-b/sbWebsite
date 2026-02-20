# Shanthibhavan Palliative Hospital - Project Document

**Project:** Shanthibhavan Palliative Hospital Website & Donation Platform
**Type:** Full-stack web application with CMS, payment gateway, and admin panel
**Hospital:** India's first no-bill palliative care hospital, Thiruvananthapuram, Kerala

| Environment | URL |
|-------------|-----|
| Frontend | https://palliativeindia.in |
| Backend API | https://api.donatebed.palliativeindia.in |
| Dev Frontend | http://127.0.0.1:3000 |
| Dev Backend | http://127.0.0.1:5002 |

---

## 1. Architecture

```
SbWebsite/
├── client/          # Next.js 16 Frontend (React 19, App Router)
├── backend/         # Express.js Backend (TypeScript)
└── scripts/         # Database seed scripts
```

Frontend and backend are completely separate applications communicating via REST API.

---

## 2. Technology Stack

### Frontend (`/client`)

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16.1.1 (App Router) |
| UI Library | React 19.2.3 |
| Language | TypeScript |
| Styling | Tailwind CSS 4.0, PostCSS |
| UI Components | Radix UI, Lucide Icons |
| Animations | Framer Motion 12.26, GSAP 3.14 |
| Carousels | Embla Carousel, Swiper 12 |
| Forms | React Hook Form 7.70, Zod 4.3 |
| Fonts | Geist Sans, Geist Mono, Space Grotesk |
| Smooth Scroll | Lenis 1.3 |

### Backend (`/backend`)

| Category | Technology |
|----------|-----------|
| Framework | Express.js 4.18 |
| Language | TypeScript 5.9 |
| Database | MongoDB (Mongoose 8/9) |
| Auth | JWT (jsonwebtoken 9.0) |
| Security | bcryptjs, CORS, express-rate-limit |
| File Upload | Multer 2.0 |
| Email | Nodemailer 7.0 |
| Dev Tools | tsx, nodemon |

---

## 3. Project Structure

### Frontend

```
client/
├── app/
│   ├── (main)/                        # Public pages (with header/footer)
│   │   ├── page.tsx                   # Homepage
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── team/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── donate/
│   │   │   ├── page.tsx               # Donation form
│   │   │   ├── success/page.tsx
│   │   │   └── failed/page.tsx
│   │   ├── campaigns/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── awards/page.tsx
│   │   ├── news-events/page.tsx
│   │   ├── benevity/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── volunteer/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   └── refund-policy/page.tsx
│   │
│   ├── (admin-panel)/admin/           # Admin pages (no header/footer)
│   │   ├── page.tsx                   # Dashboard
│   │   ├── login/page.tsx
│   │   ├── donations/
│   │   │   ├── page.tsx               # All donations
│   │   │   ├── add/page.tsx           # Add offline
│   │   │   ├── pending/page.tsx       # Pending approvals
│   │   │   ├── history/page.tsx
│   │   │   └── stats/page.tsx
│   │   ├── campaigns/
│   │   │   ├── page.tsx
│   │   │   ├── create/page.tsx
│   │   │   ├── [id]/page.tsx
│   │   │   └── stats/page.tsx
│   │   ├── fellowships/
│   │   │   ├── page.tsx
│   │   │   ├── add/page.tsx
│   │   │   ├── stats/page.tsx
│   │   │   └── overdue/page.tsx
│   │   ├── banners/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── awards/page.tsx
│   │   ├── news-events/page.tsx
│   │   ├── team/page.tsx
│   │   ├── homepage/page.tsx
│   │   ├── benevity/page.tsx
│   │   ├── benevity-projects/page.tsx
│   │   ├── footer/page.tsx
│   │   └── users/page.tsx
│   │
│   └── api/                           # Next.js API routes
│       ├── upload/route.ts
│       ├── payment/route.ts
│       └── ...
│
├── actions/                           # Server actions
│   ├── campaign.ts
│   └── cms/ (awards, services, projects, newsEvents, team)
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── DonationModal.tsx
│   ├── DonationSection.tsx
│   ├── CampaignsSection.tsx
│   ├── BannerCarousel.tsx
│   ├── VideoHero.tsx
│   ├── AwardsSection.tsx
│   ├── NewsEventsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── admin/
│   │   ├── AdminSidebar.tsx
│   │   └── MediaUpload.tsx
│   └── ui/
│
├── models/                            # Mongoose schemas (for API routes)
├── lib/
│   ├── api.ts                         # API config
│   ├── db.ts                          # DB connection
│   ├── image-url.ts
│   └── utils.ts
│
└── public/
    ├── images/
    └── video/
```

### Backend

```
backend/src/
├── server.ts                          # Entry point
├── config/
│   ├── database.ts                    # MongoDB connection
│   └── billdesk.ts                    # BillDesk config
│
├── middleware/
│   └── auth.middleware.ts             # JWT auth + role checks
│
├── modules/
│   ├── donation/
│   │   ├── donation.model.ts
│   │   ├── donation.controller.ts     # Online payment flow
│   │   ├── donation.routes.ts
│   │   ├── offline.controller.ts      # Offline approval workflow
│   │   ├── transaction.model.ts       # Audit trail
│   │   └── utils/billdesk.util.ts     # BillDesk JWS/JWE
│   │
│   ├── campaign/
│   │   ├── campaign.model.ts
│   │   ├── campaign.controller.ts
│   │   └── campaign.routes.ts
│   │
│   ├── fellowship/
│   │   ├── fellowship.model.ts
│   │   ├── fellowship.controller.ts
│   │   └── fellowship.routes.ts
│   │
│   ├── admin/
│   │   ├── admin.model.ts
│   │   └── admin.routes.ts
│   │
│   ├── banner/       ├── service/
│   ├── featured-project/
│   ├── award/        ├── news-event/
│   ├── team-member/  ├── home-section/
│   ├── gallery/      ├── about/
│   ├── benevity/     ├── contact/
│   ├── volunteer/    ├── payment/
│   ├── footer/       ├── upload/
│   └── stats/
│
├── services/
│   └── email.service.ts               # Nodemailer templates
│
├── types/
│   ├── index.ts
│   └── environment.d.ts
│
└── scripts/                           # Database seeders
    ├── seed.ts
    ├── seed-campaigns.ts
    ├── seed-gallery.ts
    └── seed-awards.ts
```

---

## 4. Database Schema (MongoDB)

### Donation

```
donorName        string    required
email            string    required
phone            string
countryCode      string    default: '+91'
panNumber        string    for 80G tax exemption
address          string
amount           number    required, min: 1
currency         string    default: 'INR'
donationType     enum      'general' | 'fellowship' | 'campaign'
notes            string

-- Online Payment (BillDesk) --
paymentStatus    enum      'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUNDED'
transactionId    string
gatewayOrderId   string    unique, auto: DN-YYYYMMDDHHMMSS-XXXX
bdOrderId        string    BillDesk order ID
bankReferenceNumber string
paymentMethod    string    'card' | 'upi' | 'netbanking' etc.
authStatus       string    BillDesk status code
checksumVerified boolean

-- Offline Donation --
isOffline        boolean   default: false
approvalStatus   enum      'pending' | 'approved' | 'rejected'
addedBy          ObjectId  -> Admin
approvedBy       ObjectId  -> Admin
approvalDate     Date
rejectionReason  string
offlinePaymentMethod string 'cash' | 'cheque' | 'bank_transfer'

-- Receipt --
receiptNumber    string    auto-generated (pre-save hook)
receiptUrl       string
receiptGenerated boolean

-- Relationships --
fellowshipId     ObjectId  -> Fellowship
campaignId       ObjectId  -> Campaign
```

### Campaign

```
title            string    required
slug             string    required, unique, lowercase
description      string    supports HTML
shortDescription string    max 200 chars
image            string
goalAmount       number    required
raisedAmount     number    default: 0, auto-updated on donation
donorCount       number    default: 0, auto-updated
currency         string    default: 'INR'
status           enum      'draft' | 'active' | 'paused' | 'completed' | 'cancelled'
startDate        Date      required
endDate          Date
isFeatured       boolean
createdBy        ObjectId  -> Admin
donations        ObjectId[] -> Donation[]
```

### Fellowship

```
subscriberName   string    required
email            string    required, unique
phone            string    required
countryCode      string    default: '+91'
address          string
panNumber        string
monthlyAmount    number    required, min: 1
currency         string    default: 'INR'
status           enum      'active' | 'paused' | 'cancelled' | 'completed'
startDate        Date      default: now
endDate          Date
lastPaymentDate  Date
nextPaymentDue   Date
totalPaid        number
totalPayments    number
donations        ObjectId[] -> Donation[]
isEmailVerified  boolean
isPhoneVerified  boolean
verificationToken string
verificationTokenExpiry Date
pausedAt/pausedReason
cancelledAt/cancelledReason
notes            string
```

### Transaction (Audit Trail)

```
donationId       ObjectId  required, indexed -> Donation
transactionType  enum      'payment_initiated' | 'payment_return' | 'payment_webhook' | 'status_check'
requestPayload   any
responsePayload  any
bdOrderId        string
bdTransactionId  string
checksumVerified boolean
success          boolean
errorMessage     string
ipAddress        string
```

### Admin

```
username         string    required, unique, min: 3
email            string    required, unique, lowercase
passwordHash     string    bcrypt hashed (10 rounds)
role             enum      'super_admin' | 'agent' | 'approver' | 'accounts'
isActive         boolean   default: true
```

### CMS Models (shared pattern)

All CMS models (Service, Award, NewsEvent, TeamMember, FeaturedProject, HomeSection) share:

```
-- Common CMS fields --
priority         number    higher = shown first
isActive         boolean
startDate        Date
expiryDate       Date
showOnFirstFace  boolean   above the fold on homepage
```

| Model | Key Fields |
|-------|-----------|
| **Service** | title, slug, description, icon, image, color |
| **Award** | title, awardingAuthority, year, description, image |
| **NewsEvent** | title, description, fullContent, eventDate, images[], type (news/event), isScheduled, scheduledPublishDate |
| **TeamMember** | name, role, designation, bio, image, specialization, experience, showOnAboutPage |
| **FeaturedProject** | projectName, shortDescription, fullDescription, featuredImage, gallery[], showOnBenevity |
| **HomeSection** | sectionName, sectionType (hero/about/services/etc.), title, subtitle, content, ctaText, ctaLink, isFirstFace |
| **Banner** | title, subtitle, description, mediaType (image/video), imageUrl, videoUrl, thumbnailUrl, ctaText, ctaLink, location (home/benevity), order |
| **Gallery** | imageUrl, altText, category |
| **Contact** | name, email, phone, message, status (new/read/replied) |
| **Volunteer** | name, email, phone, message, status |
| **About** | heroTitle, heroSubtitle, mission, vision, motto, belief |
| **Footer** | address, phone, email, description, social links, copyrightText |

---

## 5. API Endpoints

### Authentication

```
POST   /api/admin/login              Login (returns accessToken + refreshToken)
POST   /api/admin/refresh            Refresh access token
GET    /api/admin/profile            Get current admin (auth required)
POST   /api/admin/users              Create admin user (SUPER_ADMIN)
GET    /api/admin/users              List admin users (SUPER_ADMIN)
PUT    /api/admin/users/:id          Update admin user (SUPER_ADMIN)
DELETE /api/admin/users/:id          Deactivate admin user (SUPER_ADMIN)
```

### Donations

```
-- Public --
POST   /api/donation/initiate                     Start online payment
POST   /api/donation/callback/billdesk/return      BillDesk return (POST)
GET    /api/donation/callback/billdesk/return      BillDesk return (GET)
POST   /api/donation/callback/billdesk/webhook     BillDesk server webhook
GET    /api/donation/status/:orderId               Check payment status

-- Auth Required --
GET    /api/donation                               List donations (paginated, filtered)
GET    /api/donation/:id                           Get single donation
GET    /api/donation/stats                         Donation statistics

-- Role-based --
POST   /api/donation/offline                       Add offline donation (AGENT, SUPER_ADMIN)
GET    /api/donation/pending-approvals             Pending approvals (APPROVER, SUPER_ADMIN)
PUT    /api/donation/:id/approve                   Approve offline (APPROVER, SUPER_ADMIN)
PUT    /api/donation/:id/reject                    Reject offline (APPROVER, SUPER_ADMIN)
GET    /api/donation/offline/history               Offline history (ACCOUNTS, SUPER_ADMIN)
```

### Campaigns

```
-- Public --
GET    /api/campaign/active                        Active campaigns
GET    /api/campaign/featured                      Featured campaigns
GET    /api/campaign/slug/:slug                    Campaign by slug

-- Auth Required --
GET    /api/campaign                               List all campaigns
GET    /api/campaign/:id                           Get by ID
GET    /api/campaign/stats                         Statistics (ACCOUNTS, SUPER_ADMIN)

-- SUPER_ADMIN --
POST   /api/campaign                               Create campaign
PUT    /api/campaign/:id                           Update campaign
PUT    /api/campaign/:id/status                    Update status
DELETE /api/campaign/:id                           Delete campaign
```

### Fellowships

```
-- Public --
POST   /api/fellowship                             Create fellowship
POST   /api/fellowship/subscribe                   Create (alias)
GET    /api/fellowship/verify/:token               Verify email
GET    /api/fellowship/lookup/:email               Lookup by email

-- Auth Required --
GET    /api/fellowship                             List all
GET    /api/fellowship/:id                         Get by ID
GET    /api/fellowship/stats                       Statistics (ACCOUNTS, SUPER_ADMIN)
GET    /api/fellowship/overdue                     Overdue payments (AGENT+)

-- SUPER_ADMIN / AGENT --
PUT    /api/fellowship/:id                         Update
PUT    /api/fellowship/:id/pause                   Pause
PUT    /api/fellowship/:id/resume                  Resume
PUT    /api/fellowship/:id/cancel                  Cancel (SUPER_ADMIN only)
```

### CMS Resources

All CMS modules follow this pattern:

```
GET    /api/{resource}                             Public: active items (filtered by date)
GET    /api/{resource}/admin                       Admin: all items (unfiltered)
GET    /api/{resource}/:id                         Get by ID
POST   /api/{resource}                             Create (auth required)
PUT    /api/{resource}/:id                         Update (auth required)
DELETE /api/{resource}/:id                         Delete (auth required)
POST   /api/{resource}/seed                        Seed defaults
```

Resources: `services`, `services-page`, `projects`, `awards`, `news-events`, `team`, `homepage`, `gallery`, `banner`, `about`, `about-image`, `benevity` (page, banners, projects), `footer`

### Other

```
GET    /api/health                                 Health check
GET    /api/stats                                  Dashboard statistics
GET    /api/contact                                List contacts
POST   /api/contact                                Submit contact form
GET    /api/volunteer                              List volunteers
POST   /api/volunteer                              Submit volunteer form
GET    /api/payment                                List payments
POST   /api/payment                                Create payment
POST   /api/upload                                 Upload single file
POST   /api/upload/multiple                        Upload multiple files (max 10)
```

---

## 6. Authentication & Authorization

### Roles

| Role | Permissions |
|------|------------|
| **SUPER_ADMIN** | Full access to everything |
| **AGENT** | Add offline donations, manage fellowships |
| **APPROVER** | Approve/reject offline donations |
| **ACCOUNTS** | View donation stats, history, reports |

### Token Flow

1. Login with username/password -> returns `accessToken` + `refreshToken`
2. `accessToken` sent in `Authorization: Bearer <token>` header
3. Token expires per `JWT_EXPIRES_IN` (default: 7d)
4. Refresh via `POST /api/admin/refresh` with `refreshToken`
5. Frontend stores tokens in HTTP-only cookies (`admin_access_token`, `admin_refresh_token`)
6. Next.js middleware protects `/admin/*` routes

### Default Admin (Seed)

| Username | Password | Role |
|----------|----------|------|
| superadmin | Admin@123 | SUPER_ADMIN |
| agent1 | Admin@123 | AGENT |
| approver1 | Admin@123 | APPROVER |
| accounts1 | Admin@123 | ACCOUNTS |

---

## 7. Payment System (BillDesk)

### Configuration

```env
BILLDESK_ENV=sandbox               # sandbox | production
BILLDESK_MERCHANT_ID=BDUATV2KRL
BILLDESK_CLIENT_ID=bduatv2krlsj
BILLDESK_KEY_ID=0SCWAdFuBgLv
BILLDESK_ENCRYPTION_KEY=...        # HMAC-SHA256
BILLDESK_SIGNING_KEY=...           # JWS signing
CUSTOMER_IP=103.99.205.104         # Whitelisted server IP
```

### Online Donation Flow

```
1. User fills donation form (/donate)
2. POST /api/donation/initiate
   -> Creates Donation record (PENDING)
   -> Generates gatewayOrderId (DN-YYYYMMDDHHMMSS-XXXX)
   -> Creates BillDesk order (JWS/JWE encrypted)
   -> Returns payment redirect data

3. User redirected to BillDesk payment page
   -> Pays via Card / UPI / NetBanking

4. BillDesk redirects back:
   POST /api/donation/callback/billdesk/return
   -> Parses JWS response
   -> Verifies checksum
   -> Updates Donation status
   -> If SUCCESS: generates receipt, sends email, updates campaign/fellowship
   -> Logs Transaction audit record
   -> Redirects to /donate/success or /donate/failed

5. BillDesk also sends server webhook:
   POST /api/donation/callback/billdesk/webhook
   -> Same processing (idempotent)

6. For pending payments:
   GET /api/donation/status/:orderId
   -> Calls BillDesk Retrieve Transaction API
```

### Offline Donation Workflow

```
1. Agent adds offline donation via admin panel
   POST /api/donation/offline
   -> isOffline=true, approvalStatus='pending'

2. Approver reviews pending list
   GET /api/donation/pending-approvals

3. Approver approves or rejects:
   PUT /api/donation/:id/approve  -> paymentStatus=SUCCESS, receipt generated
   PUT /api/donation/:id/reject   -> paymentStatus=FAILED, reason recorded

4. Email sent to donor on approval/rejection
```

---

## 8. Email System

### Configuration

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=sbnctrl@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx      # Gmail app password
EMAIL_FROM=sbnctrl@gmail.com
EMAIL_FROM_NAME=Shanthi Bhavan
```

### Email Templates

| Template | Trigger | Content |
|----------|---------|---------|
| Donation Success | Payment confirmed | Receipt with 80G details, transaction ID, amount |
| Donation Failed | Payment failed | Failure reason, retry instructions |
| Fellowship Welcome | New subscription | Verification link, program benefits |
| Fellowship Reminder | Payment due | Amount, due date, payment link |
| Fellowship Paused | Subscription paused | Reason, resume instructions |
| Fellowship Cancelled | Subscription cancelled | Thank you message |
| Offline Approved | Admin approves | Donation receipt |
| Offline Rejected | Admin rejects | Rejection reason |

### Receipt Email Includes
- Organization name & address
- PAN & 80G registration number (placeholders - need real values)
- Receipt number
- Donor name, amount, date
- Transaction ID, payment method
- 80G tax exemption declaration

---

## 9. CMS System

### Content Filtering Logic

Content is shown on the public site only when ALL conditions are met:

```
isActive === true
AND currentDate >= startDate
AND currentDate <= expiryDate (if set)
AND (for scheduled news/events) currentDate >= scheduledPublishDate
```

### Homepage Control

- **showOnFirstFace** = `true` -> content appears above the fold
- **priority** -> higher number = displayed first
- Admin endpoints (`/admin`) return unfiltered data for management

---

## 10. File Upload

### Upload Endpoints

```
POST /api/upload              Single file upload
POST /api/upload/multiple     Multiple files (max 10)
```

### Supported Formats

| Type | Formats | Max Size | Storage Path |
|------|---------|----------|-------------|
| Images | PNG, JPG, JPEG, GIF, WebP | 10 MB | `public/images/` |
| Videos | MP4, WebM, MOV | 50 MB | `public/video/` |

### MediaUpload Component
- Drag-and-drop
- Click to browse
- Preview (image & video)
- Progress indicator
- File size/type validation

---

## 11. Environment Variables

### Backend (`/backend/.env`)

```env
PORT=5002
NODE_ENV=production
MONGODB_URI=mongodb+srv://...

JWT_SECRET=...
JWT_EXPIRES_IN=7d

BILLDESK_ENV=sandbox
BILLDESK_MERCHANT_ID=...
BILLDESK_CLIENT_ID=...
BILLDESK_KEY_ID=...
BILLDESK_ENCRYPTION_KEY=...
BILLDESK_SIGNING_KEY=...

BACKEND_URL=https://api.donatebed.palliativeindia.in
FRONTEND_URL=https://palliativeindia.in
CUSTOMER_IP=103.99.205.104

EMAIL_HOST=smtp.gmail.com
EMAIL_USER=...
EMAIL_PASS=...
EMAIL_FROM=...
EMAIL_FROM_NAME=Shanthi Bhavan
```

### Frontend (`/client/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:5002
NEXT_PUBLIC_BACKEND_IMAGE_URL=https://api.donatebed.palliativeindia.in
```

---

## 12. NPM Scripts

### Backend

```bash
npm run dev          # Development with auto-reload (tsx watch)
npm run build        # Compile TypeScript
npm start            # Production (compiled JS)
npm run type-check   # Type check without emit
npm run seed         # Seed database with defaults
```

### Frontend

```bash
npm run dev          # Next.js development
npm run build        # Production build
npm start            # Production server
npm run lint         # ESLint
npm run seed:all     # Seed all content
```

---

## 13. Deployment

### Infrastructure

| Component | Service |
|-----------|---------|
| Frontend | Vercel (https://palliativeindia.in) |
| Backend | Node.js server (https://api.donatebed.palliativeindia.in) |
| Database | MongoDB Atlas |
| Email | Gmail SMTP |
| Payments | BillDesk Gateway |
| File Storage | Local `public/` directory |

### Startup

```bash
# Backend
cd backend && npm install && npm run dev

# Frontend
cd client && npm install && npm run dev
```

### Production Build

```bash
# Backend
cd backend && npm run build && npm start

# Frontend
cd client && npm run build && npm start
```

---

## 14. Feature Summary

| Feature | Status |
|---------|--------|
| Hospital website (all public pages) | Done |
| BillDesk online payment integration | Done |
| Offline donation with approval workflow | Done |
| Monthly fellowship subscriptions | Done |
| Campaign-based fundraising | Done |
| Full CMS with date-based visibility | Done |
| Admin panel with 4 roles | Done |
| Email notifications (8 templates) | Done |
| 80G tax receipt in email | Done |
| Media upload (image + video) | Done |
| Gallery management | Done |
| Team member profiles | Done |
| News & events with scheduling | Done |
| Awards & recognition | Done |
| Responsive mobile-first design | Done |
| Transaction audit trail | Done |
| Rate limiting on payment endpoints | Done |
| JWT auth with refresh tokens | Done |

---

## 15. Production Checklist

- [ ] Replace placeholder PAN & 80G registration number in `email.service.ts`
- [ ] Switch `BILLDESK_ENV` from `sandbox` to `production` with live credentials
- [ ] Change default admin passwords
- [ ] Verify `CUSTOMER_IP` matches production server IP
- [ ] Set `NODE_ENV=production`
- [ ] Configure reverse proxy (Nginx) with SSL
- [ ] Set up file storage backup strategy
- [ ] Test email delivery in production
