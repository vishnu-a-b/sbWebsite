'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Image as ImageIcon, Eye, EyeOff, X, Save } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import MediaUpload from '@/components/admin/MediaUpload';
import RevealAnimation from '@/components/RevealAnimation';
import API_BASE_URL from '@/lib/api';
import { getImageUrl } from '@/lib/image-url';

interface GalleryImage {
  _id: string;
  imageUrl: string;
  altText: string;
  category: string;
  priority: number;
  isActive: boolean;
  createdAt: string;
}

const CATEGORIES = ['General', 'Hospital Life', 'Patient Care', 'Medical Team', 'Facilities', 'Community', 'Rehabilitation', 'Spiritual Care', 'Support Services', 'Volunteers', 'Services', 'Projects'];

export default function GalleryAdminPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [formData, setFormData] = useState({
    imageUrl: '',
    altText: '',
    category: 'General',
    priority: 0,
    isActive: true,
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/gallery/admin`);
      const data = await res.json();
      if (data.success) {
        setImages(data.images);
      }
    } catch (error) {
      console.error('Error fetching gallery images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.imageUrl || !formData.altText) {
      alert('Image URL and Alt Text are required');
      return;
    }

    setSaving(true);
    try {
      const url = editingImage
        ? `${API_BASE_URL}/gallery/${editingImage._id}`
        : `${API_BASE_URL}/gallery`;
      const method = editingImage ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setShowForm(false);
        setEditingImage(null);
        resetForm();
        fetchImages();
      } else {
        alert(data.error || 'Failed to save image');
      }
    } catch (error) {
      console.error('Error saving image:', error);
      alert('Failed to save image');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (image: GalleryImage) => {
    setEditingImage(image);
    setFormData({
      imageUrl: image.imageUrl,
      altText: image.altText,
      category: image.category,
      priority: image.priority,
      isActive: image.isActive,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const res = await fetch(`${API_BASE_URL}/gallery/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      if (data.success) {
        fetchImages();
      } else {
        alert(data.error || 'Failed to delete image');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Failed to delete image');
    }
  };

  const resetForm = () => {
    setFormData({
      imageUrl: '',
      altText: '',
      category: 'General',
      priority: 0,
      isActive: true,
    });
  };

  const openAddForm = () => {
    setEditingImage(null);
    resetForm();
    setShowForm(true);
  };

  return (
    <div className="p-8">
      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingImage ? 'Edit Image' : 'Add New Image'}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingImage(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gallery Image <span className="text-red-500">*</span>
                </label>
                <MediaUpload
                  onUploadComplete={(url) => setFormData(prev => ({ ...prev, imageUrl: url }))}
                  currentUrl={formData.imageUrl}
                  type="image"
                />
              </div>

              {/* Alt Text */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Alt Text <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.altText}
                  onChange={(e) => setFormData(prev => ({ ...prev, altText: e.target.value }))}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Description of the image"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Priority
                </label>
                <input
                  type="number"
                  value={formData.priority}
                  onChange={(e) => setFormData(prev => ({ ...prev, priority: parseInt(e.target.value) || 0 }))}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  min="0"
                />
                <p className="text-xs text-gray-500 mt-1">Higher numbers appear first</p>
              </div>

              {/* Active Toggle */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                    className="w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">Active</span>
                    <p className="text-xs text-gray-600">Image is visible on the website</p>
                  </div>
                </label>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingImage(null);
                  }}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Save className="w-5 h-5" />
                  {saving ? 'Saving...' : editingImage ? 'Update Image' : 'Add Image'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 text-primary mb-2">
            <ImageIcon className="w-6 h-6" />
            <h1 className="text-3xl font-bold text-gray-900">Gallery Management</h1>
          </div>
          <p className="text-gray-600">
            Manage images displayed in the website gallery section
          </p>
        </div>
        <Button onClick={openAddForm} className="gap-2">
          <Plus className="w-4 h-4" />
          Add Image
        </Button>
      </div>

      {/* Gallery Grid */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-600">Loading gallery...</div>
        </div>
      ) : images.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <ImageIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Images Yet</h3>
          <p className="text-gray-500 mb-6">Start by adding your first gallery image</p>
          <Button onClick={openAddForm}>
            <Plus className="w-4 h-4 mr-2" />
            Add First Image
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <RevealAnimation key={image._id} delay={index * 0.05}>
              <Card className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative aspect-square">
                  <img
                    src={getImageUrl(image.imageUrl)}
                    alt={image.altText}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleEdit(image)}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-5 h-5 text-blue-600" />
                    </button>
                    <button
                      onClick={() => handleDelete(image._id)}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-2 right-2">
                    {image.isActive ? (
                      <span className="flex items-center gap-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        <Eye className="w-3 h-3" />
                        Active
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                        <EyeOff className="w-3 h-3" />
                        Hidden
                      </span>
                    )}
                  </div>
                  {/* Priority Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-bold">
                      P:{image.priority}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="font-medium text-gray-900 line-clamp-1">{image.altText}</p>
                  <p className="text-sm text-gray-500">{image.category}</p>
                </CardContent>
              </Card>
            </RevealAnimation>
          ))}
        </div>
      )}
    </div>
  );
}
