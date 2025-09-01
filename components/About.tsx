import React, { useState } from 'react';
import { ArrowRightIcon } from './icons';

const About = () => {
  const [activeTab, setActiveTab] = useState('About Us');
  const tabs = ['About Us', 'Journey', 'Vision', 'Mission'];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start max-w-7xl mx-auto">
          {/* Left Column: Tabs & Sub-heading */}
          <div className="lg:col-span-4">
            <div className="flex justify-start flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-colors duration-300 ${
                    activeTab === tab
                      ? 'bg-lime-400 text-black'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
              <span className="w-2.5 h-2.5 bg-lime-400 rounded-full"></span>
              Who We Are at Farmora
            </div>
          </div>

          {/* Right Column: Main Content */}
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 !leading-tight tracking-tight">
              With years of expertise in both farming and tech, we're committed to helping farmers grow smarter and achieve better yields. Together, we're shaping the future of farming for a more sustainable world.
            </h2>
            <p className="mt-6 text-gray-600">
              By combining innovation with sustainability, we empower farmers to increase productivity, reduce waste, and contribute to a healthier planet. Together, we are shaping the future of farming, ensuring it thrives for generations to come.
            </p>
            <button className="mt-8 border border-gray-300 rounded-full px-7 py-3 font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-24 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl border border-gray-200/80 p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row gap-6">
              <img src="https://images.unsplash.com/photo-1563514227-9937224534d2?q=80&w=1287&auto=format&fit=crop" alt="Farmer in a lush field" className="sm:w-2/5 w-full h-64 sm:h-auto object-cover rounded-2xl" />
              <div className="sm:w-3/5 w-full relative">
                <button className="absolute -top-1 -right-1 bg-gray-900 text-white w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-gray-700 transition-colors">
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
                <h3 className="text-5xl font-extrabold text-gray-900">10+</h3>
                <p className="font-bold text-gray-800 mt-2 text-lg">Years of Agricultural Innovation</p>
                <p className="mt-4 text-sm text-gray-600">
                  With a decade of experience, we've pioneered advancements in precision agriculture, helping farmers increase yields by 30% while reducing water consumption by 25%.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-lime-400 rounded-3xl text-black p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row gap-6">
               <div className="sm:w-3/5 w-full relative sm:order-first order-last">
                <button className="absolute -top-1 -right-1 bg-gray-900 text-white w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-gray-700 transition-colors">
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
                <h3 className="text-5xl font-extrabold">85%</h3>
                <p className="font-bold mt-2 text-lg">Customer Satisfaction Rate</p>
                <p className="mt-4 text-sm text-gray-900/80">
                  With an 85% customer satisfaction rate, our users trust us to deliver valuable tools and support that enable them to work smarter and grow better.
                </p>
              </div>
              <img src="https://images.unsplash.com/photo-1597854290952-8c864a702b3f?q=80&w=1287&auto=format&fit=crop" alt="Ripe tomatoes on the vine" className="sm:w-2/5 w-full h-64 sm:h-auto object-cover rounded-2xl order-first sm:order-last" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;