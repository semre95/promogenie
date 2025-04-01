
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, RefreshCw, Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

// Sample influencers data
const techInfluencer = "https://randomuser.me/api/portraits/men/32.jpg";
const fashionInfluencer = "https://randomuser.me/api/portraits/women/44.jpg";
const fitnessInfluencer = "https://randomuser.me/api/portraits/men/55.jpg";
const beautyInfluencer = "https://randomuser.me/api/portraits/women/68.jpg";
const travelInfluencer = "https://randomuser.me/api/portraits/men/78.jpg";
const foodInfluencer = "https://randomuser.me/api/portraits/women/62.jpg";
const gamingInfluencer = "https://randomuser.me/api/portraits/men/22.jpg";
const lifestyleInfluencer = "https://randomuser.me/api/portraits/women/33.jpg";

const influencers = [
  { id: "tech1", name: "TechyTyler", image: techInfluencer, category: "Tech" },
  { id: "fashion1", name: "FashionFiona", image: fashionInfluencer, category: "Fashion" },
  { id: "fitness1", name: "FitnessFredy", image: fitnessInfluencer, category: "Fitness" },
  { id: "beauty1", name: "BeautyBella", image: beautyInfluencer, category: "Beauty" },
  { id: "travel1", name: "TravelTom", image: travelInfluencer, category: "Travel" },
  { id: "food1", name: "FoodieFreda", image: foodInfluencer, category: "Food" },
  { id: "gaming1", name: "GamerGuy", image: gamingInfluencer, category: "Gaming" },
  { id: "lifestyle1", name: "LifestyleLinda", image: lifestyleInfluencer, category: "Lifestyle" }
];

// Available aspect ratios
const aspectRatios = [
  { id: "1:1", label: "Square (1:1)", value: 1 / 1 },
  { id: "3:4", label: "Portrait (3:4)", value: 3 / 4 },
  { id: "9:16", label: "Portrait (9:16)", value: 9 / 16 },
  { id: "16:9", label: "Landscape (16:9)", value: 16 / 9 },
  { id: "4:3", label: "Landscape (4:3)", value: 4 / 3 }
];

interface StepOneProps {
  onNext: (data: any) => void;
  initialData?: any;
}

