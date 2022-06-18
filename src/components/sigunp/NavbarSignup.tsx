import React from "react";
import { NavLink } from "react-router-dom";

const NavbarSignup: React.FC =()=>{
    return(
        <div className="navbarSignup">
            <div className="logoSignupContainer">
                <NavLink 
                    to="/welcome"
                    className="logoSignup"
                > NETFLIX</NavLink>
            </div>
            <div className="sesionSignupContainer">
                <NavLink 
                    to="/login"
                    className="sesionSignup"    
                > Iniciar sesión </NavLink>
            </div>
        </div>
    )
}

export default NavbarSignup;