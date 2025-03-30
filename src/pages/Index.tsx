
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import DemoSection from '../components/DemoSection';
import HowItWorksSection from '../components/HowItWorksSection';
import VirtualInfluencersSection from '../components/VirtualInfluencersSection';
import CompetitiveEdgeSection from '../components/CompetitiveEdgeSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        <DemoSection />
        <HowItWorksSection />
        <VirtualInfluencersSection />
        <CompetitiveEdgeSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
