import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';

type PricingPeriod = 'monthly' | 'annually';

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<PricingPeriod>('monthly');

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'annually' : 'monthly');
  };

  const getPrice = (monthlyPrice: number): string => {
    if (billingPeriod === 'annually') {
      const annualPrice = monthlyPrice * 10; // 2 months free
      return `$${annualPrice}`;
    }
    return `$${monthlyPrice}`;
  };

  const getBillingLabel = (): string => {
    return billingPeriod === 'monthly' ? 'Monthly' : 'Annually';
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the plan that best suits your needs. No hidden fees, cancel anytime.
          </p>

          <div className="flex items-center justify-center mb-8">
            <span className={`text-sm mr-3 ${billingPeriod === 'monthly' ? 'font-medium text-promogenie-600' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={toggleBillingPeriod}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle billing period</span>
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${
                  billingPeriod === 'annually' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ml-3 ${billingPeriod === 'annually' ? 'font-medium text-promogenie-600' : 'text-gray-500'}`}>
              Annually <span className="text-xs text-green-500 font-medium ml-1">(Save 17%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 relative">
          {/* Starter */}
          <div className="pricing-card">
            <div className="text-center mb-6">
              <div className="text-xs uppercase font-semibold text-promogenie-600 mb-1">For Small Businesses & Freelancers</div>
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold">{billingPeriod === 'monthly' ? '$19' : '$190'}</span>
                <span className="text-gray-500 ml-1">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Perfect for those who just begin their journey.</p>
            </div>

            <div className="border-t border-gray-100 pt-6 pb-4">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-promogenie-100 flex items-center justify-center mr-3">
                  <span className="text-promogenie-600 text-sm font-bold">$</span>
                </div>
                <span className="font-medium">10 Credits</span>
              </div>
              
              <ul className="space-y-3">
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">50+ on-brand ad copy generations</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">600 on-brand image ad variations</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">One-click publishing on Meta, Google, LinkedIn & TikTok</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Basic AI image generation</span>
                </li>
                <li className="flex text-gray-400">
                  <Check size={18} className="text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom prompt creation</span>
                </li>
                <li className="flex text-gray-400">
                  <Check size={18} className="text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">AI influencer generation</span>
                </li>
                <li className="flex text-gray-400">
                  <Check size={18} className="text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Video creation with lip-sync</span>
                </li>
              </ul>
            </div>

            <button className="w-full mt-4 px-4 py-2 border border-promogenie-600 text-promogenie-600 rounded-md font-medium hover:bg-promogenie-50 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Card with enhanced Best Value visibility */}
          <div className="pricing-card relative border-2 border-promogenie-600">
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-promogenie-600 text-white text-xs font-bold rounded-full whitespace-nowrap z-10">
              BEST VALUE
            </div>
            
            <div className="text-center mb-6">
              <div className="text-xs uppercase font-semibold text-promogenie-600 mb-1">FOR BOUTIQUE AGENCIES & STARTUP BRANDS</div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold">{billingPeriod === 'monthly' ? '$79' : '$790'}</span>
                <span className="text-gray-500 ml-1">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Designed for marketers aiming for more flexibility and options.
                <span className="block text-xs text-promogenie-600 mt-1">Best value for growing businesses</span>
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6 pb-4">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-promogenie-100 flex items-center justify-center mr-3">
                  <span className="text-promogenie-600 text-sm font-bold">$</span>
                </div>
                <span className="font-medium">50 Credits</span>
              </div>
              
              <ul className="space-y-3">
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">250+ on-brand ad copy generations</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">3,000 on-brand image ad variations</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">One-click publishing on Meta, Google, LinkedIn & TikTok</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced AI image generation</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom prompt creation</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">AI influencer generation</span>
                </li>
                <li className="flex text-gray-400">
                  <Check size={18} className="text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Video creation with lip-sync</span>
                </li>
              </ul>
            </div>

            <button className="w-full mt-4 px-4 py-2 bg-promogenie-600 text-white rounded-md font-medium hover:bg-promogenie-700 transition-colors button-shine">
              Get Started
            </button>
          </div>

          {/* Team */}
          <div className="pricing-card">
            <div className="text-center mb-6">
              <div className="text-xs uppercase font-semibold text-promogenie-600 mb-1">For Creative Agencies & E-commerce Brands</div>
              <h3 className="text-2xl font-bold mb-2">Team</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold">{billingPeriod === 'monthly' ? '$199' : '$1,990'}</span>
                <span className="text-gray-500 ml-1">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Ideal for teams with regular advertising needs.</p>
            </div>

            <div className="border-t border-gray-100 pt-6 pb-4">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-promogenie-100 flex items-center justify-center mr-3">
                  <span className="text-promogenie-600 text-sm font-bold">$</span>
                </div>
                <span className="font-medium">150 Credits</span>
              </div>
              
              <ul className="space-y-3">
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">750+ on-brand ad copy generations</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">9,000 on-brand image ad variations</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">One-click publishing on Meta, Google, LinkedIn & TikTok</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Premium AI image generation</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom prompt creation</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">AI influencer generation</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Video creation with lip-sync</span>
                </li>
              </ul>
            </div>

            <button className="w-full mt-4 px-4 py-2 border border-promogenie-600 text-promogenie-600 rounded-md font-medium hover:bg-promogenie-50 transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise */}
          <div className="pricing-card bg-gray-50">
            <div className="text-center mb-6">
              <div className="text-xs uppercase font-semibold text-promogenie-600 mb-1">For Large-scale Ad Generation Needs</div>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-2xl font-bold">Let's Talk</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Tell us what you need, and we'll tailor our solutions.</p>
            </div>

            <div className="border-t border-gray-100 pt-6 pb-4">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-promogenie-100 flex items-center justify-center mr-3">
                  <span className="text-promogenie-600 text-sm font-bold">$</span>
                </div>
                <span className="font-medium">As Many As You Need</span>
              </div>
              
              <ul className="space-y-3">
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">On-brand ad copy generations at scale</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited on-brand image ad variations</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">One-click publishing on Meta, Google, LinkedIn & TikTok</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Enterprise-grade AI image generation</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced custom prompt creation</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Premium AI influencer generation</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced video creation with lip-sync</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated account manager</span>
                </li>
                <li className="flex">
                  <Check size={18} className="text-promogenie-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom integration & API access</span>
                </li>
              </ul>
            </div>

            <button className="w-full mt-4 px-4 py-2 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
