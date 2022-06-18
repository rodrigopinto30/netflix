import React from "react";
import { Link } from "react-router-dom";
import NavbarSignup from "../components/sigunp/NavbarSignup";

const Users: React.FC =()=>{
    return(
       <div className="signupContainer">
           <NavbarSignup />

           <div className="signUpBody"
            id="signUpBodyConfiguracionTarjeta"
           >
                <div className="cabeceraUsersContainer"
                
                >
                    <div className="tituloUsersContainer">
                        <span className="tituloUsers">
                            ¿Quién usara el servicio de Netflix?
                        </span>
                    </div>
                    <div className="descripcionUsersContainer">
                        <span className="descripcionUsers">
                            Todos en tu hogar pueden disfrutar sugerencias
                            basadas en lo que han visto y sus gustos. Es excelente
                            para los niños.
                        </span>
                    </div>
                </div>
                <form className="formularioMembresia">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Tu perfil"/>
                        <input className="form-control" type="text" placeholder="Nombre"/>
                        <input className="form-control" type="text" placeholder="Nombre"/>
                        <input className="form-control" type="text" placeholder="Nombre"/>
                        <input className="form-control" type="text" placeholder="Nombre"/>
                    </div>
                </form>

                <div className="btnMembresiaContainer">
                    <Link 
                        className="btnMembresia" 
                        to="/seleccionpeliculas"
                    >
                        CONTINUAR
                    </Link>
                </div>
        
           </div>

       </div>
    )
}

export default Users;