
import React from 'react';

const testimonials = [
  {
    content: "PromoGenie revolutionized our marketing workflow. We've cut our content creation time by 80% while producing more engaging ads than ever before.",
    author: "Sarah Johnson",
    role: "Marketing Director, FashionBrand",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    content: "As a small business owner, I couldn't afford professional photoshoots. PromoGenie lets me create studio-quality product images that convert much better than my amateur photos.",
    author: "Michael Chen",
    role: "Founder, EcoLiving",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    content: "The AI influencer videos are incredible. Our engagement rates jumped 35% when we started using them in our social media campaigns. Worth every penny!",
    author: "Jessica Martinez",
    role: "Social Media Manager, BeautyBox",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-promogenie-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">
            Join thousands of businesses transforming their marketing with PromoGenie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg relative fancy-border-gradient">
              <div className="mb-6">
                <svg width="45" height="36" className="text-promogenie-200" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 18H9C9 12.375 13.5 7.875 19.125 7.875V11.25C15.75 11.25 13.5 13.5 13.5 18ZM27 18H22.5C22.5 12.375 27 7.875 32.625 7.875V11.25C29.25 11.25 27 13.5 27 18Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
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
