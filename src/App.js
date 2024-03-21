
import Main from './components/main';
import 'reactflow/dist/style.css';

const App = () => {
  const initialNodes = [
    { id: '1', position : { x:0, y:0 }, data: { label: 'Anton' }},
    { id: '2', position : { x:100, y:100 }, data: { label: 'Son of Anton' }},
    { id: '3', position : { x:0, y:200 }, data: { label: 'Daughter of Anton' }}
  ];
  
  const initialEdges = [
    {id: 'e1-2', source : '1' , target : '2'},
    {id: 'e1-3', source : '1' , target : '3'}
  ]
  return (<div>
    <Main initialEdges={initialEdges} initialNodes={initialNodes} />
  </div>
  )
  
}

export default App;