'use client';

import { useState } from 'react';
import { X, Save } from 'lucide-react';
import MediaUpload from './MediaUpload';

interface TeamMemberFormData {
  name: string;
  role: string;
  designation: string;
  bio: string;
  image: string;
  specialization: string;
  experience: number;
  priority: number;
  isActive: boolean;
  startDate: string;
  expiryDate: string;
  showOnAboutPage: boolean;
}

interface TeamMemberFormProps {
  member?: any;
  onClose: () => void;
  onSave: (data: TeamMemberFormData) => void;
}

export default function TeamMemberForm({ member, onClose, onSave }: TeamMemberFormProps) {
  const [formData, setFormData] = useState<TeamMemberFormData>({
    name: member?.name || '',
    role: member?.role || '',
    designation: member?.designation || '',
    bio: member?.bio || '',
    image: member?.image || '',
    specialization: member?.specialization || '',
    experience: member?.experience || 0,
    priority: member?.priority || 0,
    isActive: member?.isActive ?? true,
    startDate: member?.startDate ? new Date(member.startDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    expiryDate: member?.expiryDate ? new Date(member.expiryDate).toISOString().split('T')[0] : new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString().split('T')[0],
    showOnAboutPage: member?.showOnAboutPage ?? true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof TeamMemberFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof TeamMemberFormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.role.trim()) newErrors.role = 'Role is required';
    if (!formData.designation.trim()) newErrors.designation = 'Designation is required';
    if (!formData.bio.trim()) newErrors.bio = 'Bio is required';
    if (!formData.image.trim()) newErrors.image = 'Profile image is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSave(formData);
    }
  };

  const handleChange = (field: keyof TeamMemberFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full my-8">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-xl">
          <h2 className="text-2xl font-bold text-gray-900">
            {member ? 'Edit Team Member' : 'Add Team Member'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Profile Image */}
          <MediaUpload
            type="image"
            currentUrl={formData.image}
            onUploadComplete={(url) => handleChange('image', url)}
            label="Profile Photo *"
            maxSize={5}
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}

          {/* Name & Role */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Dr. John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Role <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => handleChange('role', e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.role ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Medical Team, Founder"
              />
              {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
            </div>
          </div>

          {/* Designation */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Designation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.designation}
              onChange={(e) => handleChange('designation', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.designation ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., Chief Medical Officer"
            />
            {errors.designation && <p className="text-red-500 text-sm mt-1">{errors.designation}</p>}
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Bio <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.bio ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Brief biography..."
              rows={4}
            />
            {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio}</p>}
          </div>

          {/* Specialization & Experience */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Specialization
              </label>
              <input
                type="text"
                value={formData.specialization}
                onChange={(e) => handleChange('specialization', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g., Palliative Care"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Experience (years)
              </label>
              <input
                type="number"
                value={formData.experience}
                onChange={(e) => handleChange('experience', parseInt(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                min="0"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
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
                checked={formData.showOnAboutPage}
                onChange={(e) => handleChange('showOnAboutPage', e.target.checked)}
                className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
              />
              <div>
                <span className="font-semibold text-gray-900">Show on About Page</span>
                <p className="text-xs text-gray-600">Display in team section on About Us page</p>
              </div>
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
            {member ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  );
}
