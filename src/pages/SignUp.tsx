import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../components/Footer';
import CrearContra from '../components/sigunp/CrearContra';
import ElegirPago from '../components/sigunp/ElegirPago';
import NavbarSignup from '../components/sigunp/NavbarSignup';
import RegistroSignUp from '../components/sigunp/RegistroSignUp';
import SeleccionPlan from '../components/sigunp/SeleccionPlan';
import SeleccionTuPlan from '../components/sigunp/SeleccionTuPlan';

const SignUp: React.FC =()=>{
    const[value, setValue] = React.useState(0);
    const bodySU = ["presentacion", "crearContrasenia", "seleccionarPlan", "seleccionarPlanParaTi" , "elegirPago"]
    
    const changePage=()=>{

    }

    const displayPage=()=>{
        switch(value){
            case 0:{
                return <RegistroSignUp />
            }
            case 1:{
                return <CrearContra />
            }
            case 2:{
                return <SeleccionPlan />
            }
            case 3:{
                return <SeleccionTuPlan />
            }
            case 4:{
                return <ElegirPago />
            }
        }
    }

    return(
        <div className='signupContainer'>
            <NavbarSignup />
            <div className='signUpBody'> 
                {
                    displayPage()
                } 
                <div className='btnSiguenteContainer'>
                <button className='btnSiguiente'
                        disabled={(value == bodySU.length - 1)}    
                        onClick={()=>setValue(()=> value + 1)}                    
                    >Siguiente</button>
                    
                    <button className='botonFeo'
                        disabled={value == 0}    
                        onClick={()=>setValue(()=> value - 1)}
                        
                    >
                        <FontAwesomeIcon className="iconBotonFeo" icon={faAngleLeft} />
                    </button>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp;