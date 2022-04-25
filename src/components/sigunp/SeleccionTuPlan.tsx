/*
    Cuarto screen
*/
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faCircleCheck} from '@fortawesome/free-solid-svg-icons';

const SeleccionTuPlan: React.FC =()=>{
    return(
        <div className="container seleccionaPlan">
        <div className="row justify-content-md-center">
            <div className="col col-lg-6">
                    <div className="checkContainer">
                        <FontAwesomeIcon className="check" icon={faCircleCheck} />
                    </div>
                    <p className="contadorCambiarContra">
                        PASO  <span> 2 </span> DE <span> 3 </span>
                    </p>
                    <div className="tituloSeleccionaPlanContainer"> <h2> Selecciona tu plan.</h2> </div>
                    <div className="descripcionSeleccionaPlan"> 
                        <ul>
                            <li>
                                <FontAwesomeIcon className="checkItem" icon={faCheck}/>
                                <div>Sin compromiso, cancela cuando quieras.</div>
                            </li>
                            <li>
                                <FontAwesomeIcon className="checkItem" icon={faCheck}/>
                                <div>
                                    Todo netflix a un bajo costo.
                                </div>
                            </li>
                            <li>
                                <FontAwesomeIcon className="checkItem" icon={faCheck}/>
                                <div>
                                    Disfruta sin límites en todos tus dispositivos.
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default SeleccionTuPlan;