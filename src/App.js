import Header from './components/header/header';
import './App.css';
import LechonGustado from './components/lechones-gustados/lechones-gustados';
import axios from "axios";
import DetailleLechon from './components/detalle-lechon/detalle-lechon';
import { BrowserRouter as Router, Routes, Route } from  "react-router-dom";
import LechonesGustados from './components/lechones-gustados/lechones-gustados'



function App() {
  return (
    <>
    <Router>
    <Header />
    <main className="Box">
					<Routes>
						<Route path="/Likes" element={<LechonesGustados />} />
						<Route exact path="/detalle-lechon/:id" element={<DetailleLechon />} />
					</Routes>
				</main>
    <div className="App">
    
    </div>
    </Router>
    </>
  );
}

export default App;

