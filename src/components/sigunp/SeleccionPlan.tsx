/*
    Tercer screen
*/

import { faCheck, faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "reactstrap";

const SeleccionPlan: React.FC =()=>{

    const [isActive1, setIsActive1] = React.useState(true);
    const estado = React.useRef<HTMLDivElement>(null);
    const [isActive2, setIsActive2] = React.useState(false);
    const [isActive3, setIsActive3] = React.useState(false);

    const handleActive=()=>{

    }

    return(
        <div className="container seleccionContainer">
        <div className="row justify-content-md-center">
            <div className="col-md-12 encabezadoWrapper">
                    <p className="contadorSeleccion">
                        PASO  <span> 2 </span> DE <span> 3 </span>
                    </p>
                    <div className="tituloSeleccionContainer"> <h2> Selecciona el plan ideal para ti.</h2> </div>
                    <div className="descripcionSeleccion"> 
                        <ul className="listaSeleccion">
                            <li>
                                <FontAwesomeIcon className="checkSeleccion" icon={faCheck}
                                    />
                                <div>Sin compromiso, cancela cuando quieras.</div>
                            </li>
                            <li>
                                <FontAwesomeIcon className="checkSeleccion" icon={faCheck}/>
                                <div>
                                    Todo netflix a un bajo costo.
                                </div>
                            </li>
                            <li>
                                <FontAwesomeIcon className="checkSeleccion" icon={faCheck}/>
                                <div>
                                    Disfruta sin límites en todos tus dispositivos.
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>

            <div className="col-md-12">
                <table className="table tablaSeleccion">                    
                    <tbody>
                        <tr className="firstRow">
                            <td></td>
                            <td>
                                <div className="squareContainer" ref={estado}>
                                    <span>Básico</span>
                                    <FontAwesomeIcon  className={isActive1 ? "columnaActivada" : "squareDown"} 
                                        icon={faSquareCaretDown} 
                                        onClick={handleActive}
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="squareContainer">
                                    <span>Estándar</span>
                                    <FontAwesomeIcon className={isActive2 ? "columnaActivada" : "squareDown"} 
                                        icon={faSquareCaretDown}
                                        onClick={handleActive}
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="squareContainer">
                                    <span>Premiun</span>
                                    <FontAwesomeIcon className={isActive3 ? "columnaActivada" : "squareDown"} 
                                        icon={faSquareCaretDown}
                                        onClick={handleActive}
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr className="secondRows">
                            <th scope="row">Precio mensual (sin impuestos incluidos)</th>
                            <td className="td1">$ 379</td>
                            <td className="td2">$ 639</td>
                            <td className="td3">$ 939</td>
                        </tr>
                        <tr className="secondRows">
                            <th scope="row">Calidad de video</th>
                            <td className="td1">Buena</td>
                            <td className="td2">Mejor</td>
                            <td className="td3">Óptima</td>
                        </tr>
                        <tr className="secondRows">
                            <th scope="row">Resolución</th>
                            <td className="td1">480p</td>
                            <td className="td2">1080p</td>
                            <td className="td3">4K + HDR</td>
                        </tr>
                        <tr className="secondRows">
                            <th scope="row">Ve Netflics en tu TV, computadora, celular y tablet</th>
                            <td><FontAwesomeIcon className="td1" icon={faCheck}/></td>
                            <td><FontAwesomeIcon className="td2" icon={faCheck}/></td>
                            <td><FontAwesomeIcon className="td3" icon={faCheck}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="col-md-12 textoSeleccionContainer">
                <div className="textoSeleccion">
                    La disponibilidad del contenido en HD (720p), Full HD (1080p), Ultra HD (4K) y
                    HDR depende de tu servicio de internet y del dispositivo en uso. No todo el contenido 
                    está disponible en todas las resoluciones. Consulta nuestro <a href="#"> Términos de uso </a>
                    para obtener más información.
                    <br/>
                    Solo las personas que vivan contigo pueden usar tu cuenta. Puedes ver Netflix en 4 dispositivos
                    distintos al mismo tiempo con el plan Premiun, en 2 con el plan Estándar y en 1 con el plan Básico.                    
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default SeleccionPlan;