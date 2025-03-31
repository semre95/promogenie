
import React, { useState } from 'react';
import { 
  Bell, 
  CreditCard, 
  User, 
  Download, 
  HelpCircle, 
  LogOut, 
  Settings,
  X
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { 
  Avatar,
  AvatarFallback,
  AvatarImage
} from './ui/avatar';
import { Separator } from './ui/separator';
import { useToast } from '@/hooks/use-toast';

// Sample notifications data
const initialNotifications = [
  {
    id: 1,
    title: 'Image Generation Complete',
    message: 'Your product image has been successfully generated.',
    read: false,
    time: '2 minutes ago'
  },
  {
    id: 2,
    title: 'New Feature Added',
    message: 'Try our new AI influencer generation feature!',
    read: false,
    time: '1 day ago'
  },
  {
    id: 3,
    title: 'Welcome to PromoGenie',
    message: 'Get started with our quick tutorial.',
    read: true,
    time: '3 days ago'
  }
];

const DashboardHeader = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/login');
  };

  // Get email from localStorage
  const userEmail = 'test@promogenie.co';
  
  // Get first letter of email for avatar
  const getInitial = (email) => {
    return email.charAt(0).toUpperCase();
  };
  
  // Count unread notifications
  const unreadCount = notifications.filter(notification => !notification.read).length;
  
  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? {...notification, read: true} : notification
    ));
  };
  
  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({...notification, read: true})));
    toast({
      title: "Notifications cleared",
      description: "All notifications have been marked as read.",
    });
  };

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-10 border-b border-border">
      <h1 className="text-xl font-bold text-promogenie-700">PromoGenie Studio</h1>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-promogenie-100 py-1 px-3 rounded-full">
          <span className="text-promogenie-700 font-medium mr-1">Wishes:</span>
          <span className="text-promogenie-600 font-bold">100</span>
          <Button 
            variant="link" 
            className="text-promogenie-600 p-0 ml-2 h-auto text-sm font-medium"
            onClick={() => navigate('/pricing')}
          >
            Top up
          </Button>
        </div>
        
        {/* Notifications Popover */}
        <Popover open={notificationsOpen} onOpenChange={setNotificationsOpen}>
          <PopoverTrigger asChild>
            <button className="relative p-1 rounded-full hover:bg-gray-100 transition-colors">
              <Bell className="h-5 w-5 text-promogenie-600" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-semibold">Notifications</h3>
              {unreadCount > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={markAllAsRead}
                  className="h-auto py-1 px-2 text-xs"
                >
                  Mark all as read
                </Button>
              )}
            </div>
            
            <div className="max-h-[350px] overflow-y-auto">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${notification.read ? '' : 'bg-promogenie-50'}`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-sm">{notification.title}</h4>
                      {!notification.read && (
                        <span className="h-2 w-2 rounded-full bg-promogenie-600"></span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{notification.message}</p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">
                  <p>No notifications</p>
                </div>
              )}
            </div>
            
            {notifications.length > 0 && (
              <div className="p-2 text-center border-t border-gray-100">
                <Button 
                  variant="link" 
                  className="text-sm text-promogenie-600 font-medium"
                  onClick={() => {
                    // View all notifications logic would go here
                    setNotificationsOpen(false);
                  }}
                >
                  View all notifications
                </Button>
              </div>
            )}
          </PopoverContent>
        </Popover>
        
        {/* Profile Popover */}
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
              <DropdownMenu>
                <DropdownMenuContent className="w-full" forceMount>
                  <DropdownMenuItem 
                    className="flex items-center p-3 cursor-pointer hover:bg-gray-50"
                    onClick={() => {
                      setProfileOpen(false);
                      navigate('/pricing');
                    }}
                  >
                    <CreditCard className="h-4 w-4 mr-3 text-gray-600" />
                    <span>Subscription</span>
                    <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Free</span>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem 
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
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem 
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
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem 
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
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem 
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
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem 
                    className="flex items-center p-3 cursor-pointer hover:bg-gray-50" 
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-3 text-gray-600" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default DashboardHeader;
