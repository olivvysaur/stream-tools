import './App.css';
import { BowtieSpinner } from './components/BowtieSpinner';
import { CardTitle } from './components/CardTitle';
import { VideoBoundingBox } from './components/VideoBoundingBox';

const App = () => {
  const params = new URLSearchParams(window.location.search);
  const title = params.get('title');

  return (
    <div className='App'>
      <VideoBoundingBox>
        <BowtieSpinner />
        {!!title && <CardTitle>{title}</CardTitle>}
      </VideoBoundingBox>
    </div>
  );
};

export default App;
