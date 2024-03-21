import React, { useCallback } from "react";
import ReactFlow, { Background, Controls, MiniMap, NodeToolbar, addEdge, useNodesState } from "reactflow";

const Main = ({ initialEdges, initialNodes}) => {
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

export default Main;