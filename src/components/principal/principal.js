import React from 'react';

class Principal extends React.Component{

    render(){
        return(
            <div className="container-principal">

                <div className="container-img">
                    <img src="../../img/LechonMatchPrincipal.png" alt="logo lechoncito"/>
                    <img className="logo-heartbeat" src="../../img/LechonMatch4.png" alt="lechoncito logo"/>
                </div>
                <p>Encuentra a tu medio lechón</p>
                <audio controls src='../../audio/sound/heartbeat.wav' type="audio/mp3" className="hidden" autoplay>
                    Your browser does not support the <code>audio</code> element.
                </audio>
            </div>
        );
    }
    
}

export default Principal;