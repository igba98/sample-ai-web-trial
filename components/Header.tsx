import React from 'react';
import { LogoIcon } from './icons';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-8 text-white">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          {/* Left Side */}
          <div className="flex items-center gap-16">
             <a href="#" className="flex items-center gap-2 text-3xl font-bold">
              <LogoIcon className="w-9 h-9 text-lime-400" />
              Farmora
            </a>
            <div className="hidden lg:flex items-center gap-4 text-sm">
              <div>
                <div className="font-semibold">+1-800-123-2474</div>
                <div className="text-gray-300">support@farmora.com</div>
              </div>
            </div>
          </div>

          {/* Center Links */}
          <div className="hidden lg:flex items-center gap-10 text-gray-300 font-medium">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Marketplace</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-white transition-colors">Community</a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <a href="#" className="hidden sm:block font-medium text-gray-300 hover:text-white transition-colors">Sign Up</a>
            <button className="bg-lime-400 text-black font-bold px-5 py-2.5 rounded-full flex items-center gap-2.5 transition-transform hover:scale-105">
              <span className="w-2 h-2 bg-green-900/80 rounded-full"></span>
              Log in
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;