'use client'
import React, { useState } from 'react';
import PassByDemo from '@/components/PassByDemo';
import SimulationDemo from '@/components/SimulationDemo';

const DemoPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'passByDemo' | 'memoryVisualization'>('passByDemo');

  return (
    <div className="mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Interactive Memory Demos
          </span>
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-1 max-w-md mx-auto">
          <div className="flex justify-center">
            <button
              onClick={() => setActiveTab('passByDemo')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ease-in-out relative ${
                activeTab === 'passByDemo'
                  ? 'text-gray-800 dark:text-white font-semibold shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {activeTab === 'passByDemo' && (
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-md -z-10 shadow-inner shadow-blue-700/30 dark:shadow-blue-400/10"></span>
              )}
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
                Pass By Demo
              </span>
            </button>
            <button
              onClick={() => setActiveTab('memoryVisualization')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ease-in-out relative ${
                activeTab === 'memoryVisualization'
                  ? 'text-gray-800 dark:text-white font-semibold shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {activeTab === 'memoryVisualization' && (
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-md -z-10 shadow-inner shadow-blue-700/30 dark:shadow-blue-400/10"></span>
              )}
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
                Memory Visualization
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="transition-all duration-500 ease-in-out">
        <div className={`transform transition-opacity duration-500 ${activeTab === 'passByDemo' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          {activeTab === 'passByDemo' && <PassByDemo />}
        </div>
        <div className={`transform transition-opacity duration-500 ${activeTab === 'memoryVisualization' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          {activeTab === 'memoryVisualization' && <SimulationDemo/>}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
