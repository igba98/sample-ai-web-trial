import React from 'react';
import { ArrowRightIcon } from './icons';

const Hero = () => {
  return (
    <section 
      className="relative h-[95vh] min-h-[800px] w-full bg-cover bg-center text-white"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586771107445-d3ca888e2c05?q=80&w=2940&auto=format&fit=crop')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>

      <div className="relative container mx-auto px-10 h-full flex items-center">
        <div className="flex-1">
            <div className="max-w-xl">
            <span className="inline-block bg-black/30 border border-gray-500 rounded-full px-4 py-1.5 text-sm font-medium">
                Sustainable Farming Tech
            </span>
            <h1 className="text-6xl lg:text-7xl font-extrabold mt-4 !leading-tight tracking-tight">
                Bringing Innovation to Your Farming Journey.
            </h1>
            <p className="mt-6 text-lg text-gray-200">
                From precision agriculture to sustainable practices, we help you grow more efficiently and profitably. Join us in transforming the way you farm!
            </p>
            <button className="mt-10 bg-lime-400 text-black font-bold pr-2 pl-6 py-2 rounded-full flex items-center gap-4 text-lg group transition-transform hover:scale-105">
                Get Started
                <span className="bg-gray-900 rounded-full p-3 transform transition-transform">
                <ArrowRightIcon className="w-6 h-6 text-lime-400" />
                </span>
            </button>
            </div>
        </div>

        {/* Mission Card */}
        <div className="relative flex-1 flex justify-end items-center self-stretch">
            <div className="absolute max-w-sm bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-lime-400 rounded-full"></span>
                <h3 className="font-bold text-lg">Our Mission</h3>
            </div>
            <p className="mt-3 text-gray-200">
                To empower farmers with innovative tools and technology that advance productivity, sustainability, and efficiency, shaping the future of farming.
            </p>
            <a href="#" className="mt-5 inline-flex items-center gap-2 font-semibold hover:text-lime-300 transition-colors">
                Learn More <ArrowRightIcon className="w-5 h-5" />
            </a>
            </div>
            
            {/* Decorative Arrows */}
            <div className="absolute bottom-8 left-0 hidden xl:flex gap-2">
                <button className="w-9 h-9 rounded-full border border-white/30 text-white/50 flex items-center justify-center hover:bg-white/10 transition-colors">&larr;</button>
                <button className="w-9 h-9 rounded-full border border-white/30 text-white/50 flex items-center justify-center hover:bg-white/10 transition-colors">&rarr;</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;