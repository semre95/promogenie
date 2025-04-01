
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Upload, Sparkles, Star } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      
      // Check if the file is an image
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (JPEG, PNG, etc.)",
          variant: "destructive"
        });
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setUploadedImage(event.target.result);
          toast({
            title: "Image uploaded successfully",
            description: "Your product image is ready for processing",
          });
        }
      };
      reader.readAsDataURL(file);
    }
  }, [toast]);

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      // Check if the file is an image
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (JPEG, PNG, etc.)",
          variant: "destructive"
        });
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setUploadedImage(event.target.result);
          toast({
            title: "Image uploaded successfully",
            description: "Your product image is ready for processing",
          });
        }
      };
      reader.readAsDataURL(file);
    }
  }, [toast]);

  const triggerFileInput = () => {
    document.getElementById('file-upload')?.click();
  };

  // Product dashboard UI screenshot - updated to new screenshot
  const dashboardUIImage = "/lovable-uploads/4b2910ca-1c16-45c8-bcb5-51ab13699b48.png";

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-promogenie-100 text-promogenie-800 mb-4">
                <div className="flex items-center">
                  <span className="flex h-2 w-2 rounded-full bg-promogenie-600 mr-2"></span>
                  <span>AI-Powered Influencer Videos</span>
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
                    +1.5k
                  </div>
                </div>
                <span>Join thousands of customers using PromoGenie</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="mx-auto lg:mr-0 lg:ml-auto relative">
              <div className="bg-gradient-to-br from-promogenie-600 to-promogenie-900 rounded-2xl shadow-2xl p-4 max-w-lg">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={dashboardUIImage} 
                    alt="PromoGenie Dashboard" 
                    className="w-full"
                  />
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
