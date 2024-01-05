// MovieCard.js
import React from 'react';
import { MovieCardProps } from '../types/Interface';

const MovieCard: React.FC<MovieCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-gray-700 p-2 rounded-md shadow-md m-4">
      <div className="flex justify-center items-center">
        <img
          src={imageUrl}
          alt={title}
          className="h-60 object-cover rounded-t-md"
          style={{ objectPosition: 'center center flex flex-col' }}
        />
      </div>
      <div className="p-4 border-t-4 border-gray-600 m-1    ">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
