export const JSCode = {
    name: 'JavaScript',
    valueTitle: 'Paso por valor (tipos primitivos)',
    valueExample: `// JavaScript - Paso por valor (tipos primitivos)
let numberValue = 5;
console.log("Antes de la función:", numberValue);
function updateValue(inputNum) {
  inputNum = 10;
  console.log("Dentro de la función:", inputNum); // 10
}
updateValue(numberValue);
console.log("Después de la función:", numberValue); // 5 (sin cambios)`,
    valueOutput: `Antes de la función: 5
Dentro de la función: 10
Después de la función: 5`,
    refTitle: 'Paso por referencia (objetos)',
    referenceExample: `// JavaScript - Paso por referencia (objetos)
let userObject = { username: "John" };
console.log("Antes de la función:", userObject);
function updateObject(userData) {
  userData.username = "Jane";
  console.log("Dentro de la función:", userData); // { username: "Jane" }
}
updateObject(userObject);
console.log("Después de la función:", userObject); // { username: "Jane" } (modificado)`,
    refOutput: `Antes de la función: { username: "John" }
Dentro de la función: { username: "Jane" }
Después de la función: { username: "Jane" }`,
    explanation: 'En JavaScript, los tipos primitivos (números, strings, booleanos, null, undefined, Symbol y BigInt) se pasan por valor, creando una copia independiente. Los objetos y arrays se pasan por referencia, por lo que las funciones reciben una referencia al objeto original y cualquier modificación afecta al objeto original. JavaScript no ofrece sintaxis para forzar explícitamente el paso por valor de objetos (requiere técnicas como clonación profunda).'
};
