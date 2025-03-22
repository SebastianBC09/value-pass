// data/codeExamples.ts
import { Language } from "@/types/Languages.types";

export const codeExamples: Record<Language, {
  name: string;
  valueTitle: string;
  valueExample: string;
  valueOutput: string;
  refTitle: string;
  referenceExample: string;
  refOutput: string;
  explanation: string;
}> = {
  javascript: {
    name: 'JavaScript',
    valueTitle: 'Paso por valor (tipos primitivos)',
    valueExample: `// JavaScript - Paso por valor (tipos primitivos)
let x = 5;
function modifyValue(num) {
  num = 10;
  console.log("Dentro de la función:", num); // 10
}
modifyValue(x);
console.log("Fuera de la función:", x); // 5 (sin cambios)`,
    valueOutput: `Antes de la función: 5
Dentro de la función: 10
Después de la función: 5`,
    refTitle: 'Paso por referencia (objetos)',
    referenceExample: `// JavaScript - Paso por referencia (objetos)
let obj = { prop: 5 };
function modifyObject(o) {
  o.prop = 10;
  console.log("Dentro de la función:", o); // { prop: 10 }
}
modifyObject(obj);
console.log("Fuera de la función:", obj); // { prop: 10 } (modificado)`,
    refOutput: `Antes de la función: { prop: 5 }
Dentro de la función: { prop: 10 }
Después de la función: { prop: 10 }`,
    explanation: 'En JavaScript, los tipos primitivos se pasan por valor, mientras que los objetos se pasan por referencia.'
  },
  python: {
    name: 'Python',
    valueTitle: 'Paso por valor (tipos inmutables)',
    valueExample: `# Python - Paso por valor (tipos inmutables)
x = 5
def modify_value(num):
    num = 10
    print("Dentro de la función:", num)  # 10
modify_value(x)
print("Fuera de la función:", x)  # 5 (sin cambios)`,
    valueOutput: `Antes de la función: 5
Dentro de la función: 10
Después de la función: 5`,
    refTitle: 'Paso por referencia (objetos mutables)',
    referenceExample: `# Python - Paso por referencia (objetos mutables)
my_list = [1, 2, 3]
def modify_list(lst):
    lst.append(4)
    print("Dentro de la función:", lst)  # [1, 2, 3, 4]
modify_list(my_list)
print("Fuera de la función:", my_list)  # [1, 2, 3, 4] (modificado)`,
    refOutput: `Antes de la función: [1, 2, 3]
Dentro de la función: [1, 2, 3, 4]
Después de la función: [1, 2, 3, 4]`,
    explanation: 'En Python, los tipos inmutables se comportan como si se pasaran por valor, mientras que los objetos mutables se pasan por referencia.'
  },
  csharp: {
    name: 'C#',
    valueTitle: 'Paso por valor',
    valueExample: `// C# - Paso por valor
using System;
public class Program {
    public static void Main() {
        int x = 5;
        ModifyValue(x);
        Console.WriteLine($"Fuera de la función: {x}");  // 5 (sin cambios)
    }
    static void ModifyValue(int num) {
        num = 10;
        Console.WriteLine($"Dentro de la función: {num}");  // 10
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
        Person person = new Person { Name = "John" };
        ModifyPerson(person);
        Console.WriteLine($"Fuera de la función: {person.Name}");  // "Jane" (modificado)
    }
    static void ModifyPerson(Person p) {
        p.Name = "Jane";
        Console.WriteLine($"Dentro de la función: {p.Name}");  // "Jane"
    }
}`,
    refOutput: `Antes de la función: John
Dentro de la función: Jane
Después de la función: Jane`,
    explanation: 'En C#, los tipos de valor se pasan por valor y los objetos se pasan por referencia.'
  },
  java: {
    name: 'Java',
    valueTitle: 'Paso por valor (primitivos)',
    valueExample: `// Java - Paso por valor
public class Main {
    public static void main(String[] args) {
        int x = 5;
        modifyValue(x);
        System.out.println("Fuera de la función: " + x);  // 5 (sin cambios)
    }
    static void modifyValue(int num) {
        num = 10;
        System.out.println("Dentro de la función: " + num);  // 10
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
        Person person = new Person("John");
        modifyPerson(person);
        System.out.println("Fuera de la función: " + person.name);  // "Jane" (modificado)
    }
    static void modifyPerson(Person p) {
        p.name = "Jane";
        System.out.println("Dentro de la función: " + p.name);  // "Jane"
    }
}`,
    refOutput: `Antes de la función: John
Dentro de la función: Jane
Después de la función: Jane`,
    explanation: 'En Java, los primitivos se pasan por valor y los objetos se pasan por valor de referencia.'
  },
  swift: {
    name: 'Swift',
    valueTitle: 'Paso por valor (tipos primitivos)',
    valueExample: `// Swift - Paso por valor (tipos primitivos)
func modifyValue(_ num: Int) {
    var mutableNum = num
    mutableNum = 10
    print("Dentro de la función:", mutableNum)  // 10
}
var x = 5
modifyValue(x)
print("Fuera de la función:", x)  // 5 (sin cambios)`,
    valueOutput: `Antes de la función: 5
Dentro de la función: 10
Después de la función: 5`,
    refTitle: 'Paso por referencia (clases)',
    referenceExample: `// Swift - Paso por referencia (clases)
class Person {
    var name: String
    init(name: String) { self.name = name }
}
func modifyPerson(_ person: Person) {
    person.name = "Jane"
    print("Dentro de la función:", person.name)  // "Jane"
}
let person = Person(name: "John")
modifyPerson(person)
print("Fuera de la función:", person.name)  // "Jane" (modificado)`,
    refOutput: `Antes de la función: John
Dentro de la función: Jane
Después de la función: Jane`,
    explanation: 'En Swift, los tipos primitivos se pasan por valor y las clases se pasan por referencia.'
  }
};
