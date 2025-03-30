
import React from 'react';
import { ArrowRight } from 'lucide-react';
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="relative">
              <img 
                src="/lovable-uploads/66b5f224-adda-4dff-9b36-4271935c7694.png" 
                alt="Original Product" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-sm font-medium rounded-md px-3 py-1">
                Original Photo
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Customer's Photo</h3>
              <p className="text-gray-600">Simple product photo taken with a smartphone camera, no special lighting or setup.</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="relative">
              <img 
                src="/lovable-uploads/c34afa33-cf25-449c-b085-bf4f1837ef04.png" 
                alt="AI Generated Scene" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-promogenie-600 text-white text-sm font-medium rounded-md px-3 py-1">
                AI Generated
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Nature-Inspired Scene</h3>
              <p className="text-gray-600">Our AI placed the product in a beautiful natural setting with perfect lighting and composition.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="relative">
              <img 
                src="/lovable-uploads/b5208401-363e-4a97-b8ca-f32220d76188.png" 
                alt="Professional Studio" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-promogenie-600 text-white text-sm font-medium rounded-md px-3 py-1">
                AI Generated
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Studio Quality</h3>
              <p className="text-gray-600">Professional studio-quality image with perfect lighting and composition.</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="relative">
              <img 
                src="/lovable-uploads/7ce9dcd6-4849-4940-adbe-6865ace9cbce.png" 
                alt="Influencer Marketing" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-promogenie-600 text-white text-sm font-medium rounded-md px-3 py-1">
                AI Generated
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Influencer Marketing</h3>
              <p className="text-gray-600">AI-generated influencer using your product in a professionally styled setting.</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="relative">
              <img 
                src="/lovable-uploads/2ade2a23-37dc-4a8f-9c0e-22d0763d8d4b.png" 
                alt="Video Still" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-promogenie-600 text-white text-sm font-medium rounded-md px-3 py-1">
                AI Generated
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Video Content</h3>
              <p className="text-gray-600">Still from an AI-generated video with influencer speaking about your product.</p>
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
