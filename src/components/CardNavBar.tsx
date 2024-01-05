// CardNavBar.js
import React from 'react';
import { Home as HomeIcon, Clapperboard } from 'lucide-react';

const CardNavBar = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col text-white min-h-screen">
      <div className='flex item-center gap-2'>
        <div className='w-3 h-3 bg-white rounded-full' />
        <div className='w-3 h-3 bg-white rounded-full' />
        <div className='w-3 h-3 bg-white rounded-full' />
      </div>
      <nav className='space-y-5 mt-6 flex-1'>
        <a href='' className='flex items-center gap-3 text-sm font-semibold text-orange-500'>
          <HomeIcon />
          Home
        </a>
        <a href='' className='flex items-center gap-3 text-sm font-semibold text-orange-500'>
          <Clapperboard />
          Movies
        </a>
      </nav>
      <div className="mt-auto">
        <h2 className='text-orange-500 font-semibold'>Morettyflix </h2>
      </div>
    </div>
  );
};

export default CardNavBar;
