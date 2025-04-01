
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Info, Share2, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Sample data for creations
const sampleImage = "/lovable-uploads/5920f396-0660-48f6-8ae3-7895df22813d.png";
const sampleVideoThumbnail = "/lovable-uploads/d7e56406-f041-44e5-9e1e-38ae5532b408.png";

const sampleCreations = {
  images: [
    {
      id: "img1",
      url: sampleImage,
      title: "Fashion Product Showcase",
      influencer: "FashionFiona",
      prompt: "A young woman holding a designer handbag in a high-end boutique",
      createdAt: "2023-08-15T14:30:00Z"
    },
    {
      id: "img2",
      url: sampleImage,
      title: "Tech Gadget Review",
      influencer: "TechyTyler",
      prompt: "A tech influencer demonstrating the latest smartphone features",
      createdAt: "2023-08-12T10:15:00Z"
    }
  ],
  videos: [
    {
      id: "vid1",
      thumbnailUrl: sampleVideoThumbnail,
      title: "Fitness Supplements Ad",
      influencer: "FitnessFredy",
      voice: "Energetic Male",
      script: "Boost your workout with our premium supplements designed for maximum performance!",
      length: "6 seconds",
      createdAt: "2023-08-10T16:45:00Z"
    },
    {
      id: "vid2",
      thumbnailUrl: sampleVideoThumbnail,
      title: "Beauty Product Review",
      influencer: "BeautyBella",
      voice: "Professional Female",
      script: "Transform your skincare routine with our advanced formula serum.",
      length: "12 seconds",
      createdAt: "2023-08-05T09:20:00Z"
    }
  ]
};

interface CreationsGalleryProps {
  onEditCreation?: (type: string, item: any) => void;
}

const CreationsGallery: React.FC<CreationsGalleryProps> = ({ onEditCreation }) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("images");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleDownload = (item: any) => {
    toast({
      title: "Download started",
      description: "Your content is being downloaded"
    });
  };

  const handleShare = (item: any) => {
    toast({
      title: "Sharing options",
      description: "Share options dialog will appear here"
    });
  };
  
  const handleEdit = (type: string, item: any) => {
    if (onEditCreation) {
      setIsDialogOpen(false);
      onEditCreation(type, item);
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-promogenie-700">My Creations</h2>
        <p className="text-promogenie-500">View and manage your generated content</p>
      </div>
      
      <Tabs 
        defaultValue="images" 
        value={activeTab} 
        onValueChange={setActiveTab}
      >
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-2">
          <TabsTrigger value="images" className="data-[state=active]:bg-promogenie-600 data-[state=active]:text-white">Images</TabsTrigger>
          <TabsTrigger value="videos" className="data-[state=active]:bg-promogenie-600 data-[state=active]:text-white">Videos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="images" className="mt-6">
          {sampleCreations.images.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sampleCreations.images.map((image) => (
                <div 
                  key={image.id} 
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <img 
                      src={image.url} 
                      alt={image.title} 
                      className="w-full aspect-square object-cover cursor-pointer"
                      onClick={() => {
                        setSelectedItem(image);
                        setIsDialogOpen(true);
                      }}
                    />
                    <div className="absolute bottom-2 right-2 flex space-x-1">
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="h-8 w-8 rounded-full bg-white opacity-80 hover:opacity-100"
                        onClick={() => handleDownload(image)}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="h-8 w-8 rounded-full bg-white opacity-80 hover:opacity-100"
                        onClick={() => {
                          setSelectedItem(image);
                          setIsDialogOpen(true);
                        }}
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-promogenie-700 truncate">{image.title}</h3>
                    <p className="text-xs text-promogenie-500">{formatDate(image.createdAt)}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-promogenie-500">No images created yet.</p>
              <Button 
                className="mt-4 bg-promogenie-600 hover:bg-promogenie-700 text-white"
                onClick={() => onEditCreation && onEditCreation('new', null)}
              >
                Create Your First Image
              </Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="videos" className="mt-6">
          {sampleCreations.videos.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sampleCreations.videos.map((video) => (
                <div 
                  key={video.id} 
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnailUrl} 
                      alt={video.title} 
                      className="w-full aspect-video object-cover cursor-pointer"
                      onClick={() => {
                        setSelectedItem(video);
                        setIsDialogOpen(true);
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-12 w-12 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
                        <Video className="h-6 w-6 text-promogenie-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 flex space-x-1">
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="h-8 w-8 rounded-full bg-white opacity-80 hover:opacity-100"
                        onClick={() => handleDownload(video)}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="h-8 w-8 rounded-full bg-white opacity-80 hover:opacity-100"
                        onClick={() => {
                          setSelectedItem(video);
                          setIsDialogOpen(true);
                        }}
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-promogenie-700 truncate">{video.title}</h3>
                    <p className="text-xs text-promogenie-500">{formatDate(video.createdAt)} · {video.length}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-promogenie-500">No videos created yet.</p>
              <Button 
                className="mt-4 bg-promogenie-600 hover:bg-promogenie-700 text-white"
                onClick={() => onEditCreation && onEditCreation('new', null)}
              >
                Create Your First Video
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
      
      {/* Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-promogenie-700 flex justify-between items-center">
              <span>{selectedItem?.title}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => setIsDialogOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          {selectedItem && (
            <div className="space-y-4">
              <div className="aspect-square max-h-80 mx-auto overflow-hidden rounded-md">
                <img 
                  src={'thumbnailUrl' in selectedItem ? selectedItem.thumbnailUrl : selectedItem.url} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-promogenie-500">Created:</span>
                  <p className="font-medium text-promogenie-700">{formatDate(selectedItem.createdAt)}</p>
                </div>
                <div>
                  <span className="text-promogenie-500">Influencer:</span>
                  <p className="font-medium text-promogenie-700">{selectedItem.influencer}</p>
                </div>
                {'voice' in selectedItem && (
                  <div>
                    <span className="text-promogenie-500">Voice:</span>
                    <p className="font-medium text-promogenie-700">{selectedItem.voice}</p>
                  </div>
                )}
                {'length' in selectedItem && (
                  <div>
                    <span className="text-promogenie-500">Length:</span>
                    <p className="font-medium text-promogenie-700">{selectedItem.length}</p>
                  </div>
                )}
              </div>
              
              <div>
                <span className="text-promogenie-500">{'prompt' in selectedItem ? 'Prompt:' : 'Script:'}</span>
                <p className="mt-1 p-3 bg-gray-50 rounded-md text-sm text-promogenie-700">
                  {('prompt' in selectedItem) ? selectedItem.prompt : selectedItem.script}
                </p>
              </div>
              
              <div className="flex justify-between pt-4 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  className="border-promogenie-300 text-promogenie-700"
                  onClick={() => handleEdit('edit', selectedItem)}
                >
                  Edit & Recreate
                </Button>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    className="border-promogenie-300 text-promogenie-700"
                    onClick={() => handleShare(selectedItem)}
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button 
                    className="bg-promogenie-600 hover:bg-promogenie-700 text-white"
                    onClick={() => handleDownload(selectedItem)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreationsGallery;
