import React, { useCallback } from "react";
import ReactFlow, { Background, Controls, MiniMap, NodeToolbar, addEdge, useNodesState } from "reactflow";

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position : { x:0, y:0 }, data: { label: 'Anton' }},
  { id: '2', position : { x:100, y:100 }, data: { label: 'Son of Anton' }},
  { id: '3', position : { x:0, y:200 }, data: { label: 'Daughter of Anton' }}
];

const initialEdges = [
  {id: 'e1-2', source : '1' , target : '2'},
  {id: 'e1-3', source : '1' , target : '3'}
]


const App = () => {
  const [nodes , setNodes , onNodesChnage ] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange ] = useNodesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds)=> addEdge(params, eds)),
    [setEdges],
  )

  return ( <div style={{ width: '100vw', height: '100vh'}}>
    <ReactFlow 
      nodes={nodes} 
      edges={edges}
      onNodesChange={onNodesChnage}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect} 
    >
      <Controls />
      <MiniMap />
      <Background variant="dots" gap={12} size={1} />
      <NodeToolbar />
    </ReactFlow>
  </div>
  );
}

export default App;