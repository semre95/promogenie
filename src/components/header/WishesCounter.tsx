
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const WishesCounter = () => {
  const navigate = useNavigate();
  
  return (
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
  );
};

export default WishesCounter;
