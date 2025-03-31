
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Upload, 
  Image, 
  Video, 
  Download,
  Share2,
  RefreshCw, 
  LayoutGrid, 
  User, 
  LogOut,
  Settings,
  CreditCard,
  History
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import DashboardHeader from '@/components/DashboardHeader';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Import sample images for influencers
const techInfluencer = "https://randomuser.me/api/portraits/men/32.jpg";
const fashionInfluencer = "https://randomuser.me/api/portraits/women/44.jpg";
const fitnessInfluencer = "https://randomuser.me/api/portraits/men/55.jpg";
const beautyInfluencer = "https://randomuser.me/api/portraits/women/68.jpg";
const travelInfluencer = "https://randomuser.me/api/portraits/men/78.jpg";
const foodInfluencer = "https://randomuser.me/api/portraits/women/62.jpg";
const gamingInfluencer = "https://randomuser.me/api/portraits/men/22.jpg";
const lifestyleInfluencer = "https://randomuser.me/api/portraits/women/33.jpg";

const sampleGeneratedImage = "/lovable-uploads/5920f396-0660-48f6-8ae3-7895df22813d.png";
const sampleVideoThumbnail = "/lovable-uploads/d7e56406-f041-44e5-9e1e-38ae5532b408.png";

const Dashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("image");
  const [promptText, setPromptText] = useState("");
  const [scriptText, setScriptText] = useState("");
  const [selectedAspectRatio, setSelectedAspectRatio] = useState("1:1");
  const [selectedInfluencer, setSelectedInfluencer] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("");
  const [videoLength, setVideoLength] = useState("6");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([sampleGeneratedImage]);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const handleImageGeneration = () => {
    if (!promptText) {
      toast({
        title: "Error",
        description: "Please enter a prompt",
        variant: "destructive"
      });
      return;
    }
    
    if (!selectedInfluencer) {
      toast({
        title: "Error",
        description: "Please select an influencer",
        variant: "destructive"
      });
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate generation
    setTimeout(() => {
      setGeneratedImages([sampleGeneratedImage, ...generatedImages]);
      setIsGenerating(false);
      toast({
        title: "Success",
        description: "Your image has been generated successfully!"
      });
    }, 3000);
  };
  
  const handleVideoGeneration = () => {
    if (!scriptText) {
      toast({
        title: "Error",
        description: "Please enter a script",
        variant: "destructive"
      });
      return;
    }
    
    if (!selectedVoice) {
      toast({
        title: "Error",
        description: "Please select a voice",
        variant: "destructive"
      });
      return;
    }
    
    if (!selectedImage) {
      toast({
        title: "Error",
        description: "Please select an image first",
        variant: "destructive"
      });
      return;
    }
    
    setIsGenerating(true);
    
    // Check if script is not too long
    const wordCount = scriptText.split(' ').length;
    const maxWords = videoLength === "6" ? 15 : 30; // Roughly 2.5 words per second
    
    if (wordCount > maxWords) {
      toast({
        title: "Script too long",
        description: `For a ${videoLength} second video, keep your script under ${maxWords} words.`,
        variant: "destructive"
      });
      setIsGenerating(false);
      return;
    }
    
    // Simulate generation
    setTimeout(() => {
      setGeneratedVideo(sampleVideoThumbnail);
      setActiveTab("export");
      setIsGenerating(false);
      toast({
        title: "Success",
        description: "Your video has been generated successfully!"
      });
    }, 5000);
  };
  
  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
    setActiveTab("video");
    toast({
      description: "Image selected for video generation"
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your content is being downloaded"
    });
  };

  const handleShare = () => {
    toast({
      title: "Sharing options",
      description: "Share options dialog will appear here"
    });
  };
  
  const calculateWishCost = () => {
    // Base cost depending on video length
    return videoLength === "6" ? 10 : 20;
  };
  
  const aspectRatios = [
    { value: "1:1", label: "1:1 - Square" },
    { value: "4:3", label: "4:3 - Classic" },
    { value: "16:9", label: "16:9 - Landscape" },
    { value: "9:16", label: "9:16 - Vertical" },
    { value: "3:4", label: "3:4 - Portrait" }
  ];
  
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
  
  const voices = [
    { id: "voice1", name: "Professional Male" },
    { id: "voice2", name: "Professional Female" },
    { id: "voice3", name: "Energetic Male" },
    { id: "voice4", name: "Energetic Female" },
    { id: "voice5", name: "Friendly Male" },
    { id: "voice6", name: "Friendly Female" },
    { id: "voice7", name: "Authoritative Male" },
    { id: "voice8", name: "Authoritative Female" }
  ];

  return (
    <div className="flex min-h-screen bg-promogenie-800">
      <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1">
        <DashboardHeader />
        
        <main className="p-6">
          <Tabs 
            defaultValue="image" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full max-w-6xl mx-auto bg-promogenie-700 rounded-xl p-6 shadow-xl"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="image">Image Generation</TabsTrigger>
              <TabsTrigger value="video">Video Creation</TabsTrigger>
              <TabsTrigger value="export">Export</TabsTrigger>
            </TabsList>
            
            {/* Image Generation Tab */}
            <TabsContent value="image" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-3">Upload Product Image</h3>
                    <div className="bg-promogenie-600 border-2 border-dashed border-promogenie-400 rounded-lg p-8 text-center cursor-pointer hover:bg-promogenie-500 transition-colors">
                      <Upload className="h-10 w-10 mx-auto text-white mb-2" />
                      <p className="text-white">Drag and drop your product image here</p>
                      <p className="text-promogenie-200 text-sm mt-1">or click to browse</p>
                      <input type="file" className="hidden" accept="image/*" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-3">Image Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white mb-2">Aspect Ratio</label>
                        <Select 
                          value={selectedAspectRatio} 
                          onValueChange={setSelectedAspectRatio}
                        >
                          <SelectTrigger className="bg-promogenie-600 text-white border-promogenie-500">
                            <SelectValue placeholder="Select aspect ratio" />
                          </SelectTrigger>
                          <SelectContent>
                            {aspectRatios.map((ratio) => (
                              <SelectItem key={ratio.value} value={ratio.value}>
                                {ratio.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-white mb-2">Scene Description</label>
                        <Textarea 
                          value={promptText}
                          onChange={(e) => setPromptText(e.target.value)}
                          placeholder="Describe the setting, style, mood, and any specific details..."
                          className="min-h-[100px] bg-promogenie-600 text-white border-promogenie-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white text-xl font-semibold mb-3">Pick Your Influencer</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {influencers.map(influencer => (
                      <div
                        key={influencer.id}
                        className={`rounded-lg overflow-hidden cursor-pointer transition-all ${
                          selectedInfluencer === influencer.id 
                            ? 'ring-4 ring-promogenie-300 transform scale-105' 
                            : 'border border-promogenie-500 hover:border-promogenie-300'
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
                        <div className="p-2 bg-promogenie-600">
                          <p className="text-white text-sm font-medium truncate">{influencer.name}</p>
                          <p className="text-promogenie-300 text-xs">{influencer.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end items-center">
                    <p className="text-promogenie-300 italic mr-4">Create your own influencer... 
                      <span className="ml-1 text-promogenie-200 font-medium">Coming Soon</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4">
                <div>
                  <p className="text-white">Cost: <span className="text-promogenie-300 font-semibold">5 Wishes</span></p>
                </div>
                <Button 
                  className="bg-promogenie-500 hover:bg-promogenie-400 text-white px-8"
                  onClick={handleImageGeneration}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    'Generate Images'
                  )}
                </Button>
              </div>
              
              {generatedImages.length > 0 && (
                <div>
                  <h3 className="text-white text-xl font-semibold mb-3">Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {generatedImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <img 
                          src={image} 
                          alt={`Generated ${index}`} 
                          className="w-full aspect-square object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <Button 
                            onClick={() => handleImageSelect(image)}
                            variant="outline" 
                            className="bg-white text-promogenie-800 hover:bg-promogenie-100"
                          >
                            Select for Video
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>
            
            {/* Video Creation Tab */}
            <TabsContent value="video" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {selectedImage ? (
                    <div>
                      <h3 className="text-white text-xl font-semibold mb-3">Selected Image</h3>
                      <img 
                        src={selectedImage} 
                        alt="Selected for video" 
                        className="rounded-lg max-h-64 mx-auto"
                      />
                    </div>
                  ) : (
                    <div className="bg-promogenie-600 rounded-lg p-8 text-center">
                      <p className="text-white">Please select an image from the Image Generation tab first</p>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-3">Ad Script</h3>
                    <Textarea 
                      value={scriptText}
                      onChange={(e) => setScriptText(e.target.value)}
                      placeholder="Write your ad script here (max 12 seconds when read)"
                      className="min-h-[150px] bg-promogenie-600 text-white border-promogenie-500"
                    />
                    <p className="text-promogenie-300 mt-2 text-sm">
                      {scriptText.split(' ').length} words (recommended: max {videoLength === "6" ? "15" : "30"} words for {videoLength} seconds)
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-3">Video Length</h3>
                    <div className="flex space-x-4">
                      <Button
                        variant={videoLength === "6" ? "default" : "outline"}
                        className={videoLength === "6" ? "bg-promogenie-500" : "border-promogenie-500 text-white"}
                        onClick={() => setVideoLength("6")}
                      >
                        6 seconds
                      </Button>
                      <Button
                        variant={videoLength === "12" ? "default" : "outline"}
                        className={videoLength === "12" ? "bg-promogenie-500" : "border-promogenie-500 text-white"}
                        onClick={() => setVideoLength("12")}
                      >
                        12 seconds
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white text-xl font-semibold mb-3">Pick Your Voice</h3>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {voices.map((voice) => (
                      <div
                        key={voice.id}
                        className={`p-4 rounded-lg cursor-pointer transition-all ${
                          selectedVoice === voice.id 
                            ? 'bg-promogenie-500 text-white border-promogenie-300' 
                            : 'bg-promogenie-600 text-promogenie-200 border border-promogenie-500 hover:border-promogenie-300 hover:text-white'
                        }`}
                        onClick={() => setSelectedVoice(voice.id)}
                      >
                        <p className="font-medium text-center">{voice.name}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end items-center">
                    <p className="text-promogenie-300 italic mr-4">Create your own voice... 
                      <span className="ml-1 text-promogenie-200 font-medium">Coming Soon</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4">
                <div>
                  <p className="text-white">Cost: <span className="text-promogenie-300 font-semibold">{calculateWishCost()} Wishes</span></p>
                </div>
                <Button 
                  className="bg-promogenie-500 hover:bg-promogenie-400 text-white px-8"
                  onClick={handleVideoGeneration}
                  disabled={isGenerating || !selectedImage}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    'Generate Video'
                  )}
                </Button>
              </div>
            </TabsContent>
            
            {/* Export Tab */}
            <TabsContent value="export" className="space-y-8">
              {generatedVideo ? (
                <>
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-3">Your Video</h3>
                    <div className="aspect-video bg-promogenie-600 rounded-lg overflow-hidden flex items-center justify-center relative">
                      <img 
                        src={generatedVideo} 
                        alt="Generated video" 
                        className="max-w-full max-h-full" 
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button 
                          className="bg-white text-promogenie-800 rounded-full w-16 h-16 flex items-center justify-center"
                        >
                          <Video className="h-8 w-8" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-3">Post Processing</h3>
                    <div className="p-4 bg-promogenie-600 rounded-lg">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center">
                          <button className="flex items-center space-x-2 text-promogenie-300 cursor-not-allowed" disabled>
                            <span>Style</span>
                          </button>
                          <span className="ml-2 text-promogenie-300 text-sm bg-promogenie-500 px-2 py-0.5 rounded">Coming Soon</span>
                        </div>
                        <div className="flex items-center">
                          <button className="flex items-center space-x-2 text-promogenie-300 cursor-not-allowed" disabled>
                            <span>Upscale</span>
                          </button>
                          <span className="ml-2 text-promogenie-300 text-sm bg-promogenie-500 px-2 py-0.5 rounded">Coming Soon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-3">Share & Download</h3>
                    <div className="flex space-x-4">
                      <Button 
                        className="bg-promogenie-500 hover:bg-promogenie-400 text-white"
                        onClick={handleDownload}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-promogenie-500 text-white hover:bg-promogenie-600"
                        onClick={handleShare}
                      >
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-16">
                  <Video className="h-16 w-16 text-promogenie-400 mb-4" />
                  <p className="text-white text-lg mb-2">Generate a video first</p>
                  <p className="text-promogenie-300">Go to the Video Creation tab to generate your video</p>
                  <Button 
                    className="mt-6 bg-promogenie-500 hover:bg-promogenie-400 text-white"
                    onClick={() => setActiveTab("video")}
                  >
                    Go to Video Creation
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
