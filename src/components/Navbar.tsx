import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { isClassElement } from "typescript";
import SignUp from "../pages/SignUp";

const Navbar: React.FC =()=>{
    return(
        <div className="menuContainer">
            <nav className="nav">
                <div className="logoContainer">
                    <NavLink className="nav-link" to="/welcome">
                        <img src={require("../img/netflix.PNG")}/>
                    </NavLink>
                </div>
                <div className="buttonSesionContainer">
                    <select>
                        <option defaultValue="Español">Español</option>
                        <option>Ingles</option>
                    </select>
                    <NavLink className="nav-link btnRed" to="/login">Iniciar sesión</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;