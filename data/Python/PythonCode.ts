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
    explanation: 'Python utiliza un modelo de "paso por asignación" donde el comportamiento depende de la mutabilidad del objeto. Los objetos inmutables (int, float, string, tuple, frozenset) se comportan como paso por valor, mientras que los objetos mutables (list, dict, set) se comportan como paso por referencia. Python permite modificar objetos mutables dentro de funciones afectando al original, pero no puede reasignar la referencia externa a menos que use contenedores mutables o patrones específicos como retornar el nuevo valor.'
};
