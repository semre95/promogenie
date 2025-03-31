
import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';

// Sample notifications data type
export interface Notification {
  id: number;
  title: string;
  message: string;
  read: boolean;
  time: string;
}

interface NotificationsPopoverProps {
  initialNotifications: Notification[];
}

const NotificationsPopover = ({ initialNotifications }: NotificationsPopoverProps) => {
  const { toast } = useToast();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  
  // Count unread notifications
  const unreadCount = notifications.filter(notification => !notification.read).length;
  
  // Mark notification as read
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? {...notification, read: true} : notification
    ));
  };
  
  // Delete specific notification
  const deleteNotification = (id: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the markAsRead
    setNotifications(notifications.filter(notification => notification.id !== id));
    toast({
      description: "Notification removed",
    });
  };
  
  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({...notification, read: true})));
    toast({
      description: "All notifications marked as read",
    });
  };
  
  // Clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
    toast({
      description: "All notifications cleared",
    });
  };

  return (
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
          <div className="flex space-x-2">
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
            {notifications.length > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearAllNotifications}
                className="h-auto py-1 px-2 text-xs text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                Clear all
              </Button>
            )}
          </div>
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
                  <div className="flex items-center">
                    {!notification.read && (
                      <span className="h-2 w-2 rounded-full bg-promogenie-600 mr-2"></span>
                    )}
                    <button
                      onClick={(e) => deleteNotification(notification.id, e)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
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
  );
};

export default NotificationsPopover;
