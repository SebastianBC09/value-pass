import { FC } from 'react'
import { Editor } from '@monaco-editor/react';
import { CodeEditorProps } from '@/types/CodeEditor.types';
import { useAppStore } from '@/store/useAppStore';

const CodeEditor: FC<CodeEditorProps> = ({ onChange, className, height = '400px' }) => {
  const { language, customMode, customValueCode, setCustomValueCode } = useAppStore();

  return (
    <div className={`border rounded-md overflow-hidden ${className || ''}`} style={{ height }}>
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
      />
    </div>
  );
};

export default CodeEditor;
