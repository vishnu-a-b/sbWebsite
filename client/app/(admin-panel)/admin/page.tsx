'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import {
  CreditCard,
  Users,
  Mail,
  TrendingUp,
  DollarSign,
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import RevealAnimation from '@/components/RevealAnimation';

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/stats')
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching stats:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center h-96">
          <div className="text-lg text-gray-600">Loading dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 to-secondary/10 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome to Shanthibhavan Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <RevealAnimation>
          <Card className="border-2 border-secondary/30 hover:border-secondary transition-all hover-lift shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-secondary/5">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Donations
              </CardTitle>
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                ₹<AnimatedCounter end={stats?.payments?.totalAmount || 0} />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {stats?.payments?.completed || 0} completed payments
              </p>
            </CardContent>
          </Card>
        </RevealAnimation>

        <RevealAnimation delay={0.1}>
          <Card className="border-2 border-secondary/30 hover:border-secondary transition-all hover-lift shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-secondary/5">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Volunteers
              </CardTitle>
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                <AnimatedCounter end={stats?.volunteers?.total || 0} />
              </div>
              <p className="text-xs text-gray-500 mt-1">Active volunteers</p>
            </CardContent>
          </Card>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <Card className="border-2 border-secondary/30 hover:border-secondary transition-all hover-lift shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-secondary/5">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Messages
              </CardTitle>
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                <AnimatedCounter end={stats?.contacts?.total || 0} />
              </div>
              <p className="text-xs text-gray-500 mt-1">Contact inquiries</p>
            </CardContent>
          </Card>
        </RevealAnimation>
      </div>

      {/* Recent Activity Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RevealAnimation delay={0.4}>
          <Card className="border-2 border-secondary/30 shadow-lg bg-white">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/10 border-b border-secondary/30">
              <CardTitle className="flex items-center gap-2 text-primary">
                <TrendingUp className="h-5 w-5" />
                Recent Donations
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <div className="text-5xl mb-4">📊</div>
                <p className="text-gray-600">Last 30 days</p>
                <p className="text-3xl font-bold text-primary mt-2">
                  {stats?.payments?.recent || 0} donations
                </p>
              </div>
            </CardContent>
          </Card>
        </RevealAnimation>

        <RevealAnimation delay={0.5}>
          <Card className="border-2 border-secondary/30 shadow-lg bg-white">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/10 border-b border-secondary/30">
              <CardTitle className="flex items-center gap-2 text-primary">
                <CreditCard className="h-5 w-5" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">UPI</span>
                  <span className="text-lg font-bold text-primary">40%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Bank Transfer</span>
                  <span className="text-lg font-bold text-primary">35%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Card</span>
                  <span className="text-lg font-bold text-primary">25%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </RevealAnimation>
      </div>
    </div>
  );
}
