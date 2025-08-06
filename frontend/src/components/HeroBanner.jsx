import React, { useState } from 'react';
import { Play, Info } from 'lucide-react';
import TrailerModal from './TrailerModal';

const HeroBanner = ({ movie }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  if (!movie) return null;

  return (
    <>
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${movie.backdrop})`
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="px-4 md:px-16 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {movie.title}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-green-400 font-semibold">★ {movie.rating}</span>
              <span className="text-white">{movie.year}</span>
              <span className="text-white">{movie.genre}</span>
            </div>
            
            <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
              {movie.overview}
            </p>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => setShowTrailer(true)}
                className="flex items-center space-x-2 bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
              >
                <Play size={20} fill="currentColor" />
                <span>Play</span>
              </button>
              
              <button className="flex items-center space-x-2 bg-gray-500 bg-opacity-70 text-white px-8 py-3 rounded font-semibold hover:bg-opacity-80 transition-colors">
                <Info size={20} />
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
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

export default HeroBanner;