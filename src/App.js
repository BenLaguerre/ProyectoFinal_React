<<<<<<< HEAD
import logo from './logo.svg';
import React, { useEffect, useState } from "react";
=======
import Header from './components/header/header';
>>>>>>> 5ae22e197c104bb2e03e11a25cd4eac49a85f07e
import './App.css';
import LechonGustado from './components/lechones-gustados/lechones-gustados';
import axios from "axios";
import DetailleLechon from './components/detalle-lechon/detalle-lechon';
import { BrowserRouter as Router, Routes, Route } from  "react-router-dom";
import LechonesGustados from './components/lechones-gustados/lechones-gustados'



function App() {
<<<<<<< HEAD
  
  /*const [lechonLike, setLechonLike] = useState([]);
  
  useEffect(() => {
    cargarPerfil(22);
  }, []);


  async function cargarPerfil(id) {
    await axios.get(`http://localhost:8000/detalle-perfil/${id}`).then((res) => {
      setLechonLike(res.data[0].arrayLikes);
    })
  }

  if (lechonLike.length === 0) {
    return null
  } else {
    let lechones  = lechonLike.map(item => (
      <div>
        <LechonGustado email = {item} />
      </div>
    ))*/

    return (
      <div className="App">
         <LechonGustado />
      </div>
    );
  }

=======
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
    <LechonesGustados />
    </div>
    </Router>
    </>
  );
}
>>>>>>> 5ae22e197c104bb2e03e11a25cd4eac49a85f07e

export default App;

