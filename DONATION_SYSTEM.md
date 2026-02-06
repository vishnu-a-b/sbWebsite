# Donation System Documentation

## Payment Gateway

**BillDesk** — HMAC-SHA256 checksum verification, supports Sandbox and Production environments via `BILLDESK_ENV`.

> **Note:** `DonationModal.tsx` mentions "Razorpay" in a comment, but the actual integration is BillDesk.

---

## Donation Types

| Type           | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| **General**    | One-time donation                                                  |
| **Fellowship** | Monthly recurring donation (min 100 INR, one payment per month)    |
| **Campaign**   | Targeted fundraising tied to a specific campaign                   |

---

## User-Facing Pages

| Page            | Path               | Purpose                                                                                                                       |
| --------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Donate          | `/donate`          | Tabbed form (General / Fellowship / Campaign) with preset amounts (500, 1000, 2500, 5000 INR), PAN input for 80G tax receipts, international phone input |
| Success         | `/donate/success`  | Shows order ID, receipt number, download receipt link                                                                         |
| Failed          | `/donate/failed`   | Shows failure reason, refund info (5–7 days), retry button                                                                   |
| Campaigns List  | `/campaigns`       | Active campaigns with progress bars, donor counts, featured badges                                                           |
| Campaign Detail | `/campaigns/[slug]`| Full description, stats, sticky donation card, share functionality                                                           |

---

## Components

| Component              | Purpose                                                                 |
| ---------------------- | ----------------------------------------------------------------------- |
| `DonationModal.tsx`    | Popup for quick campaign donations with preset amounts (500–10000 INR)  |
| `CampaignsSection.tsx` | Homepage section showing up to 6 campaigns                              |
| `DonationSection.tsx`  | Homepage section with 3 cards (One-Time, Fellowship, Campaigns) + trust indicators |

---

## Online Donation Flow

1. User fills form (name, email, phone, amount, PAN, address)
2. Backend creates donation record (PENDING), generates order ID (`DN-YYYYMMDDHHMMSS-XXXX`), builds BillDesk request
3. User redirected to BillDesk for payment (card, UPI, netbanking)
4. On return, backend validates checksum, updates status
5. If **success** → generates receipt, sends email, updates campaign/fellowship stats
6. If **failed** → updates status, sends failure email
7. User sees success or failed page

---

## Offline Donation Flow

1. **Agent** submits offline donation (cash / cheque / bank transfer) via admin panel
2. Donation created with `isOffline=true`, `approvalStatus=PENDING`
3. **Approver** reviews in Pending Approvals, approves or rejects (rejection requires reason)
4. On approval → sets `paymentStatus=SUCCESS`, generates receipt, sends email

---

## Admin Pages

| Page              | Path                        | Purpose                                        |
| ----------------- | --------------------------- | ---------------------------------------------- |
| Donations List    | `/admin/donations`          | Filter by status/type, paginated table, CSV export |
| Add Offline       | `/admin/donations/add`      | Manual offline donation entry                  |
| Pending Approvals | `/admin/donations/pending`  | Approve/reject offline donations               |
| History           | `/admin/donations/history`  | Offline donation records with filters          |
| Statistics        | `/admin/donations/stats`    | Totals, success rate, breakdown by type, averages |
| Campaigns List    | `/admin/campaigns`          | Manage all campaigns                           |
| Create Campaign   | `/admin/campaigns/create`   | New campaign form                              |
| Campaign Detail   | `/admin/campaigns/[id]`     | View/edit campaign with donations              |
| Campaign Stats    | `/admin/campaigns/stats`    | Total raised, goal, donors, completion rate    |

---

## Role-Based Access

| Role             | Permissions                                                    |
| ---------------- | -------------------------------------------------------------- |
| **AGENT**        | Add offline donations, view donation list                      |
| **APPROVER**     | Approve/reject offline donations, view history                 |
| **ACCOUNTS**     | View statistics, view history                                  |
| **SUPER_ADMIN**  | Full access — all above + create/edit/delete campaigns         |

---

## Backend Models

### Donation

| Field                | Details                                                            |
| -------------------- | ------------------------------------------------------------------ |
| donorName            | Required                                                           |
| email                | Required                                                           |
| phone                | Optional                                                           |
| countryCode          | Default: `+91`                                                     |
| panNumber            | For 80G tax exemption                                              |
| address              | Optional                                                           |
| amount               | Required, min: 1                                                   |
| currency             | Default: `INR`                                                     |
| donationType         | `general` / `fellowship` / `campaign`                              |
| paymentStatus        | `PENDING` / `SUCCESS` / `FAILED` / `REFUNDED`                     |
| transactionId        | BillDesk transaction ID                                            |
| gatewayOrderId       | Unique order ID (`DN-YYYYMMDDHHMMSS-XXXX`)                        |
| bankReferenceNumber  | From gateway                                                       |
| paymentMethod        | `card` / `upi` / `netbanking` / etc.                              |
| authStatus           | BillDesk auth code (`0300`=Success, `0400`=Failure, `0401`=Cancelled) |
| checksumVerified     | Boolean                                                            |
| isOffline            | Boolean                                                            |
| approvalStatus       | `pending` / `approved` / `rejected`                                |
| offlinePaymentMethod | `cash` / `cheque` / `bank_transfer`                               |
| addedBy              | Admin ID (offline)                                                 |
| approvedBy           | Admin ID (offline)                                                 |
| rejectionReason      | Required on rejection                                              |
| receiptNumber        | Auto-generated (`DN-YYYYMMDD-XXXXX`)                              |
| fellowshipId         | Link to Fellowship                                                 |
| campaignId           | Link to Campaign                                                   |

### Campaign

