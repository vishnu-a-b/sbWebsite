'use client';

import { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import { getServicesPageContent, updateServicesPageContent } from '@/app/actions/servicesPage';

interface ServicesPageContent {
  heroTitle: string;
  heroSubtitle: string;
  helperTitle: string;
  helperDescription: string;
  ctaButtonText: string;
  ctaLink: string;
}

export default function ServicesPageConfig() {
  const [content, setContent] = useState<ServicesPageContent>({
    heroTitle: '',
    heroSubtitle: '',
    helperTitle: '',
    helperDescription: '',
    ctaButtonText: '',
    ctaLink: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const data = await getServicesPageContent();
      if (data) {
        setContent({
          heroTitle: data.heroTitle || 'Our Services',
          heroSubtitle: data.heroSubtitle || '',
          helperTitle: data.helperTitle || 'No Barriers to Care',
          helperDescription: data.helperDescription || '',
          ctaButtonText: data.ctaButtonText || 'Contact Us',
          ctaLink: data.ctaLink || '/contact'
        });
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching page content:', error);
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateServicesPageContent(content);
      alert('Page content saved successfully!');
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Error saving content');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-4 text-center text-gray-500">Loading config...</div>;

  return (
    <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
      <div 
        className="p-6 cursor-pointer flex justify-between items-center bg-gray-50 border-b hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h2 className="text-xl font-bold text-gray-900">Page Configuration</h2>
          <p className="text-sm text-gray-500">Edit hero section and CTA text</p>
        </div>
        <div className="text-gray-400">
            {isOpen ? '▲' : '▼'}
        </div>
      </div>
      
      {isOpen && (
        <div className="p-6 space-y-6">
          {/* Hero Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Hero Section</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Page Title</label>
                <input
                  type="text"
                  value={content.heroTitle}
                  onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                <textarea
                  value={content.heroSubtitle}
                  onChange={(e) => setContent({ ...content, heroSubtitle: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  rows={2}
                />
              </div>
            </div>
          </div>

          {/* Helper/CTA Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Bottom CTA Section</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
                <input
                  type="text"
                  value={content.helperTitle}
                  onChange={(e) => setContent({ ...content, helperTitle: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={content.helperDescription}
                  onChange={(e) => setContent({ ...content, helperDescription: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  rows={2}
                />
              </div>
               <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                <input
                  type="text"
                  value={content.ctaButtonText}
                  onChange={(e) => setContent({ ...content, ctaButtonText: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Button Link</label>
                <input
                  type="text"
                  value={content.ctaLink}
                  onChange={(e) => setContent({ ...content, ctaLink: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-opacity disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {saving ? 'Saving...' : 'Save Configuration'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
