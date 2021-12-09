import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class LechonesGustados extends React.Component {
  //Realmente era lo ue había en Angular (Solo he añadido lo del estado)
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      miPerfil: [],
      lechon: [],
      arrayLechones: [],
      prueba: [],
    };
  }
  async componentDidMount() {
    await axios.get(`http://localhost:8000/detalle-perfil/23`).then((res) => {
      const miPerfil = res.data[0].arrayLikes;
      this.setState({ miPerfil });
      //array con los mails
      console.log(miPerfil);
    });
    //voy a esperar para crear el array
    await this.crearArray();

    console.log(this.state.miPerfil.length);

    console.log(this.state.arrayLechones);
    console.log(this.state.arrayLechones.length);
  }

  async crearArray() {
    console.log("imprimiendo miPerfil" + this.state.miPerfil);
    for (let i = 0; i < this.state.miPerfil.length; i++) {
      await this.cargarDetaille(this.state.miPerfil[i]);

      console.log(this.state.lechon);
      this.state.arrayLechones.push(this.state.lechon);
    }
    console.log("creara el array?" + JSON.stringify(this.state.arrayLechones));
  }

  //hacemos asincrona la carga del detalle para que espere
  async cargarDetaille(email) {
    await axios
      .get(`http://localhost:8000/detalle-perfil`, { params: { email: email } })
      .then((res) => {
        const lechon = res.data[0];
        this.setState({
          response: res.data[0],
          lechon,
        });
      });
  }

  render() {
    return (
      <div className="main-container">
      <h2>hello there</h2>
          <div className="listaLechoncitos">
            {this.state.arrayLechones.length > 0 ? (
              this.state.arrayLechones.map((lechon) => (
                <div className="lechon-container" >
                    <div class="img-container">
                        <img src="{{like[0].image}}" alt="imagen lechoncito gustado"/>
                    </div>
                    <div className="inforLechon">
                        <p>Ciudad: {lechon.city}</p>
                        <p>Edad: {lechon.age}</p>
                    </div>
                    <Link className="boton" to={`../detalle-lechon/${lechon.id}`}>
												    Mostrar detalle
								    </Link>
                </div>
                ))
            ) : (
              <tr>
                <td colSpan={5}>--- No existen libros aún ---</td>
              </tr>
            )}
          </div>
 
      </div>
        
      
    );
  }
}

export default LechonesGustados;
