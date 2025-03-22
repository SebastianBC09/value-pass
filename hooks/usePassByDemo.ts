import { useAppStore } from '../store/useAppStore';
import { codeExamples } from '../data/codeExamples';

export const usePassByDemo = () => {
  const {
    language,
    customMode,
    customValueCode,
    customRefCode,
    setLanguage,
    setCustomValueCode,
    setCustomRefCode,
    toggleCustomMode
  } = useAppStore();

  return {
    language,
    customMode,
    customValueCode,
    customRefCode,
    setLanguage,
    setCustomValueCode,
    setCustomRefCode,
    toggleCustomMode,
    languages: codeExamples
  };
};
