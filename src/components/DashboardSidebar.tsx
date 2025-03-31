
import React from 'react';
import { 
  Image, 
  Video, 
  Upload, 
  Share2, 
  LayoutGrid, 
  Settings,
  Menu,
  X
} from 'lucide-react';
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileMenuOpen?: boolean;
  toggleMobileMenu?: () => void;
}

const DashboardSidebar = ({ 
  activeTab, 
  setActiveTab, 
  isMobileMenuOpen = false, 
  toggleMobileMenu = () => {} 
}: DashboardSidebarProps) => {
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-promogenie-700 border-r border-promogenie-600 min-h-screen">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-promogenie-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="font-display font-bold text-xl text-white">PromoGenie</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-6">
          <div className="space-y-1">
            <SidebarItem 
              icon={<Image />} 
              label="Image Generation" 
              isActive={activeTab === "image"} 
              onClick={() => handleTabClick("image")}
            />
            <SidebarItem 
              icon={<Video />} 
              label="Video Creation" 
              isActive={activeTab === "video"} 
              onClick={() => handleTabClick("video")}
            />
            <SidebarItem 
              icon={<Share2 />} 
              label="Export" 
              isActive={activeTab === "export"} 
              onClick={() => handleTabClick("export")}
            />
            <SidebarItem 
              icon={<LayoutGrid />} 
              label="My Creations" 
              isActive={activeTab === "creations"} 
              onClick={() => handleTabClick("creations")}
            />
          </div>
          
          <div className="pt-8 mt-8 border-t border-promogenie-600">
            <SidebarItem 
              icon={<Settings />} 
              label="Settings" 
              isActive={activeTab === "settings"} 
              onClick={() => handleTabClick("settings")}
            />
          </div>
        </nav>
        
        <div className="p-4 border-t border-promogenie-600">
          <div className="bg-promogenie-600 rounded-lg p-3 text-center">
            <p className="text-white text-sm mb-2">Need help?</p>
            <button className="text-promogenie-300 text-sm hover:text-promogenie-200 font-medium">
              Contact Support
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-20">
        <button 
          onClick={toggleMobileMenu}
          className="text-white bg-promogenie-600 p-2 rounded-md"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-promogenie-800 bg-opacity-90 z-10 flex flex-col">
          <nav className="flex-1 px-6 py-16">
            <div className="mb-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-promogenie-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="font-display font-bold text-xl text-white">PromoGenie</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <SidebarItem 
                icon={<Image />} 
                label="Image Generation" 
                isActive={activeTab === "image"} 
                onClick={() => {
                  handleTabClick("image");
                  toggleMobileMenu();
                }}
              />
              <SidebarItem 
                icon={<Video />} 
                label="Video Creation" 
                isActive={activeTab === "video"} 
                onClick={() => {
                  handleTabClick("video");
                  toggleMobileMenu();
                }}
              />
              <SidebarItem 
                icon={<Share2 />} 
                label="Export" 
                isActive={activeTab === "export"} 
                onClick={() => {
                  handleTabClick("export");
                  toggleMobileMenu();
                }}
              />
              <SidebarItem 
                icon={<LayoutGrid />} 
                label="My Creations" 
                isActive={activeTab === "creations"} 
                onClick={() => {
                  handleTabClick("creations");
                  toggleMobileMenu();
                }}
              />
              
              <div className="pt-8 mt-8 border-t border-promogenie-600">
                <SidebarItem 
                  icon={<Settings />} 
                  label="Settings" 
                  isActive={activeTab === "settings"} 
                  onClick={() => {
                    handleTabClick("settings");
                    toggleMobileMenu();
                  }}
                />
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem = ({ icon, label, isActive, onClick }: SidebarItemProps) => {
  return (
    <button 
      className={cn(
        "w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors text-left",
        isActive 
          ? "bg-promogenie-600 text-white" 
          : "text-promogenie-200 hover:text-white hover:bg-promogenie-600/50"
      )}
      onClick={onClick}
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default DashboardSidebar;
