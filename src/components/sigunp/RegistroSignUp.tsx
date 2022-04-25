/*
    PRIMER SCREEN
*/

import React from "react";

const RegistroSignUp: React.FC =()=>{
    return(
        <div className="container registroContainer">
            <div className="row justify-content-md-center">
                <div className="col col-lg-4">
                        <div className="imgSignUp"></div>
                        <p className="parrafoPrimerScreen">
                            PASO  <span> 1 </span> DE <span> 3 </span>
                        </p>
                        <div> <h2>Completa la configuracion de tu cuenta</h2> </div>
                        <div className="descriptionSignUp"> 
                            Netflics esta personalizado para ti. <br/>
                            Crea una contraseña para ver netflics en cualquier dispositivo, cuando quieras.
                        </div>
                </div>
            </div>
        </div>
    )
}

export default RegistroSignUp;