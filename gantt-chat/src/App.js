import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GanntCharts } from './Pages/GanntCharts';
import {Routes,Route} from 'react-router-dom';
import { BarGraph } from './Pages/BarGraph';
import { LineGraph } from './Pages/LineGraph';

function App() {
  return (
    <div className="App">
       
      <Routes>
        <Route path='/' element={<BarGraph/>}/>
        <Route path='/gant' element={<GanntCharts/>}/>
        <Route path='/line' element={<LineGraph/>}/>
      </Routes>
    </div>
  );
}

export default App;
