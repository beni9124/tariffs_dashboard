import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import TrailerModal from './TrailerModal';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handlePlayClick = (e) => {
    e.stopPropagation();
    setShowTrailer(true);
  };

  return (
    <>
      <div 
        className="flex-shrink-0 w-64 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered ? (
          // Basic card view
          <div className="relative">
            {imageError ? (
              <div className="w-full h-36 bg-gray-800 rounded-md flex items-center justify-center">
                <span className="text-white text-sm">Image not available</span>
              </div>
            ) : (
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-36 object-cover rounded-md"
                onError={handleImageError}
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 rounded-md" />
          </div>
        ) : (
          // Expanded hover view
          <div className="bg-gray-900 rounded-md shadow-xl">
            {imageError ? (
              <div className="w-full h-36 bg-gray-800 rounded-t-md flex items-center justify-center">
                <span className="text-white text-sm">Image not available</span>
              </div>
            ) : (
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-36 object-cover rounded-t-md"
                onError={handleImageError}
              />
            )}
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex space-x-2">
                  <button 
                    onClick={handlePlayClick}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Play size={16} fill="currentColor" />
                  </button>
                  <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
                    <Plus size={16} className="text-gray-400 hover:text-white" />
                  </button>
                  <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
                    <ThumbsUp size={14} className="text-gray-400 hover:text-white" />
                  </button>
                </div>
                <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
                  <ChevronDown size={16} className="text-gray-400 hover:text-white" />
                </button>
              </div>
              
              <div className="text-white">
                <h3 className="font-semibold text-sm mb-1">{movie.title}</h3>
                <div className="flex items-center space-x-2 text-xs text-gray-300 mb-2">
                  <span className="text-green-400">★ {movie.rating}</span>
                  <span>{movie.year}</span>
                </div>
                <p className="text-xs text-gray-400 line-clamp-3">{movie.overview}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <TrailerModal 
        isOpen={showTrailer}
        onClose={() => setShowTrailer(false)}
        trailerUrl={movie.trailerUrl}
        title={movie.title}
      />
    </>
  );
};

export default MovieCard;