export const JavaCode = {
    name: 'Java',
    valueTitle: 'Paso por valor (primitivos)',
    valueExample: `// Java - Paso por valor
public class Main {
    public static void main(String[] args) {
        int scoreValue = 5;
        System.out.println("Antes de la función: " + scoreValue);
        processScore(scoreValue);
        System.out.println("Después de la función: " + scoreValue);  // 5 (sin cambios)
    }
    static void processScore(int inputScore) {
        inputScore = 10;
        System.out.println("Dentro de la función: " + inputScore);  // 10
    }
}`,
    valueOutput: `Antes de la función: 5
Dentro de la función: 10
Después de la función: 5`,
    refTitle: 'Paso por referencia (objetos por referencia)',
    referenceExample: `// Java - Paso por referencia (objetos por referencia)
public class Main {
    static class Person {
        String name;
        Person(String name) { this.name = name; }
    }
    public static void main(String[] args) {
        Person employee = new Person("John");
        System.out.println("Antes de la función: " + employee.name);
        updateEmployee(employee);
        System.out.println("Después de la función: " + employee.name);  // "Jane" (modificado)
    }
    static void updateEmployee(Person staffMember) {
        staffMember.name = "Jane";
        System.out.println("Dentro de la función: " + staffMember.name);  // "Jane"
    }
}`,
    refOutput: `Antes de la función: John
Dentro de la función: Jane
Después de la función: Jane`,
    explanation: 'Java pasa los tipos primitivos (byte, short, int, long, float, double, boolean, char) por valor (copia) y los objetos siempre por referencia. A diferencia de C#, Java no ofrece una manera de forzar el paso por referencia para primitivos. Para simular el paso por referencia con primitivos, se utilizan clases contenedoras como Integer o arrays de un solo elemento. Java no tiene modificadores como "ref" o "out" para cambiar el comportamiento de paso de parámetros.'
};
