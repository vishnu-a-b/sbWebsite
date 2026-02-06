'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Heart, Target, Users, ArrowRight, IndianRupee } from 'lucide-react';
import RevealAnimation from '@/components/RevealAnimation';

interface Campaign {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  goalAmount: number;
  raisedAmount: number;
  donorCount: number;
  isFeatured: boolean;
}

const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

export default function DonationSection() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedCampaigns();
  }, []);

  const fetchFeaturedCampaigns = async () => {
    try {
      const res = await fetch(`${API_URL}/api/campaign/featured`);
      const data = await res.json();
      if (data.success) {
        setCampaigns(data.campaigns);
      }
    } catch (error) {
      console.error('Failed to fetch campaigns:', error);
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

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min(Math.round((raised / goal) * 100), 100);
  };

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        <RevealAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-primary font-semibold text-sm mb-4">
              <Heart className="w-4 h-4" />
              Support Our Mission
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
              Help Us Heal More Lives
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Your generosity enables us to provide free healthcare to those who need it most.
              Every contribution makes a difference.
            </p>
          </div>
        </RevealAnimation>

        {/* Donation Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* General Donation */}
          <RevealAnimation delay={0.1}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">One-Time Donation</h3>
              <p className="text-gray-600 mb-6">
                Make a single contribution to support our daily operations and patient care.
              </p>
              <Button asChild className="w-full rounded-full">
                <Link href="/donate">
                  Donate Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </RevealAnimation>

          {/* Fellowship */}
          <RevealAnimation delay={0.2}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMENDED
                </span>
              </div>
              <div className="w-14 h-14 bg-secondary/30 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fellowship Program</h3>
              <p className="text-gray-600 mb-6">
                Join our monthly giving program and become a sustaining supporter of our mission.
              </p>
              <Button asChild className="w-full rounded-full bg-primary">
                <Link href="/donate?tab=fellowship">
                  Join Fellowship
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </RevealAnimation>

          {/* Campaigns */}
          <RevealAnimation delay={0.3}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Active Campaigns</h3>
              <p className="text-gray-600 mb-6">
                Support specific initiatives and help us reach targeted goals for special projects.
              </p>
              <Button asChild variant="outline" className="w-full rounded-full border-2">
                <Link href="/donate?tab=campaign">
                  View Campaigns
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </RevealAnimation>
        </div>

        {/* Featured Campaigns */}
        {!loading && campaigns.length > 0 && (
          <RevealAnimation delay={0.4}>
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Featured Campaigns
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {campaigns.map((campaign) => {
                  const progress = getProgressPercentage(campaign.raisedAmount, campaign.goalAmount);
                  return (
                    <Link
                      key={campaign._id}
                      href={`/donate?tab=campaign&campaign=${campaign.slug}`}
                      className="group"
                    >
                      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                        <h4 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {campaign.title}
                        </h4>
                        {campaign.shortDescription && (
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {campaign.shortDescription}
                          </p>
                        )}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">
                              <IndianRupee className="w-3 h-3 inline" />
                              {formatCurrency(campaign.raisedAmount).replace('₹', '')} raised
                            </span>
                            <span className="font-medium text-primary">{progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Goal: {formatCurrency(campaign.goalAmount)}</span>
                            <span>{campaign.donorCount} donors</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </RevealAnimation>
        )}

        {/* Trust indicators */}
        <RevealAnimation delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-4">Trusted by thousands of donors</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">80G</div>
                <div className="text-xs text-gray-500">Tax Exemption</div>
              </div>
              <div className="w-px h-8 bg-gray-300" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-gray-500">Secure Payment</div>
              </div>
              <div className="w-px h-8 bg-gray-300" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-xs text-gray-500">Years of Service</div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
