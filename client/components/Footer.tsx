import Link from 'next/link';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-primary">
              <Heart className="h-6 w-6" fill="currentColor" />
              <span className="text-lg font-bold">Shanthibhavan</span>
            </Link>
            <p className="text-sm">
              India's first no-bill palliative hospital. Providing compassionate care with dignity and love.
              A beacon of hope for those in need.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary">Our Services</Link></li>
              <li><Link href="/team" className="hover:text-primary">Care Team</Link></li>
              <li><Link href="/volunteer" className="hover:text-primary">Volunteer</Link></li>
              <li><Link href="/donate" className="hover:text-primary">Donate</Link></li>
              <li><Link href="/admin" className="hover:text-primary">Admin</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-primary">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <span>Golden Hills, P.O, near to PMS Dental College, Venkode, Vattappara, Thiruvananthapuram, Kerala 695028</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919142653804" className="hover:text-primary">+91 9142653804</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:office@shanthibhavan.in" className="hover:text-primary">office@shanthibhavan.in</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold text-primary">Connect</h3>
            <p className="mb-4 text-sm">Follow our journey and support our cause.</p>
            <div className="flex space-x-4">
               {/* Social placeholders */}
               <div className="h-8 w-8 rounded-full bg-input"></div>
               <div className="h-8 w-8 rounded-full bg-input"></div>
               <div className="h-8 w-8 rounded-full bg-input"></div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Shanthibhavan Palliative Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
