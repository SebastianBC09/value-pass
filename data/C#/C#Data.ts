export const simulationDataCSharp = {
  valueExample: {
    before: {
      nodes: [
        {
          id: '1',
          type: 'variable',
          data: {
            name: 'csharpValue',
            type: 'int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 100, y: 100 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'ProcessCSharpValue',
            params: ['parameter'],
            memoryAddress: '0x5678'
          },
          position: { x: 100, y: 300 }
        }
      ],
      edges: []
    },
    during: {
      nodes: [
        {
          id: '1',
          type: 'variable',
          data: {
            name: 'csharpValue',
            type: 'int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 100, y: 100 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'ProcessCSharpValue',
            params: ['parameter'],
            memoryAddress: '0x5678'
          },
          position: { x: 100, y: 300 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'parameter',
            type: 'int',
            value: '5',
            memoryAddress: '0x3456'
          },
          position: { x: 350, y: 300 }
        }
      ],
      edges: []
    },
    after: {
      nodes: [
        {
          id: '1',
          type: 'variable',
          data: {
            name: 'csharpValue',
            type: 'int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 100, y: 100 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'ProcessCSharpValue',
            params: ['parameter'],
            memoryAddress: '0x5678'
          },
          position: { x: 100, y: 300 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'parameter',
            type: 'int',
            value: '10',
            memoryAddress: '0x3456'
          },
          position: { x: 350, y: 300 }
        }
      ],
      edges: []
    }
  },
  referenceExample: {
    before: {
      nodes: [
        {
          id: '1',
          type: 'variable',
          data: {
            name: 'csharpPerson',
            type: 'Person',
            value: '{ Name: "John" }',
            memoryAddress: '0x1234'
          },
          position: { x: 100, y: 100 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { Name: "John" },
            memoryAddress: '0x7890'
          },
          position: { x: 400, y: 100 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'UpdateCSharpPerson',
            params: ['personRef'],
            memoryAddress: '0x5678'
          },
          position: { x: 100, y: 300 }
        }
      ],
      edges: [
        {
          id: 'e1-2',
          source: '1',
          target: '2',
          animated: true,
          style: { stroke: '#ff0072' }
        }
      ]
    },
    during: {
      nodes: [
        {
          id: '1',
          type: 'variable',
          data: {
            name: 'csharpPerson',
            type: 'Person',
            value: '{ Name: "John" }',
            memoryAddress: '0x1234'
          },
          position: { x: 100, y: 100 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { Name: "John" },
            memoryAddress: '0x7890'
          },
          position: { x: 400, y: 100 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'UpdateCSharpPerson',
            params: ['personRef'],
            memoryAddress: '0x5678'
          },
          position: { x: 100, y: 300 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'personRef',
            type: 'Person',
            value: '{ Name: "John" }',
            memoryAddress: '0x9012'
          },
          position: { x: 400, y: 300 }
        }
      ],
      edges: [
        {
          id: 'e1-2',
          source: '1',
          target: '2',
          animated: true,
          style: { stroke: '#ff0072' }
        },
        {
          id: 'e4-2',
          source: '4',
          target: '2',
          animated: true,
          style: { stroke: '#ff0072' }
        }
      ]
    },
    after: {
      nodes: [
        {
          id: '1',
          type: 'variable',
          data: {
            name: 'csharpPerson',
            type: 'Person',
            value: '{ Name: "Jane" }',
            memoryAddress: '0x1234'
          },
          position: { x: 100, y: 100 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { Name: "Jane" },
            memoryAddress: '0x7890'
          },
          position: { x: 400, y: 100 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'UpdateCSharpPerson',
            params: ['personRef'],
            memoryAddress: '0x5678'
          },
          position: { x: 100, y: 300 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'personRef',
            type: 'Person',
            value: '{ Name: "Jane" }',
            memoryAddress: '0x9012'
          },
          position: { x: 400, y: 300 }
        }
      ],
      edges: [
        {
          id: 'e1-2',
          source: '1',
          target: '2',
          animated: true,
          style: { stroke: '#ff0072' }
        },
        {
          id: 'e4-2',
          source: '4',
          target: '2',
          animated: true,
          style: { stroke: '#ff0072' }
        }
      ]
    }
  }
};
