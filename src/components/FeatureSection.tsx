
import React from 'react';
import { Camera, Image, Video, Mic, Sparkles, RefreshCw, Palette, Users } from 'lucide-react';

const features = [
  {
    icon: <Camera className="h-6 w-6 text-promogenie-600" />,
    title: "Upload Any Photo",
    description: "Upload photos taken with any camera. No need for professional equipment or transparent backgrounds."
  },
  {
    icon: <Image className="h-6 w-6 text-promogenie-600" />,
    title: "Professional Images",
    description: "Transform regular photos into professional studio-quality product shots automatically."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-promogenie-600" />,
    title: "Creative Scenes",
    description: "Place your products in beautiful, contextually relevant environments like beaches or jungles."
  },
  {
    icon: <Users className="h-6 w-6 text-promogenie-600" />,
    title: "AI Influencers",
    description: "Generate realistic influencers using or wearing your products in diverse settings."
  },
  {
    icon: <Video className="h-6 w-6 text-promogenie-600" />,
    title: "Video Generation",
    description: "Convert your static images into engaging video content with smooth transitions."
  },
  {
    icon: <Mic className="h-6 w-6 text-promogenie-600" />,
    title: "Lip-Sync Technology",
    description: "Add voice with perfect lip synchronization to your AI influencer videos."
  },
  {
    icon: <Palette className="h-6 w-6 text-promogenie-600" />,
    title: "Customizable Prompts",
    description: "Fine-tune your generations with custom prompts to match your brand vision."
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-promogenie-600" />,
    title: "Unlimited Variants",
    description: "Generate multiple variations to find the perfect creative for your campaign."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Product Marketing</h2>
          <p className="text-lg text-gray-600">
            Our AI-powered platform turns simple product photos into professional ad creatives, saving you thousands on photoshoots and content creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group hover:border-promogenie-200">
              <div className="h-12 w-12 rounded-lg bg-promogenie-100 flex items-center justify-center mb-4 group-hover:bg-promogenie-200 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
