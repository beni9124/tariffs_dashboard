import React, { useState, useEffect } from 'react';
import { Search, Bell, User } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black' : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-16 py-4">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <div className="text-red-600 font-bold text-2xl">NETFLIX</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">TV Shows</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Movies</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">New & Popular</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">My List</a>
          </nav>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-6">
          <Search className="text-white hover:text-gray-300 cursor-pointer transition-colors" size={20} />
          <Bell className="text-white hover:text-gray-300 cursor-pointer transition-colors" size={20} />
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
            <User className="text-white" size={16} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;