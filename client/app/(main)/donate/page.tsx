'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import Link from "next/link";
import { Heart, Users, Target, Loader2, ArrowRight, Calendar, IndianRupee } from "lucide-react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface Campaign {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  description: string;
  image?: string;
  goalAmount: number;
  raisedAmount: number;
  donorCount: number;
  startDate: string;
  endDate?: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

function DonateContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const campaignSlug = searchParams.get('campaign');

  const [activeTab, setActiveTab] = useState(tabParam || 'general');
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loadingCampaigns, setLoadingCampaigns] = useState(true);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  // Phone states (separate for PhoneInput component)
  const [generalPhone, setGeneralPhone] = useState<string | undefined>();
  const [fellowshipPhone, setFellowshipPhone] = useState<string | undefined>();
  const [campaignPhone, setCampaignPhone] = useState<string | undefined>();

  // Form states
  const [generalForm, setGeneralForm] = useState({
    donorName: '',
    email: '',
    amount: '',
    panNumber: '',
    address: '',
    notes: ''
  });

  const [fellowshipForm, setFellowshipForm] = useState({
    subscriberName: '',
    email: '',
    amount: '',
    panNumber: '',
    address: ''
  });

  const [campaignForm, setCampaignForm] = useState({
    donorName: '',
    email: '',
    amount: '',
    panNumber: '',
    address: ''
  });

  useEffect(() => {
    fetchCampaigns();
  }, []);

  // Update active tab when URL param changes
  useEffect(() => {
    if (tabParam && ['general', 'fellowship', 'campaign'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  // Pre-select campaign from URL slug
  useEffect(() => {
    if (campaignSlug && campaigns.length > 0) {
      const campaign = campaigns.find(c => c.slug === campaignSlug);
      if (campaign) {
        setSelectedCampaign(campaign);
        setActiveTab('campaign');
      }
    }
  }, [campaignSlug, campaigns]);

  const fetchCampaigns = async () => {
    try {
      const res = await fetch(`${API_URL}/api/campaign/active`);
      const data = await res.json();
      if (data.success) {
        setCampaigns(data.campaigns);
      }
    } catch (error) {
      console.error('Failed to fetch campaigns:', error);
    } finally {
      setLoadingCampaigns(false);
    }
  };

  const handleGeneralDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/donation/initiate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...generalForm,
          phone: generalPhone || '',
          amount: parseFloat(generalForm.amount),
          donationType: 'general'
        })
      });
      const data = await res.json();
      if (data.success && data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        alert(data.error || 'Failed to initiate payment');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Failed to initiate payment');
    } finally {
      setLoading(false);
    }
  };

  const handleFellowshipDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // First create fellowship subscription
      const fellowshipRes = await fetch(`${API_URL}/api/fellowship`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subscriberName: fellowshipForm.subscriberName,
          email: fellowshipForm.email,
          phone: fellowshipPhone || '',
          monthlyAmount: parseFloat(fellowshipForm.amount),
          panNumber: fellowshipForm.panNumber,
          address: fellowshipForm.address
        })
      });
      const fellowshipData = await fellowshipRes.json();

      if (!fellowshipData.success) {
        alert(fellowshipData.error || 'Failed to create fellowship');
        setLoading(false);
        return;
      }

      // Then initiate payment
      const res = await fetch(`${API_URL}/api/donation/initiate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          donorName: fellowshipForm.subscriberName,
          email: fellowshipForm.email,
          phone: fellowshipPhone || '',
          amount: parseFloat(fellowshipForm.amount),
          panNumber: fellowshipForm.panNumber,
          address: fellowshipForm.address,
          donationType: 'fellowship',
          fellowshipId: fellowshipData.fellowship.id || fellowshipData.fellowship._id
        })
      });
      const data = await res.json();
      if (data.success && data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        alert(data.error || 'Failed to initiate payment');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Failed to initiate payment');
    } finally {
      setLoading(false);
    }
  };

  const handleCampaignDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCampaign) {
      alert('Please select a campaign');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/donation/initiate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...campaignForm,
          phone: campaignPhone || '',
          amount: parseFloat(campaignForm.amount),
          donationType: 'campaign',
          campaignId: selectedCampaign._id
        })
      });
      const data = await res.json();
      if (data.success && data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        alert(data.error || 'Failed to initiate payment');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Failed to initiate payment');
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
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-primary/90 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Support Our Cause</h1>
        <p className="text-white/90 max-w-2xl mx-auto px-4">
          Our income is only from donations, not from services. Help us keep Shanthibhavan a "No-Bill" hospital.
        </p>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          {/* Introduction */}
          <div className="mb-8 md:mb-12 text-center space-y-4">
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-secondary mx-auto" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary">A Light of Compassion</h2>
            <p className="text-gray-800 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              Shanthibhavan runs entirely on the goodwill of generous hearts like yours. We do not charge for any of our services.
              From specialized medical care to daily food and accommodation for patients and bystanders, everything is free.
            </p>
          </div>

          {/* Donation Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="general" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">General</span>
              </TabsTrigger>
              <TabsTrigger value="fellowship" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Fellowship</span>
              </TabsTrigger>
              <TabsTrigger value="campaign" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span className="hidden sm:inline">Campaign</span>
              </TabsTrigger>
            </TabsList>

            {/* General Donation */}
            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    One-Time Donation
                  </CardTitle>
                  <CardDescription>
                    Make a one-time contribution to support our mission. Every rupee helps provide free healthcare to those in need.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleGeneralDonation} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Full Name *</label>
                        <Input
                          required
                          value={generalForm.donorName}
                          onChange={(e) => setGeneralForm({ ...generalForm, donorName: e.target.value })}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email *</label>
                        <Input
                          type="email"
                          required
                          value={generalForm.email}
                          onChange={(e) => setGeneralForm({ ...generalForm, email: e.target.value })}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone</label>
                      <PhoneInput
                        international
                        defaultCountry="IN"
                        value={generalPhone}
                        onChange={setGeneralPhone}
                        className="phone-input-custom"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">PAN Number (for 80G receipt)</label>
                        <Input
                          value={generalForm.panNumber}
                          onChange={(e) => setGeneralForm({ ...generalForm, panNumber: e.target.value.toUpperCase() })}
                          placeholder="ABCDE1234F"
                          maxLength={10}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <Input
                          value={generalForm.address}
                          onChange={(e) => setGeneralForm({ ...generalForm, address: e.target.value })}
                          placeholder="Your complete address"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Amount (INR) *</label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <Input
                          type="number"
                          required
                          min="1"
                          value={generalForm.amount}
                          onChange={(e) => setGeneralForm({ ...generalForm, amount: e.target.value })}
                          placeholder="Enter amount"
                          className="pl-9"
                        />
                      </div>
                      <div className="flex gap-2 mt-2">
                        {[500, 1000, 2500, 5000].map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => setGeneralForm({ ...generalForm, amount: amt.toString() })}
                            className="px-3 py-1 text-sm border rounded-md hover:bg-primary hover:text-white transition-colors"
                          >
                            {formatCurrency(amt)}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Notes (optional)</label>
                      <Input
                        value={generalForm.notes}
                        onChange={(e) => setGeneralForm({ ...generalForm, notes: e.target.value })}
                        placeholder="Any message or dedication"
                      />
                    </div>
                    <Button type="submit" disabled={loading} className="w-full" size="lg">
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Donate Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Fellowship Donation */}
            <TabsContent value="fellowship">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Fellowship Program
                  </CardTitle>
                  <CardDescription>
                    Join our fellowship program with a monthly contribution. Your regular support helps us plan and sustain our services better.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-secondary/20 border border-secondary/50 p-4 rounded-lg mb-6">
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                      <Calendar className="w-4 h-4" />
                      Monthly Giving Benefits
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6 list-disc">
                      <li>Predictable support helps us plan long-term programs</li>
                      <li>Receive monthly updates on how your contribution helps</li>
                      <li>Special recognition in our annual report</li>
                      <li>80G tax exemption certificate for each payment</li>
                    </ul>
                  </div>
                  <form onSubmit={handleFellowshipDonation} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Full Name *</label>
                        <Input
                          required
                          value={fellowshipForm.subscriberName}
                          onChange={(e) => setFellowshipForm({ ...fellowshipForm, subscriberName: e.target.value })}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email *</label>
                        <Input
                          type="email"
                          required
                          value={fellowshipForm.email}
                          onChange={(e) => setFellowshipForm({ ...fellowshipForm, email: e.target.value })}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone *</label>
                      <PhoneInput
                        international
                        defaultCountry="IN"
                        value={fellowshipPhone}
                        onChange={setFellowshipPhone}
                        className="phone-input-custom"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">PAN Number *</label>
                        <Input
                          required
                          value={fellowshipForm.panNumber}
                          onChange={(e) => setFellowshipForm({ ...fellowshipForm, panNumber: e.target.value.toUpperCase() })}
                          placeholder="ABCDE1234F"
                          maxLength={10}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <Input
                          value={fellowshipForm.address}
                          onChange={(e) => setFellowshipForm({ ...fellowshipForm, address: e.target.value })}
                          placeholder="Your complete address"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Monthly Amount (INR) *</label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <Input
                          type="number"
                          required
                          min="100"
                          value={fellowshipForm.amount}
                          onChange={(e) => setFellowshipForm({ ...fellowshipForm, amount: e.target.value })}
                          placeholder="Enter monthly amount"
                          className="pl-9"
                        />
                      </div>
                      <div className="flex gap-2 mt-2">
                        {[500, 1000, 2000, 5000].map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => setFellowshipForm({ ...fellowshipForm, amount: amt.toString() })}
                            className="px-3 py-1 text-sm border rounded-md hover:bg-primary hover:text-white transition-colors"
                          >
                            {formatCurrency(amt)}/mo
                          </button>
                        ))}
                      </div>
                    </div>
                    <Button type="submit" disabled={loading} className="w-full" size="lg">
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Start Fellowship
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Campaign Donation */}
            <TabsContent value="campaign">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Donation Campaigns
                  </CardTitle>
                  <CardDescription>
                    Support our active campaigns and help us reach specific goals for important initiatives.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {loadingCampaigns ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    </div>
                  ) : campaigns.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Target className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No active campaigns at the moment.</p>
                      <p className="text-sm mt-2">Please check back later or make a general donation.</p>
                    </div>
                  ) : (
                    <>
                      {/* Campaign Selection */}
                      <div className="space-y-4 mb-6">
                        <label className="block text-sm font-medium">Select a Campaign *</label>
                        <div className="grid gap-4">
                          {campaigns.map((campaign) => (
                            <div
                              key={campaign._id}
                              onClick={() => setSelectedCampaign(campaign)}
                              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                                selectedCampaign?._id === campaign._id
                                  ? 'border-primary bg-primary/5 ring-2 ring-primary'
                                  : 'hover:border-gray-400'
                              }`}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold text-lg">{campaign.title}</h4>
                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                              </div>
                              {campaign.shortDescription && (
                                <p className="text-sm text-gray-600 mb-3">{campaign.shortDescription}</p>
                              )}
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-gray-600">{formatCurrency(campaign.raisedAmount)} raised</span>
                                  <span className="font-medium">{formatCurrency(campaign.goalAmount)} goal</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-primary h-2 rounded-full transition-all"
                                    style={{ width: `${getProgressPercentage(campaign.raisedAmount, campaign.goalAmount)}%` }}
                                  />
                                </div>
                                <div className="flex justify-between text-xs text-gray-500">
                                  <span>{getProgressPercentage(campaign.raisedAmount, campaign.goalAmount)}% funded</span>
                                  <span>{campaign.donorCount} donors</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Donation Form */}
                      {selectedCampaign && (
                        <form onSubmit={handleCampaignDonation} className="space-y-4 border-t pt-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-1">Full Name *</label>
                              <Input
                                required
                                value={campaignForm.donorName}
                                onChange={(e) => setCampaignForm({ ...campaignForm, donorName: e.target.value })}
                                placeholder="Enter your full name"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Email *</label>
                              <Input
                                type="email"
                                required
                                value={campaignForm.email}
                                onChange={(e) => setCampaignForm({ ...campaignForm, email: e.target.value })}
                                placeholder="your@email.com"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Phone</label>
                            <PhoneInput
                              international
                              defaultCountry="IN"
                              value={campaignPhone}
                              onChange={setCampaignPhone}
                              className="phone-input-custom"
                            />
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-1">PAN Number (for 80G receipt)</label>
                              <Input
                                value={campaignForm.panNumber}
                                onChange={(e) => setCampaignForm({ ...campaignForm, panNumber: e.target.value.toUpperCase() })}
                                placeholder="ABCDE1234F"
                                maxLength={10}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1">Address</label>
                              <Input
                                value={campaignForm.address}
                                onChange={(e) => setCampaignForm({ ...campaignForm, address: e.target.value })}
                                placeholder="Your complete address"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Amount (INR) *</label>
                            <div className="relative">
                              <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                              <Input
                                type="number"
                                required
                                min="1"
                                value={campaignForm.amount}
                                onChange={(e) => setCampaignForm({ ...campaignForm, amount: e.target.value })}
                                placeholder="Enter amount"
                                className="pl-9"
                              />
                            </div>
                            <div className="flex gap-2 mt-2">
                              {[500, 1000, 2500, 5000].map((amt) => (
                                <button
                                  key={amt}
                                  type="button"
                                  onClick={() => setCampaignForm({ ...campaignForm, amount: amt.toString() })}
                                  className="px-3 py-1 text-sm border rounded-md hover:bg-primary hover:text-white transition-colors"
                                >
                                  {formatCurrency(amt)}
                                </button>
                              ))}
                            </div>
                          </div>
                          <Button type="submit" disabled={loading} className="w-full" size="lg">
                            {loading ? (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Processing...
                              </>
                            ) : (
                              <>
                                Donate to {selectedCampaign.title}
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </>
                            )}
                          </Button>
                        </form>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Benevity CTA */}
          <div className="mt-12 bg-secondary/20 border border-secondary/50 p-8 rounded-xl text-center space-y-4">
            <h3 className="text-xl font-bold text-primary">Corporate Giving?</h3>
            <p className="text-primary/80">
              We are registered on Benevity! If your company uses Benevity for corporate giving or matching donations, you can support us there.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/benevity">Learn About Benevity</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function DonatePage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen bg-white items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p className="mt-4 text-gray-600">Loading donation options...</p>
      </div>
    }>
      <DonateContent />
    </Suspense>
  );
}
