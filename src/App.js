import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import LechonGustado from './components/lechones-gustados/lechones-gustados';
import axios from "axios";
import DetailleLechon from './components/detalle-lechon/detalle-lechon';

function App() {
  
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


export default App;

//aquí llamar al componente lechones-gustados el nuemro de veces que lechones haya en el arrayLikes