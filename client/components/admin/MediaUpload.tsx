'use client';

import { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Video, File, Loader2 } from 'lucide-react';

interface MediaUploadProps {
  type?: 'image' | 'video' | 'any';
  currentUrl?: string;
  onUploadComplete: (url: string) => void;
  label?: string;
  accept?: string;
  maxSize?: number; // in MB
}

export default function MediaUpload({
  type = 'any',
  currentUrl,
  onUploadComplete,
  label,
  accept,
  maxSize = 50
}: MediaUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string>(currentUrl || '');
  const [error, setError] = useState<string>('');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getAcceptString = () => {
    if (accept) return accept;
    if (type === 'image') return 'image/*';
    if (type === 'video') return 'video/*';
    return 'image/*,video/*';
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('image/')) return <ImageIcon className="w-8 h-8" />;
    if (fileType.startsWith('video/')) return <Video className="w-8 h-8" />;
    return <File className="w-8 h-8" />;
  };

  const validateFile = (file: File): string | null => {
    // Check file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSize) {
      return `File size must be less than ${maxSize}MB. Current: ${fileSizeMB.toFixed(2)}MB`;
    }

    // Check file type
    if (type === 'image' && !file.type.startsWith('image/')) {
      return 'Please upload an image file';
    }
    if (type === 'video' && !file.type.startsWith('video/')) {
      return 'Please upload a video file';
    }

    return null;
  };

  const handleFileUpload = async (file: File) => {
    setError('');

    // Validate file
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setUploading(true);

    try {
      // Create form data
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', type);

      // Upload to API
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();

      if (data.success && data.url) {
        setPreview(data.url);
        onUploadComplete(data.url);
      } else {
        throw new Error(data.error || 'Upload failed');
      }
    } catch (err) {
      console.error('Upload error:', err);
      setError(err instanceof Error ? err.message : 'Failed to upload file');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleClear = () => {
    setPreview('');
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onUploadComplete('');
  };

  const isVideo = preview && (preview.includes('.mp4') || preview.includes('.webm') || preview.includes('.mov'));

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}

      <div
        className={`relative border-2 border-dashed rounded-lg transition-all ${
          dragActive
            ? 'border-primary bg-primary/5'
            : error
            ? 'border-red-300 bg-red-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {preview ? (
          // Preview
          <div className="relative group">
            <div className="p-4">
              {isVideo ? (
                <video
                  src={preview}
                  className="w-full h-48 object-cover rounded-lg"
                  controls
                />
              ) : (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
            </div>
            <button
              type="button"
              onClick={handleClear}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-white px-3 py-2 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              {preview}
            </div>
          </div>
        ) : (
          // Upload Area
          <div className="p-8">
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileInput}
              accept={getAcceptString()}
              className="hidden"
              disabled={uploading}
            />

            {uploading ? (
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
                <p className="text-sm font-medium text-gray-700">Uploading...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div className="text-gray-400">
                  {type === 'image' ? (
                    <ImageIcon className="w-12 h-12" />
                  ) : type === 'video' ? (
                    <Video className="w-12 h-12" />
                  ) : (
                    <Upload className="w-12 h-12" />
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-primary hover:text-primary/80 font-semibold"
                  >
                    Click to upload
                  </button>
                  <span className="text-gray-600"> or drag and drop</span>
                </div>
                <p className="text-xs text-gray-500">
                  {type === 'image'
                    ? 'PNG, JPG, GIF up to '
                    : type === 'video'
                    ? 'MP4, WebM up to '
                    : 'Images or videos up to '}
                  {maxSize}MB
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-sm flex items-center gap-1">
          <X className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}
