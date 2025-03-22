'use client';
import { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import { UseCodeEditorProps } from '@/types/CodeEditor.types';

const useCodeEditor = ({ initialCode, language, onChange }: UseCodeEditorProps) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const editorInstanceRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    if (editorRef.current && !editorInstanceRef.current) {
      editorInstanceRef.current = monaco.editor.create(editorRef.current, {
        value: initialCode,
        language,
        theme: 'vs-dark',
        minimap: { enabled: false },
        automaticLayout: true,
        scrollBeyondLastLine: false,
      });

      editorInstanceRef.current.onDidChangeModelContent(() => {
        const value = editorInstanceRef.current?.getValue() || '';
        if (onChange) {
          onChange(value);
        }
      });
    }
    return () => {
      editorInstanceRef.current?.dispose();
    };
  }, [initialCode, language, onChange]);

  useEffect(() => {
    if (editorInstanceRef.current) {
      const model = editorInstanceRef.current.getModel();
      if (model) {
        monaco.editor.setModelLanguage(model, language);
      }
    }
  }, [language]);

  return editorRef;
};

export default useCodeEditor;
