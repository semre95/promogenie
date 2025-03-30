
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const DemoSection = () => {
  return (
    <section className="py-16 md:py-24 wavy-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See the Magic in Action</h2>
          <p className="text-lg text-gray-600">
            Watch how our AI transforms everyday product photos into professional marketing assets
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
              <div className="absolute inset-0 opacity-60 bg-gradient-to-r from-promogenie-800 to-promogenie-500"></div>
              
              <div className="h-24 w-24 rounded-full bg-white bg-opacity-20 border-2 border-white flex items-center justify-center z-10 cursor-pointer hover:bg-opacity-30 transition-all">
                <Play size={48} className="text-white ml-2" />
              </div>
              
              <div className="absolute bottom-6 left-6 text-white z-10">
                <p className="text-sm font-medium">PromoGenie Demo</p>
                <h3 className="text-2xl font-bold">Transform Any Photo Into Ad Magic</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/features" className="inline-flex items-center px-6 py-3 bg-promogenie-600 text-white rounded-md font-medium hover:bg-promogenie-700 transition-colors shadow-md">
            <span>See All Features</span>
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
