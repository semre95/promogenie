
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import DemoSection from '../components/DemoSection';
import HowItWorksSection from '../components/HowItWorksSection';
import VirtualInfluencersSection from '../components/VirtualInfluencersSection';
import CompetitiveEdgeSection from '../components/CompetitiveEdgeSection';
import PricingSection from '../components/PricingSection';
import TestimonialSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import NewsletterSection from '../components/NewsletterSection';
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
        <TestimonialSection />
        <CTASection />
        <FAQSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
