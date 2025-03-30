
import React from 'react';
import { Clock, BarChart2, DollarSign } from 'lucide-react';

const CompetitiveEdgeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Competitive Edge</h2>
            <p className="text-lg text-gray-600 mb-12">
              Watch how we transformed this smartwatch photo into a high-converting ad in just 47 seconds.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-promogenie-100 flex items-center justify-center flex-shrink-0 mr-4">
                  <BarChart2 className="h-6 w-6 text-promogenie-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-promogenie-600 mb-2">3X Higher CTR</h3>
                  <p className="text-gray-600">Than traditional influencer content</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-promogenie-100 flex items-center justify-center flex-shrink-0 mr-4">
                  <DollarSign className="h-6 w-6 text-promogenie-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-promogenie-600 mb-2">10X Cost Reduction</h3>
                  <p className="text-gray-600">Compared to human influencers</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-promogenie-100 flex items-center justify-center flex-shrink-0 mr-4">
                  <Clock className="h-6 w-6 text-promogenie-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-promogenie-600 mb-2">Under 1 Minute</h3>
                  <p className="text-gray-600">From upload to finished ad</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg aspect-video flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 mb-2">Video Demo Placeholder</p>
              <div className="flex items-center justify-center">
                <div className="h-10 w-10 bg-promogenie-600 rounded-full flex items-center justify-center cursor-pointer shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveEdgeSection;
