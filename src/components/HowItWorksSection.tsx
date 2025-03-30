
import React from 'react';
import { Upload, Sliders, Share2 } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-8 w-8 text-white" />,
    number: 1,
    title: "Upload Your Product Photo",
    description: "Simply upload a photo of your product. Our AI will analyze it and understand key features automatically."
  },
  {
    icon: <Sliders className="h-8 w-8 text-white" />,
    number: 2,
    title: "Customize Your Ad",
    description: "Choose from our virtual influencers, select a style (enthusiastic, professional, quirky), and adjust key messaging."
  },
  {
    icon: <Share2 className="h-8 w-8 text-white" />,
    number: 3,
    title: "Download & Share",
    description: "Get your professionally edited video ad with voiceover, captioning, and platform-optimized formatting ready to post."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-xl font-medium text-promogenie-600 mb-8">Simple As 1-2-3</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-promogenie-600 flex items-center justify-center mb-6 shadow-lg relative z-10">
                {step.icon}
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gray-200 z-0"></div>
              )}
              
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
