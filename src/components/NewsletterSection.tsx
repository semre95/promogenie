
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Input } from './ui/input';
import { Button } from './ui/button';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email is required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-promogenie-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Marketing Trends</h2>
            <p className="text-gray-600">
              Join our newsletter for exclusive AI marketing insights, tips, and special offers delivered directly to your inbox.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow"
              />
              <Button 
                type="submit" 
                className="bg-promogenie-600 hover:bg-promogenie-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            <p className="text-gray-500 text-sm mt-3">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
