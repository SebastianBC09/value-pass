import React from 'react';
import { Handle, Position } from 'reactflow';
import { NodeData } from '@/types/Nodes.types';

const MemoryNode: React.FC<{ data: NodeData }> = ({ data }) => {
  return (
    <div className="border rounded-md p-3 bg-green-100 shadow-md w-48">
      <div className="font-bold text-lg">Memory Block</div>
      <div className="text-xs bg-gray-200 p-1 rounded overflow-x-auto">
        <pre>{JSON.stringify(data.content, null, 2)}</pre>
      </div>
      <div className="mt-1 text-xs text-gray-500">Dir: {data.memoryAddress}</div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default MemoryNode;
