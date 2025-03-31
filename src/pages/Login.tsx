
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Setup test account on component mount
  useEffect(() => {
    // For demo purposes only - this ensures the test account is always set up
    // In a production app, this would be handled securely on the server
    localStorage.setItem("testEmail", btoa("test@promogenie.co"));
    localStorage.setItem("testPassword", btoa("prmgn2025*"));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For demo purposes, we check for the test account
    const testEmail = localStorage.getItem("testEmail") ? atob(localStorage.getItem("testEmail") || "") : "";
    const testPassword = localStorage.getItem("testPassword") ? atob(localStorage.getItem("testPassword") || "") : "";

    console.log("Test email from localStorage:", testEmail);
    console.log("Test password from localStorage:", testPassword);
    console.log("Entered email:", email);
    console.log("Entered password:", password);

    // Always allow the test account to login
    if (email === "test@promogenie.co" && password === "prmgn2025*") {
      // Set authentication state
      localStorage.setItem("isAuthenticated", "true");
      
      // Redirect to dashboard
      setTimeout(() => {
        toast({
          title: "Login successful",
          description: "Welcome to PromoGenie Studio!",
        });
        navigate('/dashboard');
      }, 1000);
    } else {
      // Regular failed login
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Login failed",
          description: "Invalid email or password. Try the test account: test@promogenie.co / prmgn2025*",
          variant: "destructive"
        });
      }, 1000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - PromoGenie</title>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow flex items-center justify-center py-16 px-4">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Welcome back</h1>
              <p className="text-gray-600 mt-2">Log in to your PromoGenie account</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <Link to="/forgot-password" className="text-sm text-promogenie-600 hover:text-promogenie-700">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex items-center">
                  <div className="flex items-center">
                    <Checkbox 
                      id="remember-me" 
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-promogenie-600 hover:bg-promogenie-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Logging in...' : 'Log In'}
                </Button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-promogenie-600 hover:text-promogenie-700 font-medium">
                    Sign up
                  </Link>
                </p>
                
                <div className="mt-4 text-sm text-gray-500">
                  <p>For demo purposes, you can use:</p>
                  <p className="font-mono mt-1">test@promogenie.co / prmgn2025*</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Login;
