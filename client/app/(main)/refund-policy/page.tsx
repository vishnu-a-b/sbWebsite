import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Shanthibhavan Palliative Hospital",
  description: "Refund and cancellation policy for donations made to Shanthibhavan Palliative Hospital.",
};

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/90 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Refund & Cancellation Policy</h1>
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
                <h2 className="text-2xl font-bold text-primary mb-4">Donation Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Shanthibhavan Palliative Hospital is a charitable organization dedicated to providing
                  compassionate palliative care to those in need. All donations made to our organization
                  are voluntary contributions to support our mission of serving patients with dignity and love.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Refund Eligibility</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a general policy, donations made to Shanthibhavan Palliative Hospital are non-refundable
                  as they are immediately allocated towards patient care, medical supplies, and operational expenses.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  However, we understand that errors can occur. Refunds may be considered in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                  <li>Duplicate transactions due to technical errors</li>
                  <li>Incorrect amount charged due to system malfunction</li>
                  <li>Unauthorized transactions (with proper verification)</li>
                  <li>Donations made in error with immediate notification</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Refund Request Process</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To request a refund, please follow these steps:
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Contact us within 7 days of the transaction</li>
                  <li>Provide your transaction ID and donation receipt</li>
                  <li>Explain the reason for your refund request</li>
                  <li>Submit supporting documentation if applicable</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Refund Timeline</h2>
                <p className="text-gray-700 leading-relaxed">
                  Once a refund request is approved, the refund will be processed within 5-7 business days.
                  The amount will be credited back to the original payment method used for the donation.
                  Please note that it may take additional time for the refund to reflect in your account
                  depending on your bank or payment provider.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Cancellation of Recurring Donations</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have set up a recurring donation and wish to cancel it, please contact us at least
                  5 business days before the next scheduled payment date. We will process your cancellation
                  request promptly and confirm the cancellation via email.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For refund requests or any questions regarding this policy, please contact us:
                </p>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-gray-700"><strong>Email:</strong> office@shanthibhavan.in</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +91 9142653804</p>
                  <p className="text-gray-700"><strong>Address:</strong> Golden Hills, P.O, near to PMS Dental College, Venkode, Vattappara, Thiruvananthapuram, Kerala 695028</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Policy Updates</h2>
                <p className="text-gray-700 leading-relaxed">
                  Shanthibhavan Palliative Hospital reserves the right to modify this refund policy at any time.
                  Any changes will be posted on this page with an updated revision date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
