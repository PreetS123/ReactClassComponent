import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { GanntCharts } from './components/GanntCharts';
import {Routes,Route} from 'react-router-dom';
import { BarGraph } from './components/BarGraph';

function App() {
  return (
    <div className="App">
       Hello world
      <Routes>
        <Route path='/' element={<BarGraph/>}/>
      </Routes>
    </div>
  );
}

export default App;
