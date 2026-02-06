'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Target, ArrowLeft, Save, Loader2, Trash2 } from 'lucide-react';

const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

interface Campaign {
  _id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  image?: string;
  goalAmount: number;
  raisedAmount: number;
  donorCount: number;
  status: string;
  startDate: string;
  endDate?: string;
  isFeatured: boolean;
}

export default function EditCampaignPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [form, setForm] = useState({
    title: '',
    slug: '',
    description: '',
    shortDescription: '',
    image: '',
    goalAmount: '',
    startDate: '',
    endDate: '',
    isFeatured: false
  });

  useEffect(() => {
    fetchCampaign();
  }, [id]);

  const fetchCampaign = async () => {
    try {
      const res = await fetch(`${API_URL}/api/campaign/${id}`, {
        credentials: 'include'
      });
      const data = await res.json();
      if (data.success) {
        setCampaign(data.campaign);
        setForm({
          title: data.campaign.title,
          slug: data.campaign.slug,
          description: data.campaign.description,
          shortDescription: data.campaign.shortDescription || '',
          image: data.campaign.image || '',
          goalAmount: data.campaign.goalAmount.toString(),
          startDate: new Date(data.campaign.startDate).toISOString().split('T')[0],
          endDate: data.campaign.endDate ? new Date(data.campaign.endDate).toISOString().split('T')[0] : '',
          isFeatured: data.campaign.isFeatured
        });
      }
    } catch (error) {
      console.error('Failed to fetch campaign:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(`${API_URL}/api/campaign/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          ...form,
          goalAmount: parseFloat(form.goalAmount),
          endDate: form.endDate || undefined
        })
      });

      const data = await res.json();
      if (data.success) {
        router.push('/admin/campaigns');
      } else {
        alert(data.error || 'Failed to update campaign');
      }
    } catch (error) {
      console.error('Failed to update campaign:', error);
      alert('Failed to update campaign');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this campaign? This action cannot be undone.')) {
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/campaign/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      const data = await res.json();
      if (data.success) {
        router.push('/admin/campaigns');
      } else {
        alert(data.error || 'Failed to delete campaign');
      }
    } catch (error) {
      console.error('Failed to delete campaign:', error);
      alert('Failed to delete campaign');
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center min-h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!campaign) {
    return (
      <div className="p-6">
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">
          Campaign not found
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <Link
          href="/admin/campaigns"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Campaigns
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Target className="w-7 h-7 text-primary" />
          Edit Campaign
        </h1>
        <p className="text-gray-600 mt-1">Update campaign details</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Campaign Title *
              </label>
              <input
                type="text"
                required
                value={form.title}
                onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL Slug *
              </label>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">/donate?campaign=</span>
                <input
                  type="text"
                  required
                  value={form.slug}
                  onChange={(e) => setForm(prev => ({ ...prev, slug: e.target.value }))}
                  className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </div>

            {/* Short Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Short Description
              </label>
              <input
                type="text"
                value={form.shortDescription}
                onChange={(e) => setForm(prev => ({ ...prev, shortDescription: e.target.value }))}
                maxLength={200}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <p className="text-xs text-gray-500 mt-1">
                {form.shortDescription.length}/200 characters
              </p>
            </div>

            {/* Full Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Description *
              </label>
              <textarea
                required
                value={form.description}
                onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="url"
                value={form.image}
                onChange={(e) => setForm(prev => ({ ...prev, image: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            {/* Goal Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Goal Amount (INR) *
              </label>
              <input
                type="number"
                required
                min="1"
                value={form.goalAmount}
                onChange={(e) => setForm(prev => ({ ...prev, goalAmount: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            {/* Dates */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date *
                </label>
                <input
                  type="date"
                  required
                  value={form.startDate}
                  onChange={(e) => setForm(prev => ({ ...prev, startDate: e.target.value }))}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date (optional)
                </label>
                <input
                  type="date"
                  value={form.endDate}
                  onChange={(e) => setForm(prev => ({ ...prev, endDate: e.target.value }))}
                  min={form.startDate}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </div>

            {/* Featured */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="isFeatured"
                checked={form.isFeatured}
                onChange={(e) => setForm(prev => ({ ...prev, isFeatured: e.target.checked }))}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="isFeatured" className="text-sm text-gray-700">
                Feature this campaign
              </label>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save Changes
                  </>
                )}
              </button>
              <Link
                href="/admin/campaigns"
                className="px-6 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Campaign Stats */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Campaign Stats</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <span className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium ${
                  campaign.status === 'active' ? 'bg-green-100 text-green-700' :
                  campaign.status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
                  campaign.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                  campaign.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                </span>
              </div>

              <div>
                <p className="text-sm text-gray-600">Amount Raised</p>
                <p className="text-xl font-bold text-green-600">
                  {formatCurrency(campaign.raisedAmount)}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Total Donors</p>
                <p className="text-xl font-bold text-gray-900">{campaign.donorCount}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Progress</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${Math.min(
                        Math.round((campaign.raisedAmount / campaign.goalAmount) * 100),
                        100
                      )}%`
                    }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {Math.round((campaign.raisedAmount / campaign.goalAmount) * 100)}% of goal
                </p>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          {campaign.donorCount === 0 && (
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="font-semibold text-red-700 mb-2">Danger Zone</h3>
              <p className="text-sm text-red-600 mb-4">
                Deleting this campaign is permanent and cannot be undone.
              </p>
              <button
                onClick={handleDelete}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors w-full justify-center"
              >
                <Trash2 className="w-4 h-4" />
                Delete Campaign
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
