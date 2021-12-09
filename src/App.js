import Header from './components/header/header';
import './App.css';
import DetailleLechon from './components/detalle-lechon/detalle-lechon';
import { BrowserRouter as Router } from  "react-router-dom";
import LechonesGustados from './components/lechones-gustados/lechones-gustados'


function App() {
  return (
    <>
    <Router>
    <Header />
    <div className="App">
    <LechonesGustados />
    </div>
    </Router>
    </>
  );
}

export default App;