export const CSharpCode = {
    name: 'C#',
    valueTitle: 'Paso por valor',
    valueExample: `// C# - Paso por valor
using System;
public class Program {
    public static void Main() {
        int csharpValue = 5;
        Console.WriteLine($"Antes de la función: {csharpValue}");
        ProcessCSharpValue(csharpValue);
        Console.WriteLine($"Después de la función: {csharpValue}");  // 5 (sin cambios)
    }
    static void ProcessCSharpValue(int parameter) {
        parameter = 10;
        Console.WriteLine($"Dentro de la función: {parameter}");  // 10
    }
}`,
    valueOutput: `Antes de la función: 5
Dentro de la función: 10
Después de la función: 5`,
    refTitle: 'Paso por referencia (objetos por referencia)',
    referenceExample: `// C# - Paso por referencia (objetos por referencia)
using System;
public class Person { public string Name { get; set; } }
public class Program {
    public static void Main() {
        Person csharpPerson = new Person { Name = "John" };
        Console.WriteLine($"Antes de la función: {csharpPerson.Name}");
        UpdateCSharpPerson(csharpPerson);
        Console.WriteLine($"Después de la función: {csharpPerson.Name}");  // "Jane" (modificado)
    }
    static void UpdateCSharpPerson(Person personRef) {
        personRef.Name = "Jane";
        Console.WriteLine($"Dentro de la función: {personRef.Name}");  // "Jane"
    }
}`,
    refOutput: `Antes de la función: John
Dentro de la función: Jane
Después de la función: Jane`,
    explanation: 'C# diferencia claramente entre tipos por valor (struct, tipos primitivos) y tipos por referencia (class). Por defecto, los struct se pasan por valor (copia) y las class por referencia. C# ofrece modificadores explícitos: "ref" fuerza el paso por referencia incluso para tipos por valor, "out" es similar a ref pero no requiere inicialización previa, e "in" permite paso por referencia de solo lectura. Con C# 7+, se introdujeron las ref structs y ref returns para mayor control sobre referencias.'
  };
