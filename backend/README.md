# Shanthibhavan Backend API

Express.js backend server for Shanthibhavan Hospital website.

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (MongoDB Atlas)
- **Mongoose** - ODM for MongoDB

## Features

- RESTful API endpoints
- CORS enabled for frontend communication
- MongoDB database integration
- Error handling middleware

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Variables

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

### 3. Run the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Banners
- `GET /api/banner` - Get all active banners
- `POST /api/banner` - Create new banner
- `PATCH /api/banner/:id` - Update banner
- `DELETE /api/banner/:id` - Delete banner

### Payments
- `GET /api/payment` - Get all payments
- `POST /api/payment` - Create new payment
- `GET /api/payment/:id` - Get payment by ID

### Contacts
- `GET /api/contact` - Get all contacts
- `POST /api/contact` - Create new contact

### Volunteers
- `GET /api/volunteer` - Get all volunteers
- `POST /api/volunteer` - Create new volunteer

### Services
- `GET /api/service` - Get all services
- `POST /api/service` - Create new service

### Statistics
- `GET /api/stats` - Get dashboard statistics

### About Image
- `GET /api/about-image` - Get active about image
- `POST /api/about-image` - Create/update about image

### Health Check
- `GET /api/health` - Check server status

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js      # MongoDB connection
│   ├── models/              # Mongoose models
│   │   ├── Banner.js
│   │   ├── Payment.js
│   │   ├── Contact.js
│   │   ├── Volunteer.js
│   │   ├── Service.js
│   │   └── AboutImage.js
│   ├── routes/              # Express routes
│   │   ├── banner.js
│   │   ├── payment.js
│   │   ├── contact.js
│   │   ├── volunteer.js
│   │   ├── service.js
│   │   ├── stats.js
│   │   └── aboutImage.js
│   └── server.js            # Main server file
├── .env                     # Environment variables
├── package.json
└── README.md
```

## Development

The backend uses **nodemon** for auto-reloading during development. Any changes to the code will automatically restart the server.

## CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:3000` (Next.js frontend)

To add more origins, update the CORS configuration in `src/server.js`.

## Error Handling

All routes include try-catch error handling and return appropriate HTTP status codes and error messages.
