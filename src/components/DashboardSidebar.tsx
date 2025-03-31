
import React from 'react';
import { 
  Image, 
  Video, 
  Share2,
  LayoutGrid, 
  Settings,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DashboardSidebar = ({ activeTab, setActiveTab }: DashboardSidebarProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out."
    });
    navigate('/login');
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
              onClick={() => setActiveTab("image")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                activeTab === "image" 
                  ? "bg-white text-promogenie-600 font-medium" 
                  : "text-white hover:bg-promogenie-500"
              }`}
            >
              <Image className="h-5 w-5" />
              <span>Image Generation</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("video")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                activeTab === "video" 
                  ? "bg-white text-promogenie-600 font-medium" 
                  : "text-white hover:bg-promogenie-500"
              }`}
            >
              <Video className="h-5 w-5" />
              <span>Video Creation</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("export")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                activeTab === "export" 
                  ? "bg-white text-promogenie-600 font-medium" 
                  : "text-white hover:bg-promogenie-500"
              }`}
            >
              <Share2 className="h-5 w-5" />
              <span>Export</span>
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
            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                activeTab === "settings" 
                  ? "bg-white text-promogenie-600 font-medium" 
                  : "text-white hover:bg-promogenie-500"
              }`}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
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
