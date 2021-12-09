import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class LechonesGustados extends React.Component {
  //Realmente era lo que había en Angular (Solo he añadido lo del estado)
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

  //método para traer el arrayLikes del perfil con id 23 y guardarlo en el state miPerfil
  async componentDidMount() {
    await axios.get(`http://localhost:8000/detalle-perfil/23`).then((res) => {
      const miPerfil = res.data[0].arrayLikes;
      this.setState({ miPerfil });  
    });
    //voy a esperar para crear el array
    await this.crearArray();
  }

  //método para meter a cada lechon que se carga en el state arrayLechones 
  async crearArray() {
    console.log("imprimiendo miPerfil" + this.state.miPerfil);
    for (let i = 0; i < this.state.miPerfil.length; i++) {
      await this.cargarDetaille(this.state.miPerfil[i]);
      this.state.arrayLechones.push(this.state.lechon);
    }
    console.log("creara el array?" + JSON.stringify(this.state.arrayLechones));
  }

  //método para traer un perfil mediante su email y meterlo en el state lechon
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
                        <img src={lechon.image} alt="imagen lechoncito gustado"/>
                    </div>
                    <div className="infoLechon">
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
                <td colSpan={5}>--- No te ha gustado ningún lechoncito ---</td>
              </tr>
            )}
          </div>
 
      </div>
        
      
    );
  }
}

export default LechonesGustados;
