
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How realistic are the virtual influencers?",
    answer: "Our virtual influencers are generated using cutting-edge AI that combines realistic facial animation with natural voice synthesis. The result is indistinguishable from human influencers in video format. They have consistent personalities and styles that audiences connect with, despite being AI-generated."
  },
  {
    question: "Can I customize the script and voice tones?",
    answer: "Absolutely! Our platform offers full control over the messaging. You can either let our AI generate compelling copy based on your product, edit it yourself, or start from scratch. For voiceovers, choose from multiple tones (enthusiastic, serious, friendly) and pacing options to match your brand voice."
  },
  {
    question: "What platforms are the ads optimized for?",
    answer: "Each ad is automatically formatted for optimal performance on TikTok, Instagram (Reels and Stories), YouTube Shorts, and Facebook. We adjust aspect ratios, add captions where needed, and even incorporate platform-specific trends and hooks to maximize engagement for each channel."
  },
  {
    question: "How does the pricing compare to human influencers?",
    answer: "Our pricing represents 90-95% savings compared to human influencers of similar audience sizes. Even micro-influencers typically charge $100-500 per post, while our virtual influencers with \"millions of followers\" cost just $19 per ad (or less with volume). Plus, there's no negotiation, no contracts, and no unpredictable performance."
  }
];

const FAQSection = () => {
  // Function to bypass login and go to dashboard
  const handleBypassLogin = () => {
    // Set authenticated flag in localStorage to bypass login check
    localStorage.setItem("isAuthenticated", "true");
    
    // Navigate to dashboard HTML page
    window.location.href = "/dashboard.html";
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <Button 
              onClick={handleBypassLogin} 
              className="bg-promogenie-600 hover:bg-promogenie-700 text-white"
            >
              Test Dashboard Access
            </Button>
          </div>
          
          <Accordion type="single" collapsible className="mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="mb-6 bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="text-left text-lg font-medium py-5 px-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 py-5 px-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link to="/contact" className="text-promogenie-600 font-medium hover:text-promogenie-700 transition-colors">
              Contact our team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
