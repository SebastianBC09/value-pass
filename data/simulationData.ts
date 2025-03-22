import { SimulationData } from "@/types/MemoryVisualization.types";

const simulationDataJavascript = {
  valueExample: {
    before: {
      nodes: [
        {
          id: '1',
          type: 'variable',
          data: {
            name: 'x',
            type: 'Number',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'modifyValue',
            params: ['num'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
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
            name: 'x',
            type: 'Number',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'modifyValue',
            params: ['num'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'num',
            type: 'Number',
            value: '5', // copia de x
            memoryAddress: '0x3456'
          },
          position: { x: 250, y: 200 }
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
            name: 'x',
            type: 'Number',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'modifyValue',
            params: ['num'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'num',
            type: 'Number',
            value: '10', // modificado dentro de la función
            memoryAddress: '0x3456'
          },
          position: { x: 250, y: 200 }
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
            name: 'obj',
            type: 'Object',
            value: '{ prop: 5 }',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { prop: 5 },
            memoryAddress: '0x7890'
          },
          position: { x: 300, y: 50 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'modifyObject',
            params: ['o'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
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
            name: 'obj',
            type: 'Object',
            value: '{ prop: 5 }',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { prop: 5 },
            memoryAddress: '0x7890'
          },
          position: { x: 300, y: 50 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'modifyObject',
            params: ['o'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'o',
            type: 'Object',
            value: '{ prop: 5 }',
            memoryAddress: '0x9012'
          },
          position: { x: 250, y: 200 }
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
            name: 'obj',
            type: 'Object',
            value: '{ prop: 10 }',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { prop: 10 },
            memoryAddress: '0x7890'
          },
          position: { x: 300, y: 50 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'modifyObject',
            params: ['o'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'o',
            type: 'Object',
            value: '{ prop: 10 }',
            memoryAddress: '0x9012'
          },
          position: { x: 250, y: 200 }
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

const simulationDataPython = {
  valueExample: {
    before: {
      nodes: [
        {
          id: '1',
          type: 'variable',
          data: {
            name: 'x',
            type: 'int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'modify_value',
            params: ['num'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
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
            name: 'x',
            type: 'int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'modify_value',
            params: ['num'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'num',
            type: 'int',
            value: '5',
            memoryAddress: '0x3456'
          },
          position: { x: 250, y: 200 }
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
            name: 'x',
            type: 'int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'modify_value',
            params: ['num'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'num',
            type: 'int',
            value: '10', // valor modificado dentro de la función
            memoryAddress: '0x9876'
          },
          position: { x: 250, y: 200 }
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
            name: 'my_list',
            type: 'list',
            value: '[1, 2, 3]',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: [1, 2, 3],
            memoryAddress: '0x7890'
          },
          position: { x: 300, y: 50 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'modify_list',
            params: ['lst'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
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
            name: 'my_list',
            type: 'list',
            value: '[1, 2, 3]',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: [1, 2, 3],
            memoryAddress: '0x7890'
          },
          position: { x: 300, y: 50 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'modify_list',
            params: ['lst'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'lst',
            type: 'list',
            value: '[1, 2, 3]',
            memoryAddress: '0x9012'
          },
          position: { x: 250, y: 200 }
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
            name: 'my_list',
            type: 'list',
            value: '[1, 2, 3, 4]',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: [1, 2, 3, 4],
            memoryAddress: '0x7890'
          },
          position: { x: 300, y: 50 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'modify_list',
            params: ['lst'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'lst',
            type: 'list',
            value: '[1, 2, 3, 4]',
            memoryAddress: '0x9012'
          },
          position: { x: 250, y: 200 }
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

const simulationDataCSharp = {
  valueExample: {
    before: {
      nodes: [
        {
          id: '1',
          type: 'variable',
          data: {
            name: 'x',
            type: 'int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'ModifyValue',
            params: ['num'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
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
            name: 'x',
            type: 'int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'ModifyValue',
            params: ['num'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'num',
            type: 'int',
            value: '5',
            memoryAddress: '0x3456'
          },
          position: { x: 250, y: 200 }
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
            name: 'x',
            type: 'int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'ModifyValue',
            params: ['num'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'num',
            type: 'int',
            value: '10',
            memoryAddress: '0x3456'
          },
          position: { x: 250, y: 200 }
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
            name: 'person',
            type: 'Person',
            value: '{ Name: "John" }',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { Name: "John" },
            memoryAddress: '0x7890'
          },
          position: { x: 300, y: 50 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'ModifyPerson',
            params: ['p'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
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
            name: 'person',
            type: 'Person',
            value: '{ Name: "John" }',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { Name: "John" },
            memoryAddress: '0x7890'
          },
          position: { x: 300, y: 50 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'ModifyPerson',
            params: ['p'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'p',
            type: 'Person',
            value: '{ Name: "John" }',
            memoryAddress: '0x9012'
          },
          position: { x: 250, y: 200 }
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
            name: 'person',
            type: 'Person',
            value: '{ Name: "Jane" }',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { Name: "Jane" },
            memoryAddress: '0x7890'
          },
          position: { x: 300, y: 50 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'ModifyPerson',
            params: ['p'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'p',
            type: 'Person',
            value: '{ Name: "Jane" }',
            memoryAddress: '0x9012'
          },
          position: { x: 250, y: 200 }
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

const simulationDataJava = {
  valueExample: {
    before: {
      nodes: [
        {
          id: '1',
          type: 'variable',
          data: {
            name: 'x',
            type: 'int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'modifyValue',
            params: ['num'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
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
            name: 'x',
            type: 'int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'modifyValue',
            params: ['num'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'num',
            type: 'int',
            value: '5',
            memoryAddress: '0x3456'
          },
          position: { x: 250, y: 200 }
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
            name: 'x',
            type: 'int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'modifyValue',
            params: ['num'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'num',
            type: 'int',
            value: '10',
            memoryAddress: '0x3456'
          },
          position: { x: 250, y: 200 }
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
            name: 'person',
            type: 'Person',
            value: '{ name: "John" }',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { name: "John" },
            memoryAddress: '0x7890'
          },
          position: { x: 300, y: 50 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'modifyPerson',
            params: ['p'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
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
            name: 'person',
            type: 'Person',
            value: '{ name: "John" }',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { name: "John" },
            memoryAddress: '0x7890'
          },
          position: { x: 300, y: 50 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'modifyPerson',
            params: ['p'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'p',
            type: 'Person',
            value: '{ name: "John" }',
            memoryAddress: '0x9012'
          },
          position: { x: 250, y: 200 }
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
            name: 'person',
            type: 'Person',
            value: '{ name: "Jane" }',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { name: "Jane" },
            memoryAddress: '0x7890'
          },
          position: { x: 300, y: 50 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'modifyPerson',
            params: ['p'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'p',
            type: 'Person',
            value: '{ name: "Jane" }',
            memoryAddress: '0x9012'
          },
          position: { x: 250, y: 200 }
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

const simulationDataSwift = {
  valueExample: {
    before: {
      nodes: [
        {
          id: '1',
          type: 'variable',
          data: {
            name: 'x',
            type: 'Int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'modifyValue',
            params: ['num'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
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
            name: 'x',
            type: 'Int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'modifyValue',
            params: ['num'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'num',
            type: 'Int',
            value: '5',
            memoryAddress: '0x3456'
          },
          position: { x: 250, y: 200 }
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
            name: 'x',
            type: 'Int',
            value: '5',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'function',
          data: {
            name: 'modifyValue',
            params: ['num'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '3',
          type: 'variable',
          data: {
            name: 'num',
            type: 'Int',
            value: '10',
            memoryAddress: '0x3456'
          },
          position: { x: 250, y: 200 }
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
            name: 'person',
            type: 'Person',
            value: '{ name: "John" }',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { name: "John" },
            memoryAddress: '0x7890'
          },
          position: { x: 300, y: 50 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'modifyPerson',
            params: ['p'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
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
            name: 'person',
            type: 'Person',
            value: '{ name: "John" }',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { name: "John" },
            memoryAddress: '0x7890'
          },
          position: { x: 300, y: 50 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'modifyPerson',
            params: ['p'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'p',
            type: 'Person',
            value: '{ name: "John" }',
            memoryAddress: '0x9012'
          },
          position: { x: 250, y: 200 }
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
            name: 'person',
            type: 'Person',
            value: '{ name: "Jane" }',
            memoryAddress: '0x1234'
          },
          position: { x: 50, y: 50 }
        },
        {
          id: '2',
          type: 'memory',
          data: {
            content: { name: "Jane" },
            memoryAddress: '0x7890'
          },
          position: { x: 300, y: 50 }
        },
        {
          id: '3',
          type: 'function',
          data: {
            name: 'modifyPerson',
            params: ['p'],
            memoryAddress: '0x5678'
          },
          position: { x: 50, y: 200 }
        },
        {
          id: '4',
          type: 'variable',
          data: {
            name: 'p',
            type: 'Person',
            value: '{ name: "Jane" }',
            memoryAddress: '0x9012'
          },
          position: { x: 250, y: 200 }
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


export const simulationData: SimulationData = {
  javascript: simulationDataJavascript,
  python: simulationDataPython,
  csharp: simulationDataCSharp,
  java: simulationDataJava,
  swift: simulationDataSwift,
};
