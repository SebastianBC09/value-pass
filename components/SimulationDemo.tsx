'use client';
import { FC, useState } from 'react';
import { simulationData } from '@/data/simulationData';
import { useAppStore } from '@/store/useAppStore';
import MemoryVisualization from './MemoryVisualizaton';

type Phase = 'before' | 'during' | 'after';
type ExampleType = 'valueExample' | 'referenceExample';

const SimulationDemo: FC = () => {
  const { language } = useAppStore();
  const [phase, setPhase] = useState<Phase>('before');
  const [exampleType, setExampleType] = useState<ExampleType>('valueExample');
  const currentSimulation = simulationData[language][exampleType][phase];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Memory Visualization</h2>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Simulation Phase:</p>
          <div className="flex gap-2 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
            {['before', 'during', 'after'].map((p) => (
              <button
                key={p}
                onClick={() => setPhase(p as Phase)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  phase === p
                    ? 'bg-indigo-500 text-white shadow-md'
                    : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Example Type:</p>
          <div className="flex gap-2 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
            <button
              onClick={() => setExampleType('valueExample')}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                exampleType === 'valueExample'
                  ? 'bg-purple-500 text-white shadow-md'
                  : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Pass by Value
            </button>
            <button
              onClick={() => setExampleType('referenceExample')}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                exampleType === 'referenceExample'
                  ? 'bg-purple-500 text-white shadow-md'
                  : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              Pass by Reference
            </button>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-500">
        <MemoryVisualization nodes={currentSimulation.nodes} edges={currentSimulation.edges} />
      </div>
    </div>
  );
};

export default SimulationDemo;
