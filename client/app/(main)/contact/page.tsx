'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card, CardContent } from '@/components/ui/Card';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-primary/90 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-white/90 max-w-2xl mx-auto px-4">
          We are here to help. Reach out to us for any queries, support, or feedback.
        </p>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
           
           {/* Contact Info & Map */}
           <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                 <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Shanthibhavan Palliative Hospital<br />
                        Golden Hills, P.O<br />
                        Near PMS Dental College, Venkode<br />
                        Vattappara, Thiruvananthapuram<br />
                        Kerala - 695028
                      </p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+919142653804" className="hover:text-primary">+91 9142653804</a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="tel:+918921538116" className="hover:text-primary">+91 8921538116</a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="tel:+914876611600" className="hover:text-primary">+91 4876611600</a>
                      </p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:office@shanthibhavan.in" className="hover:text-primary">office@shanthibhavan.in</a>
                      </p>
                    </div>
                 </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-48 md:h-64 bg-gradient-to-br from-secondary/50 to-secondary rounded-lg md:rounded-xl overflow-hidden shadow-inner border-2 border-secondary flex flex-col items-center justify-center">
                 <div className="text-5xl mb-3">📍</div>
                 <span className="text-primary font-semibold mb-2">Golden Hills, Venkode</span>
                 <span className="text-sm text-primary/80">Thiruvananthapuram - 695028</span>
                 <a href="https://maps.google.com/?q=Shanthibhavan+Palliative+Hospital+Thiruvananthapuram" target="_blank" rel="noopener noreferrer" className="mt-3 text-xs text-primary hover:text-primary/80 underline">
                   View on Google Maps →
                 </a>
              </div>
           </div>

           {/* Contact Form */}
           <div className="w-full">
             <Card>
               <CardContent className="p-4 sm:p-6 md:p-8">
                 {success ? (
                   <div className="text-center py-12 space-y-4">
                     <h3 className="text-2xl font-bold text-primary">Message Sent!</h3>
                     <p className="text-gray-800">Thank you for contacting us. We will get back to you soon.</p>
                     <Button onClick={() => setSuccess(false)} variant="outline">Send Another</Button>
                   </div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                     <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">Send a Message</h3>
                     <div className="grid sm:grid-cols-2 gap-4">
                       <div className="space-y-2">
                         <label htmlFor="name" className="text-sm font-medium">Name</label>
                         <Input id="name" name="name" required placeholder="Your Name" />
                       </div>
                       <div className="space-y-2">
                         <label htmlFor="email" className="text-sm font-medium">Email</label>
                         <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                       </div>
                     </div>
                     <div className="space-y-2">
                       <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                       <Input id="phone" name="phone" type="tel" placeholder="Mobile Number" />
                     </div>
                     <div className="space-y-2">
                       <label htmlFor="message" className="text-sm font-medium">Message</label>
                       <Textarea id="message" name="message" required placeholder="How can we help?" className="min-h-[150px]" />
                     </div>
                     <Button type="submit" className="w-full" disabled={loading}>
                       {loading ? 'Sending...' : 'Send Message'}
                     </Button>
                   </form>
                 )}
               </CardContent>
             </Card>
           </div>

        </div>
        </div>
      </section>
    </div>
  );
}
