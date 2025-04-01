
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      annually: 190
    },
    pro: {
      monthly: 79,
      annually: 790
    },
    team: {
      monthly: 199,
      annually: 1990
    }
  };

  // Function to handle toggle change
  const handleToggleChange = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'annually' : 'monthly');
    console.info('Annual pricing selected:', billingCycle === 'monthly');
  };
  
  return (
    <section className="py-16 md:py-24 bg-white">
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
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            <span className={`font-medium ${billingCycle === 'monthly' ? 'text-primary' : 'text-gray-500'}`}>Monthly</span>
            
            <div 
              className="w-14 h-7 flex items-center bg-gray-200 rounded-full p-1 cursor-pointer"
              onClick={handleToggleChange}
            >
              <div 
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                  billingCycle === 'annually' ? 'translate-x-7' : ''
                }`}
              />
            </div>
            
            <span className={`font-medium flex items-center ${billingCycle === 'annually' ? 'text-primary' : 'text-gray-500'}`}>
              Annually <span className="text-green-600 text-xs ml-1 font-medium">(Save 17%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Starter Plan */}
          <Card className="border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <CardHeader className="pb-4 text-center">
              <CardDescription className="uppercase text-xs font-medium mb-2">
                FOR SMALL BUSINESSES &<br />FREELANCERS
              </CardDescription>
              <CardTitle className="text-xl font-bold">Starter</CardTitle>
              <div className="mt-4">
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-black">${billingCycle === 'monthly' ? pricingData.starter.monthly : pricingData.starter.annually}</span>
                  <span className="text-gray-500 text-sm ml-1">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
              </div>
              <CardDescription className="mt-2">
                Perfect for those who just begin their journey.
              </CardDescription>
            </CardHeader>
            
            <div className="border-t border-gray-100 my-2"></div>
            
            <CardContent className="pt-5">
              <div className="mb-4">
                <div className="flex items-center">
                  <span className="text-2xl font-semibold">10</span>
                  <span className="ml-2 text-gray-600">Wishes per month</span>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
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
          <Card className="border-2 border-primary shadow-md hover:shadow-lg relative">
            <div className="absolute top-0 right-0 left-0">
              <Badge className="absolute top-0 right-6 rounded-t-none rounded-b-md bg-primary hover:bg-primary text-white px-4 py-1">
                BEST VALUE
              </Badge>
            </div>
            <CardHeader className="pb-4 text-center">
              <CardDescription className="uppercase text-xs font-medium mb-2">
                FOR BOUTIQUE AGENCIES &<br />STARTUP BRANDS
              </CardDescription>
              <CardTitle className="text-xl font-bold">Pro</CardTitle>
              <div className="mt-4">
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-black">${billingCycle === 'monthly' ? pricingData.pro.monthly : pricingData.pro.annually}</span>
                  <span className="text-gray-500 text-sm ml-1">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
              </div>
              <CardDescription className="mt-2">
                Designed for marketers aiming for more flexibility and options.
              </CardDescription>
            </CardHeader>
            
            <div className="border-t border-gray-100 my-2"></div>
            
            <CardContent className="pt-5">
              <div className="mb-4">
                <div className="flex items-center">
                  <span className="text-2xl font-semibold">50</span>
                  <span className="ml-2 text-gray-600">Wishes per month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mt-6">
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
          <Card className="border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <CardHeader className="pb-4 text-center">
              <CardDescription className="uppercase text-xs font-medium mb-2">
                FOR CREATIVE AGENCIES &<br />E-COMMERCE BRANDS
              </CardDescription>
              <CardTitle className="text-xl font-bold">Team</CardTitle>
              <div className="mt-4">
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-black">${billingCycle === 'monthly' ? pricingData.team.monthly : pricingData.team.annually}</span>
                  <span className="text-gray-500 text-sm ml-1">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
              </div>
              <CardDescription className="mt-2">
                Ideal for teams with regular advertising needs.
              </CardDescription>
            </CardHeader>
            
            <div className="border-t border-gray-100 my-2"></div>
            
            <CardContent className="pt-5">
              <div className="mb-4">
                <div className="flex items-center">
                  <span className="text-2xl font-semibold">150</span>
                  <span className="ml-2 text-gray-600">Wishes per month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mt-6">
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
          <Card className="border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <CardHeader className="pb-4 text-center">
              <CardDescription className="uppercase text-xs font-medium mb-2">
                FOR LARGE-SCALE AD<br />GENERATION NEEDS
              </CardDescription>
              <CardTitle className="text-xl font-bold">Enterprise</CardTitle>
              <div className="mt-4">
                <div className="flex items-center justify-center">
                  <span className="text-2xl font-bold">Let's Talk</span>
                </div>
              </div>
              <CardDescription className="mt-2">
                Tell us what you need, and we'll tailor our solutions.
              </CardDescription>
            </CardHeader>
            
            <div className="border-t border-gray-100 my-2"></div>
            
            <CardContent className="pt-5">
              <div className="mb-4">
                <div className="font-semibold">As Many As You Need</div>
              </div>
              
              <ul className="space-y-3 mt-6">
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
