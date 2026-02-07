import express, { Request, Response, Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router: Router = express.Router();

// Configure storage
const storage = multer.diskStorage({
  destination: (_req, file, cb) => {
    // Determine subdirectory based on file type
    let subDir = 'uploads';
    if (file.mimetype.startsWith('video/')) {
      subDir = 'video';
    } else if (file.mimetype.startsWith('image/')) {
      subDir = 'images';
    }

    // Path to backend public directory
    const uploadDir = path.join(__dirname, '../../../public', subDir);

    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    cb(null, uploadDir);
  },
  filename: (_req, file, cb) => {
    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const ext = path.extname(file.originalname);
    cb(null, `${timestamp}-${randomString}${ext}`);
  }
});

// File filter
const fileFilter = (_req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  // Allow images and videos
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml',
    'video/mp4',
    'video/webm',
    'video/ogg'
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images and videos are allowed.'));
  }
};

// Configure multer
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024 // 50MB limit
  }
});

// Single file upload
router.post('/', upload.single('file'), (req: Request, res: Response): void => {
  try {
    if (!req.file) {
      res.status(400).json({ success: false, error: 'No file uploaded' });
      return;
    }

    // Determine subdirectory for URL
    let subDir = 'uploads';
    if (req.file.mimetype.startsWith('video/')) {
      subDir = 'video';
    } else if (req.file.mimetype.startsWith('image/')) {
      subDir = 'images';
    }

    // Generate URL - using relative path that will be served by express static
    const url = `/public/${subDir}/${req.file.filename}`;

    res.json({
      success: true,
      url,
      filename: req.file.filename,
      originalName: req.file.originalname,
      size: req.file.size,
      type: req.file.mimetype
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ success: false, error: 'Failed to upload file' });
  }
});

// Multiple files upload
router.post('/multiple', upload.array('files', 10), (req: Request, res: Response): void => {
  try {
    const files = req.files as Express.Multer.File[];

    if (!files || files.length === 0) {
      res.status(400).json({ success: false, error: 'No files uploaded' });
      return;
    }

    const uploadedFiles = files.map(file => {
      let subDir = 'uploads';
      if (file.mimetype.startsWith('video/')) {
        subDir = 'video';
      } else if (file.mimetype.startsWith('image/')) {
        subDir = 'images';
      }

      return {
        url: `/public/${subDir}/${file.filename}`,
        filename: file.filename,
        originalName: file.originalname,
        size: file.size,
        type: file.mimetype
      };
    });

    res.json({
      success: true,
      files: uploadedFiles
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ success: false, error: 'Failed to upload files' });
  }
});

// Error handling middleware for multer errors
router.use((err: Error, _req: Request, res: Response, next: Function) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      res.status(400).json({ success: false, error: 'File too large. Maximum size is 50MB.' });
      return;
    }
    res.status(400).json({ success: false, error: err.message });
    return;
  }
  if (err) {
    res.status(400).json({ success: false, error: err.message });
    return;
  }
  next();
});

export default router;
