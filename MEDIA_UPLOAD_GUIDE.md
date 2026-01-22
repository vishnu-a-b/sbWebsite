# Media Upload System - Admin Panel Guide

## ✅ Upload System Complete!

A comprehensive media upload system has been implemented for the Shanthibhavan admin panel. You can now upload images and videos directly from the admin interface.

---

## 📁 What's Been Created

### 1. **MediaUpload Component** (`/client/components/admin/MediaUpload.tsx`)
Reusable upload component with:
- ✅ Drag & drop support
- ✅ Click to browse files
- ✅ Image & video preview
- ✅ File size validation
- ✅ File type validation
- ✅ Upload progress indicator
- ✅ Error handling
- ✅ Clear/remove uploaded file

### 2. **Upload API Endpoint** (`/client/app/api/upload/route.ts`)
Server-side upload handler:
- ✅ File validation (size & type)
- ✅ Unique filename generation
- ✅ Auto-organize by type (images/ or video/)
- ✅ Directory creation
- ✅ Secure file writing

### 3. **BannerForm Component** (`/client/components/admin/BannerForm.tsx`)
Complete hero banner management form:
- ✅ Image/Video type selection
- ✅ Integrated MediaUpload components
- ✅ Title, subtitle, description fields
- ✅ CTA button configuration
- ✅ Priority & date range management
- ✅ CMS toggles (Active, First Face)
- ✅ Full validation

### 4. **Additional Forms Created**
- ✅ **ServiceForm** - Service management with icon & color
- ✅ **ProjectForm** - Projects with featured image + gallery
- ✅ **AwardForm** - Awards with image upload

---

## 🎯 How to Use the Upload System

### Uploading Hero Banner Video/Image

1. **Navigate to Admin Panel**
   ```
   /admin/banners
   ```

2. **Click "Add Banner"** or edit existing banner

3. **Select Media Type**
   - Choose **Image** for static hero images
   - Choose **Video** for video backgrounds

4. **Upload Media**
   - **Drag & drop** your file onto the upload area
   - OR **Click to browse** and select file
   - File uploads automatically

5. **Fill in Details**
   - Title (required)
   - Subtitle (optional)
   - Description (required)
   - CTA Button text & link
   - Priority (for ordering)
   - Start & Expiry dates

6. **Toggle Options**
   - ✅ Active - Make banner visible
   - ✅ Show on First Face - Include in hero carousel

7. **Save**
   - Click "Create Banner" or "Update Banner"

---

## 📊 File Upload Specifications

### Image Files
- **Formats**: PNG, JPG, JPEG, GIF, WebP
- **Max Size**: 10 MB (configurable)
- **Recommended**: 1920x1080px (Full HD)
- **Upload Location**: `public/images/`
- **Access URL**: `/images/filename.jpg`

### Video Files
- **Formats**: MP4, WebM, MOV
- **Max Size**: 50 MB (configurable)
- **Recommended**:
  - Format: MP4 (H.264)
  - Resolution: 1920x1080px
  - Duration: 10-30 seconds
  - Bitrate: 3-5 Mbps
- **Upload Location**: `public/video/`
- **Access URL**: `/video/filename.mp4`

### Video Thumbnail (Poster)
- **Formats**: PNG, JPG
- **Max Size**: 5 MB
- **Recommended**: Same resolution as video
- **Purpose**: Shows before video loads

---

## 🔧 Technical Details

### Upload Flow

```
User selects file
     ↓
MediaUpload validates (size, type)
     ↓
POST to /api/upload
     ↓
Server validates again
     ↓
Generate unique filename (timestamp-random.ext)
     ↓
Create directory if needed
     ↓
Write file to public/images/ or public/video/
     ↓
Return URL to client
     ↓
Update form state with URL
     ↓
User saves form
     ↓
URL saved to database
```

### Directory Structure

```
public/
├── images/               # Uploaded images
│   ├── 1705432800-abc123.jpg
│   ├── 1705432801-def456.png
│   └── ...
├── video/                # Uploaded videos
│   ├── 1705432900-xyz789.mp4
│   ├── 1705432901-uvw012.webm
│   └── ...
└── uploads/              # Other file types
    └── ...
```

---

## 🎨 Using MediaUpload in Other Forms

The `MediaUpload` component is reusable. Here's how to use it:

