import Header from './components/header/header';
import './App.css';
import DetailleLechon from './components/detalle-lechon/detalle-lechon';
import LechonesGustados from './components/lechones-gustados/lechones-gustados'

function App() {
  return (
    <><Header />
    <div className="App">

      <LechonesGustados />
      
    </div>

  );
}

export default App;