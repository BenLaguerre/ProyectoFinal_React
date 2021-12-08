import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LechonGustado() {
  useEffect(() => {
    cargarDetaille();
  }, []);

  const [lechon, setLechon] = useState([]);

  async function cargarDetaille(email) {
    await axios
      .get(`http://localhost:8000/detalle-perfil`,{email:email})
      .then((res) => {
        setLechon(res.data);
      });
  }



  return (
    <div class="main-container">
      <h2>hello there</h2>
      <div class="lechon-container">
        <div class="img-container">
          <img className='mat-card-image' src={lechon.image} alt='imagencita' />
        </div>
        <div>
          <Link className="boton" to={`../detalle-lechon/${lechon.id}`}>
            {lechon.name.firstName}
          </Link>
        </div>
        <div>
          <p>Ciudad:{lechon.city}</p>
          <p>Edad: {lechon.age}</p>
        </div>
      </div>
    </div>
  );
}
