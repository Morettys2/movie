import React from 'react';
import CardNavBar from '../components/CardNavBar';



export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <CardNavBar />


        <div className='flex flex-row justify-between g-4 p-4 '>
          <h1>
            Batman
          </h1>


        </div>
      </div>
    </div>
  );
}
