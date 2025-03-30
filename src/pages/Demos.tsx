
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Demos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 bg-gradient-to-b from-promogenie-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Demos</h1>
              <p className="text-lg text-gray-600 mb-8">
                See PromoGenie in action with our collection of product demonstrations.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Demo Item 1 */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <div className="text-gray-400">Video Demo</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">AI-Generated Fashion Ad</h3>
                    <p className="text-gray-600 mb-4">
                      See how a fashion brand used PromoGenie to create a series of engaging TikTok product ads.
                    </p>
                  </div>
                </div>
                
                {/* Demo Item 2 */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <div className="text-gray-400">Video Demo</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Tech Product Showcase</h3>
                    <p className="text-gray-600 mb-4">
                      Watch how a tech startup leveraged PromoGenie to promote their latest gadget.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <p className="text-gray-600 mb-4">Want to see how PromoGenie can work for your specific product?</p>
                <Link to="/contact" className="px-6 py-3 bg-promogenie-600 text-white rounded-md font-medium hover:bg-promogenie-700 transition-colors shadow-md inline-flex items-center">
                  Request a Custom Demo
                  <ArrowRight size={18} className="ml-2" />
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

export default Demos;
