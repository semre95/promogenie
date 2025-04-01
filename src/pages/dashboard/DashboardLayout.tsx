
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1">
        <DashboardHeader />
        
        <main className="p-6">
          <div className="w-full max-w-6xl mx-auto bg-white rounded-xl p-6 shadow-lg">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
