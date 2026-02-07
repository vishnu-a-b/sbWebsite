'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { X, Heart, Loader2, IndianRupee, ArrowRight, Users, Target } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface Campaign {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  image?: string;
  goalAmount: number;
  raisedAmount: number;
  donorCount: number;
}

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaign: Campaign;
}

const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;

export default function DonationModal({ isOpen, onClose, campaign }: DonationModalProps) {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState<string | undefined>();
  const [form, setForm] = useState({
    donorName: '',
    email: '',
    amount: '',
    panNumber: '',
    address: ''
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

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

  // Helper function to redirect to BillDesk V2 payment page
  const redirectToPaymentPage = (paymentPageUrl: string, paymentData: { bdorderid: string; merchantid: string; rdata: string }) => {
    const formEl = document.createElement('form');
    formEl.method = 'POST';
    formEl.action = paymentPageUrl;

    const fields = [
      { name: 'bdorderid', value: paymentData.bdorderid },
      { name: 'merchantid', value: paymentData.merchantid },
      { name: 'rdata', value: paymentData.rdata },
    ];

    fields.forEach(field => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field.name;
      input.value = field.value;
      formEl.appendChild(input);
    });

    document.body.appendChild(formEl);
    formEl.submit();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/donation/initiate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          phone: phone || '',
          amount: parseFloat(form.amount),
          donationType: 'campaign',
          campaignId: campaign._id
        })
      });

      const data = await res.json();

      if (data.success && data.paymentPageUrl && data.paymentData) {
        // BillDesk V2: Redirect via form POST
        redirectToPaymentPage(data.paymentPageUrl, data.paymentData);
      } else {
        alert(data.error || 'Failed to initiate payment');
        setLoading(false);
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Failed to initiate payment. Please try again.');
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const progress = getProgressPercentage(campaign.raisedAmount, campaign.goalAmount);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 fade-in duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Campaign Header */}
        <div className="relative">
          {campaign.image ? (
            <div className="h-40 w-full overflow-hidden rounded-t-2xl">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          ) : (
            <div className="h-32 w-full bg-gradient-to-r from-primary to-primary/80 rounded-t-2xl" />
          )}

          <div className={`absolute ${campaign.image ? 'bottom-4' : 'bottom-4'} left-6 right-6`}>
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-4 h-4 text-white" />
              <span className="text-xs text-white/80 font-medium uppercase tracking-wider">Campaign</span>
            </div>
            <h2 className="text-xl font-bold text-white">{campaign.title}</h2>
          </div>
        </div>

        {/* Progress Section */}
        <div className="px-6 pt-4 pb-2">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">
                {formatCurrency(campaign.raisedAmount)} raised
              </span>
              <span className="font-semibold text-primary">{progress}% of goal</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Target className="w-3 h-3" />
                Goal: {formatCurrency(campaign.goalAmount)}
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Users className="w-3 h-3" />
                {campaign.donorCount} donors
              </div>
            </div>
          </div>
        </div>

        {/* Donation Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <Input
                required
                value={form.donorName}
                onChange={(e) => setForm({ ...form, donorName: e.target.value })}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <Input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <PhoneInput
              international
              defaultCountry="IN"
              value={phone}
              onChange={setPhone}
              className="phone-input-custom"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                PAN Number
              </label>
              <Input
                value={form.panNumber}
                onChange={(e) => setForm({ ...form, panNumber: e.target.value.toUpperCase() })}
                placeholder="For 80G receipt"
                maxLength={10}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <Input
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="Your address"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount (INR) *
            </label>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <Input
                type="number"
                required
                min="1"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                placeholder="Enter amount"
                className="pl-9"
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {[500, 1000, 2500, 5000, 10000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setForm({ ...form, amount: amt.toString() })}
                  className={`px-3 py-1.5 text-sm border rounded-lg transition-all ${
                    form.amount === amt.toString()
                      ? 'bg-primary text-white border-primary'
                      : 'hover:bg-primary/5 hover:border-primary'
                  }`}
                >
                  {formatCurrency(amt)}
                </button>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full rounded-full py-6 text-base font-semibold"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Heart className="w-5 h-5 mr-2" />
                Donate {form.amount ? formatCurrency(parseFloat(form.amount)) : 'Now'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>

          <p className="text-xs text-center text-gray-500">
            Secure payment powered by BillDesk. 80G tax exemption available.
          </p>
        </form>
      </div>
    </div>
  );
}
