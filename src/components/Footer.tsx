import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC =()=>{
    return(
        <div className='container containerFooter'>
            <div className='informacionFooter'>
                <span>¿Preguntas? llama al </span>
                <a href='tel:0303456'>0303456 </a>
            </div>
            <div className='row'>
                <div className='col-md-3'>
                    
                    <NavLink className="linkFooter" to="/">Preguntas frecuentes</NavLink>
                    <NavLink className="linkFooter" to="/">Relaciones Con inversionistas</NavLink>
                    <NavLink className="linkFooter" to="/">Privacidad</NavLink>
                    <NavLink className="linkFooter" to="/">Prueba de valocidad</NavLink>
                </div>
                <div className='col-md-3'>
                    <NavLink className="linkFooter" to="/">Centro de ayuda</NavLink>
                    <NavLink className="linkFooter" to="/">Empleo</NavLink>
                    <NavLink className="linkFooter" to="/">Prefencias de cookies</NavLink>
                    <NavLink className="linkFooter" to="/">Avisos legales</NavLink>
                </div>
                <div className='col-md-3'>
                    <NavLink className="linkFooter" to="/">Cuenta</NavLink>
                    <NavLink className="linkFooter" to="/">Formas de ver</NavLink>
                    <NavLink className="linkFooter" to="/">Información corporativa</NavLink>
                    <NavLink className="linkFooter" to="/">Solo en Netflics</NavLink>
                </div>
                <div className='col-md-3'>
                    <NavLink className="linkFooter" to="/">Prensa</NavLink>
                    <NavLink className="linkFooter" to="/">Términos de uso</NavLink>
                    <NavLink className="linkFooter" to="/">Contáctanos</NavLink>
                </div>
            </div>
            <div>
                <div className='selectIdiomaContainer'> 
                    <select className='selectIdioma'>
                        <option defaultValue="Español">Español</option>
                        <option>Ingles</option>
                    </select>
                </div> 
                <div className='derechoAutorContainer'>
                    <span>Netflix Argentina</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;