
import React from 'react';
import { Bell, ChevronDown, CreditCard } from 'lucide-react';
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

const DashboardHeader = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-10">
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
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-promogenie-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">T</span>
              </div>
              <ChevronDown className="h-4 w-4 text-promogenie-600" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <CreditCard className="h-4 w-4 mr-2" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
