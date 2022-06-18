import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
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
    let page : number = 0;

    const changePage=()=>{

    }

    const displayPage=()=>{
        switch(value){
            case 0:{
                page = 0;
                return <RegistroSignUp />
            }
            case 1:{
                page = 1;
                return <CrearContra />
            }
            case 2:{
                page = 2;
                return <SeleccionPlan />
            }
            case 3:{
                page = 3;
                return <SeleccionTuPlan />
            }
            case 4:{
                page = 4;
                return <ElegirPago />
            }
            case 5:{
                page = 5;
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
                {
                    page === 4
                        ?
                            <></>
                        :
                            <button className='btnSiguiente'
                                disabled={(value == bodySU.length - 1)}    
                                onClick={()=>setValue(()=> value + 1)}                    
                                >Siguiente
                            </button>
                }

                    
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