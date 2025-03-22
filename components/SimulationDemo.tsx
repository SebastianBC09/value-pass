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
    <div>
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
        <div className="flex gap-2">
          <button onClick={() => setPhase('before')} className="px-3 py-1 bg-gray-200 rounded">Before</button>
          <button onClick={() => setPhase('during')} className="px-3 py-1 bg-gray-200 rounded">During</button>
          <button onClick={() => setPhase('after')} className="px-3 py-1 bg-gray-200 rounded">After</button>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setExampleType('valueExample')} className="px-3 py-1 bg-gray-200 rounded">Value Example</button>
          <button onClick={() => setExampleType('referenceExample')} className="px-3 py-1 bg-gray-200 rounded">Reference Example</button>
        </div>
      </div>
      <MemoryVisualization nodes={currentSimulation.nodes} edges={currentSimulation.edges} />
    </div>
  );
};

export default SimulationDemo;
