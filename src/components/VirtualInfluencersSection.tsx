
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const influencers = [
  {
    name: "@TechyTyler",
    role: "Gadget Guru",
    description: "Perfect for tech products, electronics, and innovative gadgets. Tyler delivers enthusiastic yet credible reviews.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "@LuxeLena",
    role: "Lifestyle Expert",
    description: "Ideal for beauty, fashion, and premium products. Lena brings elegance and sophistication to every ad.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "@FitnessMax",
    role: "Wellness Coach",
    description: "The go-to for health, fitness, and supplement products. Max builds trust with his energetic, motivational style.",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  }
];

const VirtualInfluencersSection = () => {
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (influencer) => {
    setSelectedInfluencer(influencer);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Meet Our <span className="text-promogenie-600">Virtual Influencers</span></h2>
          <p className="text-lg text-gray-600">
            AI-generated personalities with authentic human-like appearances and voices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {influencers.map((influencer, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative">
                <div className="h-64 w-full overflow-hidden bg-gray-100">
                  <img 
                    src={influencer.image} 
                    alt={influencer.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-promogenie-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  AI INFLUENCER
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{influencer.name}</h3>
                <p className="text-promogenie-600 font-medium mb-3">{influencer.role}</p>
                <p className="text-gray-600 mb-4">{influencer.description}</p>
                <button 
                  onClick={() => openDialog(influencer)}
                  className="text-promogenie-600 font-medium hover:text-promogenie-700 transition-colors"
                >
                  See Ad
                </button>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {selectedInfluencer && selectedInfluencer.name} Ad Example
              </DialogTitle>
              <DialogDescription>
                Watch how our AI influencer promotes products naturally.
              </DialogDescription>
            </DialogHeader>
            
            <div className="aspect-video bg-black rounded-md flex items-center justify-center">
              <p className="text-white">Video Player Placeholder</p>
            </div>
            
            <button 
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
            >
              <X size={18} />
            </button>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default VirtualInfluencersSection;
