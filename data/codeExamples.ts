import { Language } from "@/types/Languages.types";
import { JSCode } from "./JS/JSCode";
import { PythonCode } from "./Python/PythonCode";
import { CSharpCode } from "./C#/C#Code";
import { JavaCode } from "./Java/JavaCode";
import { SwiftCode } from "./Swift/SwiftCode";

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
  javascript: JSCode,
  python: PythonCode,
  csharp: CSharpCode,
  java: JavaCode,
  swift: SwiftCode
};
