'use client'
import React, { useState } from 'react';
import PassByDemo from '@/components/PassByDemo';
import SimulationDemo from '@/components/SimulationDemo';

const DemoPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'passByDemo' | 'memoryVisualization'>('passByDemo');

  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Demo Page</h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab('passByDemo')}
            className={`px-4 py-2 rounded ${
              activeTab === 'passByDemo'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Pass By Demo
          </button>
          <button
            onClick={() => setActiveTab('memoryVisualization')}
            className={`px-4 py-2 rounded ${
              activeTab === 'memoryVisualization'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Memory Visualization
          </button>
        </div>
      </div>
      <div>
        {activeTab === 'passByDemo' ? (
          <PassByDemo />
        ) : (
          <SimulationDemo language="javascript" />
        )}
      </div>
    </div>
  );
};

export default DemoPage;