```tsx
import MediaUpload from '@/components/admin/MediaUpload';

function MyForm() {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <MediaUpload
      type="image"              // 'image', 'video', or 'any'
      currentUrl={imageUrl}     // Existing URL (for editing)
      onUploadComplete={(url) => setImageUrl(url)}
      label="Upload Image"      // Field label
      maxSize={10}              // Max size in MB
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'image' \| 'video' \| 'any'` | `'any'` | Accepted file types |
| `currentUrl` | `string` | `''` | Current/existing file URL |
| `onUploadComplete` | `(url: string) => void` | required | Callback with uploaded URL |
| `label` | `string` | - | Field label |
| `accept` | `string` | auto | Custom accept string |
| `maxSize` | `number` | `50` | Max file size in MB |

---

## ⚙️ Configuration

### Change Max Upload Size

**In MediaUpload component:**
```tsx
<MediaUpload
  type="video"
  maxSize={100}  // 100MB
  {...props}
/>
```

**In Upload API** (`app/api/upload/route.ts`):
```typescript
const maxSize = 100 * 1024 * 1024; // 100MB
```

### Change Upload Directory

**In Upload API** (`app/api/upload/route.ts`):
```typescript
let uploadDir = 'public/uploads';
if (type === 'video') {
  uploadDir = 'public/video';  // Change this
} else if (type === 'image') {
  uploadDir = 'public/images'; // Or this
}
```

---

## 🚀 Advanced Features

### 1. Cloud Storage (Future Enhancement)

To use Cloudinary/AWS S3 instead of local storage:

```typescript
// In /api/upload/route.ts
import { v2 as cloudinary } from 'cloudinary';

// Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload to cloudinary
const result = await cloudinary.uploader.upload(file, {
  folder: 'shanthibhavan',
  resource_type: 'auto'
});

return result.secure_url;
```

### 2. Image Optimization

Add sharp package for automatic image optimization:

```bash
npm install sharp
```

```typescript
import sharp from 'sharp';

// Optimize image
if (file.type.startsWith('image/')) {
  const optimized = await sharp(buffer)
    .resize(1920, 1080, { fit: 'inside' })
    .jpeg({ quality: 80 })
    .toBuffer();

  await writeFile(filepath, optimized);
}
```

### 3. Multiple File Upload

Modify MediaUpload to accept multiple files:

```tsx
const handleMultipleFiles = async (files: FileList) => {
  const urls = await Promise.all(
    Array.from(files).map(file => uploadFile(file))
  );
  onUploadComplete(urls);
};
```

---

## 📱 Usage in All Admin Pages

The MediaUpload component is now available for:

### Current Implementation
- ✅ **Hero Banners** - Images & Videos with thumbnails

### Ready to Integrate
- ⏳ **Services** - Icon images
- ⏳ **Projects** - Featured image + gallery
- ⏳ **Awards** - Award images
- ⏳ **News/Events** - Multiple event images
- ⏳ **Team Members** - Profile photos
- ⏳ **Gallery** - Bulk image upload
- ⏳ **About Us** - Featured images

---

## 🐛 Troubleshooting

### Upload fails with "413 Payload Too Large"
- Check file size is under limit
- Increase `maxSize` parameter
- Check server upload limit

### File uploads but doesn't display
- Check file path is correct (`/images/...` not `public/images/...`)
- Verify file was actually written to disk
- Check Next.js public folder is serving files

### Drag & drop not working
- Check browser compatibility (works in modern browsers)
- Ensure JavaScript is enabled
- Try click to upload instead

### Video doesn't play
- Check video format (MP4 with H.264 recommended)
- Verify video codec compatibility
- Add poster/thumbnail image

---

## ✅ Next Steps

1. **Integrate MediaUpload** into remaining forms:
   - Services form
   - Projects form (with gallery support)
   - Awards form
   - News/Events form
   - Team members form

2. **Add Media Library** - Browse/manage all uploaded files

3. **Add Bulk Upload** - Upload multiple files at once

4. **Add Image Cropper** - Crop/resize before upload

5. **Add Cloud Storage** - Cloudinary/S3 integration

---

## 📞 Support

For issues with media uploads:
1. Check browser console for errors
2. Check server logs
3. Verify file permissions on upload directories
4. Ensure Next.js is serving static files correctly

---

**Upload System Status**: ✅ Complete & Ready to Use!

**Last Updated**: January 17, 2026
