import React from "react";
import { Link } from "react-router-dom";
import NavbarSignup from "../components/sigunp/NavbarSignup";

const SeleccionPelicula : React.FC =()=>{
    return(
        <div className="signupContainer">
           <NavbarSignup />

           <div className="signUpBody"
            id="signUpBodyConfiguracionTarjeta"
           >
               <div className="navbarSeleccionPeliculas">
                    <div></div>
                    <div></div>
                    {
                        1 + 1 > 0 
                            ?
                                <Link to="/" aria-disabled>
                                    CONTINUAR
                                </Link>
                            :
                                <button>CONTINUAR</button>
                    }
               </div>


           </div>
        </div>
    )
}

export default SeleccionPelicula;