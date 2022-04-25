import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight, faLock} from '@fortawesome/free-solid-svg-icons';

const ElegirPago: React.FC =()=>{

    const lastStep =()=>{
        alert("fin del proceso de registro")
    }

    return(
        <div className="container pagoContainer">
            <div className="row justify-content-md-center pagoRow">
                <div className="col-md-6 ">
                    <div className="pagoBox">
                        <div className="logoPagoContainer">
                            <FontAwesomeIcon className="logoPago" icon={faLock} />
                        </div>
                        <div className="descripcionContainer">
                            <div className="contadorPagoContainer">
                                <p> PASO <span>3</span> DE <span>3</span> </p>    
                            </div>
                            <div className="tituloPagoContainer">
                                <h3>Elige cómo quieres pagar</h3>
                            </div>
                            <div className="primerParrafoPagoContainer">
                                <p className="primerParrafoPago">
                                    Tu forma de pago está encriptada y puedes cambiarla cuando quieras.
                                </p>
                            </div>
                            <div className="segundoParrafoPagoContainer">
                                <p className="segundoParrafoPago">
                                    Transacciones seguras y confiables. <br/> Cancela fácilmente online.
                                </p>
                            </div>
                        </div>

                        <div className="metodoPagoContainer">
                            <div className="subTextoContainer">
                                <p className="subTexto">
                                    Encriptado de extremo a extremo
                                </p>
                                <div className="subCandadoContainer">
                                    <FontAwesomeIcon className="subCandado" icon={faLock} />
                                </div>
                            </div>
                            <div className="tarjetaWrapper" onClick={lastStep}>
                                <div className="tarjetaContainer">
                                    <span>Tarjeta de crédito o débito</span>
                                    <div className="tarjetaLogo">
                                        <img src={require('../../img/cards.PNG')}/>
                                    </div>
                                </div>
                                <div className="tarjetaNextContainer">
                                    <div className="tarjetaNext"> 
                                        <FontAwesomeIcon className="next" icon={faAngleRight} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    )
}
export default ElegirPago;


{
    /*
    {
    const {
        activate,
        active,
        error,
        deactivate,
        account,
        chainId
    } = useWeb3React();

    const connect = React.useCallback(()=>{
        activate(connector)
        localStorage.setItem('previouslyConnected', 'true')
    }, [activate])
    
    const disconnect=()=>{
        deactivate();
        localStorage.removeItem('previouslyConnected');
    }

    React.useEffect(()=>{
        if(localStorage.getItem('previouslyConnected') === 'true'){
            connect()
        }
    }, [connect])

    if(error){
        alert("No sé que rompi...")
    }

    return(
        <div>
            <h1> connect wallet</h1>
            {
                active 
                    ?   <>  
                            <p>
                                Estamos conectado a la red numero {chainId} <br/>
                                Este es el usuario {account}
                            </p>
                            <button onClick={connect}> connect wallet</button>
                        </>
                    :   <button onClick={disconnect}> disconnect wallet</button>
            }
        </div>
    )
}

    */
}