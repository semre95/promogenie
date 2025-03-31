
import React from 'react';
import { Camera, Image, Video, Mic, Sparkles, RefreshCw, Palette, Users } from 'lucide-react';

const features = [
  {
    icon: <Camera className="h-6 w-6 text-promogenie-600" />,
    title: "Upload Product Photos",
    description: "Start with any product photo. Our AI enhances it and places it in diverse contexts with virtual influencers."
  },
  {
    icon: <Image className="h-6 w-6 text-promogenie-600" />,
    title: "Choose Aspect Ratio",
    description: "Select the perfect format for your platform: square (1:1), portrait (3:4, 9:16), or landscape (16:9, 4:3)."
  },
  {
    icon: <Users className="h-6 w-6 text-promogenie-600" />,
    title: "AI Influencer Selection",
    description: "Choose from our diverse range of AI influencers matched to your product's category and target audience."
  },
  {
    icon: <Palette className="h-6 w-6 text-promogenie-600" />,
    title: "Custom Prompting",
    description: "Describe the exact setting, mood, and context you want for your product promotion."
  },
  {
    icon: <Video className="h-6 w-6 text-promogenie-600" />,
    title: "Video Generation",
    description: "Transform static images into engaging 6 or 12-second videos with your chosen influencer."
  },
  {
    icon: <Mic className="h-6 w-6 text-promogenie-600" />,
    title: "Voice Selection",
    description: "Choose the perfect voice for your ad from our library of professional voiceovers."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-promogenie-600" />,
    title: "Script Creation",
    description: "Write custom ad scripts that your AI influencer will deliver naturally with perfect lip sync."
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-promogenie-600" />,
    title: "Easy Exporting",
    description: "Download your videos in formats optimized for TikTok, Instagram, YouTube, and other platforms."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Future of <span className="text-promogenie-600">Influencer Marketing</span></h2>
          <p className="text-lg text-gray-600">
            Why spend thousands on influencers when AI can create personalized, high-converting videos for you instantly?
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
