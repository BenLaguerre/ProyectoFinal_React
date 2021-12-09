import React from 'react';
import './principal.css'

class Principal extends React.Component{

    render(){
        return(
            <div className="container-principal">

                <div className="container-img">
                    <img className="logo-animado" src="images/LechonMatchPrincipal.png" alt="logo lechoncito"/>
                    <img className="logo-animado logo-heartbeat" src="images/LechonMatch4.png" alt="lechoncito logo"/>
                </div>
                <p className="texto-animado">Encuentra a tu medio lechón</p>
                <audio controls src='audio/heartbeat.wav' type="audio/mp3" className="hidden" autoPlay>
                    Your browser does not support the <code>audio</code> element.
                </audio>
            </div>
        );
    }
    
}

export default Principal;