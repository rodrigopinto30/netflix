/*
    Segundo Screen
*/

import React from "react";

const CrearContra: React.FC =()=>{

    const contrasenia = React.useRef<HTMLInputElement>(null);
    
    React.useEffect(()=>{
        console.log(localStorage.getItem('pass'))
        localStorage.setItem('pass', ' ');
    },[])
    
    const showpass =()=>{
        console.log(contrasenia.current?.value)
    }

    return(
    
        <div className="container containerCambiarContra">
        <div className="row justify-content-md-center">
            <div className="col col-lg-4">
                    <p className="contadorCambiarContra">
                        PASO  <span> 1 </span> DE <span> 3 </span>
                    </p>
                    <div> <h2> Crea una contraseña para que comiences tu membresía.</h2> </div>
                    <div className="descriptionCambiarContra"> 
                        ¡Unos pasos más y listo!<br/>
                        Tampoco nos gusta los trámites.
                    </div>
                    <div className="formCrearContra">
                        <div className="inputCorreoContraDiv">
                            <span> Email </span>
                            <p>{window.localStorage.getItem('correo')}</p>
                        </div>
                        <div>
                            <input className="inputFormCrear" 
                                ref={contrasenia} placeholder="Agregar una contraseña" 
                                type="password"
                                onChange={showpass}
                            />
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default CrearContra;