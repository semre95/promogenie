
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-tr from-promogenie-700 to-promogenie-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your Product Marketing?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-promogenie-100">
            Join thousands of brands using PromoGenie to create stunning ad creatives in minutes, not days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="px-8 py-3 bg-white text-promogenie-600 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg button-shine flex items-center justify-center"
            >
              <span>Start Free Trial</span>
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="px-8 py-3 border border-white text-white rounded-md font-medium text-lg hover:bg-promogenie-600 transition-colors flex items-center justify-center"
            >
              <span>See Live Demo</span>
            </Link>
          </div>
          <p className="mt-6 text-sm text-promogenie-200">
            No credit card required • 7-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
