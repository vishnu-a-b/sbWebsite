'use client';

import { useState, useEffect } from 'react';
import { Save, Eye } from 'lucide-react';
import MediaUpload from '@/components/admin/MediaUpload';
import { getAboutContent, updateAboutContent, seedAboutContent } from '@/app/actions/about';

interface AboutPageContent {
  _id?: string;
  heroTitle: string;
  heroSubtitle: string;
  storyTitle: string;
  storyDescription: string;
  storyImage: string;
  // Home page about section
  homeTitle: string;
  homeBadge: string;
  homeIntro: string;
  homeDescription: string;
  homeImage: string;
  homeButtonText: string;
  homeButtonLink: string;
  mission: { title: string; description: string };
  vision: { title: string; description: string };
  motto: { title: string; description: string };
  belief: { title: string; description: string };
  founderMessage: string;
  timeline: Array<{
    year: number;
    title: string;
    description: string;
  }>;
}

export default function AboutAdminPage() {
  const [content, setContent] = useState<AboutPageContent>({
    heroTitle: 'About Us',
    heroSubtitle: '',
    storyTitle: 'Our Story',
    storyDescription: '',
    storyImage: '',
    // Home page about section
    homeTitle: 'The First Palliative Hospital in India',
    homeBadge: 'Established 1993',
    homeIntro: '',
    homeDescription: '',
    homeImage: '',
    homeButtonText: 'Learn More About Us',
    homeButtonLink: '/about',
    mission: { title: 'Our Mission', description: '' },
    vision: { title: 'Our Vision', description: '' },
    motto: { title: 'Our Motto', description: '' },
    belief: { title: 'Our Belief', description: '' },
    founderMessage: '',
    timeline: [],
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [seeding, setSeeding] = useState(false);

  useEffect(() => {
    fetchAboutContent();
  }, []);

  const fetchAboutContent = async () => {
    try {
      const data = await getAboutContent();
      console.log('Fetched about content:', data);
      if (data) {
        // Ensure all fields exist with proper defaults
        const newContent = {
          _id: data._id,
          heroTitle: data.heroTitle || 'About Us',
          heroSubtitle: data.heroSubtitle || '',
          storyTitle: data.storyTitle || 'Our Story',
          storyDescription: data.storyDescription || '',
          storyImage: data.storyImage || '',
          homeTitle: data.homeTitle || 'The First Palliative Hospital in India',
          homeBadge: data.homeBadge || 'Established 1993',
          homeIntro: data.homeIntro || '',
          homeDescription: data.homeDescription || '',
          homeImage: data.homeImage || '',
          homeButtonText: data.homeButtonText || 'Learn More About Us',
          homeButtonLink: data.homeButtonLink || '/about',
          mission: {
            title: data.mission?.title || 'Our Mission',
            description: data.mission?.description || ''
          },
          vision: {
            title: data.vision?.title || 'Our Vision',
            description: data.vision?.description || ''
          },
          motto: {
            title: data.motto?.title || 'Our Motto',
            description: data.motto?.description || ''
          },
          belief: {
            title: data.belief?.title || 'Our Belief',
            description: data.belief?.description || ''
          },
          founderMessage: data.founderMessage || '',
          timeline: data.timeline || [],
        };
        console.log('Setting content to:', newContent);
        setContent(newContent);
      } else {
        console.log('No data returned from getAboutContent');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching about content:', error);
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateAboutContent(content);
      alert('Content saved successfully!');
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Error saving content');
    } finally {
      setSaving(false);
    }
  };

  const handleSeed = async () => {
    if (!confirm('This will reset all about content to default values. Are you sure?')) {
      return;
    }
    setSeeding(true);
    try {
      const data = await seedAboutContent();
      if (data) {
        setContent({
          _id: data._id,
          heroTitle: data.heroTitle || 'About Us',
          heroSubtitle: data.heroSubtitle || '',
          storyTitle: data.storyTitle || 'Our Story',
          storyDescription: data.storyDescription || '',
          storyImage: data.storyImage || '',
          homeTitle: data.homeTitle || 'The First Palliative Hospital in India',
          homeBadge: data.homeBadge || 'Established 1993',
          homeIntro: data.homeIntro || '',
          homeDescription: data.homeDescription || '',
          homeImage: data.homeImage || '',
          homeButtonText: data.homeButtonText || 'Learn More About Us',
          homeButtonLink: data.homeButtonLink || '/about',
          mission: {
            title: data.mission?.title || 'Our Mission',
            description: data.mission?.description || ''
          },
          vision: {
            title: data.vision?.title || 'Our Vision',
            description: data.vision?.description || ''
          },
          motto: {
            title: data.motto?.title || 'Our Motto',
            description: data.motto?.description || ''
          },
          belief: {
            title: data.belief?.title || 'Our Belief',
            description: data.belief?.description || ''
          },
          founderMessage: data.founderMessage || '',
          timeline: data.timeline || [],
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

  const handleNestedChange = (
    section: 'mission' | 'vision' | 'motto' | 'belief',
    field: 'title' | 'description',
    value: string
  ) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const addTimelineItem = () => {
    setContent({
      ...content,
      timeline: [
        ...content.timeline,
        { year: new Date().getFullYear(), title: '', description: '' },
      ],
    });
  };

  const removeTimelineItem = (index: number) => {
    setContent({
      ...content,
      timeline: content.timeline.filter((_, i) => i !== index),
    });
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Loading about content...</div>;
  }

  return (
    <div className="p-8 pb-24">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">About Us Content</h1>
          <p className="text-gray-600 mt-1">Manage About Us page content</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleSeed}
            disabled={seeding}
            className="bg-orange-100 text-orange-700 px-6 py-3 rounded-lg hover:bg-orange-200 flex items-center gap-2 transition-all disabled:opacity-50"
          >
            {seeding ? 'Seeding...' : 'Seed Default'}
          </button>
          <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 flex items-center gap-2 transition-all">
            <Eye className="w-5 h-5" />
            Preview
          </button>
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
        
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b">Hero Section</h2>
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Page Title</label>
              <input
                type="text"
                value={content.heroTitle}
                onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subtitle / Introduction</label>
              <textarea
                value={content.heroSubtitle}
                onChange={(e) => setContent({ ...content, heroSubtitle: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                rows={2}
              />
            </div>
          </div>
        </div>

        {/* Home Page About Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b">Home Page About Section</h2>
          <p className="text-gray-500 text-sm mb-6">This section appears on the home page as the introduction to the hospital.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Badge Text</label>
                <input
                  type="text"
                  value={content.homeBadge}
                  onChange={(e) => setContent({ ...content, homeBadge: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., Established 1993"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={content.homeTitle}
                  onChange={(e) => setContent({ ...content, homeTitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="The First Palliative Hospital in India"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Introduction (Short)</label>
                <textarea
                  value={content.homeIntro}
                  onChange={(e) => setContent({ ...content, homeIntro: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={2}
                  placeholder="A brief introduction about the hospital..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  value={content.homeDescription}
                  onChange={(e) => setContent({ ...content, homeDescription: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={4}
                  placeholder="Detailed description for the home page..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Button Text</label>
                  <input
                    type="text"
                    value={content.homeButtonText}
                    onChange={(e) => setContent({ ...content, homeButtonText: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Learn More About Us"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Button Link</label>
                  <input
                    type="text"
                    value={content.homeButtonLink}
                    onChange={(e) => setContent({ ...content, homeButtonLink: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="/about"
                  />
                </div>
              </div>
            </div>
            <div>
              <MediaUpload
                type="image"
                label="Home Page Image"
                currentUrl={content.homeImage}
                onUploadComplete={(url) => setContent({ ...content, homeImage: url })}
                maxSize={5}
              />
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Section Title</label>
                <input
                  type="text"
                  value={content.storyTitle}
                  onChange={(e) => setContent({ ...content, storyTitle: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Story Description</label>
                <textarea
                  value={content.storyDescription}
                  onChange={(e) => setContent({ ...content, storyDescription: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows={8}
                  placeholder="Tell the story of the hospital..."
                />
              </div>
            </div>
            <div>
              <MediaUpload
                type="image"
                label="Story Image"
                currentUrl={content.storyImage}
                onUploadComplete={(url) => setContent({ ...content, storyImage: url })}
                maxSize={5}
              />
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b">Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-bold text-primary mb-3">Mission</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  value={content.mission.title}
                  onChange={(e) => handleNestedChange('mission', 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Title"
                />
                <textarea
                  value={content.mission.description}
                  onChange={(e) => handleNestedChange('mission', 'description', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  rows={3}
                  placeholder="Description"
                />
              </div>
            </div>

            {/* Vision */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-bold text-primary mb-3">Vision</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  value={content.vision.title}
                  onChange={(e) => handleNestedChange('vision', 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Title"
                />
                <textarea
                  value={content.vision.description}
                  onChange={(e) => handleNestedChange('vision', 'description', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  rows={3}
                  placeholder="Description"
                />
              </div>
            </div>

            {/* Motto */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-bold text-primary mb-3">Motto</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  value={content.motto.title}
                  onChange={(e) => handleNestedChange('motto', 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Title"
                />
                <textarea
                  value={content.motto.description}
                  onChange={(e) => handleNestedChange('motto', 'description', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  rows={3}
                  placeholder="Description"
                />
              </div>
            </div>

            {/* Belief */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-bold text-primary mb-3">Belief</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  value={content.belief.title}
                  onChange={(e) => handleNestedChange('belief', 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Title"
                />
                <textarea
                  value={content.belief.description}
                  onChange={(e) => handleNestedChange('belief', 'description', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  rows={3}
                  placeholder="Description"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Founder's Message */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b">Founder's Message</h2>
          <textarea
            value={content.founderMessage}
            onChange={(e) => setContent({ ...content, founderMessage: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            rows={4}
            placeholder="Message from the founder..."
          />
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6 pb-2 border-b">
            <h2 className="text-xl font-bold text-gray-900">Timeline / History</h2>
            <button
              onClick={addTimelineItem}
              className="text-sm bg-secondary/10 text-secondary px-4 py-2 rounded-lg hover:bg-secondary/20 transition-all font-semibold"
            >
              + Add Item
            </button>
          </div>
          <div className="space-y-4">
            {content.timeline.length === 0 ? (
               <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                 No timeline items yet. Add one to show the hospital's history.
               </div>
            ) : (
              content.timeline.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 relative group hover:border-primary/30 transition-colors">
                  <div className="grid md:grid-cols-12 gap-4">
                    <div className="md:col-span-2">
                       <label className="block text-xs font-semibold text-gray-500 mb-1">Year</label>
                      <input
                        type="number"
                        value={item.year}
                        onChange={(e) => {
                          const newTimeline = [...content.timeline];
                          newTimeline[index].year = parseInt(e.target.value);
                          setContent({ ...content, timeline: newTimeline });
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="2024"
                      />
                    </div>
                    <div className="md:col-span-10">
                      <label className="block text-xs font-semibold text-gray-500 mb-1">Title</label>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          const newTimeline = [...content.timeline];
                          newTimeline[index].title = e.target.value;
                          setContent({ ...content, timeline: newTimeline });
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Milestone Title"
                      />
                    </div>
                    <div className="md:col-span-12">
                      <label className="block text-xs font-semibold text-gray-500 mb-1">Description</label>
                      <textarea
                        value={item.description}
                        onChange={(e) => {
                          const newTimeline = [...content.timeline];
                          newTimeline[index].description = e.target.value;
                          setContent({ ...content, timeline: newTimeline });
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows={2}
                        placeholder="Details about this milestone..."
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => removeTimelineItem(index)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Remove item"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
