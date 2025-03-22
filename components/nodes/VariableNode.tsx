import React from 'react';
import { Handle, Position } from 'reactflow';
import { NodeData } from '@/types/Nodes.types';

const VariableNode: React.FC<{ data: NodeData }> = ({ data }) => {
  return (
    <div className="border border-blue-500 rounded-lg p-4 bg-blue-200 shadow-lg min-w-[10rem] max-w-[20rem] w-auto transition-all duration-300 hover:shadow-xl">
      <div className="font-bold text-lg text-blue-900 border-b border-blue-500 pb-1 mb-1 break-words">
        {data.name}
      </div>
      <div className="text-sm text-blue-800 font-medium">{data.type}</div>
      <div className="mt-2 text-xs bg-blue-100 p-2 rounded-md border border-blue-400 shadow-inner font-mono text-blue-900 overflow-auto max-h-[150px] whitespace-pre-wrap break-words">
        {data.value}
      </div>
      <div className="mt-2 text-xs text-blue-900 bg-blue-100 p-1 rounded-md border border-blue-400 font-mono overflow-auto">
        Dir: <span className="font-semibold">{data.memoryAddress}</span>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-blue-700 border-2 border-white"
      />
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-blue-700 border-2 border-white"
      />
    </div>
  );
};

export default VariableNode;
