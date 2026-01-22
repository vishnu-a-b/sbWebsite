'use client';

import { useState } from 'react';
import { X, Upload, Save } from 'lucide-react';
import MediaUpload from './MediaUpload';

interface AwardFormData {
  title: string;
  awardingAuthority: string;
  year: number;
  description: string;
  image: string;
  priority: number;
  isActive: boolean;
  startDate: string;
  expiryDate: string;
  showOnFirstFace: boolean;
}

interface AwardFormProps {
  award?: any;
  onClose: () => void;
  onSave: (data: AwardFormData) => void;
}

export default function AwardForm({ award, onClose, onSave }: AwardFormProps) {
  const [formData, setFormData] = useState<AwardFormData>({
    title: award?.title || '',
    awardingAuthority: award?.awardingAuthority || '',
    year: award?.year || new Date().getFullYear(),
    description: award?.description || '',
    image: award?.image || '',
    priority: award?.priority || 0,
    isActive: award?.isActive ?? true,
    startDate: award?.startDate ? new Date(award.startDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    expiryDate: award?.expiryDate ? new Date(award.expiryDate).toISOString().split('T')[0] : new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
    showOnFirstFace: award?.showOnFirstFace || false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AwardFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AwardFormData, string>> = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.awardingAuthority.trim()) newErrors.awardingAuthority = 'Awarding authority is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.image.trim()) newErrors.image = 'Image is required';
    if (formData.year < 1900 || formData.year > 2100) newErrors.year = 'Invalid year';
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

  const handleChange = (field: keyof AwardFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            {award ? 'Edit Award' : 'Add New Award'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Award Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Award Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., Best Palliative Care Hospital"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Awarding Authority & Year */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Awarding Authority <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.awardingAuthority}
                onChange={(e) => handleChange('awardingAuthority', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.awardingAuthority ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Kerala Government"
              />
              {errors.awardingAuthority && <p className="text-red-500 text-sm mt-1">{errors.awardingAuthority}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Year <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={formData.year}
                onChange={(e) => handleChange('year', parseInt(e.target.value))}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.year ? 'border-red-500' : 'border-gray-300'
                }`}
                min="1900"
                max="2100"
              />
              {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
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
              placeholder="Describe the award and achievement..."
              rows={4}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Award Image <span className="text-red-500">*</span>
            </label>
             <div className="flex gap-4 items-start">
                  {formData.image && (
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-gray-200">
                      <img src={formData.image} alt="Award" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => handleChange('image', '')}
                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                      >
                         <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                  <div className="flex-1">
                    <MediaUpload
                        type="image"
                        currentUrl={formData.image}
                        onUploadComplete={(url) => handleChange('image', url)}
                        label={formData.image ? "Change Image" : "Upload Award Image"}
                        maxSize={5}
                    />
                  </div>
              </div>
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
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
              <span className="font-semibold text-gray-900">Active</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.showOnFirstFace}
                onChange={(e) => handleChange('showOnFirstFace', e.target.checked)}
                className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
              />
              <div>
                <span className="font-semibold text-gray-900">Feature on Homepage</span>
                <p className="text-xs text-gray-600">Show in awards section on homepage</p>
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
              {award ? 'Update Award' : 'Create Award'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
