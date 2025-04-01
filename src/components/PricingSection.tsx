
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PricingSectionProps {
  hideHeading?: boolean;
}

const PricingSection = ({ hideHeading = false }: PricingSectionProps) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  
  // Pricing data with both monthly and annual options
  const pricingData = {
    starter: {
      monthly: 19,
      annually: Math.round(19 * 10) // 17% discount (approximately 10 months)
    },
    pro: {
      monthly: 79,
      annually: Math.round(79 * 10)
    },
    team: {
      monthly: 199,
      annually: Math.round(199 * 10)
    }
  };
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {!hideHeading && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600">
              Choose the plan that best suits your needs. No hidden fees, cancel anytime.
            </p>
          </div>
        )}
        
        {/* Billing toggle */}
        <div className="flex flex-col items-center justify-center gap-4 mb-12">
          <ToggleGroup
            type="single"
            value={billingCycle}
            onValueChange={(value) => value && setBillingCycle(value as 'monthly' | 'annually')}
            className="bg-gray-100 p-1 rounded-full border"
          >
            <ToggleGroupItem 
              value="monthly" 
              className="data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm rounded-full px-6 py-2"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="annually" 
              className="data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-sm rounded-full px-6 py-2"
            >
              Annually <span className="text-green-600 text-xs ml-1 font-medium">(Save 17%)</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Starter Plan */}
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-4">
              <CardDescription className="text-center uppercase text-xs font-medium">
                For Small Businesses & Freelancers
              </CardDescription>
              <CardTitle className="text-xl font-bold text-center">Starter</CardTitle>
              <div className="flex items-center justify-center gap-1 mt-2">
                <span className="text-4xl font-bold">${billingCycle === 'monthly' ? pricingData.starter.monthly : pricingData.starter.annually}</span>
                <span className="text-gray-500 text-sm">/{billingCycle === 'monthly' ? 'mo' : 'year'}</span>
              </div>
              <CardDescription className="text-center mt-2">
                Perfect for those who just begin their journey.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="mb-4 flex items-center">
                <span className="text-2xl font-semibold">10</span>
                <span className="ml-2 text-gray-600">Wishes per month</span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>3 AI influencers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>720p video quality</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>6 second videos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Email support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-2">
              <Button asChild variant="outline" className="w-full">
                <Link to="/signup">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Pro Plan */}
          <Card className="border-2 border-primary shadow-md hover:shadow-lg transform scale-105 transition-all relative">
            <Badge className="absolute -top-3 right-4 bg-primary hover:bg-primary">BEST VALUE</Badge>
            <CardHeader className="pb-4">
              <CardDescription className="text-center uppercase text-xs font-medium">
                For Boutique Agencies & Startup Brands
              </CardDescription>
              <CardTitle className="text-xl font-bold text-center">Pro</CardTitle>
              <div className="flex items-center justify-center gap-1 mt-2">
                <span className="text-4xl font-bold">${billingCycle === 'monthly' ? pricingData.pro.monthly : pricingData.pro.annually}</span>
                <span className="text-gray-500 text-sm">/{billingCycle === 'monthly' ? 'mo' : 'year'}</span>
              </div>
              <CardDescription className="text-center mt-2">
                Designed for marketers aiming for more flexibility and options.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="mb-4 flex items-center">
                <span className="text-2xl font-semibold">50</span>
                <span className="ml-2 text-gray-600">Wishes per month</span>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>All 8 AI influencers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>1080p HD video quality</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>12 second videos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Priority support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-2">
              <Button asChild className="w-full">
                <Link to="/signup">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Team Plan */}
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-4">
              <CardDescription className="text-center uppercase text-xs font-medium">
                For Creative Agencies & E-commerce Brands
              </CardDescription>
              <CardTitle className="text-xl font-bold text-center">Team</CardTitle>
              <div className="flex items-center justify-center gap-1 mt-2">
                <span className="text-4xl font-bold">${billingCycle === 'monthly' ? pricingData.team.monthly : pricingData.team.annually}</span>
                <span className="text-gray-500 text-sm">/{billingCycle === 'monthly' ? 'mo' : 'year'}</span>
              </div>
              <CardDescription className="text-center mt-2">
                Ideal for teams with regular advertising needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="mb-4 flex items-center">
                <span className="text-2xl font-semibold">150</span>
                <span className="ml-2 text-gray-600">Wishes per month</span>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom AI influencer creation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>4K Ultra HD video quality</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>12 second videos with post-processing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-2">
              <Button asChild variant="outline" className="w-full">
                <Link to="/signup">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Enterprise Plan */}
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-4">
              <CardDescription className="text-center uppercase text-xs font-medium">
                For Large-scale Ad Generation Needs
              </CardDescription>
              <CardTitle className="text-xl font-bold text-center">Enterprise</CardTitle>
              <div className="flex items-center justify-center gap-1 mt-2">
                <span className="text-2xl font-bold">Let's Talk</span>
              </div>
              <CardDescription className="text-center mt-2">
                Tell us what you need, and we'll tailor our solutions.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="mb-4 flex items-center">
                <span className="font-semibold">As Many As You Need</span>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom AI influencer creation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>4K Ultra HD video quality</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>12 second videos with post-processing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-2">
              <Button asChild variant="secondary" className="w-full bg-gray-800 hover:bg-gray-900 text-white">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
