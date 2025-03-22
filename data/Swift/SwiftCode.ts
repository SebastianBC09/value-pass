export const SwiftCode = {
    name: 'Swift',
    valueTitle: 'Paso por valor (tipos primitivos)',
    valueExample: `// Swift - Paso por valor (tipos primitivos)
func modifySwiftValue(_ inputValue: Int) {
    var mutableNum = inputValue
    mutableNum = 10
    print("Dentro de la función:", mutableNum)  // 10
}
var swiftNum = 5
print("Antes de la función:", swiftNum)
modifySwiftValue(swiftNum)
print("Después de la función:", swiftNum)  // 5 (sin cambios)`,
    valueOutput: `Antes de la función: 5
Dentro de la función: 10
Después de la función: 5`,
    refTitle: 'Paso por referencia (clases)',
    referenceExample: `// Swift - Paso por referencia (clases)
class Person {
    var name: String
    init(name: String) { self.name = name }
}
func updateSwiftUser(_ userRef: Person) {
    userRef.name = "Jane"
    print("Dentro de la función:", userRef.name)  // "Jane"
}
let swiftUser = Person(name: "John")
print("Antes de la función:", swiftUser.name)
updateSwiftUser(swiftUser)
print("Después de la función:", swiftUser.name)  // "Jane" (modificado)`,
    refOutput: `Antes de la función: John
Dentro de la función: Jane
Después de la función: Jane`,
    explanation: 'En Swift, los tipos primitivos se pasan por valor y las clases se pasan por referencia.'
};
