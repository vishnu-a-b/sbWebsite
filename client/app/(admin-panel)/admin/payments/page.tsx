'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Plus, Search, Download, Filter } from 'lucide-react';
import RevealAnimation from '@/components/RevealAnimation';

export default function PaymentsPage() {
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const res = await fetch('/api/payment');
      const data = await res.json();
      setPayments(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching payments:', error);
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    const colors = {
      completed: 'bg-secondary/30 text-primary border border-secondary',
      pending: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
      failed: 'bg-red-100 text-red-800 border border-red-200',
      refunded: 'bg-gray-100 text-gray-800 border border-gray-200',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800 border border-gray-200';
  };

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch = payment.donorName
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
      payment.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-96">
          <div className="text-lg text-gray-600">Loading payments...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 to-secondary/10 min-h-screen">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Payments & Donations</h1>
            <p className="text-gray-600">Track and manage all transactions</p>
          </div>
          <Button className="gap-2 bg-primary hover:bg-primary/90 shadow-lg">
            <Plus className="w-4 h-4" />
            Add Payment
          </Button>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60" />
            <input
              type="text"
              placeholder="Search by donor name or email..."
              className="w-full pl-10 pr-4 py-3 border-2 border-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-3 border-2 border-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white shadow-sm"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="refunded">Refunded</option>
          </select>
          <Button variant="outline" className="gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      <RevealAnimation>
        <Card className="border-2 border-secondary/30 shadow-xl bg-white">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/10 border-b border-secondary/30">
            <CardTitle className="text-primary">Payment Records</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/20 border-b-2 border-secondary/40">
                    <th className="text-left py-4 px-4 font-semibold text-primary">
                      Donor Name
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-primary">
                      Email
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-primary">
                      Amount
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-primary">
                      Method
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-primary">
                      Status
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-primary">
                      Date
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-primary">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPayments.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-12 text-gray-500">
                        <div className="flex flex-col items-center gap-3">
                          <div className="text-4xl">💳</div>
                          <p>No payments found</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredPayments.map((payment, index) => (
                      <tr key={payment._id} className={`border-b border-secondary/20 hover:bg-secondary/10 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-secondary/5'}`}>
                        <td className="py-4 px-4 font-medium text-gray-900">{payment.donorName}</td>
                        <td className="py-4 px-4 text-gray-600">{payment.email}</td>
                        <td className="py-4 px-4 font-bold text-primary text-lg">
                          ₹{payment.amount.toLocaleString()}
                        </td>
                        <td className="py-4 px-4 capitalize text-gray-700">
                          <span className="px-3 py-1 bg-secondary/20 rounded-lg text-sm font-medium">
                            {payment.paymentMethod}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusColor(
                              payment.status
                            )}`}
                          >
                            {payment.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-600">
                          {new Date(payment.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4">
                          <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </RevealAnimation>
    </div>
  );
}
