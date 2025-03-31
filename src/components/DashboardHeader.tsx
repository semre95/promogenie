
import React, { useState } from 'react';
import { 
  Bell, 
  User, 
  ChevronDown,
  Settings,
  CreditCard,
  History,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const DashboardHeader = () => {
  const { toast } = useToast();
  const [wishes, setWishes] = useState(100); // Unlimited for test account
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully"
    });
    // In a real implementation, we would redirect to login page
    window.location.href = "/";
  };

  return (
    <header className="bg-promogenie-700 border-b border-promogenie-600 py-3 px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white text-xl font-bold">PromoGenie Studio</h1>
        </div>
        
        <div className="flex items-center space-x-5">
          <div className="flex items-center bg-promogenie-600 px-3 py-1.5 rounded-full">
            <span className="text-promogenie-200 mr-1">Wishes:</span>
            <span className="text-white font-semibold">{wishes}</span>
            <Button
              variant="ghost"
              size="sm"
              className="text-promogenie-200 hover:text-white ml-2 py-1"
              onClick={() => toast({ description: "Top up functionality would be shown here" })}
            >
              Top up
            </Button>
          </div>
          
          <button className="relative text-white p-1 rounded-full hover:bg-promogenie-600 transition-colors">
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 text-white hover:bg-promogenie-600 p-1.5 rounded-full transition-colors">
                <div className="h-8 w-8 rounded-full bg-promogenie-500 flex items-center justify-center">
                  <User size={16} />
                </div>
                <ChevronDown size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="font-normal">
                  <p className="font-medium">Test Account</p>
                  <p className="text-xs text-gray-500">test@promogenie.co</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>My Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <History className="mr-2 h-4 w-4" />
                <span>Usage History</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help & Support</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
