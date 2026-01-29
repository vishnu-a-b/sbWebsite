'use client';

import { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle, Eye } from 'lucide-react';

interface Donation {
  _id: string;
  donorName: string;
  email: string;
  phone: string;
  amount: number;
  currency: string;
  donationType: string;
  offlinePaymentMethod: string;
  notes?: string;
  createdAt: string;
  addedBy?: { username: string };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export default function PendingApprovalsPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [selectedDonation, setSelectedDonation] = useState<Donation | null>(null);
  const [rejectReason, setRejectReason] = useState('');
  const [showRejectModal, setShowRejectModal] = useState(false);

  const fetchPending = async () => {
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('admin_token='))?.split('=')[1];
      const res = await fetch(`${API_URL}/api/donation/pending-approvals`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setDonations(data.donations);
      }
    } catch (error) {
      console.error('Failed to fetch pending approvals:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const handleApprove = async (id: string) => {
    setActionLoading(id);
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('admin_token='))?.split('=')[1];
      const res = await fetch(`${API_URL}/api/donation/${id}/approve`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setDonations(donations.filter(d => d._id !== id));
      }
    } catch (error) {
      console.error('Failed to approve:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleReject = async () => {
    if (!selectedDonation || !rejectReason) return;
    setActionLoading(selectedDonation._id);
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('admin_token='))?.split('=')[1];
      const res = await fetch(`${API_URL}/api/donation/${selectedDonation._id}/reject`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ reason: rejectReason }),
      });
      const data = await res.json();
      if (data.success) {
        setDonations(donations.filter(d => d._id !== selectedDonation._id));
        setShowRejectModal(false);
        setSelectedDonation(null);
        setRejectReason('');
      }
    } catch (error) {
      console.error('Failed to reject:', error);
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
          <Clock className="w-6 h-6 text-yellow-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pending Approvals</h1>
          <p className="text-gray-600">Review and approve offline donations</p>
        </div>
      </div>

      {loading ? (
        <div className="bg-white rounded-xl shadow-sm border p-8 text-center text-gray-500">
          Loading...
        </div>
      ) : donations.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">All caught up!</h3>
          <p className="text-gray-600">No pending donations to review.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {donations.map((donation) => (
            <div key={donation._id} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{donation.donorName}</h3>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                      Pending
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Amount</p>
                      <p className="font-semibold text-gray-900">{donation.currency} {donation.amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Payment Method</p>
                      <p className="font-medium text-gray-900 capitalize">{donation.offlinePaymentMethod.replace('_', ' ')}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Type</p>
                      <p className="font-medium text-gray-900 capitalize">{donation.donationType}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Added By</p>
                      <p className="font-medium text-gray-900">{donation.addedBy?.username || 'N/A'}</p>
                    </div>
                  </div>
                  {donation.notes && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">{donation.notes}</p>
                    </div>
                  )}
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleApprove(donation._id)}
                    disabled={actionLoading === donation._id}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Approve
                  </button>
                  <button
                    onClick={() => {
                      setSelectedDonation(donation);
                      setShowRejectModal(true);
                    }}
                    disabled={actionLoading === donation._id}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
                  >
                    <XCircle className="w-4 h-4" />
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && selectedDonation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reject Donation</h3>
            <p className="text-gray-600 mb-4">
              Please provide a reason for rejecting {selectedDonation.donorName}&apos;s donation of {selectedDonation.currency} {selectedDonation.amount.toLocaleString()}.
            </p>
            <textarea
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary mb-4"
              rows={3}
              placeholder="Enter rejection reason..."
            />
            <div className="flex gap-3">
              <button
                onClick={handleReject}
                disabled={!rejectReason || actionLoading === selectedDonation._id}
                className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 disabled:opacity-50"
              >
                Confirm Reject
              </button>
              <button
                onClick={() => {
                  setShowRejectModal(false);
                  setSelectedDonation(null);
                  setRejectReason('');
                }}
                className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
