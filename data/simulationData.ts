import { SimulationData } from "@/types/MemoryVisualization.types";
import { simulationDataJavascript } from "./JS/JSData";
import { simulationDataPython } from "./Python/PythonData";
import { simulationDataCSharp } from "./C#/C#Data";
import { simulationDataJava } from "./Java/JavaData";
import { simulationDataSwift } from "./Swift/SwiftData";

export const simulationData: SimulationData = {
  javascript: simulationDataJavascript,
  python: simulationDataPython,
  csharp: simulationDataCSharp,
  java: simulationDataJava,
  swift: simulationDataSwift,
};
