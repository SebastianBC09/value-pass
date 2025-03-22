import { MemoryVisualizationProps } from '@/types/MemoryVisualization.types';
import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import VariableNode from './nodes/VariableNode';
import MemoryNode from './nodes/MemoryNode';
import FunctionNode from './nodes/FunctionNode';
import 'reactflow/dist/style.css';

const MemoryVisualization: React.FC<MemoryVisualizationProps> = ({ nodes, edges }) => {
  const nodeTypes = {
    variable: VariableNode,
    memory: MemoryNode,
    function: FunctionNode,
  };

  return (
    <div className="h-[500px] bg-gray-50 dark:bg-gray-900 rounded-lg shadow-inner transition-all duration-300">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        className="transition-all duration-500 ease-in-out"
      >
        <Controls className="!bg-white/80 dark:!bg-gray-800/80 !shadow-lg !rounded-lg transition-all duration-300" />
        <Background
          color="#94a3b8"
          className="!bg-gray-50 dark:!bg-gray-900 transition-all duration-300"
        />
      </ReactFlow>
    </div>
  );
};

export default MemoryVisualization;
