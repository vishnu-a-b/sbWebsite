'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Target,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  MoreVertical,
  CheckCircle,
  Clock,
  XCircle,
  PauseCircle
} from 'lucide-react';

interface Campaign {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  goalAmount: number;
  raisedAmount: number;
  donorCount: number;
  status: string;
  isFeatured: boolean;
  startDate: string;
  endDate?: string;
  createdAt: string;
}

const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

const statusConfig: Record<string, { label: string; color: string; icon: any }> = {
  draft: { label: 'Draft', color: 'bg-gray-100 text-gray-700', icon: Clock },
  active: { label: 'Active', color: 'bg-green-100 text-green-700', icon: CheckCircle },
  paused: { label: 'Paused', color: 'bg-yellow-100 text-yellow-700', icon: PauseCircle },
  completed: { label: 'Completed', color: 'bg-blue-100 text-blue-700', icon: CheckCircle },
  cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-700', icon: XCircle }
};

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [pagination, setPagination] = useState({ page: 1, limit: 20, total: 0, pages: 0 });

  useEffect(() => {
    fetchCampaigns();
  }, [pagination.page, statusFilter]);

  const fetchCampaigns = async () => {
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString()
      });
      if (statusFilter) params.append('status', statusFilter);

      const res = await fetch(`${API_URL}/api/campaign?${params}`, {
        credentials: 'include'
      });
      const data = await res.json();
      if (data.success) {
        setCampaigns(data.campaigns);
        setPagination(prev => ({ ...prev, ...data.pagination }));
      }
    } catch (error) {
      console.error('Failed to fetch campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`${API_URL}/api/campaign/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ status })
      });
      const data = await res.json();
      if (data.success) {
        fetchCampaigns();
      } else {
        alert(data.error || 'Failed to update status');
      }
    } catch (error) {
      console.error('Failed to update status:', error);
      alert('Failed to update status');
    }
  };

  const deleteCampaign = async (id: string) => {
    if (!confirm('Are you sure you want to delete this campaign?')) return;

    try {
      const res = await fetch(`${API_URL}/api/campaign/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      const data = await res.json();
      if (data.success) {
        fetchCampaigns();
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

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min(Math.round((raised / goal) * 100), 100);
  };

  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Target className="w-7 h-7 text-primary" />
            Campaigns
          </h1>
          <p className="text-gray-600 mt-1">Manage donation campaigns</p>
        </div>
        <Link
          href="/admin/campaigns/create"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Create Campaign
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search campaigns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="">All Status</option>
              <option value="draft">Draft</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Campaigns Grid */}
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : filteredCampaigns.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <Target className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No campaigns found</h3>
          <p className="text-gray-500 mt-1">Create your first campaign to get started.</p>
          <Link
            href="/admin/campaigns/create"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            <Plus className="w-4 h-4" />
            Create Campaign
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredCampaigns.map((campaign) => {
            const status = statusConfig[campaign.status] || statusConfig.draft;
            const StatusIcon = status.icon;
            const progress = getProgressPercentage(campaign.raisedAmount, campaign.goalAmount);

            return (
              <div key={campaign._id} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{campaign.title}</h3>
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${status.color}`}>
                        <StatusIcon className="w-3 h-3" />
                        {status.label}
                      </span>
                      {campaign.isFeatured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    {campaign.shortDescription && (
                      <p className="text-gray-600 text-sm">{campaign.shortDescription}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/campaigns/${campaign._id}`}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="View/Edit"
                    >
                      <Edit className="w-4 h-4 text-gray-600" />
                    </Link>
                    <Link
                      href={`/donate?campaign=${campaign.slug}`}
                      target="_blank"
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="View on Website"
                    >
                      <Eye className="w-4 h-4 text-gray-600" />
                    </Link>
                    <div className="relative group">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4 text-gray-600" />
                      </button>
                      <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border py-1 hidden group-hover:block z-10">
                        {campaign.status === 'draft' && (
                          <button
                            onClick={() => updateStatus(campaign._id, 'active')}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-green-600"
                          >
                            Activate Campaign
                          </button>
                        )}
                        {campaign.status === 'active' && (
                          <>
                            <button
                              onClick={() => updateStatus(campaign._id, 'paused')}
                              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-yellow-600"
                            >
                              Pause Campaign
                            </button>
                            <button
                              onClick={() => updateStatus(campaign._id, 'completed')}
                              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-blue-600"
                            >
                              Mark Completed
                            </button>
                          </>
                        )}
                        {campaign.status === 'paused' && (
                          <button
                            onClick={() => updateStatus(campaign._id, 'active')}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-green-600"
                          >
                            Resume Campaign
                          </button>
                        )}
                        {campaign.donorCount === 0 && (
                          <button
                            onClick={() => deleteCampaign(campaign._id)}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-red-600"
                          >
                            Delete Campaign
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{formatCurrency(campaign.raisedAmount)} raised</span>
                    <span className="font-medium">{formatCurrency(campaign.goalAmount)} goal</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        progress >= 100 ? 'bg-green-500' : 'bg-primary'
                      }`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{progress}% funded</span>
                    <span>{campaign.donorCount} donors</span>
                  </div>
                </div>

                {/* Dates */}
                <div className="mt-4 pt-4 border-t flex items-center justify-between text-sm text-gray-500">
                  <span>Started: {new Date(campaign.startDate).toLocaleDateString()}</span>
                  {campaign.endDate && (
                    <span>Ends: {new Date(campaign.endDate).toLocaleDateString()}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {pagination.pages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
            disabled={pagination.page === 1}
            className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {pagination.page} of {pagination.pages}
          </span>
          <button
            onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
            disabled={pagination.page === pagination.pages}
            className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
