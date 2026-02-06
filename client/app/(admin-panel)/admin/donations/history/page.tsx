'use client';

import { useState, useEffect } from 'react';
import { History, Download, Filter } from 'lucide-react';

interface Donation {
  _id: string;
  donorName: string;
  email: string;
  amount: number;
  currency: string;
  donationType: string;
  offlinePaymentMethod?: string;
  approvalStatus: string;
  paymentStatus: string;
  receiptNumber?: string;
  createdAt: string;
  addedBy?: { username: string };
  approvedBy?: { username: string };
}

const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

export default function DonationHistoryPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ approvalStatus: '' });
  const [pagination, setPagination] = useState({ page: 1, total: 0, pages: 0 });

  const fetchHistory = async () => {
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('admin_token='))?.split('=')[1];
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: '20',
        ...(filter.approvalStatus && { approvalStatus: filter.approvalStatus }),
      });

      const res = await fetch(`${API_URL}/api/donation/offline/history?${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (data.success) {
        setDonations(data.donations);
        setPagination(data.pagination);
      }
    } catch (error) {
      console.error('Failed to fetch history:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [pagination.page, filter]);

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      APPROVED: 'bg-green-100 text-green-800',
      REJECTED: 'bg-red-100 text-red-800',
      PENDING: 'bg-yellow-100 text-yellow-800',
    };
    return styles[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <History className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Offline Donation History</h1>
            <p className="text-gray-600">Track all offline payment records</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
        <div className="flex items-center gap-4">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={filter.approvalStatus}
            onChange={(e) => setFilter({ ...filter, approvalStatus: e.target.value })}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
          >
            <option value="">All Status</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
            <option value="PENDING">Pending</option>
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
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Receipt #</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Donor</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Method</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Added By</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {donations.map((donation) => (
                <tr key={donation._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono text-sm text-gray-900">
                    {donation.receiptNumber || '-'}
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{donation.donorName}</p>
                    <p className="text-sm text-gray-500">{donation.email}</p>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {donation.currency} {donation.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 capitalize text-gray-700">
                    {donation.offlinePaymentMethod?.replace('_', ' ') || '-'}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(donation.approvalStatus)}`}>
                      {donation.approvalStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {donation.addedBy?.username || '-'}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {new Date(donation.createdAt).toLocaleDateString('en-IN')}
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
              Page {pagination.page} of {pagination.pages}
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
