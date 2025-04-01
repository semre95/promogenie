
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingSectionProps {
  hideHeading?: boolean;
}

const PricingSection = ({ hideHeading = false }: PricingSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {!hideHeading && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600">
              Choose the plan that best suits your needs. No hidden fees, cancel anytime.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="p-6 border-b">
              <p className="text-sm text-center uppercase font-medium text-gray-500 mb-2">For Small Businesses & Freelancers</p>
              <h3 className="text-xl font-bold mb-2 text-center">Starter</h3>
              <div className="flex items-end justify-center gap-1 mb-4">
                <span className="text-4xl font-bold">$19</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <p className="text-gray-600 text-center text-sm">Perfect for those who just begin their journey.</p>
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center">
                <span className="text-2xl font-semibold">10</span>
                <span className="ml-2 text-gray-600">Wishes per month</span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>3 AI influencers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>720p video quality</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>6 second videos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Email support</span>
                </li>
              </ul>
            </div>
            <div className="p-6 pt-0">
              <Link to="/signup" className="block w-full py-3 px-4 text-center bg-white border border-promogenie-600 text-promogenie-600 hover:bg-promogenie-50 rounded-md font-medium transition-colors">
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-promogenie-600 hover:shadow-lg transform scale-105 transition-all relative">
            <div className="absolute top-0 right-0 bg-promogenie-600 text-white text-xs font-bold px-3 py-1 rounded-bl">
              BEST VALUE
            </div>
            <div className="p-6 border-b">
              <p className="text-sm text-center uppercase font-medium text-gray-500 mb-2">For Boutique Agencies & Startup Brands</p>
              <h3 className="text-xl font-bold mb-2 text-center">Pro</h3>
              <div className="flex items-end justify-center gap-1 mb-4">
                <span className="text-4xl font-bold">$79</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <p className="text-gray-600 text-center text-sm">Designed for marketers aiming for more flexibility and options.</p>
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center">
                <span className="text-2xl font-semibold">50</span>
                <span className="ml-2 text-gray-600">Wishes per month</span>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>All 8 AI influencers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>1080p HD video quality</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>12 second videos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
            <div className="p-6 pt-0">
              <Link to="/signup" className="block w-full py-3 px-4 text-center bg-promogenie-600 text-white hover:bg-promogenie-700 rounded-md font-medium transition-colors shadow-md">
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Team Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="p-6 border-b">
              <p className="text-sm text-center uppercase font-medium text-gray-500 mb-2">For Creative Agencies & E-commerce Brands</p>
              <h3 className="text-xl font-bold mb-2 text-center">Team</h3>
              <div className="flex items-end justify-center gap-1 mb-4">
                <span className="text-4xl font-bold">$199</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <p className="text-gray-600 text-center text-sm">Ideal for teams with regular advertising needs.</p>
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center">
                <span className="text-2xl font-semibold">150</span>
                <span className="ml-2 text-gray-600">Wishes per month</span>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom AI influencer creation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>4K Ultra HD video quality</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>12 second videos with post-processing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
            </div>
            <div className="p-6 pt-0">
              <Link to="/signup" className="block w-full py-3 px-4 text-center bg-white border border-promogenie-600 text-promogenie-600 hover:bg-promogenie-50 rounded-md font-medium transition-colors">
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="p-6 border-b">
              <p className="text-sm text-center uppercase font-medium text-gray-500 mb-2">For Large-scale Ad Generation Needs</p>
              <h3 className="text-xl font-bold mb-2 text-center">Enterprise</h3>
              <div className="flex items-end justify-center gap-1 mb-4">
                <span className="text-2xl font-bold">Let's Talk</span>
              </div>
              <p className="text-gray-600 text-center text-sm">Tell us what you need, and we'll tailor our solutions.</p>
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center">
                <span className="font-semibold">As Many As You Need</span>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom AI influencer creation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>4K Ultra HD video quality</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>12 second videos with post-processing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
            </div>
            <div className="p-6 pt-0">
              <Link to="/contact" className="block w-full py-3 px-4 text-center bg-gray-800 text-white hover:bg-gray-900 rounded-md font-medium transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
