export const PythonCode = {
    name: 'Python',
    valueTitle: 'Paso por valor (tipos inmutables)',
    valueExample: `# Python - Paso por valor (tipos inmutables)
counter = 5
print("Antes de la función:", counter)
def increment_counter(count_value):
    count_value = 10
    print("Dentro de la función:", count_value)  # 10
increment_counter(counter)
print("Después de la función:", counter)  # 5 (sin cambios)`,
    valueOutput: `Antes de la función: 5
Dentro de la función: 10
Después de la función: 5`,
    refTitle: 'Paso por referencia (objetos mutables)',
    referenceExample: `# Python - Paso por referencia (objetos mutables)
items_list = [1, 2, 3]
print("Antes de la función:", items_list)
def add_item(item_collection):
    item_collection.append(4)
    print("Dentro de la función:", item_collection)  # [1, 2, 3, 4]
add_item(items_list)
print("Después de la función:", items_list)  # [1, 2, 3, 4] (modificado)`,
    refOutput: `Antes de la función: [1, 2, 3]
Dentro de la función: [1, 2, 3, 4]
Después de la función: [1, 2, 3, 4]`,
    explanation: 'En Python, los tipos inmutables se comportan como si se pasaran por valor, mientras que los objetos mutables se pasan por referencia.'
  };
