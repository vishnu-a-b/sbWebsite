import Link from 'next/link';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { getFooterContent } from '@/app/actions/footer';

// Social media icon components
const FacebookIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

interface FooterContent {
  address?: string;
  phone?: string;
  email?: string;
  description?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  twitter?: string;
  linkedin?: string;
  whatsapp?: string;
  copyrightText?: string;
}

export default async function Footer() {
  const content: FooterContent = await getFooterContent() || {};

  const address = content.address || 'Golden Hills, P.O, near to PMS Dental College, Venkode, Vattappara, Thiruvananthapuram, Kerala 695028';
  const phone = content.phone || '+91 9142653804';
  const email = content.email || 'office@shanthibhavan.in';
  const description = content.description || 'India\'s first no-bill palliative hospital. Providing compassionate care with dignity and love. A beacon of hope for those in need.';
  const copyrightText = content.copyrightText || 'Shanthibhavan Palliative Hospital. All rights reserved.';

  const socialLinks = [
    { url: content.facebook, icon: FacebookIcon, label: 'Facebook', color: 'hover:bg-blue-600' },
    { url: content.instagram, icon: InstagramIcon, label: 'Instagram', color: 'hover:bg-pink-600' },
    { url: content.youtube, icon: YoutubeIcon, label: 'YouTube', color: 'hover:bg-red-600' },
    { url: content.twitter, icon: TwitterIcon, label: 'Twitter', color: 'hover:bg-sky-500' },
    { url: content.linkedin, icon: LinkedinIcon, label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { url: content.whatsapp ? `https://wa.me/${content.whatsapp.replace(/[^0-9]/g, '')}` : '', icon: () => <MessageCircle className="h-4 w-4" />, label: 'WhatsApp', color: 'hover:bg-green-600' },
  ].filter(link => link.url && link.url.trim() !== '');

  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo/logo.png" alt="Shanthibhavan Logo" className="h-16 w-auto" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">Shanthibhavan</span>
                <span className="text-xs font-semibold text-zinc-500">Palliative Hospital</span>
              </div>
            </Link>
            <p className="text-sm">
              {description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Care Team</Link></li>
              <li><Link href="/volunteer" className="hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link href="/donate" className="hover:text-white transition-colors">Donate</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <span>{address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{phone}</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Connect</h3>
            <p className="mb-4 text-sm">Follow our journey and support our cause.</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.length > 0 ? (
                socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`h-9 w-9 rounded-full bg-zinc-800 ${link.color} transition-colors flex items-center justify-center text-white`}
                      aria-label={link.label}
                    >
                      <IconComponent />
                    </a>
                  );
                })
              ) : (
                <>
                  <div className="h-9 w-9 rounded-full bg-zinc-800"></div>
                  <div className="h-9 w-9 rounded-full bg-zinc-800"></div>
                  <div className="h-9 w-9 rounded-full bg-zinc-800"></div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} {copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
