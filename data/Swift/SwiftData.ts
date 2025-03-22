export const simulationDataSwift = {
  valueExample: {
    before: {
      nodes: [
        {
          id: '1',
          type: 'variable',
          data: {
            name: 'swiftNum',
            type: 'Int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 100, y: 100 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'modifySwiftValue',
            params: ['inputValue'],
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
            name: 'swiftNum',
            type: 'Int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 100, y: 100 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'modifySwiftValue',
            params: ['inputValue'],
            memoryAddress: '0x5678'
          },
          position: { x: 100, y: 300 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'inputValue',
            type: 'Int',
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
            name: 'swiftNum',
            type: 'Int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 100, y: 100 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'modifySwiftValue',
            params: ['inputValue'],
            memoryAddress: '0x5678'
          },
          position: { x: 100, y: 300 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'inputValue',
            type: 'Int',
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
            name: 'swiftUser',
            type: 'Person',
            value: '{ name: "John" }',
            memoryAddress: '0x1234'
          },
          position: { x: 100, y: 100 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { name: "John" },
            memoryAddress: '0x7890'
          },
          position: { x: 400, y: 100 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'updateSwiftUser',
            params: ['userRef'],
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
            name: 'swiftUser',
            type: 'Person',
            value: '{ name: "John" }',
            memoryAddress: '0x1234'
          },
          position: { x: 100, y: 100 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { name: "John" },
            memoryAddress: '0x7890'
          },
          position: { x: 400, y: 100 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'updateSwiftUser',
            params: ['userRef'],
            memoryAddress: '0x5678'
          },
          position: { x: 100, y: 300 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'userRef',
            type: 'Person',
            value: '{ name: "John" }',
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
            name: 'swiftUser',
            type: 'Person',
            value: '{ name: "Jane" }',
            memoryAddress: '0x1234'
          },
          position: { x: 100, y: 100 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { name: "Jane" },
            memoryAddress: '0x7890'
          },
          position: { x: 400, y: 100 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'updateSwiftUser',
            params: ['userRef'],
            memoryAddress: '0x5678'
          },
          position: { x: 100, y: 300 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'userRef',
            type: 'Person',
            value: '{ name: "Jane" }',
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
