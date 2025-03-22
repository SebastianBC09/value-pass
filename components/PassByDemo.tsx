import { FC } from 'react';
import { usePassByDemo } from '../hooks/usePassByDemo';

const PassByDemo: FC = () => {
  const { language, customMode, setLanguage, toggleCustomMode, languages } = usePassByDemo();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Paso por Valor vs Paso por Referencia</h1>

      {/* Selector de lenguaje */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex-grow">
          <label className="block text-sm font-medium mb-2">Lenguaje:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as keyof typeof languages)}
            className="border rounded p-2 w-full"
          >
            {Object.keys(languages).map((langKey) => (
              <option key={langKey} value={langKey}>
                {languages[langKey as keyof typeof languages].name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={toggleCustomMode}
            className={`py-2 px-4 rounded ${
              customMode ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {customMode ? 'Modo Personalizado: ON' : 'Modo Personalizado: OFF'}
          </button>
        </div>
      </div>

      {/* Código y simulación */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Código de Paso por Valor */}
        <div className="border rounded p-4">
          <h2 className="text-xl font-semibold mb-2">{languages[language].valueTitle}</h2>
          <pre className="bg-gray-100 p-3 rounded overflow-auto text-sm h-64">
            {languages[language].valueExample}
          </pre>
        </div>

        {/* Código de Paso por Referencia */}
        <div className="border rounded p-4">
          <h2 className="text-xl font-semibold mb-2">{languages[language].refTitle}</h2>
          <pre className="bg-gray-100 p-3 rounded overflow-auto text-sm h-64">
            {languages[language].referenceExample}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default PassByDemo;
