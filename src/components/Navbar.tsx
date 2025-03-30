
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getTestimonialsLink = () => {
    if (location.pathname === '/') {
      return '/#testimonials';
    } else {
      return '/#testimonials';
    }
  };

  const handleTestimonialsClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm py-4 w-full z-50 fixed top-0">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-promogenie-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="font-display font-bold text-xl text-promogenie-600">PromoGenie</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-promogenie-600 transition-colors">
            Home
          </Link>
          <Link to="/features" className="font-medium text-gray-700 hover:text-promogenie-600 transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="font-medium text-gray-700 hover:text-promogenie-600 transition-colors">
            Pricing
          </Link>
          <Link 
            to={getTestimonialsLink()} 
            className="font-medium text-gray-700 hover:text-promogenie-600 transition-colors"
            onClick={handleTestimonialsClick}
          >
            Testimonials
          </Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-promogenie-600 transition-colors">
            About
          </Link>
          <Link to="/login" className="px-4 py-2 text-promogenie-600 border border-promogenie-600 rounded-md font-medium hover:bg-promogenie-50 transition-colors">
            Login
          </Link>
          <Link to="/signup" className="px-4 py-2 bg-promogenie-600 text-white rounded-md font-medium hover:bg-promogenie-700 transition-colors button-shine">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-500 hover:text-promogenie-600 focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-5 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="font-medium text-gray-700 hover:text-promogenie-600 transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/features" className="font-medium text-gray-700 hover:text-promogenie-600 transition-colors" onClick={toggleMenu}>
              Features
            </Link>
            <Link to="/pricing" className="font-medium text-gray-700 hover:text-promogenie-600 transition-colors" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link 
              to={getTestimonialsLink()} 
              className="font-medium text-gray-700 hover:text-promogenie-600 transition-colors"
              onClick={handleTestimonialsClick}
            >
              Testimonials
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-promogenie-600 transition-colors" onClick={toggleMenu}>
              About
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Link to="/login" className="w-full px-4 py-2 text-center text-promogenie-600 border border-promogenie-600 rounded-md font-medium hover:bg-promogenie-50 transition-colors" onClick={toggleMenu}>
                Login
              </Link>
              <Link to="/signup" className="w-full px-4 py-2 text-center bg-promogenie-600 text-white rounded-md font-medium hover:bg-promogenie-700 transition-colors button-shine" onClick={toggleMenu}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
