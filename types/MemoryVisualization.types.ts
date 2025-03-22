import { Node, Edge } from 'reactflow';

export interface NodeData {
  name?: string;
  type?: string;
  value?: string;
  memoryAddress?: string;
  content?: any;
  params?: string[];
}


export interface MemoryVisualizationProps {
  nodes: Node<NodeData>[];
  edges: Edge[];
}

export type ExampleType = 'value' | 'reference';


export type VisualizationStep = 'before' | 'during' | 'after';


export interface StepData {
  nodes: Node<NodeData>[];
  edges: Edge[];
}

export interface ExampleData {
  before: StepData;
  during: StepData;
  after: StepData;
}


export interface LanguageSimulationData {
  valueExample: ExampleData;
  referenceExample: ExampleData;
}

export interface SimulationData {
  [language: string]: LanguageSimulationData;
}
