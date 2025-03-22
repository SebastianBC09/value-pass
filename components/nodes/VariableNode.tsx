import React from 'react';
import { Handle, Position } from 'reactflow';
import { NodeData } from '@/types/Nodes.types';

const VariableNode: React.FC<{ data: NodeData }> = ({ data }) => {
  return (
    <div className="border rounded-md p-3 bg-blue-100 shadow-md w-40">
      <div className="font-bold text-lg">{data.name}</div>
      <div className="text-sm text-gray-600">{data.type}</div>
      <div className="mt-1 text-xs bg-gray-200 p-1 rounded">{data.value}</div>
      <div className="mt-1 text-xs text-gray-500">Dir: {data.memoryAddress}</div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default VariableNode;
