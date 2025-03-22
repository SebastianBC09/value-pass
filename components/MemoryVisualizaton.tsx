import { MemoryVisualizationProps } from '@/types/MemoryVisualization.types';
import React from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
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
    <div style={{ height: '500px' }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default MemoryVisualization;
