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
      currentBook: null,
    };
  }
  componentDidMount() {
    
    axios.get(`http://localhost:8000/detalle-perfil/22`).then((res) => {
      const miPerfil = res.data[0].arrayLikes;
      this.setState({ miPerfil });
      console.log(miPerfil);
    });
    
    setTimeout(() => {
      console.log(this.state.miPerfil.length);
      this.crearArray();
      console.log(this.state.arrayLechones);
    }, 1000);
  }

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

  crearArray() {
    for (let i = 0; i < this.state.miPerfil.length; i++) {
      this.cargarDetaille(this.state.miPerfil[i]);
      setTimeout(() => {
        this.state.arrayLechones.push(this.state.lechon);
      }, 1000);
    }
  }
  cargarRender(){
    setTimeout(()=>{
            return (
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    {this.state.arrayLechones.length > 0 ? (
                      this.state.arrayLechones.map((lechon) => (
                        <tr key={lechon}>
                          <th scope="row">{this.state.lechon.name}</th>
                          <td>{this.state.lechon.name}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5}>--- No existen libros aún ---</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
        
              /*
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
              */
            );
          
    },1000);
  }
  render(){
      if(!this.cargarRender()){
        console.log("pos no")
          return null
          
      }else{
        return this.cargarRender();
      }
  }
}
//}

export default LechonesGustados;
