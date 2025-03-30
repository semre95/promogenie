
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@promogenie.co';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 bg-gradient-to-b from-promogenie-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about PromoGenie? We're here to help you create amazing AI-generated content.
              </p>
              
              <button 
                onClick={handleEmailClick}
                className="px-8 py-3 bg-promogenie-600 text-white rounded-md font-medium text-lg hover:bg-promogenie-700 transition-colors shadow-lg button-shine flex items-center justify-center mx-auto"
              >
                <Mail className="mr-2" size={20} />
                Email Us at info@promogenie.co
              </button>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-promogenie-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-promogenie-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">info@promogenie.co</p>
                  <button 
                    onClick={handleEmailClick}
                    className="mt-4 text-promogenie-600 font-medium hover:text-promogenie-700"
                  >
                    Send an email
                  </button>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-promogenie-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-promogenie-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-promogenie-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-promogenie-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Support Hours</h3>
                  <p className="text-gray-600">Monday - Friday<br />9am - 5pm PST</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 mb-8">
                Can't find the answer you're looking for? Reach out to our customer support team.
              </p>
              
              <div className="text-center">
                <Link to="/faq" className="px-6 py-3 bg-white border border-promogenie-600 text-promogenie-600 rounded-md font-medium hover:bg-promogenie-50 transition-colors inline-flex items-center">
                  Visit our FAQ page
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
