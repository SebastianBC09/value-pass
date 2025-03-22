export interface CodeEditorProps {
  language: string;
  initialCode: string;
  onChange?: (value: string) => void;
  className?: string;
  height?: string | number;
}

export interface UseCodeEditorProps {
  initialCode: string;
  language: string;
  onChange?: (value: string) => void;
}
