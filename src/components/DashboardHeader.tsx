
import React from 'react';
import WishesCounter from './header/WishesCounter';
import NotificationsPopover from './header/NotificationsPopover';
import ProfilePopover from './header/ProfilePopover';

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
  // Get email from localStorage
  const userEmail = 'test@promogenie.co';
  
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-10 border-b border-border">
      <h1 className="text-xl font-bold text-promogenie-700">PromoGenie Studio</h1>
      
      <div className="flex items-center space-x-4">
        <WishesCounter />
        <NotificationsPopover initialNotifications={initialNotifications} />
        <ProfilePopover userEmail={userEmail} />
      </div>
    </header>
  );
};

export default DashboardHeader;
