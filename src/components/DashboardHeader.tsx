
import React, { useState } from 'react';
import { 
  Bell, 
  ChevronDown, 
  CreditCard, 
  User, 
  Download, 
  Users, 
  Globe, 
  HelpCircle, 
  LogOut, 
  Settings,
  MessageSquare,
  Languages
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Card, CardContent } from './ui/card';

const DashboardHeader = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate('/login');
  };

  // Get email from localStorage
  const userEmail = 'test@promogenie.co';

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
            onClick={() => {}}
          >
            Top up
          </Button>
        </div>
        
        <div className="relative">
          <button className="relative">
            <Bell className="h-5 w-5 text-promogenie-600" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              1
            </span>
          </button>
        </div>
        
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-promogenie-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">T</span>
              </div>
              <ChevronDown className="h-4 w-4 text-promogenie-600" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="flex flex-col">
              {/* User Info Section */}
              <div className="p-4 flex items-center space-x-3">
                <div className="h-12 w-12 bg-promogenie-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">T</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-promogenie-800">{userEmail}</span>
                  <span className="text-sm text-gray-500">{userEmail}</span>
                </div>
              </div>
              
              {/* Get Plan Button */}
              <div className="px-4 pb-2">
                <Button className="w-full bg-promogenie-600 hover:bg-promogenie-700" size="sm">
                  Get a plan
                </Button>
              </div>
              
              {/* Add Members Button */}
              <div className="px-4 pb-4">
                <Button variant="outline" className="w-full" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Add members
                </Button>
              </div>
              
              <DropdownMenuSeparator className="my-0" />
              
              {/* Menu Items */}
              <div className="py-1">
                <DropdownMenuItem className="flex items-center p-3 cursor-pointer hover:bg-gray-50">
                  <CreditCard className="h-4 w-4 mr-3 text-gray-600" />
                  <span>Subscription</span>
                  <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Free</span>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="flex items-center p-3 cursor-pointer hover:bg-gray-50">
                  <User className="h-4 w-4 mr-3 text-gray-600" />
                  <span>Account</span>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="flex items-center p-3 cursor-pointer hover:bg-gray-50">
                  <Download className="h-4 w-4 mr-3 text-gray-600" />
                  <span>Downloads</span>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="flex items-center p-3 cursor-pointer hover:bg-gray-50">
                  <MessageSquare className="h-4 w-4 mr-3 text-gray-600" />
                  <span>Join community</span>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="flex items-center p-3 cursor-pointer hover:bg-gray-50">
                  <MessageSquare className="h-4 w-4 mr-3 text-gray-600" />
                  <span>Join Discord server</span>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="flex items-center p-3 cursor-pointer hover:bg-gray-50">
                  <Globe className="h-4 w-4 mr-3 text-gray-600" />
                  <span>Language</span>
                  <div className="ml-auto flex items-center">
                    <span className="text-sm text-gray-500 mr-1">English</span>
                    <ChevronDown className="h-3 w-3 text-gray-500" />
                  </div>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="flex items-center p-3 cursor-pointer hover:bg-gray-50">
                  <Settings className="h-4 w-4 mr-3 text-gray-600" />
                  <span>Use AI code</span>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="flex items-center p-3 cursor-pointer hover:bg-gray-50">
                  <HelpCircle className="h-4 w-4 mr-3 text-gray-600" />
                  <span>Help center</span>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="flex items-center p-3 cursor-pointer hover:bg-gray-50" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-3 text-gray-600" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default DashboardHeader;
