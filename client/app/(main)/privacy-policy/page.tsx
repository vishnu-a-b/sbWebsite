import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Shanthibhavan Palliative Hospital",
  description: "Privacy policy for Shanthibhavan Palliative Hospital website and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/90 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-white/90 max-w-2xl mx-auto px-4">
          Last updated: February 2025
        </p>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Shanthibhavan Palliative Hospital (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                  you visit our website or use our services. Please read this policy carefully to understand our
                  practices regarding your personal data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <h3 className="text-xl font-semibold text-primary/90 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Donation and payment information</li>
                  <li>Volunteer registration details</li>
                  <li>Contact form submissions</li>
                  <li>Appointment requests</li>
                </ul>
                <h3 className="text-xl font-semibold text-primary/90 mb-2">Automatically Collected Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Processing donations and issuing receipts</li>
                  <li>Responding to inquiries and contact form submissions</li>
                  <li>Managing volunteer registrations</li>
                  <li>Scheduling appointments and providing patient care services</li>
                  <li>Sending updates about our programs and campaigns (with your consent)</li>
                  <li>Improving our website and services</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share
                  your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and processing donations (e.g., payment processors)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the Internet or electronic storage is 100% secure,
                  and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance your browsing
                  experience. Cookies are small files stored on your device that help us understand how
                  you use our website. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Access and request a copy of your personal data</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Third-Party Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the
                  privacy practices or content of these external sites. We encourage you to review the
                  privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Children&apos;s Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website is not intended for children under 13 years of age. We do not knowingly
                  collect personal information from children under 13. If we become aware that we have
                  collected personal information from a child under 13, we will take steps to delete
                  such information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this
                  page with an updated revision date. We encourage you to review this policy periodically
                  to stay informed about how we protect your information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-gray-700"><strong>Email:</strong> office@shanthibhavan.in</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +91 9142653804</p>
                  <p className="text-gray-700"><strong>Address:</strong> Golden Hills, P.O, near to PMS Dental College, Venkode, Vattappara, Thiruvananthapuram, Kerala 695028</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
