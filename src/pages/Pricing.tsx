
import React from 'react';
import Navbar from '../components/Navbar';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Simple Hero */}
        <section className="py-12 bg-gradient-to-b from-promogenie-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
              <p className="text-lg text-gray-600">
                Choose the perfect plan for your marketing needs, with no hidden fees or long-term commitments.
              </p>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <PricingSection hideHeading={true} />

        {/* Guarantee Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 p-8 border border-promogenie-100 rounded-xl bg-promogenie-50/50">
              <div className="w-24 h-24 flex-shrink-0 rounded-full bg-white flex items-center justify-center shadow-sm">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Our 7-Day Money-Back Guarantee</h3>
                <p className="text-gray-600 mb-4">
                  We're confident you'll love PromoGenie. If for any reason you're not completely satisfied with our service, we offer a full refund within the first 7 days of your subscription.
                </p>
                <div className="flex items-center">
                  <Link to="/contact" className="text-promogenie-600 hover:text-promogenie-700 font-medium flex items-center">
                    Contact our support team <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">How do credits work?</h3>
                  <p className="text-gray-600">
                    Credits are the currency used to generate content on PromoGenie. One credit typically allows you to transform one product photo into multiple variations of professional images or videos. Different types of generations (like AI influencer videos) may require more credits than simple image transformations.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Can I change plans anytime?</h3>
                  <p className="text-gray-600">
                    Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new pricing will be prorated for the remainder of your billing cycle. When downgrading, the new pricing will take effect at the start of your next billing cycle.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Do unused credits roll over?</h3>
                  <p className="text-gray-600">
                    Credits expire at the end of your billing cycle. However, Enterprise customers can negotiate credit rollover terms as part of their custom package.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Do you offer discounts for annual billing?</h3>
                  <p className="text-gray-600">
                    Yes, we offer a 17% discount when you choose annual billing instead of monthly billing. This essentially gives you two months free per year.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">What if I need more credits?</h3>
                  <p className="text-gray-600">
                    You can purchase additional credit packs at any time without changing your subscription tier. These credits will be added to your account immediately and follow the same expiration rules as your subscription credits.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Can I try before I buy?</h3>
                  <p className="text-gray-600">
                    Yes! We offer a free trial that includes 3 credits so you can experience the full power of PromoGenie before committing to a subscription. No credit card is required for the free trial.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">Still have questions? We're here to help.</p>
                <Link to="/contact" className="px-6 py-3 bg-promogenie-600 text-white rounded-md font-medium hover:bg-promogenie-700 transition-colors button-shine inline-flex items-center">
                  <span>Contact Support</span>
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
