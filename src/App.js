import Header from './components/header/header';
import './App.css';
import DetailleLechon from './components/detalle-lechon/detalle-lechon';
import { BrowserRouter as Router } from  "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Header />
    
    <div className="App">
      <DetailleLechon />
    </div>
    </Router>
    </>
  );
}

export default App;

//aquí llamar al componente lechones-gustados el nuemro de veces que lechones haya en el arrayLikes