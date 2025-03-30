
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Former product designer with 15 years of experience in the advertising industry. Alex founded PromoGenie to democratize access to high-quality ad creative.'
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'AI researcher with a PhD from MIT. Sarah leads our technical team and is the architect behind our advanced image generation algorithms.'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Product',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    bio: 'Previously led product at a major digital marketing platform. Michael ensures PromoGenie delivers intuitive, powerful features that marketers love.'
  },
  {
    name: 'Aisha Patel',
    role: 'Creative Director',
    image: 'https://randomuser.me/api/portraits/women/66.jpg',
    bio: 'Award-winning creative director with experience at top advertising agencies. Aisha guides the creative vision behind our AI-generated content.'
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-promogenie-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About PromoGenie</h1>
              <p className="text-lg text-gray-600 mb-8">
                We're democratizing access to professional-quality ad creative through the power of AI
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  PromoGenie was born from a simple observation: creating professional ad creative was too expensive, too time-consuming, and too inaccessible for most businesses.
                </p>
                <p className="text-gray-600 mb-4">
                  Founded in 2023, our mission is to democratize access to high-quality marketing assets by harnessing the power of AI. We believe that every business, regardless of size or budget, deserves access to professional-quality ad creative that drives results.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a simple tool to enhance product photos has evolved into a comprehensive platform that can transform ordinary images into stunning ad creative, complete with AI-generated influencers and videos with perfect lip-sync technology.
                </p>
                <p className="text-gray-600">
                  Today, PromoGenie serves thousands of businesses worldwide, from solo entrepreneurs to enterprise brands, all united by the desire to create compelling marketing content efficiently.
                </p>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="PromoGenie Team" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-promogenie-100 rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
              <p className="text-lg text-gray-600">
                Guided by a commitment to innovation, accessibility, and excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-promogenie-100 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3V19L14 13.5L23 19V3H5Z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 9H5" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 15H5" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Democratize Creativity</h3>
                <p className="text-gray-600">
                  We believe everyone deserves access to professional-quality ad creative, regardless of budget or technical skill. Our platform makes the impossible possible for businesses of all sizes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-promogenie-100 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V12" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8H12.01" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Ethical Innovation</h3>
                <p className="text-gray-600">
                  We push the boundaries of AI technology while maintaining the highest ethical standards. We're committed to transparency about how our technology works and what it can and cannot do.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-promogenie-100 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Success</h3>
                <p className="text-gray-600">
                  Our success is measured by the success of our customers. We're dedicated to providing not just powerful technology, but the support and resources our users need to achieve their marketing goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-lg text-gray-600">
                The talented individuals behind PromoGenie's innovation and success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-promogenie-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-16 bg-promogenie-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're always looking for talented individuals to join our team as we revolutionize the world of advertising creative.
              </p>
              <Link to="/careers" className="px-6 py-3 bg-promogenie-600 text-white rounded-md font-medium hover:bg-promogenie-700 transition-colors button-shine inline-flex items-center">
                <span>View Open Positions</span>
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
