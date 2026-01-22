'use client';

import { useState } from 'react';
import { X, Save } from 'lucide-react';
import MediaUpload from './MediaUpload';

interface ServiceFormData {
  title: string;
  description: string;
  icon: string;
  image: string;
  color: string;
  priority: number;
  isActive: boolean;
  startDate: string;
  expiryDate: string;
  showOnFirstFace: boolean;
}

interface ServiceFormProps {
  service?: any;
  onClose: () => void;
  onSave: (data: ServiceFormData) => void;
}

export default function ServiceForm({ service, onClose, onSave }: ServiceFormProps) {
  const [formData, setFormData] = useState<ServiceFormData>({
    title: service?.title || '',
    description: service?.description || '',
    icon: service?.icon || '',
    image: service?.image || '',
    color: service?.color || '#10b981',
    priority: service?.priority || 0,
    isActive: service?.isActive ?? true,
    startDate: service?.startDate ? new Date(service.startDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    expiryDate: service?.expiryDate ? new Date(service.expiryDate).toISOString().split('T')[0] : '',
    showOnFirstFace: service?.showOnFirstFace || false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ServiceFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ServiceFormData, string>> = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.icon.trim()) newErrors.icon = 'Icon name is required';
    if (formData.priority < 0) newErrors.priority = 'Priority must be 0 or greater';
    
    // Only validate expiry if it exists
    if (formData.expiryDate && new Date(formData.startDate) > new Date(formData.expiryDate)) {
      newErrors.expiryDate = 'Expiry date must be after start date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Send empty string as null or handle in parent, but component expects string in state
      onSave(formData);
    }
  };

  const handleChange = (field: keyof ServiceFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-gray-900">
            {service ? 'Edit Service' : 'Add New Service'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Service Image
            </label>
            <MediaUpload
              onUploadComplete={(url) => handleChange('image', url)}
              currentUrl={formData.image}
              type="image"
            />
            <p className="text-xs text-gray-500 mt-1">Recommended size: 800x600px</p>
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
              placeholder="e.g., Free Dialysis"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
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
              placeholder="Describe the service..."
              rows={4}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>

          {/* Icon & Color */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Icon Name (Lucide) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.icon}
                onChange={(e) => handleChange('icon', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.icon ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Heart, Activity, Users"
              />
              {errors.icon && <p className="text-red-500 text-sm mt-1">{errors.icon}</p>}
              <p className="text-xs text-gray-500 mt-1">See lucide.dev for icon names</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Color
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={formData.color}
                  onChange={(e) => handleChange('color', e.target.value)}
                  className="h-10 w-20 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.color}
                  onChange={(e) => handleChange('color', e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="#10b981"
                />
              </div>
            </div>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Priority (Higher = Shows First)
            </label>
            <input
              type="number"
              value={formData.priority}
              onChange={(e) => handleChange('priority', parseInt(e.target.value))}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.priority ? 'border-red-500' : 'border-gray-300'
              }`}
              min="0"
            />
            {errors.priority && <p className="text-red-500 text-sm mt-1">{errors.priority}</p>}
          </div>

          {/* Date Range */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Expiry Date <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="date"
                value={formData.expiryDate}
                onChange={(e) => handleChange('expiryDate', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <p className="text-xs text-gray-500 mt-1">Leave blank if the service does not expire</p>
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
                <p className="text-xs text-gray-600">Service is visible to users</p>
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
                <p className="text-xs text-gray-600">Display on homepage above the fold</p>
              </div>
            </label>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              {service ? 'Update Service' : 'Create Service'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
