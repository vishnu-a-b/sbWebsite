'use client';

import { useState, useEffect } from 'react';
import { Heart, Search, Eye, Pause, Play, XCircle } from 'lucide-react';
import Link from 'next/link';

interface Fellowship {
  _id: string;
  subscriberName: string;
  email: string;
  phone: string;
  monthlyAmount: number;
  currency: string;
  status: string;
  totalPaid: number;
  totalPayments: number;
  lastPaymentDate?: string;
  nextPaymentDue?: string;
  createdAt: string;
}

const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

export default function FellowshipsPage() {
  const [fellowships, setFellowships] = useState<Fellowship[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ status: '', search: '' });
  const [pagination, setPagination] = useState({ page: 1, total: 0, pages: 0 });

  const fetchFellowships = async () => {
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('admin_token='))?.split('=')[1];
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: '20',
        ...(filter.status && { status: filter.status }),
        ...(filter.search && { search: filter.search }),
      });

      const res = await fetch(`${API_URL}/api/fellowship?${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (data.success) {
        setFellowships(data.fellowships);
        setPagination(data.pagination);
      }
    } catch (error) {
      console.error('Failed to fetch fellowships:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFellowships();
  }, [pagination.page, filter.status]);

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      active: 'bg-green-100 text-green-800',
      paused: 'bg-yellow-100 text-yellow-800',
      cancelled: 'bg-red-100 text-red-800',
      completed: 'bg-gray-100 text-gray-800',
    };
    return styles[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
            <Heart className="w-6 h-6 text-pink-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">All Fellowships</h1>
            <p className="text-gray-600">Manage fellowship subscriptions</p>
          </div>
        </div>
        <Link
          href="/admin/fellowships/add"
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
        >
          + Add Fellowship
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
        <div className="flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, phone..."
              value={filter.search}
              onChange={(e) => setFilter({ ...filter, search: e.target.value })}
              onKeyDown={(e) => e.key === 'Enter' && fetchFellowships()}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <select
            value={filter.status}
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading...</div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Subscriber</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Monthly</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Total Paid</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Payments</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Next Due</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {fellowships.map((fellowship) => (
                <tr key={fellowship._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{fellowship.subscriberName}</p>
                    <p className="text-sm text-gray-500">{fellowship.email}</p>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {fellowship.currency} {fellowship.monthlyAmount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    {fellowship.currency} {fellowship.totalPaid.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {fellowship.totalPayments}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusBadge(fellowship.status)}`}>
                      {fellowship.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {fellowship.nextPaymentDue
                      ? new Date(fellowship.nextPaymentDue).toLocaleDateString('en-IN')
                      : '-'}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      <Link href={`/admin/fellowships/${fellowship._id}`} className="p-2 hover:bg-gray-100 rounded-lg">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="px-6 py-4 border-t flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Page {pagination.page} of {pagination.pages} ({pagination.total} total)
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                disabled={pagination.page === 1}
                className="px-4 py-2 border rounded-lg disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                disabled={pagination.page === pagination.pages}
                className="px-4 py-2 border rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
