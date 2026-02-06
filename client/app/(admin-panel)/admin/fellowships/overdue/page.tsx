'use client';

import { useState, useEffect } from 'react';
import { Clock, AlertTriangle, Mail, Phone } from 'lucide-react';

interface Fellowship {
  _id: string;
  subscriberName: string;
  email: string;
  phone: string;
  monthlyAmount: number;
  lastPaymentDate?: string;
  nextPaymentDue?: string;
  totalPaid: number;
  totalPayments: number;
}

const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

export default function OverduePaymentsPage() {
  const [fellowships, setFellowships] = useState<Fellowship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOverdue = async () => {
      try {
        const token = document.cookie.split('; ').find(row => row.startsWith('admin_token='))?.split('=')[1];
        const res = await fetch(`${API_URL}/api/fellowship/overdue`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.success) {
          setFellowships(data.fellowships);
        }
      } catch (error) {
        console.error('Failed to fetch overdue:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchOverdue();
  }, []);

  const getDaysOverdue = (dueDate: string) => {
    const due = new Date(dueDate);
    const now = new Date();
    const diff = Math.floor((now.getTime() - due.getTime()) / (1000 * 60 * 60 * 24));
    return diff;
  };

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
          <Clock className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Overdue Payments</h1>
          <p className="text-gray-600">Fellowships with pending monthly payments</p>
        </div>
      </div>

      {loading ? (
        <div className="bg-white rounded-xl shadow-sm border p-8 text-center text-gray-500">
          Loading...
        </div>
      ) : fellowships.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Overdue Payments</h3>
          <p className="text-gray-600">All fellowship payments are up to date.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {fellowships.map((fellowship) => {
            const daysOverdue = fellowship.nextPaymentDue ? getDaysOverdue(fellowship.nextPaymentDue) : 0;
            return (
              <div key={fellowship._id} className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{fellowship.subscriberName}</h3>
                      <span className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                        <AlertTriangle className="w-3 h-3" />
                        {daysOverdue} days overdue
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        {fellowship.email}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        {fellowship.phone}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Monthly Amount</p>
                        <p className="font-semibold text-gray-900">INR {fellowship.monthlyAmount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Total Paid</p>
                        <p className="font-medium text-gray-900">INR {fellowship.totalPaid.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Payments Made</p>
                        <p className="font-medium text-gray-900">{fellowship.totalPayments}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Due Date</p>
                        <p className="font-medium text-red-600">
                          {fellowship.nextPaymentDue
                            ? new Date(fellowship.nextPaymentDue).toLocaleDateString('en-IN')
                            : '-'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
