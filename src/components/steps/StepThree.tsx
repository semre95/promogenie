
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, Download, Share2, Video } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Sample video thumbnail
const sampleVideoThumbnail = "/lovable-uploads/d7e56406-f041-44e5-9e1e-38ae5532b408.png";

interface StepThreeProps {
  onBack: () => void;
  onFinish: (data: any) => void;
  initialData?: any;
}

const StepThree: React.FC<StepThreeProps> = ({ onBack, onFinish, initialData = {} }) => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // In a real application, the generated video would be passed via initialData
  const generatedVideo = initialData.generatedVideo || sampleVideoThumbnail;
  
  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your content is being downloaded"
    });
    
    // Simulate download completion
    setTimeout(() => {
      onFinish({
        ...initialData,
        downloaded: true,
        downloadDate: new Date().toISOString()
      });
    }, 1500);
  };

  const handleShare = () => {
    toast({
      title: "Sharing options",
      description: "Share options dialog will appear here"
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-promogenie-700 mb-2">STEP 3/3: Finalize & Download</h2>
        <p className="text-promogenie-500">Your video is ready to download and share</p>
      </div>
      
      <div>
        <h3 className="text-promogenie-700 text-xl font-semibold mb-3">Your Video</h3>
        <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center relative">
          <img 
            src={generatedVideo} 
            alt="Generated video" 
            className="max-w-full max-h-full" 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button 
              className="bg-white text-promogenie-700 rounded-full w-16 h-16 flex items-center justify-center"
            >
              <Video className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-promogenie-700 text-xl font-semibold mb-3">Post Processing</h3>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <button className="flex items-center space-x-2 text-promogenie-500 cursor-not-allowed" disabled>
                <span>Style</span>
              </button>
              <span className="ml-2 text-promogenie-500 text-sm bg-promogenie-100 px-2 py-0.5 rounded">Coming Soon</span>
            </div>
            <div className="flex items-center">
              <button className="flex items-center space-x-2 text-promogenie-500 cursor-not-allowed" disabled>
                <span>Upscale</span>
              </button>
              <span className="ml-2 text-promogenie-500 text-sm bg-promogenie-100 px-2 py-0.5 rounded">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <Button 
          variant="outline" 
          className="border-promogenie-300 text-promogenie-700"
          onClick={onBack}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="flex space-x-4">
          <Button 
            className="bg-promogenie-600 hover:bg-promogenie-700 text-white"
            onClick={handleDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button 
            variant="outline" 
            className="border-promogenie-300 text-promogenie-700 hover:bg-promogenie-50"
            onClick={handleShare}
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
