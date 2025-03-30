
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Upload, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-promogenie-100 text-promogenie-800 mb-4">
                <div className="flex items-center">
                  <span className="flex h-2 w-2 rounded-full bg-promogenie-600 mr-2"></span>
                  <span>AI-Powered Ad Creation</span>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-promogenie-800 via-promogenie-600 to-promogenie-400 bg-clip-text text-transparent">
                AI-Generated Product Ads in Seconds
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Upload a photo, get professional ads featuring virtual influencers promoting your product on TikTok, Instagram & YouTube.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/signup" className="px-8 py-3 bg-promogenie-600 text-white rounded-md font-medium text-lg hover:bg-promogenie-700 transition-colors shadow-lg button-shine flex items-center justify-center">
                  <span>Get Started Free</span>
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link to="/features" className="px-8 py-3 border border-promogenie-600 text-promogenie-600 rounded-md font-medium text-lg hover:bg-promogenie-50 transition-colors flex items-center justify-center">
                  <span>See Features</span>
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start mt-8 text-sm text-gray-500">
                <div className="flex -space-x-2 mr-3">
                  <img src="https://randomuser.me/api/portraits/women/32.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                  <img src="https://randomuser.me/api/portraits/men/44.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                  <img src="https://randomuser.me/api/portraits/women/55.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                  <div className="w-8 h-8 rounded-full bg-promogenie-100 flex items-center justify-center border-2 border-white text-xs font-medium text-promogenie-600">
                    +5k
                  </div>
                </div>
                <span>Join thousands of brands using PromoGenie</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="mx-auto lg:mr-0 lg:ml-auto relative">
              <div className="bg-gradient-to-br from-promogenie-600 to-promogenie-900 rounded-2xl shadow-2xl p-6 md:p-8 max-w-lg">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-6">
                  <div className="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="mx-auto text-xs font-medium text-gray-500">AI Image Generator</div>
                  </div>
                  <div className="p-5">
                    <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg p-4 text-center mb-4">
                      <div className="inline-flex flex-col items-center justify-center">
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Drag and drop your product image</p>
                        <p className="text-xs text-gray-400 mt-1">or browse to upload</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <img src="/lovable-uploads/66b5f224-adda-4dff-9b36-4271935c7694.png" alt="Product" className="w-full h-32 object-cover rounded-lg" />
                      <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="animate-pulse h-4 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-promogenie-100 text-promogenie-600 px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center">
                        <Sparkles size={16} className="mr-1" />
                        Customize
                      </button>
                      <button className="flex-1 bg-promogenie-600 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center">
                        <Star size={16} className="mr-1" />
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <img src="/lovable-uploads/c34afa33-cf25-449c-b085-bf4f1837ef04.png" alt="AI Generated Ad 1" className="w-full aspect-square object-cover rounded-md shadow-sm" />
                  <img src="/lovable-uploads/7ce9dcd6-4849-4940-adbe-6865ace9cbce.png" alt="AI Generated Ad 2" className="w-full aspect-square object-cover rounded-md shadow-sm" />
                  <div className="hidden md:block w-full aspect-square bg-promogenie-800 rounded-md shadow-sm flex items-center justify-center animate-pulse-light">
                    <Sparkles size={24} className="text-white" />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-promogenie-200 rounded-full opacity-50 blur-xl animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-promogenie-300 rounded-full opacity-50 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/4 -right-4 w-16 h-16 bg-promogenie-400 rounded-full opacity-40 blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trusted by brands section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-wider text-gray-500 mb-10">TRUSTED BY INNOVATIVE BRANDS</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-24 h-16 bg-gray-100 rounded flex items-center justify-center">
              <span className="font-bold text-gray-400">ACME</span>
            </div>
            <div className="w-24 h-16 bg-gray-100 rounded flex items-center justify-center">
              <span className="font-bold text-gray-400">NexTech</span>
            </div>
            <div className="w-24 h-16 bg-gray-100 rounded flex items-center justify-center">
              <span className="font-bold text-gray-400">EcoStyle</span>
            </div>
            <div className="w-24 h-16 bg-gray-100 rounded flex items-center justify-center">
              <span className="font-bold text-gray-400">FitLife</span>
            </div>
            <div className="w-24 h-16 bg-gray-100 rounded flex items-center justify-center">
              <span className="font-bold text-gray-400">GlobeX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
