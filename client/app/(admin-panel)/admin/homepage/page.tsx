'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff, MoveVertical, ArrowUp, ArrowDown } from 'lucide-react';

interface HomeSection {
  _id: string;
  sectionName: string;
  sectionType: 'hero' | 'about' | 'services' | 'projects' | 'awards' | 'news' | 'donation' | 'cta';
  title: string;
  subtitle?: string;
  content?: string;
  ctaText?: string;
  ctaLink?: string;
  priority: number;
  isActive: boolean;
  isFirstFace: boolean;
  startDate: Date;
  expiryDate: Date;
}

const sectionTypeColors: Record<string, string> = {
  hero: 'bg-purple-100 text-purple-700',
  about: 'bg-blue-100 text-blue-700',
  services: 'bg-green-100 text-green-700',
  projects: 'bg-orange-100 text-orange-700',
  awards: 'bg-yellow-100 text-yellow-700',
  news: 'bg-pink-100 text-pink-700',
  donation: 'bg-red-100 text-red-700',
  cta: 'bg-indigo-100 text-indigo-700',
};

export default function HomepageAdminPage() {
  const [sections, setSections] = useState<HomeSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHomeSections();
  }, []);

  const fetchHomeSections = async () => {
    try {
      // TODO: Implement API call
      setLoading(false);
    } catch (error) {
      console.error('Error fetching homepage sections:', error);
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Homepage Sections</h1>
          <p className="text-gray-600 mt-1">Control homepage layout and section order</p>
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
          <Plus className="w-5 h-5" />
          Add Section
        </button>
      </div>

      {/* CMS Info Card */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-6">
        <h3 className="font-semibold text-blue-900 mb-3">Homepage Layout Controls</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-blue-800 mb-2">First Face (Above the Fold)</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• <strong>Hero Section</strong> - Always at top</li>
              <li>• <strong>Donation</strong> should be on second face (below fold)</li>
              <li>• Toggle "First Face" for priority sections</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-blue-800 mb-2">Display Logic</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Sections ordered by <strong>Priority</strong> (higher first)</li>
              <li>• Only <strong>Active</strong> sections within dates shown</li>
              <li>• Drag to reorder priority</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sections List */}
      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-12 text-gray-500">
            Loading homepage sections...
          </div>
        ) : sections.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No sections found. Click "Add Section" to create one.
          </div>
        ) : (
          sections.map((section, index) => (
            <div
              key={section._id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                {/* Drag Handle */}
                <div className="flex flex-col gap-1">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ArrowUp className="w-4 h-4 text-gray-400" />
                  </button>
                  <MoveVertical className="w-5 h-5 text-gray-300" />
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ArrowDown className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                {/* Priority Badge */}
                <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[60px] text-center">
                  {section.priority}
                </div>

                {/* Section Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{section.sectionName}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${sectionTypeColors[section.sectionType]}`}>
                      {section.sectionType.toUpperCase()}
                    </span>
                    {section.isFirstFace && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        FIRST FACE
                      </span>
                    )}
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-1">{section.title}</p>
                  {section.subtitle && (
                    <p className="text-sm text-gray-600 mb-2">{section.subtitle}</p>
                  )}
                  {section.ctaText && (
                    <div className="flex items-center gap-2 text-sm text-blue-600">
                      <span className="font-medium">CTA:</span>
                      <span>{section.ctaText}</span>
                      {section.ctaLink && <span className="text-gray-400">→ {section.ctaLink}</span>}
                    </div>
                  )}
                </div>

                {/* Status & Actions */}
                <div className="flex flex-col items-end gap-3">
                  <div>
                    {section.isActive ? (
                      <span className="flex items-center gap-1 text-green-600 font-medium">
                        <Eye className="w-4 h-4" />
                        Active
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-gray-400">
                        <EyeOff className="w-4 h-4" />
                        Inactive
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 text-right">
                    <div>{new Date(section.startDate).toLocaleDateString()}</div>
                    <div>to {new Date(section.expiryDate).toLocaleDateString()}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Preview Mode Button */}
      <div className="mt-8 text-center">
        <button className="bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all">
          Preview Homepage Layout
        </button>
      </div>
    </div>
  );
}
