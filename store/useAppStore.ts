import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language } from '@/types/Languages.types';
import { codeExamples } from '@/data/codeExamples';

interface AppState {
  language: Language;
  customMode: boolean;
  customValueCode: string;
  customRefCode: string;
  setLanguage: (lang: Language) => void;
  setCustomValueCode: (code: string) => void;
  setCustomRefCode: (code: string) => void;
  toggleCustomMode: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      language: 'javascript',
      customMode: false,
      customValueCode: codeExamples['javascript'].valueExample,
      customRefCode: codeExamples['javascript'].referenceExample,

      setLanguage: (lang) => {
        set({
          language: lang,
          customValueCode: get().customMode ? get().customValueCode : codeExamples[lang].valueExample,
          customRefCode: get().customMode ? get().customRefCode : codeExamples[lang].referenceExample
        });
      },

      setCustomValueCode: (code) => set({ customValueCode: code }),
      setCustomRefCode: (code) => set({ customRefCode: code }),
      toggleCustomMode: () => set((state) => ({ customMode: !state.customMode }))
    }),
    {
      name: 'memory-demo-store',
    }
  )
);
