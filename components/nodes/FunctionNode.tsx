import React from 'react';
import { Handle, Position } from 'reactflow';
import { NodeData } from '@/types/Nodes.types';

const FunctionNode: React.FC<{ data: NodeData }> = ({ data }) => {
  return (
    <div className="border border-purple-400 rounded-lg p-4 bg-purple-200 shadow-lg min-w-[11rem] max-w-[20rem] w-auto transition-all duration-300 hover:shadow-xl">
      <div className="font-bold text-lg text-purple-900 border-b border-purple-400 pb-1 mb-1 break-words">
        {data.name}()
      </div>
      <div className="text-sm text-purple-800 font-medium">Function</div>
      <div className="mt-2 text-xs bg-purple-100 p-2 rounded-md border border-purple-300 shadow-inner overflow-auto">
        <span className="font-medium text-purple-900">Params:</span> {data.params ? data.params.join(', ') : 'None'}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-purple-700 border-2 border-white"
      />
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-purple-700 border-2 border-white"
      />
    </div>
  );
};

export default FunctionNode;
