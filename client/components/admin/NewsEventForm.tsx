'use client';

import { useState } from 'react';
import { X, Save, Plus, Trash2, Calendar, Newspaper } from 'lucide-react';
import MediaUpload from './MediaUpload';

interface NewsEventFormData {
  title: string;
  description: string;
  fullContent: string;
  eventDate: string;
  images: string[];
  type: 'news' | 'event';
  priority: number;
  isActive: boolean;
  startDate: string;
  expiryDate: string;
  showOnFirstFace: boolean;
  isScheduled: boolean;
  scheduledPublishDate: string;
}

interface NewsEventFormProps {
  item?: any;
  onClose: () => void;
  onSave: (data: NewsEventFormData) => void;
}

export default function NewsEventForm({ item, onClose, onSave }: NewsEventFormProps) {
  const [formData, setFormData] = useState<NewsEventFormData>({
    title: item?.title || '',
    description: item?.description || '',
    fullContent: item?.fullContent || '',
    eventDate: item?.eventDate ? new Date(item.eventDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    images: item?.images || [],
    type: item?.type || 'news',
    priority: item?.priority || 0,
    isActive: item?.isActive ?? true,
    startDate: item?.startDate ? new Date(item.startDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    expiryDate: item?.expiryDate ? new Date(item.expiryDate).toISOString().split('T')[0] : new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString().split('T')[0],
    showOnFirstFace: item?.showOnFirstFace || false,
    isScheduled: item?.isScheduled || false,
    scheduledPublishDate: item?.scheduledPublishDate ? new Date(item.scheduledPublishDate).toISOString().split('T')[0] : '',
  });

  const [currentImage, setCurrentImage] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof NewsEventFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof NewsEventFormData, string>> = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.fullContent.trim()) newErrors.fullContent = 'Full content is required';
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

  const handleChange = (field: keyof NewsEventFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const addImage = (url: string) => {
    if (url && !formData.images.includes(url)) {
      handleChange('images', [...formData.images, url]);
      setCurrentImage('');
    }
  };

  const removeImage = (index: number) => {
    handleChange('images', formData.images.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full my-8">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-xl">
          <h2 className="text-2xl font-bold text-gray-900">
            {item ? 'Edit' : 'Add New'} {formData.type === 'news' ? 'News' : 'Event'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Type Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Type <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <label className={`flex-1 flex items-center justify-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.type === 'news' ? 'border-primary bg-primary/5' : 'border-gray-300'
              }`}>
                <input
                  type="radio"
                  value="news"
                  checked={formData.type === 'news'}
                  onChange={() => handleChange('type', 'news')}
                  className="sr-only"
                />
                <Newspaper className={`w-5 h-5 ${formData.type === 'news' ? 'text-primary' : 'text-gray-400'}`} />
                <span className={`font-semibold ${formData.type === 'news' ? 'text-primary' : 'text-gray-600'}`}>News</span>
              </label>
              <label className={`flex-1 flex items-center justify-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.type === 'event' ? 'border-primary bg-primary/5' : 'border-gray-300'
              }`}>
                <input
                  type="radio"
                  value="event"
                  checked={formData.type === 'event'}
                  onChange={() => handleChange('type', 'event')}
                  className="sr-only"
                />
                <Calendar className={`w-5 h-5 ${formData.type === 'event' ? 'text-primary' : 'text-gray-400'}`} />
                <span className={`font-semibold ${formData.type === 'event' ? 'text-primary' : 'text-gray-600'}`}>Event</span>
              </label>
            </div>
          </div>

          {/* Title */}
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
              placeholder="e.g., Annual Charity Drive 2026"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Short Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Brief summary for previews..."
              rows={3}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>

          {/* Full Content */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Content <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.fullContent}
              onChange={(e) => handleChange('fullContent', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.fullContent ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Detailed content..."
              rows={6}
            />
            {errors.fullContent && <p className="text-red-500 text-sm mt-1">{errors.fullContent}</p>}
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {formData.type === 'event' ? 'Event Date' : 'News Date'}
            </label>
            <input
              type="date"
              value={formData.eventDate}
              onChange={(e) => handleChange('eventDate', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Images */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Images</label>
            <div className="space-y-3">
              {formData.images.map((url, index) => (
                <div key={index} className="flex gap-2 items-center bg-gray-50 p-2 rounded-lg">
                  <img src={url} alt="" className="w-16 h-16 object-cover rounded" />
                  <span className="flex-1 text-sm text-gray-600 truncate">{url}</span>
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <MediaUpload
                type="image"
                currentUrl={currentImage}
                onUploadComplete={addImage}
                maxSize={5}
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
            </div>
          </div>

          {/* Scheduled Publishing */}
          {formData.isScheduled && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Scheduled Publish Date</label>
              <input
                type="date"
                value={formData.scheduledPublishDate}
                onChange={(e) => handleChange('scheduledPublishDate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          )}

          {/* Toggles */}
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => handleChange('isActive', e.target.checked)}
                className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
              />
              <span className="font-semibold text-gray-900">Active</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.showOnFirstFace}
                onChange={(e) => handleChange('showOnFirstFace', e.target.checked)}
                className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
              />
              <span className="font-semibold text-gray-900">Feature on Homepage</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isScheduled}
                onChange={(e) => handleChange('isScheduled', e.target.checked)}
                className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
              />
              <span className="font-semibold text-gray-900">Schedule Publishing</span>
            </label>
          </div>
        </form>

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
            {item ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  );
}
