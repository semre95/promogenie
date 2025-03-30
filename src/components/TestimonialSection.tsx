
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    content: "PromoGenie revolutionized our marketing workflow. We've cut our content creation time by 80% while producing more engaging ads than ever before.",
    role: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    content: "As a small business owner, I couldn't afford professional photoshoots. PromoGenie lets me create studio-quality product images that convert much better than my amateur photos.",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    content: "The AI influencer videos are incredible. Our engagement rates jumped 35% when we started using them in our social media campaigns. Worth every penny!",
    role: "Social Media Manager",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-r from-promogenie-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-promogenie-600">Our Customers</h2>
          <p className="text-lg text-gray-600">
            Join thousands of businesses transforming their marketing with PromoGenie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-purple-200 shadow-sm bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-6 text-purple-300 text-4xl font-serif">"</div>
                <p className="text-gray-700 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt="Customer" />
                    <AvatarFallback>C</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center py-2 px-4 bg-white rounded-full shadow-md">
            <div className="flex -space-x-2 mr-4">
              <img src="https://randomuser.me/api/portraits/women/32.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
              <img src="https://randomuser.me/api/portraits/men/44.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
              <img src="https://randomuser.me/api/portraits/women/55.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
              <img src="https://randomuser.me/api/portraits/men/30.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
              <div className="w-8 h-8 rounded-full bg-promogenie-100 flex items-center justify-center border-2 border-white text-xs font-medium text-promogenie-600">
                +5k
              </div>
            </div>
            <span className="text-sm font-medium">Trusted by 5,000+ businesses worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
