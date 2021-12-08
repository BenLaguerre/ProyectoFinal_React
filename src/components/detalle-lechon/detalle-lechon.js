import React, { useEffect, useState } from "react";
import axios from "axios";
  
  /*getStatus(){
    let status = sessionStorage.getItem("status")
    return status
    }*/

export default function DetailleLechon() {
  
  useEffect(() => {
    cargarDetaille(5)
  }, []);

  const [perfil, setPerfil] = useState([]);

  async function cargarDetaille(id) {
    await axios.get(`http://localhost:8000/detalle-perfil/${id}`).then((res) => {
      setPerfil(res.data);
    })
  }

if (perfil.length === 0) {
  return null
} else {
  return (
  <>
  <div className="profile-container">
      <div className="detail-container">
        <div className="info-container">

          {/*  imagen de la persona en detalle */}

          <div class="img-container">
            <img src={perfil[0].image} alt="persona" />
          </div>
          {/*  Info */}
          <div class="person-info">
            <div>Info</div>
    
            {/* Nombre */}
            <p>Nombre: {perfil[0].name.firstName}</p>
    
            {/* Genero */}
            <p>Genero: {perfil[0].gender}</p>
    
            {/* Edad */}
    
            <p>Edad: {perfil[0].age}</p>
    
            {/* Ciudad  */}
            <p>Ciudad: {perfil[0].city}</p>
    
            {/* Musica */}
            <p>Musica: {perfil[0].music}</p>
    
          </div>
        </div>
        <div class="description-container">
          {/* Descripcion de la bio de la persona */}
          <div>{perfil[0].description}</div>
        </div>
      </div>
    </div>
    </>
)}
}
