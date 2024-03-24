
import { ReactFlowProvider } from 'reactflow';
import Flow from './components/Flow';//eslint-disable-next-line 
import 'reactflow/dist/style.css';

const App = () => {
  return (<div  style={{ height: 800 }}>
    <ReactFlowProvider>
      <Flow  />
    </ReactFlowProvider>
  </div>
  )
  
}

export default App;