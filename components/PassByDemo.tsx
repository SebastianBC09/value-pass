import { FC, useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { Language } from '@/types/Languages.types';

const PassByDemo: FC = () => {
  const {
    language,
    customMode,
    customValueCode,
    customRefCode,
    setLanguage,
    setCustomValueCode,
    setCustomRefCode,
    toggleCustomMode,
    languages
  } = useAppStore();

  const [showOutput, setShowOutput] = useState(false);

  const handleRun = () => {
    setShowOutput(true);
  };

  return (
    <div className="p-4 space-y-8 transition-all duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text">Paso por Valor vs Paso por Referencia</h1>

        <div className="flex flex-wrap gap-6 mb-6">
          <div className="flex-grow">
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Lenguaje:</label>
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value as Language);
                setShowOutput(false);
              }}
              className="border border-gray-300 dark:border-gray-600 rounded-lg p-3 w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
            >
              {Object.keys(languages).map((langKey) => (
                <option key={langKey} value={langKey}>
                  {languages[langKey as Language].name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={() => {
                toggleCustomMode();
                setShowOutput(false);
              }}
              className={`py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                customMode
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 focus:ring-green-500'
                  : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 focus:ring-gray-400'
              }`}
            >
              {customMode ? 'Modo Personalizado: ON' : 'Modo Personalizado: OFF'}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="bg-indigo-500 dark:bg-indigo-700 p-4">
              <h2 className="text-xl font-semibold text-white">{languages[language].valueTitle}</h2>
            </div>
            <div className="p-4">
              {customMode ? (
                <textarea
                  value={customValueCode}
                  onChange={(e) => setCustomValueCode(e.target.value)}
                  className="w-full h-64 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-sm font-mono border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200"
                  placeholder="Ingresa tu código personalizado aquí..."
                />
              ) : (
                <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-auto text-sm h-64 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                  {languages[language].valueExample}
                </pre>
              )}

              <div className="mt-4 flex justify-center">
                <button
                  onClick={handleRun}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md"
                >
                  Ejecutar
                </button>
              </div>

              {showOutput && (
                <div className="mt-4">
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Salida:</h3>
                  <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-auto text-sm border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                    {customMode
                      ? "// La salida dependerá de tu código personalizado.\n// Este es un entorno simulado para fines educativos."
                      : languages[language].valueOutput}
                  </pre>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="bg-purple-500 dark:bg-purple-700 p-4">
              <h2 className="text-xl font-semibold text-white">{languages[language].refTitle}</h2>
            </div>
            <div className="p-4">
              {customMode ? (
                <textarea
                  value={customRefCode}
                  onChange={(e) => setCustomRefCode(e.target.value)}
                  className="w-full h-64 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-sm font-mono border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200"
                  placeholder="Ingresa tu código personalizado aquí..."
                />
              ) : (
                <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-auto text-sm h-64 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                  {languages[language].referenceExample}
                </pre>
              )}

              <div className="mt-4 flex justify-center">
                <button
                  onClick={handleRun}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-md"
                >
                  Ejecutar
                </button>
              </div>

              {showOutput && (
                <div className="mt-4">
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Salida:</h3>
                  <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-auto text-sm border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                    {customMode
                      ? "// La salida dependerá de tu código personalizado.\n// Este es un entorno simulado para fines educativos."
                      : languages[language].refOutput}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>

        {showOutput && (
          <div className="mt-6 p-5 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-yellow-200 dark:border-gray-600">
            <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Explicación ({languages[language].name}):
            </h2>
            <p className="text-gray-700 dark:text-gray-300">{languages[language].explanation}</p>

            {customMode && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-300">Modo Personalizado</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  En el modo personalizado, puedes experimentar con tu propio código para entender mejor los conceptos.
                  Modifica el código a tu gusto y pulsa &quot;Ejecutar&quot; para simular su comportamiento.
                  Ten en cuenta que este es un entorno simulado y no ejecuta realmente el código.
                  Para probar el código real, cópialo y ejecútalo en tu entorno de desarrollo preferido.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PassByDemo;
