'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff, Award as AwardIcon } from 'lucide-react';
import AwardForm from '@/components/admin/AwardForm';
import { getAwards, createAward, updateAward, deleteAward } from '@/app/actions/cms/awards';

interface Award {
  _id: string;
  title: string;
  awardingAuthority: string;
  year: number;
  description: string;
  image: string;
  priority: number;
  isActive: boolean;
  startDate: Date;
  expiryDate: Date;
  showOnFirstFace: boolean;
}

export default function AwardsAdminPage() {
  const [awards, setAwards] = useState<Award[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingAward, setEditingAward] = useState<Award | null>(null);

  useEffect(() => {
    fetchAwards();
  }, []);

  const fetchAwards = async () => {
    try {
      const data = await getAwards();
      setAwards(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching awards:', error);
      setLoading(false);
    }
  };

  const handleSave = async (data: any) => {
    try {
      if (editingAward) {
        await updateAward(editingAward._id, data);
      } else {
        await createAward(data);
      }
      setShowForm(false);
      setEditingAward(null);
      fetchAwards();
    } catch (error) {
      console.error('Error saving award:', error);
      alert('Failed to save award');
    }
  };

  const handleEdit = (award: Award) => {
    setEditingAward(award);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this award?')) return;
    try {
      await deleteAward(id);
      fetchAwards();
    } catch (error) {
      console.error('Error deleting award:', error);
      alert('Failed to delete award');
    }
  };

  return (
    <div className="p-8">
      {showForm && (
        <AwardForm
          award={editingAward}
          onClose={() => {
            setShowForm(false);
            setEditingAward(null);
          }}
          onSave={handleSave}
        />
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Awards & Recognitions</h1>
          <p className="text-gray-600 mt-1">Manage hospital awards and recognitions</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
        >
          <Plus className="w-5 h-5" />
          Add New Award
        </button>
      </div>

      {/* CMS Info Card */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-blue-900 mb-2">CMS Controls</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Awards display based on <strong>Year</strong> (newest first) and <strong>Priority</strong></li>
          <li>• Only <strong>Active</strong> awards within <strong>Start/Expiry dates</strong> are shown</li>
          <li>• Toggle "Show on First Face" to feature on homepage</li>
        </ul>
      </div>

      {/* Awards Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Priority</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Award</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Authority</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Year</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Homepage</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {loading ? (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                  Loading awards...
                </td>
              </tr>
            ) : awards.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                  No awards found. Click "Add New Award" to create one.
                </td>
              </tr>
            ) : (
              awards.map((award) => (
                <tr key={award._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-primary">{award.priority}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {award.image ? (
                        <img src={award.image} alt={award.title} className="w-12 h-12 rounded-lg object-cover" />
                      ) : (
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <AwardIcon className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                      <div>
                        <div className="font-medium text-gray-900">{award.title}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">{award.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{award.awardingAuthority}</td>
                  <td className="px-6 py-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {award.year}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {award.isActive ? (
                      <span className="flex items-center gap-1 text-green-600">
                        <Eye className="w-4 h-4" />
                        Active
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-gray-400">
                        <EyeOff className="w-4 h-4" />
                        Inactive
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {award.showOnFirstFace ? (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                        Featured
                      </span>
                    ) : (
                      <span className="text-gray-400 text-xs">Not Featured</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(award)}
                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4 text-blue-600" />
                      </button>
                      <button
                        onClick={() => handleDelete(award._id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
