
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 bg-gradient-to-b from-promogenie-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-lg text-gray-600 mb-6">
                Help us shape the future of AI-powered marketing and make content creation accessible to everyone.
              </p>
              <Link to="/contact" className="px-6 py-3 bg-promogenie-600 text-white rounded-md font-medium hover:bg-promogenie-700 transition-colors shadow-md inline-flex items-center">
                View Open Positions
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Work With Us</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="w-16 h-16 bg-promogenie-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-promogenie-600 text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovative Technology</h3>
                  <p className="text-gray-600">
                    Work on cutting-edge AI technology that's transforming the marketing industry.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-promogenie-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-promogenie-600 text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
                  <p className="text-gray-600">
                    Join a rapidly expanding startup with abundant opportunities for career advancement.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-promogenie-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-promogenie-600 text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Flexible Environment</h3>
                  <p className="text-gray-600">
                    Enjoy remote-friendly policies and a culture that values work-life balance.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-center">We're Currently Hiring For:</h3>
                <ul className="space-y-4 max-w-xl mx-auto">
                  <li className="p-4 bg-white rounded border border-gray-100 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">Senior ML Engineer</h4>
                      <p className="text-sm text-gray-600">Remote • Full-time</p>
                    </div>
                    <Link to="/contact" className="text-promogenie-600 font-medium hover:text-promogenie-700">
                      Apply Now
                    </Link>
                  </li>
                  <li className="p-4 bg-white rounded border border-gray-100 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">Product Marketing Manager</h4>
                      <p className="text-sm text-gray-600">San Francisco • Full-time</p>
                    </div>
                    <Link to="/contact" className="text-promogenie-600 font-medium hover:text-promogenie-700">
                      Apply Now
                    </Link>
                  </li>
                  <li className="p-4 bg-white rounded border border-gray-100 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">Frontend Developer</h4>
                      <p className="text-sm text-gray-600">Remote • Full-time</p>
                    </div>
                    <Link to="/contact" className="text-promogenie-600 font-medium hover:text-promogenie-700">
                      Apply Now
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
