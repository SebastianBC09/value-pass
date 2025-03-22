import React from 'react';
import { Handle, Position } from 'reactflow';
import { NodeData } from '@/types/Nodes.types';

const FunctionNode: React.FC<{ data: NodeData }> = ({ data }) => {
  return (
    <div className="border rounded-md p-3 bg-purple-100 shadow-md w-44">
      <div className="font-bold text-lg">{data.name}()</div>
      <div className="text-sm text-gray-600">Function</div>
      <div className="mt-1 text-xs bg-gray-200 p-1 rounded">
        Params: {data.params ? data.params.join(', ') : ''}
      </div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default FunctionNode;
