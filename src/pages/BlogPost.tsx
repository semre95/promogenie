
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, ArrowRight, Facebook, Twitter, Linkedin, Share2, Clock, User, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { blogData } from '../data/blogData';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the current post
  const currentPost = blogData.find(post => post.slug === slug);
  
  if (!currentPost) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Button onClick={() => navigate('/blog')}>Return to Blog</Button>
      </div>
    );
  }
  
  // Find index of current post
  const currentIndex = blogData.findIndex(post => post.slug === slug);
  const prevPost = currentIndex > 0 ? blogData[currentIndex - 1] : null;
  const nextPost = currentIndex < blogData.length - 1 ? blogData[currentIndex + 1] : null;
  
  // Get related posts (excluding current)
  const relatedPosts = blogData
    .filter(post => post.category === currentPost.category && post.slug !== slug)
    .slice(0, 3);
    
  // If we don't have enough related posts in the same category, add some from other categories
  if (relatedPosts.length < 3) {
    const otherPosts = blogData
      .filter(post => post.category !== currentPost.category && post.slug !== slug)
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{currentPost.title} | PromoGenie Blog</title>
        <meta name="description" content={currentPost.excerpt} />
        <meta name="keywords" content={`${currentPost.category}, AI marketing, PromoGenie, ${currentPost.keywords}`} />
        <link rel="canonical" href={`https://promogenie.co/blog/${slug}`} />
        <meta property="og:title" content={`${currentPost.title} | PromoGenie Blog`} />
        <meta property="og:description" content={currentPost.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://promogenie.co/blog/${slug}`} />
        <meta property="og:image" content={`https://promogenie.co${currentPost.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentPost.title} />
        <meta name="twitter:description" content={currentPost.excerpt} />
        <meta name="twitter:image" content={`https://promogenie.co${currentPost.image}`} />
        <meta property="article:published_time" content={currentPost.date} />
        <meta property="article:section" content={currentPost.category} />
        <meta property="article:tag" content={currentPost.keywords} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24">
        <article className="pb-16">
          {/* Hero section */}
          <div className="w-full bg-gradient-to-b from-promogenie-50 to-white py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Breadcrumb className="mb-6">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink as={Link} to="/blog">Blog</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink>{currentPost.title}</BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-promogenie-100 text-promogenie-700 rounded-full text-sm font-medium">
                    {currentPost.category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{currentPost.title}</h1>
                
                <div className="flex items-center gap-6 text-gray-600 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{currentPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{currentPost.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{currentPost.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="container mx-auto px-4 -mt-6">
            <div className="max-w-4xl mx-auto">
              <div className="w-full h-[400px] mb-10 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={currentPost.image} 
                  alt={currentPost.imageAlt} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: currentPost.content }} />
              
              {/* Tags */}
              <div className="mt-12 flex flex-wrap gap-2">
                {currentPost.tags.map((tag, index) => (
                  <span key={index} className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
              
              {/* Author */}
              <div className="mt-12 p-6 bg-gray-50 rounded-xl flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-promogenie-100 text-promogenie-700 text-xl">
                    {currentPost.author.split(' ').map(n => n.charAt(0)).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-lg">{currentPost.author}</h3>
                  <p className="text-gray-600">{currentPost.authorTitle}</p>
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-12 flex items-center gap-4">
                <span className="font-medium">Share this article:</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on Facebook">
                    <Facebook size={18} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on Twitter">
                    <Twitter size={18} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on LinkedIn">
                    <Linkedin size={18} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" aria-label="More sharing options">
                    <Share2 size={18} />
                  </Button>
                </div>
              </div>
              
              {/* Prev/Next Navigation */}
              <div className="mt-16 border-t border-b border-gray-200 py-8 grid md:grid-cols-2 gap-6">
                {prevPost ? (
                  <Link to={`/blog/${prevPost.slug}`} className="flex flex-col group">
                    <span className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                      <ArrowLeft size={14} />
                      Previous Article
                    </span>
                    <span className="font-medium group-hover:text-promogenie-600 transition-colors">{prevPost.title}</span>
                  </Link>
                ) : <div></div>}
                
                {nextPost && (
                  <Link to={`/blog/${nextPost.slug}`} className="flex flex-col text-right group md:ml-auto">
                    <span className="text-sm text-gray-500 flex items-center gap-1 justify-end mb-2">
                      Next Article
                      <ArrowRight size={14} />
                    </span>
                    <span className="font-medium group-hover:text-promogenie-600 transition-colors">{nextPost.title}</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </article>
        
        {/* Related Posts */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-10 text-center">You might also like</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((post) => (
                  <div 
                    key={post.slug} 
                    className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="h-48 bg-gray-100 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.imageAlt} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-promogenie-600 mb-2">{post.category}</p>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        <Link to={`/blog/${post.slug}`} className="text-sm font-medium text-promogenie-600 hover:text-promogenie-700">
                          Read More
                        </Link>
                      </div>
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

export default BlogPost;
