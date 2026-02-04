'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Target,
  TrendingUp,
  Users,
  IndianRupee,
  CheckCircle,
  Clock,
  PauseCircle,
  XCircle,
  ArrowUpRight,
  BarChart3
} from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

interface CampaignStats {
  byStatus: Record<string, number>;
  totalCampaigns: number;
  totalRaised: number;
  totalDonors: number;
  totalGoal: number;
  activeCount: number;
  activeRaised: number;
  activeGoal: number;
  completionRate: number;
}

export default function CampaignStatsPage() {
  const [stats, setStats] = useState<CampaignStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch(`${API_URL}/api/campaign/stats`, {
        credentials: 'include'
      });
      const data = await res.json();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
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

  if (!stats) {
    return (
      <div className="p-6">
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">
          Failed to load statistics. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-primary" />
          Campaign Statistics
        </h1>
        <p className="text-gray-600 mt-1">Overview of all campaign performance</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <Link href="/admin/campaigns" className="text-blue-600 hover:text-blue-800">
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{stats.totalCampaigns}</h3>
          <p className="text-gray-600 text-sm mt-1">Total Campaigns</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <IndianRupee className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{formatCurrency(stats.totalRaised)}</h3>
          <p className="text-gray-600 text-sm mt-1">Total Raised</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{stats.totalDonors.toLocaleString()}</h3>
          <p className="text-gray-600 text-sm mt-1">Total Donors</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{stats.completionRate}%</h3>
          <p className="text-gray-600 text-sm mt-1">Overall Completion Rate</p>
        </div>
      </div>

      {/* Status Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaigns by Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-500" />
                <span className="font-medium">Draft</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                {stats.byStatus.draft || 0}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium text-green-700">Active</span>
              </div>
              <span className="text-xl font-bold text-green-700">
                {stats.byStatus.active || 0}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center gap-3">
                <PauseCircle className="w-5 h-5 text-yellow-500" />
                <span className="font-medium text-yellow-700">Paused</span>
              </div>
              <span className="text-xl font-bold text-yellow-700">
                {stats.byStatus.paused || 0}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="font-medium text-blue-700">Completed</span>
              </div>
              <span className="text-xl font-bold text-blue-700">
                {stats.byStatus.completed || 0}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="font-medium text-red-700">Cancelled</span>
              </div>
              <span className="text-xl font-bold text-red-700">
                {stats.byStatus.cancelled || 0}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Campaigns Progress</h3>
          {stats.activeCount === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Target className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No active campaigns</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stats.activeCount}
                </div>
                <p className="text-gray-600">Active Campaigns</p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress to Goal</span>
                    <span className="font-medium">
                      {Math.round((stats.activeRaised / stats.activeGoal) * 100) || 0}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all"
                      style={{
                        width: `${Math.min(
                          Math.round((stats.activeRaised / stats.activeGoal) * 100) || 0,
                          100
                        )}%`
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-700">
                      {formatCurrency(stats.activeRaised)}
                    </div>
                    <p className="text-sm text-green-600">Raised</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-700">
                      {formatCurrency(stats.activeGoal)}
                    </div>
                    <p className="text-sm text-blue-600">Goal</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overall Progress */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall Fundraising Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <IndianRupee className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-700">{formatCurrency(stats.totalRaised)}</div>
            <p className="text-sm text-green-600 mt-1">Total Raised</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-700">{formatCurrency(stats.totalGoal)}</div>
            <p className="text-sm text-blue-600 mt-1">Total Goal</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-700">
              {formatCurrency(stats.totalGoal - stats.totalRaised)}
            </div>
            <p className="text-sm text-purple-600 mt-1">Remaining</p>
          </div>
        </div>
      </div>
    </div>
  );
}
