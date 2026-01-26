'use client';

import { useState } from 'react';
import { X, Upload, Save, Plus, Trash2 } from 'lucide-react';
import MediaUpload from './MediaUpload';

interface ProjectFormData {
  projectName: string;
  shortDescription: string;
  fullDescription: string;
  featuredImage: string;
  gallery: string[];
  priority: number;
  isActive: boolean;
  startDate: string;
  expiryDate: string;
  showOnFirstFace: boolean;
  showOnSecondFace: boolean;
  showOnBenevity: boolean;
  link?: string;
}

interface ProjectFormProps {
  project?: any;
  onClose: () => void;
  onSave: (data: ProjectFormData) => void;
}

export default function ProjectForm({ project, onClose, onSave }: ProjectFormProps) {
  const [formData, setFormData] = useState<ProjectFormData>({
    projectName: project?.projectName || '',
    shortDescription: project?.shortDescription || '',
    fullDescription: project?.fullDescription || '',
    featuredImage: project?.featuredImage || '',
    gallery: project?.gallery || [],
    priority: project?.priority || 0,
    isActive: project?.isActive ?? true,
    startDate: project?.startDate ? new Date(project.startDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    expiryDate: project?.expiryDate ? new Date(project.expiryDate).toISOString().split('T')[0] : new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
    showOnFirstFace: project?.showOnFirstFace || false,
    showOnSecondFace: project?.showOnSecondFace || false,
    showOnBenevity: project?.showOnBenevity || false,
    link: project?.link || '',
  });

  const [newGalleryUrl, setNewGalleryUrl] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof ProjectFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ProjectFormData, string>> = {};

    if (!formData.projectName.trim()) newErrors.projectName = 'Project name is required';
    if (!formData.shortDescription.trim()) newErrors.shortDescription = 'Short description is required';
    if (!formData.fullDescription.trim()) newErrors.fullDescription = 'Full description is required';
    if (!formData.featuredImage.trim()) newErrors.featuredImage = 'Featured image is required';
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

  const handleChange = (field: keyof ProjectFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const addGalleryImage = () => {
    if (newGalleryUrl.trim()) {
      setFormData(prev => ({
        ...prev,
        gallery: [...prev.gallery, newGalleryUrl.trim()]
      }));
      setNewGalleryUrl('');
    }
  };

  const removeGalleryImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            {project ? 'Edit Project' : 'Add New Project'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Project Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Project Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.projectName}
              onChange={(e) => handleChange('projectName', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.projectName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., Community Health Program"
            />
            {errors.projectName && <p className="text-red-500 text-sm mt-1">{errors.projectName}</p>}
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Short Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.shortDescription}
              onChange={(e) => handleChange('shortDescription', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.shortDescription ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Brief overview (for cards/previews)"
              rows={2}
            />
            {errors.shortDescription && <p className="text-red-500 text-sm mt-1">{errors.shortDescription}</p>}
          </div>

          {/* Full Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.fullDescription}
              onChange={(e) => handleChange('fullDescription', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.fullDescription ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Detailed project information"
              rows={6}
            />
            {errors.fullDescription && <p className="text-red-500 text-sm mt-1">{errors.fullDescription}</p>}
          </div>

          {/* External Link (Benevity Link) */}
          <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
            <label className="block text-sm font-bold text-primary mb-2">
              Support Link / Benevity URL
            </label>
            <input
              type="url"
              value={formData.link}
              onChange={(e) => handleChange('link', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary bg-white"
              placeholder="https://causes.benevity.org/..."
            />
            <p className="text-[11px] text-blue-600 mt-2 font-medium">
              Optional: If you provide a direct link to this project on Benevity, the website's "Support" button will go there.
            </p>
          </div>

          {/* Featured Image */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Featured Image <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4 items-start">
                  {formData.featuredImage && (
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-gray-200">
                      <img src={formData.featuredImage} alt="Featured" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => handleChange('featuredImage', '')}
                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                      >
                         <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                  <div className="flex-1">
                    <MediaUpload
                        type="image"
                        currentUrl={formData.featuredImage}
                        onUploadComplete={(url) => handleChange('featuredImage', url)}
                        label={formData.featuredImage ? "Change Image" : "Upload Featured Image"}
                        maxSize={5}
                    />
                  </div>
              </div>
              {errors.featuredImage && <p className="text-red-500 text-sm mt-1">{errors.featuredImage}</p>}
            </div>

          {/* Gallery */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Gallery Images
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {formData.gallery.map((url, index) => (
                  <div key={index} className="relative group rounded-lg overflow-hidden border border-gray-200 aspect-video bg-gray-50">
                    <img src={url} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeGalleryImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300">
                <p className="text-sm font-semibold text-gray-700 mb-3">Add to Gallery</p>
                <MediaUpload
                  type="image"
                  currentUrl=""
                  onUploadComplete={(url) => {
                     setFormData(prev => ({
                        ...prev,
                        gallery: [...prev.gallery, url]
                      }));
                  }}
                  label="Upload Gallery Image"
                  maxSize={5}
                />
              </div>
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
              <span className="font-semibold text-gray-900">Show on First Face (Above Fold)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.showOnSecondFace}
                onChange={(e) => handleChange('showOnSecondFace', e.target.checked)}
                className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
              />
              <span className="font-semibold text-gray-900">Show on Second Face (Below Fold)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.showOnBenevity}
                onChange={(e) => handleChange('showOnBenevity', e.target.checked)}
                className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
              />
              <span className="font-semibold text-gray-900">Show on Benevity Page</span>
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
              {project ? 'Update Project' : 'Create Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
