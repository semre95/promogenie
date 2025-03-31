
import React, { useState } from 'react';
import { 
  CreditCard, 
  User, 
  Download, 
  HelpCircle, 
  LogOut
} from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { 
  Avatar,
  AvatarFallback
} from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface ProfilePopoverProps {
  userEmail: string;
}

const ProfilePopover = ({ userEmail }: ProfilePopoverProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profileOpen, setProfileOpen] = useState(false);
  
  // Get first letter of email for avatar
  const getInitial = (email: string) => {
    return email.charAt(0).toUpperCase();
  };
  
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/login');
  };

  return (
    <Popover open={profileOpen} onOpenChange={setProfileOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center space-x-2">
          <Avatar className="h-8 w-8 bg-promogenie-600">
            <AvatarFallback>{getInitial(userEmail)}</AvatarFallback>
          </Avatar>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        {/* User Info Section */}
        <div className="p-4 flex items-center space-x-3">
          <Avatar className="h-12 w-12 bg-promogenie-600">
            <AvatarFallback>{getInitial(userEmail)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-promogenie-800">{userEmail}</span>
            <span className="text-sm text-gray-500">{userEmail}</span>
          </div>
        </div>
        
        {/* Get Plan Button */}
        <div className="px-4 pb-4">
          <Button 
            className="w-full bg-promogenie-600 hover:bg-promogenie-700" 
            size="sm"
            onClick={() => {
              setProfileOpen(false);
              navigate('/pricing');
            }}
          >
            Get a plan
          </Button>
        </div>
        
        <Separator className="my-0" />
        
        {/* Menu Items */}
        <div className="py-2">
          <div className="w-full">
            <div 
              className="flex items-center p-3 cursor-pointer hover:bg-gray-50"
              onClick={() => {
                setProfileOpen(false);
                navigate('/pricing');
              }}
            >
              <CreditCard className="h-4 w-4 mr-3 text-gray-600" />
              <span>Subscription</span>
              <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Free</span>
            </div>
            
            <div 
              className="flex items-center p-3 cursor-pointer hover:bg-gray-50"
              onClick={() => {
                setProfileOpen(false);
                // Navigate to account page when implemented
                toast({
                  title: "Account",
                  description: "Account page will be implemented soon.",
                });
              }}
            >
              <User className="h-4 w-4 mr-3 text-gray-600" />
              <span>Account</span>
            </div>
            
            <div 
              className="flex items-center p-3 cursor-pointer hover:bg-gray-50"
              onClick={() => {
                setProfileOpen(false);
                // Billing logic
                toast({
                  title: "Billing",
                  description: "Billing page will be implemented soon.",
                });
              }}
            >
              <CreditCard className="h-4 w-4 mr-3 text-gray-600" />
              <span>Billing</span>
            </div>
            
            <div 
              className="flex items-center p-3 cursor-pointer hover:bg-gray-50"
              onClick={() => {
                setProfileOpen(false);
                // Download logic
                toast({
                  title: "Downloads",
                  description: "Your downloads will appear here.",
                });
              }}
            >
              <Download className="h-4 w-4 mr-3 text-gray-600" />
              <span>Downloads</span>
            </div>
            
            <div 
              className="flex items-center p-3 cursor-pointer hover:bg-gray-50"
              onClick={() => {
                setProfileOpen(false);
                // Help center logic
                toast({
                  title: "Help Center",
                  description: "Help center will be implemented soon.",
                });
              }}
            >
              <HelpCircle className="h-4 w-4 mr-3 text-gray-600" />
              <span>Help center</span>
            </div>
            
            <div 
              className="flex items-center p-3 cursor-pointer hover:bg-gray-50" 
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-3 text-gray-600" />
              <span>Log out</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProfilePopover;
