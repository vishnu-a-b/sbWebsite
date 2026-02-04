'use client';

import { useState, useEffect } from 'react';
import { Save, Eye, Facebook, Instagram, Youtube, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { getFooterContent, updateFooterContent, seedFooterContent } from '@/app/actions/footer';

interface FooterContent {
  _id?: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
  linkedin: string;
  whatsapp: string;
  copyrightText: string;
}

export default function FooterAdminPage() {
  const [content, setContent] = useState<FooterContent>({
    address: '',
    phone: '',
    email: '',
    description: '',
    facebook: '',
    instagram: '',
    youtube: '',
    twitter: '',
    linkedin: '',
    whatsapp: '',
    copyrightText: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [seeding, setSeeding] = useState(false);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const data = await getFooterContent();
      if (data) {
        setContent({
          _id: data._id,
          address: data.address || '',
          phone: data.phone || '',
          email: data.email || '',
          description: data.description || '',
          facebook: data.facebook || '',
          instagram: data.instagram || '',
          youtube: data.youtube || '',
          twitter: data.twitter || '',
          linkedin: data.linkedin || '',
          whatsapp: data.whatsapp || '',
          copyrightText: data.copyrightText || '',
        });
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching content:', error);
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateFooterContent(content);
      // Refetch to confirm save worked
      await fetchContent();
      alert('Footer content saved successfully!');
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Error saving content');
    } finally {
      setSaving(false);
    }
  };

  const handleSeed = async () => {
    if (!confirm('This will reset all footer content to default values. Are you sure?')) {
      return;
    }
    setSeeding(true);
    try {
      const data = await seedFooterContent();
      if (data) {
        setContent({
          _id: data._id,
          address: data.address || '',
          phone: data.phone || '',
          email: data.email || '',
          description: data.description || '',
          facebook: data.facebook || '',
          instagram: data.instagram || '',
          youtube: data.youtube || '',
          twitter: data.twitter || '',
          linkedin: data.linkedin || '',
          whatsapp: data.whatsapp || '',
          copyrightText: data.copyrightText || '',
        });
      }
      alert('Footer content seeded successfully!');
    } catch (error) {
      console.error('Error seeding content:', error);
      alert('Error seeding content');
    } finally {
      setSeeding(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Loading content...</div>;
  }

  return (
    <div className="p-8 pb-24">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Footer Settings</h1>
          <p className="text-gray-600 mt-1">Manage footer contact info and social media links</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleSeed}
            disabled={seeding}
            className="bg-orange-100 text-orange-700 px-6 py-3 rounded-lg hover:bg-orange-200 flex items-center gap-2 transition-all disabled:opacity-50"
          >
            {seeding ? 'Seeding...' : 'Seed Default'}
          </button>
          <a
            href="/"
            target="_blank"
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 flex items-center gap-2 transition-all"
          >
            <Eye className="w-5 h-5" />
            Preview
          </a>
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
          >
            <Save className="w-5 h-5" />
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="space-y-8 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
              <textarea
                value={content.address}
                onChange={(e) => setContent({ ...content, address: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                rows={2}
                placeholder="Enter full address"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input
                type="text"
                value={content.phone}
                onChange={(e) => setContent({ ...content, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="+91 9142653804"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={content.email}
                onChange={(e) => setContent({ ...content, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="office@shanthibhavan.in"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea
                value={content.description}
                onChange={(e) => setContent({ ...content, description: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                rows={3}
                placeholder="Short description about the organization"
              />
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b">Social Media Links</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Facebook className="w-4 h-4 text-blue-600" />
                Facebook
              </label>
              <input
                type="text"
                value={content.facebook}
                onChange={(e) => setContent({ ...content, facebook: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="https://facebook.com/yourpage"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-600" />
                Instagram
              </label>
              <input
                type="text"
                value={content.instagram}
                onChange={(e) => setContent({ ...content, instagram: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="https://instagram.com/yourpage"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Youtube className="w-4 h-4 text-red-600" />
                YouTube
              </label>
              <input
                type="text"
                value={content.youtube}
                onChange={(e) => setContent({ ...content, youtube: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="https://youtube.com/@yourchannel"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Twitter className="w-4 h-4 text-sky-500" />
                Twitter / X
              </label>
              <input
                type="text"
                value={content.twitter}
                onChange={(e) => setContent({ ...content, twitter: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="https://twitter.com/yourhandle"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-blue-700" />
                LinkedIn
              </label>
              <input
                type="text"
                value={content.linkedin}
                onChange={(e) => setContent({ ...content, linkedin: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="https://linkedin.com/company/yourcompany"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-600" />
                WhatsApp
              </label>
              <input
                type="text"
                value={content.whatsapp}
                onChange={(e) => setContent({ ...content, whatsapp: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="+919142653804 (with country code)"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b">Copyright</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Copyright Text</label>
            <input
              type="text"
              value={content.copyrightText}
              onChange={(e) => setContent({ ...content, copyrightText: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Shanthibhavan Palliative Hospital. All rights reserved."
            />
            <p className="text-sm text-gray-500 mt-2">The year will be added automatically.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