const StepOne: React.FC<StepOneProps> = ({ onNext, initialData = {} }) => {
  const { toast } = useToast();
  const [selectedInfluencer, setSelectedInfluencer] = useState(initialData.selectedInfluencer || "");
  const [uploadedImages, setUploadedImages] = useState<File[]>(initialData.uploadedImages || []);
  const [uploadedImagePreviews, setUploadedImagePreviews] = useState<string[]>(initialData.uploadedImagePreviews || []);
  const [promptText, setPromptText] = useState(initialData.promptText || "");
  const [selectedAspectRatio, setSelectedAspectRatio] = useState(initialData.selectedAspectRatio || "16:9");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(initialData.generatedImage || null);
  const [showRegenerate, setShowRegenerate] = useState(false);
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setUploadedImages(prev => [...prev, ...newFiles]);
      
      // Create previews for the new images
      const newPreviews = newFiles.map(file => URL.createObjectURL(file));
      setUploadedImagePreviews(prev => [...prev, ...newPreviews]);
    }
  };
  
  const handleRemoveUploadedImage = (index: number) => {
    const newImages = [...uploadedImages];
    const newPreviews = [...uploadedImagePreviews];
    
    // Revoke the URL to prevent memory leaks
    URL.revokeObjectURL(newPreviews[index]);
    
    newImages.splice(index, 1);
    newPreviews.splice(index, 1);
    
    setUploadedImages(newImages);
    setUploadedImagePreviews(newPreviews);
  };

  const handleGenerateImage = () => {
    if (!selectedInfluencer || uploadedImagePreviews.length === 0 || !promptText || !selectedAspectRatio) {
      toast({
        title: "Missing information",
        description: "Please select an influencer, upload at least one image, provide a description, and select a format.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    setGeneratedImage(null);
    setShowRegenerate(false);
    
    // Simulate image generation
    setTimeout(() => {
      // In a real app, this would be an API call
      setGeneratedImage("/lovable-uploads/5920f396-0660-48f6-8ae3-7895df22813d.png");
      setIsGenerating(false);
      setShowRegenerate(true);
      
      toast({
        title: "Image Generated",
        description: "Your image has been successfully generated."
      });
    }, 2000);
  };

  const handleRegenerate = () => {
    handleGenerateImage();
  };
  
  const handleContinue = () => {
    if (!generatedImage) {
      toast({
        title: "Missing generated image",
        description: "Please generate an image first before continuing.",
        variant: "destructive"
      });
      return;
    }

    onNext({
      selectedInfluencer,
      uploadedImages,
      uploadedImagePreviews,
      promptText,
      selectedAspectRatio,
      selectedImage: generatedImage
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-promogenie-700 mb-2">STEP 1/3: Meet Your Influencer</h2>
        <p className="text-promogenie-500">Select an influencer and upload your product images</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-promogenie-700 text-xl font-semibold mb-3">Upload Product Images</h3>
            <div className="bg-gray-50 border-2 border-dashed border-promogenie-200 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-100 transition-colors relative">
              <input 
                type="file" 
                id="product-images"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                accept="image/*" 
                multiple
                onChange={handleImageUpload}
              />
              <div className="h-10 w-10 mx-auto text-promogenie-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                  <line x1="16" y1="5" x2="22" y2="5"></line>
                  <line x1="19" y1="2" x2="19" y2="8"></line>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
              </div>
              <p className="text-promogenie-700">Drag and drop your product images here</p>
              <p className="text-promogenie-500 text-sm mt-1">or click to browse</p>
            </div>

            {/* Uploaded Images Preview */}
            {uploadedImagePreviews.length > 0 && (
              <div className="mt-4">
                <h4 className="text-promogenie-700 font-medium mb-2">Uploaded Images</h4>
                <div className="grid grid-cols-3 gap-3">
                  {uploadedImagePreviews.map((preview, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={preview}
                        alt={`Uploaded ${index + 1}`}
                        className="w-full aspect-square object-cover rounded-md border border-gray-200"
                      />
                      <button
                        onClick={() => handleRemoveUploadedImage(index)}
                        className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-promogenie-600">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </button>
                    </div>
                  ))}
                  <div className="flex items-center justify-center border-2 border-dashed border-promogenie-200 rounded-md aspect-square cursor-pointer hover:bg-gray-50 transition-colors">
                    <label htmlFor="add-more-images" className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-promogenie-500">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      <span className="text-xs text-promogenie-500 mt-1">Add more</span>
                      <input
                        type="file"
                        id="add-more-images"
                        className="hidden"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div>
            <h3 className="text-promogenie-700 text-xl font-semibold mb-3">Video Format</h3>
            <p className="text-sm text-gray-600 mb-3">Select the perfect format for your platform:</p>
            
            <div className="mb-4">
              <Select
                value={selectedAspectRatio}
                onValueChange={setSelectedAspectRatio}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a format" />
                </SelectTrigger>
                <SelectContent>
                  {aspectRatios.map((ratio) => (
                    <SelectItem key={ratio.id} value={ratio.id}>
                      {ratio.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-promogenie-700 text-xl font-semibold">Scene Description</h3>
            </div>
            <div className="flex gap-4">
              <div className="flex-grow">
                <textarea 
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  placeholder="Describe the setting, style, mood, and any specific details..."
                  className="w-full min-h-[100px] bg-white text-promogenie-700 border-promogenie-200 p-3 rounded-md border"
                ></textarea>
              </div>
              <div>
                <Button 
                  className="bg-promogenie-600 hover:bg-promogenie-700 text-white px-6 py-6 h-auto w-full"
                  onClick={handleGenerateImage}
                  disabled={isGenerating || !selectedInfluencer || uploadedImagePreviews.length === 0 || !promptText || !selectedAspectRatio}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Generate Image
                      <span className="ml-1 text-xs bg-promogenie-700/60 px-2 py-1 rounded-full">15 wishes</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            {/* Generated Image Preview */}
            {generatedImage && (
              <div className="mt-4">
                <h4 className="text-promogenie-700 font-medium mb-2">Generated Image Preview</h4>
                <div className="bg-gray-50 rounded-lg p-4 flex justify-center">
                  <img 
                    src={generatedImage} 
                    alt="Generated" 
                    className="rounded-lg max-h-60 object-contain"
                  />
                </div>
                {showRegenerate && (
                  <div className="mt-2 flex justify-center">
                    <Button 
                      variant="outline"
                      className="border-promogenie-300 text-promogenie-700"
                      onClick={handleRegenerate}
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Regenerating...
                        </>
                      ) : (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Regenerate
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-promogenie-700 text-xl font-semibold mb-3">Pick Your Influencer</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {influencers.map(influencer => (
                <div
                  key={influencer.id}
                  className={`rounded-lg overflow-hidden cursor-pointer transition-all ${
                    selectedInfluencer === influencer.id 
                      ? 'ring-4 ring-promogenie-400 transform scale-105' 
                      : 'border border-promogenie-200 hover:border-promogenie-400'
                  }`}
                  onClick={() => setSelectedInfluencer(influencer.id)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={influencer.image} 
                      alt={influencer.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2 bg-white">
                    <p className="text-promogenie-700 text-sm font-medium truncate">{influencer.name}</p>
                    <p className="text-promogenie-500 text-xs">{influencer.category}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-end items-center">
              <p className="text-promogenie-500 italic mr-4">Create your own influencer... 
                <span className="ml-1 text-promogenie-700 font-medium">Coming Soon</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <div></div>
        <Button 
          className="bg-promogenie-600 hover:bg-promogenie-700 text-white px-8"
          onClick={handleContinue}
          disabled={!generatedImage}
        >
          Continue
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
