
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
              Choose the perfect plan for your AI influencer marketing needs
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold">$19</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-gray-600">Perfect for small businesses beginning their AI influencer journey.</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>50 wishes per month</span>
                </li>
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
              POPULAR
            </div>
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-gray-600">For growing businesses with regular marketing campaigns.</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>200 wishes per month</span>
                </li>
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
          
          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold">$149</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-gray-600">For businesses with high-volume marketing needs.</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Unlimited wishes</span>
                </li>
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
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
