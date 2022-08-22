import './App.css';
import { LocalComponentState,EventHandler,Forms,FunctionalCOmponents,LiftingState,ComposableComponents,ReusableComponents,SplitUpComponents,UnidirectionalDataFlow, PropTypesComponents, ElapsedTime } from './Components';
import { Table,Search,Button } from './Components/LiftingState';
function App() {
  return (
    <ElapsedTime />
  );
}

export default App;

export{
  Table,Button,Search
}