import React, { useEffect, useState } from "react";
import { Router } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LechonGustado() {
  useEffect(() => {
    cargarPerfil(22);
  }, []);


  const [lechonLike, setLechonLike] = useState([]);

  const [lechon, setLechon] = useState([]);


  function cargarPerfil(id) {
    axios.get(`http://localhost:8000/detalle-perfil/${id}`).then((res) => {
      setLechonLike(res.data[0].arrayLikes);
    })
  }

  function cargarDetaille(email) {
    axios
      .get(`http://localhost:8000/detalle-perfil`,{ params: {
        email: email
      }})
      .then((res) => {
        setLechon(res.data);
      })
  }

  

    return (
      <>
      <h2>Welcome!</h2>
      <div>{cargarDetaille(lechonLike[0])}</div>
      </>
    )
  }
  

 
