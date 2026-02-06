'use client';

import { useState, useEffect } from 'react';
import { Wallet, TrendingUp, CheckCircle, XCircle, CreditCard, Heart } from 'lucide-react';

interface Stats {
  totalDonations: number;
  successfulDonations: number;
  totalAmount: number;
  generalAmount: number;
  fellowshipAmount: number;
}

const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

export default function DonationStatsPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = document.cookie.split('; ').find(row => row.startsWith('admin_token='))?.split('=')[1];
        const res = await fetch(`${API_URL}/api/donation/stats`, {
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
          <Wallet className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Donation Statistics</h1>
          <p className="text-gray-600">Overview of all donation activities</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Amount */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
          <p className="text-green-100 text-sm">Total Amount Collected</p>
          <p className="text-3xl font-bold mt-1">₹{(stats?.totalAmount || 0).toLocaleString()}</p>
        </div>

        {/* Successful Donations */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">Successful Donations</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{stats?.successfulDonations || 0}</p>
          <p className="text-sm text-gray-500 mt-2">out of {stats?.totalDonations || 0} total</p>
        </div>

        {/* Success Rate */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">Success Rate</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">
            {stats?.totalDonations ? Math.round((stats.successfulDonations / stats.totalDonations) * 100) : 0}%
          </p>
        </div>

        {/* General Donations */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">General Donations</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">₹{(stats?.generalAmount || 0).toLocaleString()}</p>
        </div>

        {/* Fellowship Donations */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-pink-600" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">Fellowship Donations</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">₹{(stats?.fellowshipAmount || 0).toLocaleString()}</p>
        </div>

        {/* Average Donation */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">Average Donation</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">
            ₹{stats?.successfulDonations ? Math.round(stats.totalAmount / stats.successfulDonations).toLocaleString() : 0}
          </p>
        </div>
      </div>
    </div>
  );
}
