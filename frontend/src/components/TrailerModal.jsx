import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const TrailerModal = ({ isOpen, onClose, trailerUrl, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="text-white" size={20} />
        </button>
        
        <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src={trailerUrl}
            title={`${title} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        <div className="p-6">
          <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-300">Official Trailer</p>
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;