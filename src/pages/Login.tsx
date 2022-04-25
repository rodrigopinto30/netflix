import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Login: React.FC =()=> {
    return(
        
        <div className="row justify-content-md-center">
             <Navbar />
            <div className="col-md-auto">
                <h1> Iniciar sesión </h1>
                <div className="wrapperLogin">

                    <div className="wrapperLoginCenter">
                        <div className="inputContainer">
                            <input type="text" placeholder="Email o número de teléfono"/>
                        </div>
                        <div className="inputContainer">
                            <input type="password" placeholder="Contraseña"/>
                        </div>
                        <div className="buttonContainer">
                            <button>Iniciar sesión</button>
                        </div>
                        
                        <div className="checkLinkContainer">
                            <div className="inputCheckBoxContainer">
                                <input type="checkbox"/>
                                <span>Recuérdame</span>
                            </div>
                            <div className="linkAyudaContainer">
                                <NavLink to="/home">¿Necesitas ayuda?</NavLink>
                            </div>
                        </div>                    
                    </div>

                    <div className="wrapperLoginDescription">
                        <div className="facebookContainer">
                            <div className="facebookDescriptionContainer">
                                <NavLink to="/home" className="linkFacebook">Iniciar sesión con Facebook</NavLink>
                            </div>
                        </div>
                        <div className="wrapperPrimeraSuscribete">
                            <div className="primeraVezContainer">
                                <span>¿Primera vez en netflics?</span>
                            </div>
                            <div className="suscribeteContainer">
                                <NavLink to="/home" className="linkSuscribete">Suscríbete ahora</NavLink>
                            </div>
                        </div>
                        <div className="recaptchaInfoContainer">
                            <div className="recaptchaContainer">
                                <span>
                                    Esta página está protegida por Google reCAPTCHA para comprobar
                                    que no eres un robot. 
                                    <NavLink to="/home" className="linkInfo"> Más info.</NavLink>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapperFooterWelcome">
                <Footer />
            </div>
        </div> 
    )
}

export default Login

{/*
        <div>
            <div>
                <h1> Iniciar sesión </h1>
                <div>
                    <div>
                        <input type="text" placeholder="Email o número de teléfono"/>
                    </div>
                    <div>
                        <input type="password" placeholder="Contraseña"/>
                    </div>
                </div>
            </div>
        </div>
    */} 