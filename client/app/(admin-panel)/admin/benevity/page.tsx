'use client';

import { useState, useEffect } from 'react';
import { Save, Eye } from 'lucide-react';
import MediaUpload from '@/components/admin/MediaUpload';
import { getBenevityPageContent, updateBenevityPageContent, seedBenevityPageContent } from '@/app/actions/benevityPage';

interface BenevityPageContent {
  _id?: string;
  badge: string;
  title: string;
  highlightText: string;
  description: string;
  backgroundImage: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  cardTitle: string;
  cardSubtitle: string;
  cardFeature1: string;
  cardFeature2: string;
  cardFeature3: string;
  cardFeature4: string;
}

export default function BenevityAdminPage() {
  const [content, setContent] = useState<BenevityPageContent>({
    badge: 'Official Benevity Partner',
    title: 'Double Your Impact with',
    highlightText: 'Corporate Giving',
    description: '',
    backgroundImage: '',
    stat1Value: '2x',
    stat1Label: 'Matching Impact',
    stat2Value: '500+',
    stat2Label: 'Partner Companies',
    stat3Value: '100%',
    stat3Label: 'Tax Deductible',
    ctaText: 'Donate via Benevity',
    ctaLink: 'https://causes.benevity.org/',
    secondaryCtaText: 'Learn How It Works',
    secondaryCtaLink: '#how-it-works',
    cardTitle: 'Benevity Platform',
    cardSubtitle: 'Workplace Giving Made Easy',
    cardFeature1: 'Automatic payroll deductions',
    cardFeature2: 'Employer donation matching',
    cardFeature3: 'Instant tax receipts',
    cardFeature4: 'Track your impact',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [seeding, setSeeding] = useState(false);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const data = await getBenevityPageContent();
      if (data) {
        setContent({
          _id: data._id,
          badge: data.badge || 'Official Benevity Partner',
          title: data.title || 'Double Your Impact with',
          highlightText: data.highlightText || 'Corporate Giving',
          description: data.description || '',
          backgroundImage: data.backgroundImage || '',
          stat1Value: data.stat1Value || '2x',
          stat1Label: data.stat1Label || 'Matching Impact',
          stat2Value: data.stat2Value || '500+',
          stat2Label: data.stat2Label || 'Partner Companies',
          stat3Value: data.stat3Value || '100%',
          stat3Label: data.stat3Label || 'Tax Deductible',
          ctaText: data.ctaText || 'Donate via Benevity',
          ctaLink: data.ctaLink || 'https://causes.benevity.org/',
          secondaryCtaText: data.secondaryCtaText || 'Learn How It Works',
          secondaryCtaLink: data.secondaryCtaLink || '#how-it-works',
          cardTitle: data.cardTitle || 'Benevity Platform',
          cardSubtitle: data.cardSubtitle || 'Workplace Giving Made Easy',
          cardFeature1: data.cardFeature1 || 'Automatic payroll deductions',
          cardFeature2: data.cardFeature2 || 'Employer donation matching',
          cardFeature3: data.cardFeature3 || 'Instant tax receipts',
          cardFeature4: data.cardFeature4 || 'Track your impact',
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
      await updateBenevityPageContent(content);
      alert('Content saved successfully!');
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Error saving content');
    } finally {
      setSaving(false);
    }
  };

  const handleSeed = async () => {
    if (!confirm('This will reset all Benevity page content to default values. Are you sure?')) {
      return;
    }
    setSeeding(true);
    try {
      const data = await seedBenevityPageContent();
      if (data) {
        setContent({
          _id: data._id,
          badge: data.badge || 'Official Benevity Partner',
          title: data.title || 'Double Your Impact with',
          highlightText: data.highlightText || 'Corporate Giving',
          description: data.description || '',
          backgroundImage: data.backgroundImage || '',
          stat1Value: data.stat1Value || '2x',
          stat1Label: data.stat1Label || 'Matching Impact',
          stat2Value: data.stat2Value || '500+',
          stat2Label: data.stat2Label || 'Partner Companies',
          stat3Value: data.stat3Value || '100%',
          stat3Label: data.stat3Label || 'Tax Deductible',
          ctaText: data.ctaText || 'Donate via Benevity',
          ctaLink: data.ctaLink || 'https://causes.benevity.org/',
          secondaryCtaText: data.secondaryCtaText || 'Learn How It Works',
          secondaryCtaLink: data.secondaryCtaLink || '#how-it-works',
          cardTitle: data.cardTitle || 'Benevity Platform',
          cardSubtitle: data.cardSubtitle || 'Workplace Giving Made Easy',
          cardFeature1: data.cardFeature1 || 'Automatic payroll deductions',
          cardFeature2: data.cardFeature2 || 'Employer donation matching',
          cardFeature3: data.cardFeature3 || 'Instant tax receipts',
          cardFeature4: data.cardFeature4 || 'Track your impact',
        });
      }
      alert('Content seeded successfully!');
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
          <h1 className="text-3xl font-bold text-gray-900">Benevity Page Content</h1>
          <p className="text-gray-600 mt-1">Manage Benevity page hero section</p>
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
            href="/benevity"
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
        {/* Hero Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b">Hero Section</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Badge Text</label>
                <input
                  type="text"
                  value={content.badge}
                  onChange={(e) => setContent({ ...content, badge: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Official Benevity Partner"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={content.title}
                  onChange={(e) => setContent({ ...content, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Double Your Impact with"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Highlight Text (colored)</label>
                <input
                  type="text"
                  value={content.highlightText}
                  onChange={(e) => setContent({ ...content, highlightText: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Corporate Giving"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  value={content.description}
                  onChange={(e) => setContent({ ...content, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={3}
                  placeholder="Join thousands of corporate employees..."
                />
              </div>
            </div>
            <div>
              <MediaUpload
                type="image"
                label="Background Image"
                currentUrl={content.backgroundImage}
                onUploadComplete={(url) => setContent({ ...content, backgroundImage: url })}
                maxSize={5}
              />
              <p className="text-sm text-gray-500 mt-2">Leave empty for gradient background</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b">Statistics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-3">Stat 1</h3>
              <input
                type="text"
                value={content.stat1Value}
                onChange={(e) => setContent({ ...content, stat1Value: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                placeholder="2x"
              />
              <input
                type="text"
                value={content.stat1Label}
                onChange={(e) => setContent({ ...content, stat1Label: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Matching Impact"
              />
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-3">Stat 2</h3>
              <input
                type="text"
                value={content.stat2Value}
                onChange={(e) => setContent({ ...content, stat2Value: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                placeholder="500+"
              />
              <input
                type="text"
                value={content.stat2Label}
                onChange={(e) => setContent({ ...content, stat2Label: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Partner Companies"
              />
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-3">Stat 3</h3>
              <input
                type="text"
                value={content.stat3Value}
                onChange={(e) => setContent({ ...content, stat3Value: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                placeholder="100%"
              />
              <input
                type="text"
                value={content.stat3Label}
                onChange={(e) => setContent({ ...content, stat3Label: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Tax Deductible"
              />
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b">Call to Action Buttons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-3">Primary Button</h3>
              <input
                type="text"
                value={content.ctaText}
                onChange={(e) => setContent({ ...content, ctaText: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                placeholder="Donate via Benevity"
              />
              <input
                type="text"
                value={content.ctaLink}
                onChange={(e) => setContent({ ...content, ctaLink: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="https://causes.benevity.org/"
              />
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-3">Secondary Button</h3>
              <input
                type="text"
                value={content.secondaryCtaText}
                onChange={(e) => setContent({ ...content, secondaryCtaText: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                placeholder="Learn How It Works"
              />
              <input
                type="text"
                value={content.secondaryCtaLink}
                onChange={(e) => setContent({ ...content, secondaryCtaLink: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="#how-it-works"
              />
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b">Info Card (Desktop)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Card Title</label>
                <input
                  type="text"
                  value={content.cardTitle}
                  onChange={(e) => setContent({ ...content, cardTitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Benevity Platform"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Card Subtitle</label>
                <input
                  type="text"
                  value={content.cardSubtitle}
                  onChange={(e) => setContent({ ...content, cardSubtitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Workplace Giving Made Easy"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Feature 1</label>
                <input
                  type="text"
                  value={content.cardFeature1}
                  onChange={(e) => setContent({ ...content, cardFeature1: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Automatic payroll deductions"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Feature 2</label>
                <input
                  type="text"
                  value={content.cardFeature2}
                  onChange={(e) => setContent({ ...content, cardFeature2: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Employer donation matching"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Feature 3</label>
                <input
                  type="text"
                  value={content.cardFeature3}
                  onChange={(e) => setContent({ ...content, cardFeature3: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Instant tax receipts"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Feature 4</label>
                <input
                  type="text"
                  value={content.cardFeature4}
                  onChange={(e) => setContent({ ...content, cardFeature4: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Track your impact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
