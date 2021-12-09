import Header from './components/header/header';
import './App.css';
import DetailleLechon from './components/detalle-lechon/detalle-lechon';

function App() {
  return (
    <><Header />
    <div className="App">
      <DetailleLechon />
    </div></>
  );
}

export default App;

//aquí llamar al componente lechones-gustados el nuemro de veces que lechones haya en el arrayLikes