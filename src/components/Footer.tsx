
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 bg-promogenie-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="font-display font-bold text-xl text-promogenie-600">PromoGenie</span>
            </Link>
            <p className="text-gray-600 mb-6">
              AI-powered marketing assets for modern businesses. Create stunning product photos, videos, and social media content in seconds.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-promogenie-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-promogenie-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-promogenie-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-promogenie-600 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-promogenie-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/demos" className="text-gray-600 hover:text-promogenie-600 transition-colors">
                  Demos
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-gray-600 hover:text-promogenie-600 transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-promogenie-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-promogenie-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-promogenie-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-promogenie-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-promogenie-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-promogenie-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-promogenie-600 transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} PromoGenie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
