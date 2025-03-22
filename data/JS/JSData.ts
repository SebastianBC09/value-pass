export const simulationDataJavascript = {
  valueExample: {
    before: {
      nodes: [
        {
          id: '1',
          type: 'variable',
          data: {
            name: 'numberValue',
            type: 'Number',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 150, y: 80 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'updateValue',
            params: ['inputNum'],
            memoryAddress: '0x5678'
          },
          position: { x: 150, y: 280 }
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
            name: 'numberValue',
            type: 'Number',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 150, y: 80 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'updateValue',
            params: ['inputNum'],
            memoryAddress: '0x5678'
          },
          position: { x: 150, y: 280 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'inputNum',
            type: 'Number',
            value: '5', // copia de numberValue
            memoryAddress: '0x3456'
          },
          position: { x: 450, y: 280 }
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
            name: 'numberValue',
            type: 'Number',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 150, y: 80 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'updateValue',
            params: ['inputNum'],
            memoryAddress: '0x5678'
          },
          position: { x: 150, y: 280 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'inputNum',
            type: 'Number',
            value: '10', // modificado dentro de la función
            memoryAddress: '0x3456'
          },
          position: { x: 450, y: 280 }
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
            name: 'userObject',
            type: 'Object',
            value: '{ username: "John" }',
            memoryAddress: '0x1234'
          },
          position: { x: 150, y: 80 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { username: "John" },
            memoryAddress: '0x7890'
          },
          position: { x: 450, y: 80 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'updateObject',
            params: ['userData'],
            memoryAddress: '0x5678'
          },
          position: { x: 150, y: 280 }
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
            name: 'userObject',
            type: 'Object',
            value: '{ username: "John" }',
            memoryAddress: '0x1234'
          },
          position: { x: 150, y: 80 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { username: "John" },
            memoryAddress: '0x7890'
          },
          position: { x: 450, y: 80 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'updateObject',
            params: ['userData'],
            memoryAddress: '0x5678'
          },
          position: { x: 150, y: 280 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'userData',
            type: 'Object',
            value: '{ username: "John" }',
            memoryAddress: '0x9012'
          },
          position: { x: 450, y: 280 }
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
            name: 'userObject',
            type: 'Object',
            value: '{ username: "Jane" }',
            memoryAddress: '0x1234'
          },
          position: { x: 150, y: 80 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { username: "Jane" },
            memoryAddress: '0x7890'
          },
          position: { x: 450, y: 80 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'updateObject',
            params: ['userData'],
            memoryAddress: '0x5678'
          },
          position: { x: 150, y: 280 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'userData',
            type: 'Object',
            value: '{ username: "Jane" }',
            memoryAddress: '0x9012'
          },
          position: { x: 450, y: 280 }
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
