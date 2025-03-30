
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 bg-gradient-to-b from-promogenie-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">PromoGenie Blog</h1>
              <p className="text-lg text-gray-600">
                Insights, tips, and updates from the world of AI-powered marketing.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Blog Post 1 */}
                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <div className="text-gray-400">Feature Image</div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-promogenie-600 mb-2">Marketing Trends</p>
                    <h3 className="text-xl font-bold mb-2">The Rise of Virtual Influencers in Digital Marketing</h3>
                    <p className="text-gray-600 mb-4">
                      Explore how AI-generated virtual influencers are changing the landscape of digital marketing.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">June 15, 2023</span>
                      <Link to="#" className="text-sm font-medium text-promogenie-600 hover:text-promogenie-700">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Blog Post 2 */}
                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <div className="text-gray-400">Feature Image</div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-promogenie-600 mb-2">Tips & Tricks</p>
                    <h3 className="text-xl font-bold mb-2">5 Ways to Optimize Your AI-Generated Content</h3>
                    <p className="text-gray-600 mb-4">
                      Learn how to get the most out of your AI-generated marketing content with these optimization tips.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">May 28, 2023</span>
                      <Link to="#" className="text-sm font-medium text-promogenie-600 hover:text-promogenie-700">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Blog Post 3 */}
                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <div className="text-gray-400">Feature Image</div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-promogenie-600 mb-2">Case Study</p>
                    <h3 className="text-xl font-bold mb-2">How FashionForward Increased Sales by 78% with PromoGenie</h3>
                    <p className="text-gray-600 mb-4">
                      A detailed look at how one fashion brand leveraged AI-generated influencer content to boost their sales.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">May 12, 2023</span>
                      <Link to="#" className="text-sm font-medium text-promogenie-600 hover:text-promogenie-700">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
