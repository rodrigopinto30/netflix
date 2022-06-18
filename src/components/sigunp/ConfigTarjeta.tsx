import { url } from "inspector";
import React from "react";
import { Link } from "react-router-dom";
import NavbarSignup from "./NavbarSignup";

const ConfigTarjeta: React.FC =()=>{
    return(
        <div className="signupContainer">
            <NavbarSignup />
            <div 
                className="signUpBody"
                id="signUpBodyConfiguracionTarjeta"
            >
                <div className="cabeceraContainer">
                    <p 
                        className="contadorSeleccion"
                        id="contadorSeleccionConfiguracionTarjeta"
                    >
                        PASO  <span> 3 </span> DE <span> 3 </span>
                    </p>
                    <div className="tituloConfiguracionContainer">
                        <span className="tituloConfiguracion">
                            Configura tu tarjeta de crédito o débito
                        </span>
                    </div>
                    <div className="configImagenContainer">
                        <img src={require("../../img/cards.PNG")}/>
                    </div>
                </div>

                <form className="formularioMembresia">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Nombre"/>
                        <input className="form-control" type="text" placeholder="Apellido"/>
                        <input className="form-control" type="text" placeholder="Número de tarjeta"/>
                        <input className="form-control" type="text" placeholder="Fecha de vencimiento (MM/AA)"/>
                        <input className="form-control" type="text" placeholder="Código de seguridad (CVV)"/>
                    </div>
                </form>

                <div className="btnMembresiaContainer">
                    <Link 
                        className="btnMembresia" 
                        to="/users"
                    >
                        INICIAR MEMBRESIA
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ConfigTarjeta;