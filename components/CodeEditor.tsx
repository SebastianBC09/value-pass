import { FC } from 'react'
import { Editor } from '@monaco-editor/react';
import { CodeEditorProps } from '@/types/CodeEditor.types';
import { useAppStore } from '@/store/useAppStore';

const CodeEditor: FC<CodeEditorProps> = ({ onChange, className, height = '400px' }) => {
  const { language, customMode, customValueCode, setCustomValueCode } = useAppStore();

  return (
    <div
      className={`border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${className || ''}`}
      style={{ height }}
    >
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
        <span className="font-medium text-gray-700 dark:text-gray-300">{language.toUpperCase()} Code Editor</span>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <Editor
        height="100%"
        language={language}
        value={customMode ? customValueCode : undefined}
        defaultValue={customMode ? undefined : customValueCode}
        theme="vs-dark"
        onChange={(value) => {
          if (onChange) {
            onChange(value ?? '');
          }
          setCustomValueCode(value ?? '');
        }}
        options={{
          minimap: { enabled: true },
          scrollBeyondLastLine: false,
          fontFamily: 'JetBrains Mono, Menlo, Monaco, Consolas, monospace',
          fontSize: 14,
          lineNumbers: 'on',
          glyphMargin: true,
          folding: true,
          lineDecorationsWidth: 10,
          lineNumbersMinChars: 3,
        }}
      />
    </div>
  );
};

export default CodeEditor;
