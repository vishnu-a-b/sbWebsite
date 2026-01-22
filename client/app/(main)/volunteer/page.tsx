'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

export default function VolunteerPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-secondary/20 px-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Welcome Aboard!</CardTitle>
            <CardDescription>
              Thank you for your interest in volunteering. We have received your application and will contact you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
             <Button onClick={() => setSuccess(false)}>Back to Home</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-4 text-primary">Volunteer With Us</h1>
        <p className="text-center text-muted-foreground mb-8">Join our compassionate team and make a difference in someone's life.</p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
           <Card>
             <CardContent className="pt-6 text-center">
               <h3 className="font-bold mb-2">Medical</h3>
               <p className="text-sm text-muted-foreground">Doctors, nurses, and medical students can offer specialized care.</p>
             </CardContent>
           </Card>
           <Card>
             <CardContent className="pt-6 text-center">
               <h3 className="font-bold mb-2">Companionship</h3>
               <p className="text-sm text-muted-foreground">Spend time talking, reading, or just being there for our patients.</p>
             </CardContent>
           </Card>
           <Card>
             <CardContent className="pt-6 text-center">
               <h3 className="font-bold mb-2">General Support</h3>
               <p className="text-sm text-muted-foreground">Help with office work, events, cleaning, or kitchen duties.</p>
             </CardContent>
           </Card>
        </div>

        <Card>
          <CardHeader>
             <CardTitle>Volunteer Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input id="name" name="name" required placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input id="email" name="email" type="email" required placeholder="jane@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input id="phone" name="phone" type="tel" required placeholder="+91 9876543210" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-medium">Interested Role</label>
                  <select 
                    id="role" 
                    name="role" 
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="General">General Volunteer</option>
                    <option value="Medical">Medical Professional</option>
                    <option value="Event">Event Support</option>
                    <option value="Fundraising">Fundraising</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Why do you want to volunteer?</label>
                <Textarea id="message" name="message" placeholder="Tell us a bit about yourself..." />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Submitting...' : 'Register as Volunteer'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
