import './App.css';
import { BowtieSpinner } from './components/BowtieSpinner';
import { VideoBoundingBox } from './components/VideoBoundingBox';

function App() {
  return (
    <div className='App'>
      <VideoBoundingBox>
        <BowtieSpinner />
      </VideoBoundingBox>
    </div>
  );
}

export default App;
