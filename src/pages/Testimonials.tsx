
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director, TechNova",
    content: "PromoGenie has completely transformed our marketing strategy. The AI-generated ads are indistinguishable from those made with real influencers, but at a fraction of the cost. Our engagement rates have increased by 45% since we started using the platform.",
    stars: 5
  },
  {
    name: "David Chen",
    position: "E-commerce Manager, StyleFusion",
    content: "As a small fashion brand, we couldn't afford to hire multiple influencers for our product launches. PromoGenie allowed us to create diverse, professional ads with virtual influencers that resonated with our target audience. Our conversion rates have gone up significantly.",
    stars: 5
  },
  {
    name: "Mia Rodriguez",
    position: "Social Media Strategist, GreenLeaf",
    content: "We were skeptical about using AI for our organic product line, but PromoGenie exceeded our expectations. The virtual influencers feel authentic and their messaging aligns perfectly with our brand values. The platform is also incredibly easy to use.",
    stars: 4
  },
  {
    name: "Thomas Wright",
    position: "CEO, FitLife Supplements",
    content: "PromoGenie has been a game-changer for our supplement business. We can now rapidly produce and test different ad variations across multiple platforms without the hassle of influencer negotiations or expensive video production.",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 bg-gradient-to-b from-promogenie-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Success Stories</h1>
              <p className="text-lg text-gray-600">
                Hear from businesses that have transformed their marketing with PromoGenie.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={18}
                          className={i < testimonial.stars ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
