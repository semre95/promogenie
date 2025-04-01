
import React, { useState } from 'react';
import { 
  LayoutGrid, 
  Settings,
  LogOut,
  CreditCard,
  User,
  Download,
  HelpCircle,
  Video
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Separator } from './ui/separator';

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DashboardSidebar = ({ activeTab, setActiveTab }: DashboardSidebarProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out."
    });
    navigate('/login');
  };

  const handleSettingsClick = (type: string) => {
    setSettingsOpen(false);
    
    switch (type) {
      case "subscription":
        navigate('/pricing');
        break;
      case "account":
        toast({
          title: "Account",
          description: "Account page will be implemented soon."
        });
        break;
      case "billing":
        toast({
          title: "Billing",
          description: "Billing page will be implemented soon."
        });
        break;
      case "downloads":
        toast({
          title: "Downloads",
          description: "Your downloads will appear here."
        });
        break;
      case "help":
        toast({
          title: "Help Center",
          description: "Help center will be implemented soon."
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-64 bg-promogenie-600 text-white flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-promogenie-500">
        <div className="flex items-center">
          <div className="h-9 w-9 bg-white rounded-md flex items-center justify-center mr-3">
            <span className="text-promogenie-600 font-bold text-xl">P</span>
          </div>
          <span className="text-xl font-bold">PromoGenie</span>
        </div>
      </div>
      
      <nav className="py-6 flex-grow">
        <ul className="space-y-1 px-3">
          <li>
            <button
              onClick={() => setActiveTab("influencerVideos")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                activeTab === "influencerVideos" || activeTab === "step1" || activeTab === "step2" || activeTab === "step3"
                  ? "bg-white text-promogenie-600 font-medium" 
                  : "text-white hover:bg-promogenie-500"
              }`}
            >
              <Video className="h-5 w-5" />
              <span>Influencer Videos</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("creations")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                activeTab === "creations" 
                  ? "bg-white text-promogenie-600 font-medium" 
                  : "text-white hover:bg-promogenie-500"
              }`}
            >
              <LayoutGrid className="h-5 w-5" />
              <span>My Creations</span>
            </button>
          </li>
        </ul>
      </nav>
      
      <div className="p-6 border-t border-promogenie-500">
        <ul className="space-y-1">
          <li>
            <Popover open={settingsOpen} onOpenChange={setSettingsOpen}>
              <PopoverTrigger asChild>
                <button
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                    activeTab === "settings" 
                      ? "bg-white text-promogenie-600 font-medium" 
                      : "text-white hover:bg-promogenie-500"
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-0" align="end" sideOffset={12}>
                <div className="py-2">
                  <div 
                    className="flex items-center p-3 cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSettingsClick("subscription")}
                  >
                    <CreditCard className="h-4 w-4 mr-3 text-gray-600" />
                    <span>Subscription</span>
                    <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Free</span>
                  </div>
                  
                  <div 
                    className="flex items-center p-3 cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSettingsClick("account")}
                  >
                    <User className="h-4 w-4 mr-3 text-gray-600" />
                    <span>Account</span>
                  </div>
                  
                  <div 
                    className="flex items-center p-3 cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSettingsClick("billing")}
                  >
                    <CreditCard className="h-4 w-4 mr-3 text-gray-600" />
                    <span>Billing</span>
                  </div>
                  
                  <div 
                    className="flex items-center p-3 cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSettingsClick("downloads")}
                  >
                    <Download className="h-4 w-4 mr-3 text-gray-600" />
                    <span>Downloads</span>
                  </div>
                  
                  <div 
                    className="flex items-center p-3 cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSettingsClick("help")}
                  >
                    <HelpCircle className="h-4 w-4 mr-3 text-gray-600" />
                    <span>Help center</span>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-md text-white hover:bg-promogenie-500 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
