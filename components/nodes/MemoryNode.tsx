import React from 'react';
import { Handle, Position } from 'reactflow';
import { NodeData } from '@/types/Nodes.types';

const MemoryNode: React.FC<{ data: NodeData }> = ({ data }) => {
  return (
    <div className="border border-green-500 rounded-lg p-4 bg-green-200 shadow-lg min-w-[12rem] max-w-[24rem] w-auto transition-all duration-300 hover:shadow-xl">
      <div className="font-bold text-lg text-green-900 border-b border-green-500 pb-1 mb-1">
        Memory Block
      </div>
      <div className="text-xs bg-green-100 p-2 rounded-md border border-green-400 shadow-inner overflow-auto max-h-[200px]">
        <pre className="text-green-900 whitespace-pre-wrap break-words">{JSON.stringify(data.content, null, 2)}</pre>
      </div>
      <div className="mt-2 text-xs text-green-900 bg-green-100 p-1 rounded-md border border-green-400 font-mono overflow-auto">
        Dir: <span className="font-semibold">{data.memoryAddress}</span>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-green-700 border-2 border-white"
      />
    </div>
  );
};

export default MemoryNode;
