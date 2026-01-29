'use client';

import { useState, useEffect } from 'react';
import { BarChart3, Heart, Users, TrendingUp, Pause, XCircle } from 'lucide-react';

interface Stats {
  byStatus: Record<string, { count: number; totalMonthlyAmount: number }>;
  totalFellowships: number;
  totalCollected: number;
  totalPayments: number;
  avgMonthlyAmount: number;
  activeMonthlyRevenue: number;
  activeFellowships: number;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export default function FellowshipStatsPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = document.cookie.split('; ').find(row => row.startsWith('admin_token='))?.split('=')[1];
        const res = await fetch(`${API_URL}/api/fellowship/stats`, {
          headers: { Authorization: `Bearer ${token}` },
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
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <div className="text-center text-gray-500">Loading statistics...</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Fellowship Statistics</h1>
          <p className="text-gray-600">Overview of fellowship program</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Monthly Revenue */}
        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
          <p className="text-pink-100 text-sm">Active Monthly Revenue</p>
          <p className="text-3xl font-bold mt-1">₹{(stats?.activeMonthlyRevenue || 0).toLocaleString()}</p>
          <p className="text-pink-200 text-sm mt-2">from {stats?.activeFellowships || 0} active fellowships</p>
        </div>

        {/* Total Collected */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
          </div>
          <p className="text-green-100 text-sm">Total Collected</p>
          <p className="text-3xl font-bold mt-1">₹{(stats?.totalCollected || 0).toLocaleString()}</p>
          <p className="text-green-200 text-sm mt-2">{stats?.totalPayments || 0} payments received</p>
        </div>

        {/* Total Fellowships */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">Total Fellowships</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{stats?.totalFellowships || 0}</p>
        </div>

        {/* Active */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">Active</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{stats?.byStatus?.active?.count || 0}</p>
          <p className="text-sm text-gray-500 mt-2">
            ₹{(stats?.byStatus?.active?.totalMonthlyAmount || 0).toLocaleString()}/month
          </p>
        </div>

        {/* Paused */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Pause className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">Paused</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{stats?.byStatus?.paused?.count || 0}</p>
        </div>

        {/* Cancelled */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">Cancelled</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{stats?.byStatus?.cancelled?.count || 0}</p>
        </div>

        {/* Average Monthly */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">Average Monthly Amount</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">₹{(stats?.avgMonthlyAmount || 0).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
