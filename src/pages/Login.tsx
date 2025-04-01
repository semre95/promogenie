
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams } from 'react-router-dom';
import { login, isAuthenticated } from "@/utils/auth";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    try {
      // Use the new login function
      const result = await login(email, password);
      
      if (result) {
        // On successful login
        localStorage.setItem("isAuthenticated", "true");
        
        // Remember user if "remember me" is checked
        if (rememberMe) {
          localStorage.setItem("rememberedUser", JSON.stringify({ email }));
        } else {
          localStorage.removeItem("rememberedUser");
        }
        
        toast({
          title: "Success",
          description: "You have successfully logged in.",
        });
        
        // Redirect to the dashboard
        navigate('/dashboard');
      } else {
        toast({
          title: "Error",
          description: "Invalid credentials.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login.",
        variant: "destructive"
      });
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
          <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <div className="flex items-center space-x-2">
              <Input 
                type="checkbox" 
                id="remember" 
                checked={rememberMe} 
                onChange={(e) => setRememberMe(e.target.checked)} 
              />
              <Label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
                Remember me
              </Label>
            </div>
            <Button disabled={loading} type="submit" className="w-full">
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
