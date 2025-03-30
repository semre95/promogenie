
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { 
  Bookmark, 
  Share2 
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>PromoGenie Blog | AI-Powered Marketing Insights & Tips</title>
        <meta name="description" content="Discover the latest trends, tips, and case studies about AI-generated marketing content and virtual influencers in the PromoGenie blog." />
        <meta name="keywords" content="AI marketing, virtual influencers, content optimization, PromoGenie blog" />
        <link rel="canonical" href="https://promogenie.co/blog" />
        <meta property="og:title" content="PromoGenie Blog | AI-Powered Marketing Insights" />
        <meta property="og:description" content="Discover the latest trends, tips, and case studies about AI-generated marketing content and virtual influencers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://promogenie.co/blog" />
        <meta property="og:image" content="https://promogenie.co/blog-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PromoGenie Blog | AI Marketing Insights" />
        <meta name="twitter:description" content="Discover the latest trends, tips, and case studies about AI-generated marketing content." />
        <meta name="twitter:image" content="https://promogenie.co/blog-preview.jpg" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 bg-gradient-to-b from-promogenie-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Breadcrumb className="mb-6 justify-center">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
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
                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img 
                      src="/lovable-uploads/photo-1487058792275-0ad4aaf24ca7.jpg" 
                      alt="AI-generated virtual influencers with colorful digital overlay" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-promogenie-600 mb-2">Marketing Trends</p>
                    <h3 className="text-xl font-bold mb-2">The Rise of Virtual Influencers in Digital Marketing</h3>
                    <p className="text-gray-600 mb-4">
                      Explore how AI-generated virtual influencers are changing the landscape of digital marketing.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">June 15, 2023</span>
                      <Link to="/blog/virtual-influencers-digital-marketing" className="text-sm font-medium text-promogenie-600 hover:text-promogenie-700">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Blog Post 2 */}
                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img 
                      src="/lovable-uploads/photo-1498050108023-c5249f4df085.jpg" 
                      alt="Optimizing AI-generated content on a computer screen" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-promogenie-600 mb-2">Tips & Tricks</p>
                    <h3 className="text-xl font-bold mb-2">5 Ways to Optimize Your AI-Generated Content</h3>
                    <p className="text-gray-600 mb-4">
                      Learn how to get the most out of your AI-generated marketing content with these optimization tips.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">May 28, 2023</span>
                      <Link to="/blog/optimize-ai-generated-content" className="text-sm font-medium text-promogenie-600 hover:text-promogenie-700">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Blog Post 3 */}
                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img 
                      src="/lovable-uploads/photo-1581091226825-a6a2a5aee158.jpg" 
                      alt="Fashion brand success story with PromoGenie" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-promogenie-600 mb-2">Case Study</p>
                    <h3 className="text-xl font-bold mb-2">How FashionForward Increased Sales by 78% with PromoGenie</h3>
                    <p className="text-gray-600 mb-4">
                      A detailed look at how one fashion brand leveraged AI-generated influencer content to boost their sales.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">May 12, 2023</span>
                      <Link to="/blog/fashionforward-case-study" className="text-sm font-medium text-promogenie-600 hover:text-promogenie-700">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Blog Post 4 */}
                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img 
                      src="/lovable-uploads/photo-1461749280684-dccba630e2f6.jpg" 
                      alt="Future of AI in Content Creation" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-promogenie-600 mb-2">Future Trends</p>
                    <h3 className="text-xl font-bold mb-2">The Future of AI in Content Creation: 2024 and Beyond</h3>
                    <p className="text-gray-600 mb-4">
                      What to expect in the rapidly evolving world of AI-generated content and how to stay ahead of the curve.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">April 23, 2023</span>
                      <Link to="/blog/future-ai-content-creation" className="text-sm font-medium text-promogenie-600 hover:text-promogenie-700">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Blog Post 5 */}
                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img 
                      src="/lovable-uploads/photo-1488590528505-98d2b5aba04b.jpg" 
                      alt="AI Ethics in Marketing" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-promogenie-600 mb-2">Ethics & Compliance</p>
                    <h3 className="text-xl font-bold mb-2">Ethical Considerations in AI-Powered Marketing</h3>
                    <p className="text-gray-600 mb-4">
                      Navigating the ethical landscape of AI in marketing: transparency, bias, and best practices.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">April 10, 2023</span>
                      <Link to="/blog/ethical-ai-marketing" className="text-sm font-medium text-promogenie-600 hover:text-promogenie-700">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Blog Post 6 */}
                <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img 
                      src="/lovable-uploads/photo-1649972904349-6e44c42644a7.jpg" 
                      alt="Social Media Strategy with AI" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-promogenie-600 mb-2">Social Media</p>
                    <h3 className="text-xl font-bold mb-2">Building a Cohesive Social Media Strategy with AI</h3>
                    <p className="text-gray-600 mb-4">
                      How to leverage AI tools to create an integrated, high-performance social media presence.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">March 25, 2023</span>
                      <Link to="/blog/social-media-ai-strategy" className="text-sm font-medium text-promogenie-600 hover:text-promogenie-700">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-gray-600 mb-8">
                Stay updated with the latest AI marketing trends, tips, and insights delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 border border-gray-300 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-promogenie-600"
                />
                <button className="px-6 py-3 bg-promogenie-600 text-white rounded-md font-medium hover:bg-promogenie-700 transition-colors">
                  Subscribe
                </button>
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
