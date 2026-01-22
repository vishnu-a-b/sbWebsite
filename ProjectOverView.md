Build a complete, production-ready hospital website using the following specifications.

====================================================
PROJECT OVERVIEW
====================================================

Hospital Name: Shanthibhavan Palliative Hospital  
Reference Website: https://shanthibhavan.in  
Purpose: Charity palliative care hospital website  
Tech Stack: Next.js (App Router), Tailwind CSS, MongoDB

The website should look modern, calm, compassionate, and medical-themed.
Design should focus on dignity, trust, and simplicity.

====================================================
TECH STACK (MANDATORY)
====================================================

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- MongoDB (Mongoose)
- API Routes / Server Actions
- Responsive design (mobile, tablet, desktop)
- SEO optimized
- Accessible (ARIA-friendly)
- Dummy images (use placeholder images for now)

====================================================
PAGES REQUIRED
====================================================

1. HOME PAGE (/)
   - Hero section with hospital mission
   - Call-to-action buttons: Book Appointment, Donate
   - About snapshot
   - Services overview
   - Impact statistics
   - Benevity mention section
   - Testimonials (dummy)
   - Footer

2. ABOUT US (/about)
   - Hospital introduction
   - Vision & Mission
   - Values
   - History / background
   - Reference content tone from shanthibhavan.in

3. SERVICES (/services)
   - In-patient palliative care
   - Home care services
   - Pain & symptom management
   - Free dialysis support
   - Ambulance services
   - Each service as a card layout

4. CARE TEAM (/team)
   - Doctors
   - Nurses
   - Volunteers
   - Physiotherapists
   - Spiritual care team
   - Grid layout with dummy images

5. APPOINTMENT (/appointment)
   - Appointment request form
   - Fields:
     - Patient name
     - Age
     - Phone
     - Address
     - Type of service
     - Preferred date
     - Message
   - Submit to MongoDB via API

6. DONATE (/donate)
   - Donation importance
   - Ways to support
   - Bank / UPI placeholders
   - CTA buttons

7. VOLUNTEER (/volunteer)
   - Volunteer roles
   - Volunteer registration form
   - Store form data in MongoDB

8. BENE VITY PAGE (/benevity)
   - Explain Benevity platform
   - How donors can support Shanthibhavan via Benevity
   - Corporate social responsibility tone
   - Professional and trust-based design

9. GALLERY (/gallery)
   - Hospital images
   - Care activities
   - Events
   - Responsive masonry grid
   - Use dummy images

10. CONTACT (/contact)
    - Address
    - Phone
    - Email
    - Google Map embed placeholder
    - Contact form (MongoDB)

====================================================
CMS / ADMIN REQUIREMENTS
====================================================

Create a simple admin dashboard:

/admin
- Secure route (basic auth placeholder)
- Manage:
  - Appointments
  - Volunteers
  - Contact messages
- Read data from MongoDB
- Table view with status badges

====================================================
DATABASE SCHEMA (MONGODB)
====================================================

Collections:
- appointments
- volunteers
- contacts

Each should include:
- name
- phone/email
- message/details
- createdAt
- status

====================================================
DESIGN REQUIREMENTS
====================================================

- Use Tailwind CSS only
- Calm medical color palette (light green, blue, white)
- Rounded cards
- Soft shadows
- Modern typography
- Fully responsive
- No clutter
- Respectful palliative tone

====================================================
SEO & PERFORMANCE
====================================================

- Metadata for every page
- Open Graph tags
- Optimized images (next/image)
- Semantic HTML
- Fast loading

====================================================
DELIVERABLES
====================================================

- Complete folder structure
- Reusable components
- API routes
- MongoDB connection utility
- Environment variable usage
- Sample dummy data
- Clear comments in code

====================================================
IMPORTANT
====================================================

- Use placeholder images (do not rely on external copyrighted images)
- Content tone must align with a charitable palliative hospital
- Reference shanthibhavan.in for structure and language inspiration
- Make the site production-ready

Start by generating:
1. Folder structure
2. Core layout
3. Homepage
Then continue page by page.