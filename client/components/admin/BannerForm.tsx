'use client';

import { useState } from 'react';
import { X, Save, Image as ImageIcon, Video } from 'lucide-react';
import MediaUpload from './MediaUpload';

interface BannerFormData {
  title: string;
  subtitle: string;
  description: string;
  mediaType: 'image' | 'video';
  imageUrl: string;
  videoUrl: string;
  thumbnailUrl: string;
  ctaText: string;
  ctaLink: string;
  location: 'home' | 'benevity';
  priority: number;
  isActive: boolean;
  startDate: string;
  expiryDate: string;
  showOnFirstFace: boolean;
}

interface BannerFormProps {
  banner?: any;
  defaultLocation?: 'home' | 'benevity';
  onClose: () => void;
  onSave: (data: BannerFormData) => void;
}

export default function BannerForm({ banner, defaultLocation = 'home', onClose, onSave }: BannerFormProps) {
  const [formData, setFormData] = useState<BannerFormData>({
    title: banner?.title || '',
    subtitle: banner?.subtitle || '',
    description: banner?.description || '',
    mediaType: banner?.mediaType || 'image',
    imageUrl: banner?.imageUrl || '',
    videoUrl: banner?.videoUrl || '',
    thumbnailUrl: banner?.thumbnailUrl || '',
    ctaText: banner?.ctaText || '',
    ctaLink: banner?.ctaLink || '',
    location: banner?.location || defaultLocation,
    priority: banner?.priority || 0,
    isActive: banner?.isActive ?? true,
    startDate: banner?.startDate ? new Date(banner.startDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    expiryDate: banner?.expiryDate ? new Date(banner.expiryDate).toISOString().split('T')[0] : new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
    showOnFirstFace: banner?.showOnFirstFace ?? true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BannerFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BannerFormData, string>> = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';

    if (formData.mediaType === 'image' && !formData.imageUrl.trim()) {
      newErrors.imageUrl = 'Image is required';
    }
    if (formData.mediaType === 'video' && !formData.videoUrl.trim()) {
      newErrors.videoUrl = 'Video is required';
    }

    if (new Date(formData.startDate) > new Date(formData.expiryDate)) {
      newErrors.expiryDate = 'Expiry date must be after start date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSave(formData);
    }
  };

  const handleChange = (field: keyof BannerFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full my-8">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-xl">
          <h2 className="text-2xl font-bold text-gray-900">
            {banner ? 'Edit Hero Banner' : 'Add New Hero Banner'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Media Type Selection */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Media Type <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                <label className={`flex-1 flex items-center justify-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.mediaType === 'image'
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <input
                    type="radio"
                    name="mediaType"
                    value="image"
                    checked={formData.mediaType === 'image'}
                    onChange={() => handleChange('mediaType', 'image')}
                    className="sr-only"
                  />
                  <ImageIcon className={`w-6 h-6 ${formData.mediaType === 'image' ? 'text-primary' : 'text-gray-400'}`} />
                  <span className={`font-semibold ${formData.mediaType === 'image' ? 'text-primary' : 'text-gray-600'}`}>
                    Image
                  </span>
                </label>
                <label className={`flex-1 flex items-center justify-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.mediaType === 'video'
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <input
                    type="radio"
                    name="mediaType"
                    value="video"
                    checked={formData.mediaType === 'video'}
                    onChange={() => handleChange('mediaType', 'video')}
                    className="sr-only"
                  />
                  <Video className={`w-6 h-6 ${formData.mediaType === 'video' ? 'text-primary' : 'text-gray-400'}`} />
                  <span className={`font-semibold ${formData.mediaType === 'video' ? 'text-primary' : 'text-gray-600'}`}>
                    Video
                  </span>
                </label>
              </div>
            </div>

            {/* Location Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Display Location <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                <label className={`flex-1 flex items-center justify-center gap-2 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.location === 'home'
                    ? 'border-secondary bg-secondary/5'
                    : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <input
                    type="radio"
                    name="location"
                    value="home"
                    checked={formData.location === 'home'}
                    onChange={() => handleChange('location', 'home')}
                    className="sr-only"
                  />
                  <span className={`font-semibold ${formData.location === 'home' ? 'text-secondary' : 'text-gray-600'}`}>
                    Home Page
                  </span>
                </label>
                <label className={`flex-1 flex items-center justify-center gap-2 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.location === 'benevity'
                    ? 'border-secondary bg-secondary/5'
                    : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <input
                    type="radio"
                    name="location"
                    value="benevity"
                    checked={formData.location === 'benevity'}
                    onChange={() => handleChange('location', 'benevity')}
                    className="sr-only"
                  />
                  <span className={`font-semibold ${formData.location === 'benevity' ? 'text-secondary' : 'text-gray-600'}`}>
                    Benevity Page
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Media Upload */}
          {formData.mediaType === 'image' ? (
            <MediaUpload
              type="image"
              currentUrl={formData.imageUrl}
              onUploadComplete={(url) => handleChange('imageUrl', url)}
              label="Hero Image *"
              maxSize={10}
            />
          ) : (
            <div className="space-y-4">
              <MediaUpload
                type="video"
                currentUrl={formData.videoUrl}
                onUploadComplete={(url) => handleChange('videoUrl', url)}
                label="Hero Video *"
                maxSize={50}
              />
              <MediaUpload
                type="image"
                currentUrl={formData.thumbnailUrl}
                onUploadComplete={(url) => handleChange('thumbnailUrl', url)}
                label="Video Thumbnail (Poster Image)"
                maxSize={5}
              />
            </div>
          )}
          {errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl}</p>}
          {errors.videoUrl && <p className="text-red-500 text-sm">{errors.videoUrl}</p>}

          {/* Title & Subtitle */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., India's First No-Bill Hospital"
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subtitle
              </label>
              <input
                type="text"
                value={formData.subtitle}
                onChange={(e) => handleChange('subtitle', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g., Compassionate Care for All"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Brief description for the hero section..."
              rows={3}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>

          {/* CTA */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                CTA Button Text
              </label>
              <input
                type="text"
                value={formData.ctaText}
                onChange={(e) => handleChange('ctaText', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g., Donate Now"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                CTA Link
              </label>
              <input
                type="text"
                value={formData.ctaLink}
                onChange={(e) => handleChange('ctaLink', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g., /donate"
              />
            </div>
          </div>

          {/* Priority & Dates */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Priority</label>
              <input
                type="number"
                value={formData.priority}
                onChange={(e) => handleChange('priority', parseInt(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                min="0"
              />
              <p className="text-xs text-gray-500 mt-1">Higher = shows first</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
              <input
                type="date"
                value={formData.expiryDate}
                onChange={(e) => handleChange('expiryDate', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => handleChange('isActive', e.target.checked)}
                className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
              />
              <div>
                <span className="font-semibold text-gray-900">Active</span>
                <p className="text-xs text-gray-600">Banner is visible on homepage</p>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.showOnFirstFace}
                onChange={(e) => handleChange('showOnFirstFace', e.target.checked)}
                className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
              />
              <div>
                <span className="font-semibold text-gray-900">Show on First Face</span>
                <p className="text-xs text-gray-600">Display in hero carousel rotation</p>
              </div>
            </label>
          </div>
        </form>

        {/* Actions */}
        <div className="sticky bottom-0 bg-white border-t px-6 py-4 flex gap-3 rounded-b-xl">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            {banner ? 'Update Banner' : 'Create Banner'}
          </button>
        </div>
      </div>
    </div>
  );
}
