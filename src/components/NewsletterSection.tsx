
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
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Stay updated with the latest AI marketing trends, tips, and insights delivered directly to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
            <Button 
              type="submit" 
              className="w-full bg-promogenie-600 hover:bg-promogenie-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
            <p className="text-gray-500 text-sm mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