| Field            | Details                                                       |
| ---------------- | ------------------------------------------------------------- |
| title            | Required                                                      |
| slug             | Required, unique, lowercase                                   |
| description      | Required (supports HTML)                                      |
| shortDescription | Max 200 chars                                                 |
| image            | URL                                                           |
| goalAmount       | Required                                                      |
| raisedAmount     | Default: 0 (auto-updated on donation)                         |
| donorCount       | Default: 0 (auto-updated on donation)                         |
| currency         | Default: `INR`                                                |
| status           | `draft` / `active` / `paused` / `completed` / `cancelled`    |
| startDate        | Required                                                      |
| endDate          | Optional                                                      |
| isFeatured       | Boolean                                                       |
| createdBy        | Admin ID                                                      |
| donations        | Array of Donation IDs                                         |

### Transaction (Audit Trail)

| Field             | Details                                                     |
| ----------------- | ----------------------------------------------------------- |
| donationId        | Link to Donation                                            |
| transactionType   | `payment_initiated` / `payment_return` / `payment_webhook`  |
| requestPayload    | Full request data                                           |
| responsePayload   | Full response data                                          |
| bdOrderId         | BillDesk Order ID                                           |
| bdTransactionId   | BillDesk Transaction ID                                     |
| checksumVerified  | Boolean                                                     |
| success           | Boolean                                                     |
| errorMessage      | On failure                                                  |
| ipAddress         | Client IP                                                   |

---

## Database Relationships

```
Donation
├── fellowshipId  → Fellowship
├── campaignId    → Campaign
├── addedBy       → Admin
├── approvedBy    → Admin
└── Transaction   (reverse reference)

Campaign
├── createdBy     → Admin
└── donations     → Donation[]

Fellowship
└── donations     → Donation[]
```

---

## API Endpoints

### Public

| Method   | Route                                       | Purpose                  |
| -------- | ------------------------------------------- | ------------------------ |
| POST     | `/api/donation/initiate`                    | Start online payment     |
| POST/GET | `/api/donation/callback/billdesk/return`    | Payment return callback  |
| POST     | `/api/donation/callback/billdesk/webhook`   | Server-to-server webhook |
| GET      | `/api/campaign/active`                      | List active campaigns    |
| GET      | `/api/campaign/featured`                    | List featured campaigns  |
| GET      | `/api/campaign/slug/:slug`                  | Get campaign by slug     |

### Protected (Auth Required)

| Method | Route                              | Role                    | Purpose                  |
| ------ | ---------------------------------- | ----------------------- | ------------------------ |
| GET    | `/api/donation`                    | Any authenticated       | List donations (filtered, paginated) |
| GET    | `/api/donation/:id`                | Any authenticated       | Get single donation      |
| GET    | `/api/donation/stats`              | Any authenticated       | Donation statistics      |
| POST   | `/api/donation/offline`            | AGENT, SUPER_ADMIN      | Add offline donation     |
| GET    | `/api/donation/pending-approvals`  | APPROVER, SUPER_ADMIN   | List pending approvals   |
| PUT    | `/api/donation/:id/approve`        | APPROVER, SUPER_ADMIN   | Approve offline donation |
| PUT    | `/api/donation/:id/reject`         | APPROVER, SUPER_ADMIN   | Reject offline donation  |
| GET    | `/api/donation/offline/history`    | ACCOUNTS, SUPER_ADMIN   | Offline donation history |
| GET    | `/api/campaign`                    | Any authenticated       | List all campaigns       |
| GET    | `/api/campaign/:id`                | Any authenticated       | Get campaign by ID       |
| POST   | `/api/campaign`                    | SUPER_ADMIN             | Create campaign          |
| PUT    | `/api/campaign/:id`                | SUPER_ADMIN             | Update campaign          |
| PUT    | `/api/campaign/:id/status`         | SUPER_ADMIN             | Update campaign status   |
| DELETE | `/api/campaign/:id`                | SUPER_ADMIN             | Delete campaign (only if 0 donors) |
| GET    | `/api/campaign/stats`              | ACCOUNTS, SUPER_ADMIN   | Campaign statistics      |

---

## Key File Paths

### Client

| File | Purpose |
| ---- | ------- |
| `client/app/(main)/donate/page.tsx` | Main donation form |
| `client/app/(main)/donate/success/page.tsx` | Payment success page |
| `client/app/(main)/donate/failed/page.tsx` | Payment failed page |
| `client/app/(main)/campaigns/page.tsx` | Campaign listing |
| `client/app/(main)/campaigns/[slug]/page.tsx` | Campaign detail |
| `client/components/DonationModal.tsx` | Campaign donation popup |
| `client/components/CampaignsSection.tsx` | Homepage campaigns section |
| `client/components/DonationSection.tsx` | Homepage donation section |
| `client/app/actions/campaign.ts` | Campaign server actions |
| `client/app/api/payment/route.ts` | Payment API route |

### Backend

| File | Purpose |
| ---- | ------- |
| `backend/src/modules/donation/donation.model.ts` | Donation schema |
| `backend/src/modules/donation/donation.controller.ts` | Online donation logic |
| `backend/src/modules/donation/donation.routes.ts` | Donation routes |
| `backend/src/modules/donation/offline.controller.ts` | Offline donation logic |
| `backend/src/modules/donation/transaction.model.ts` | Transaction audit trail |
| `backend/src/modules/donation/utils/billdesk.util.ts` | BillDesk utilities |
| `backend/src/modules/campaign/campaign.model.ts` | Campaign schema |
| `backend/src/modules/campaign/campaign.controller.ts` | Campaign logic |
| `backend/src/modules/campaign/campaign.routes.ts` | Campaign routes |
| `backend/src/config/billdesk.ts` | BillDesk configuration |
