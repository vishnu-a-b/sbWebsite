# Backend Migration Complete! 🎉

The backend has been successfully separated from Next.js to Express.js.

## Architecture

```
SbWebsite/
├── app/                  # Next.js Frontend (UI only)
├── components/           # React Components
├── public/              # Static files
├── lib/                 # Frontend utilities & API config
├── backend/             # Express.js Backend (NEW!)
│   ├── src/
│   │   ├── config/      # Database configuration
│   │   ├── models/      # Mongoose models
│   │   ├── routes/      # API routes
│   │   └── server.js    # Main server file
│   ├── .env            # Backend environment variables
│   └── package.json
└── .env.local          # Frontend environment variables
```

## Running the Application

You now need to run **TWO servers**:

### 1. Backend Server (Express.js) - Port 5000

```bash
# Terminal 1 - In the root directory
cd backend
npm install    # First time only
npm run dev
```

**Backend will run on:** `http://localhost:5000`

### 2. Frontend Server (Next.js) - Port 3000

```bash
# Terminal 2 - In the root directory
npm run dev
```

**Frontend will run on:** `http://localhost:3000`

## Quick Start Script

Or use this simple command to start the backend:

```bash
# From root directory
cd backend && npm run dev
```

Then in another terminal:

```bash
# From root directory
npm run dev
```

## What Changed?

### ✅ Created

- **`backend/` folder** - New Express.js backend
  - All API routes moved from `/app/api/` to `/backend/src/routes/`
  - All models moved from `/models/` to `/backend/src/models/`
  - Database connection in `/backend/src/config/database.js`

- **`lib/api.ts`** - Frontend API configuration
  - Centralized API endpoints
  - Uses `NEXT_PUBLIC_API_URL` environment variable

### 🔄 Modified

- **`.env.local`** - Added `NEXT_PUBLIC_API_URL=http://localhost:5000/api`
- **Frontend** - Now makes API calls to Express backend instead of Next.js API routes

### ⚠️ To Remove

- `/app/api/` folder - Next.js API routes (no longer needed)
- `/models/` folder - TypeScript models (replaced by JS models in backend)
- `/lib/db.ts` - Database connection (moved to backend)

## API Endpoints

All API endpoints are now served by Express on port 5000:

- `http://localhost:5000/api/banner`
- `http://localhost:5000/api/payment`
- `http://localhost:5000/api/contact`
- `http://localhost:5000/api/volunteer`
- `http://localhost:5000/api/stats`
- `http://localhost:5000/api/service`
- `http://localhost:5000/api/about-image`
- `http://localhost:5000/api/health` (health check)

## Environment Variables

### Backend (`.env` in backend folder)
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
NODE_ENV=development
```

### Frontend (`.env.local` in root)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
MONGODB_URI=your_mongodb_uri
```

## Testing

1. **Start Backend:**
   ```bash
   cd backend && npm run dev
   ```
   You should see: "🚀 Server is running on port 5000"

2. **Test Backend:**
   ```bash
   curl http://localhost:5000/api/health
   ```
   Response: `{"status":"OK","message":"Backend server is running"}`

3. **Start Frontend:**
   ```bash
   npm run dev
   ```

4. **Visit:** `http://localhost:3000`

## Benefits of This Architecture

✅ **Separation of Concerns** - Frontend and backend are completely separate
✅ **Scalability** - Can deploy frontend and backend independently
✅ **Flexibility** - Can swap out frontend (React, Vue, etc.) or backend easily
✅ **Performance** - Backend can be optimized independently
✅ **Team Collaboration** - Frontend and backend teams can work separately

## Next Steps (Optional)

1. **Update Frontend API Calls** - Replace all `/api/` fetch calls with the new API configuration from `lib/api.ts`

2. **Remove Old Files** - Clean up unused Next.js API routes and models

3. **Production Deployment:**
   - Deploy backend to a service like Heroku, Railway, or DigitalOcean
   - Update `NEXT_PUBLIC_API_URL` to your production backend URL
   - Deploy frontend to Vercel

## Troubleshooting

**Port 5000 already in use:**
```bash
lsof -ti:5000 | xargs kill -9
```

**Cannot connect to backend from frontend:**
- Check that backend is running on port 5000
- Check CORS settings in `backend/src/server.js`
- Verify `NEXT_PUBLIC_API_URL` in `.env.local`

**Database connection errors:**
- Verify `MONGODB_URI` in `backend/.env`
- Check MongoDB Atlas network access settings
- Ensure IP address is whitelisted

## Support

For issues or questions:
1. Check the logs in `backend/` folder
2. Verify environment variables
3. Ensure both servers are running
