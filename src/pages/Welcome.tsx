import React, {useRef} from "react";
import Navbar from '../components/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";
import { CarouselControl } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// Desintalar reacttrap y react-responsive-carousel
import swal from 'sweetalert';

const Welcome: React.FC = () =>{

    const inp = React.useRef<HTMLInputElement>(null);

    // Estado de correo electronico
    const [correo, setCorreo] = React.useState({campo:'', valido:''});

    // Controlador de valor de correo electronico
    const changeValue =(e: any)=>{
        setCorreo({...correo, campo:e.target.value})
    }

    // Expresiones regulares
    const expresiones = {
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    // Expresion regular de correo
    const expresion: string = "";
 
    // Validacion de expresion regular
    const validacion =()=>{
        if(expresiones.correo){
            if(expresiones.correo.test(correo.campo)){
                setCorreo({...correo, valido:'true'})
                // Debe cambiar el estilo del input 
                console.log("es verdadero")
                // local storage
                window.localStorage.setItem('correo', correo.campo)
                window.localStorage.setItem('pass', 'cualquiercosa');
                window.location.href="/SignUp"
            }else{
                setCorreo({...correo, valido:'false'})
                swal(
                    {
                        title: "Email",
                        text: "Escribe una dirección de email válida",
                        icon: "warning",
                        dangerMode: true,
                        timer: 8000
                    }
                )
            }
        }
    }

    // Referencias
    const primera = useRef<HTMLDivElement>(null);
    
    // Peliculas
    const movies =[
        {
            id: 1,
            url : "https://i.blogs.es/4a9cb1/titanic/840_560.jpeg"
        },
        {
            id: 2,
            url : "data:image/jpeg;base64,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"
        },
        {
            id: 3,
            url : "https://phantom-marca.unidadeditorial.es/e0e1826a00ca5abe4843e5899f2c6572/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/26/16458730949925.jpg"
        },
        {
            id: 4,
            url : "https://i.blogs.es/5eb3fe/the-walking-dead-poster/1366_2000.jpeg"
        }
        ,{
            id: 5,
            url : "https://www.latercera.com/resizer/8KOI_77flZtzCInR2RGRkGeyBaI=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/U5G7QUP6GZDITGBPMQ23V52SGA.jpg"
        }
    ]

    // Configuracion de carousel
    const settings={
        dots: true,
        fade: true,
        infinte: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className:"slides"
    }

    const changeDisplay =()=>{
   
    }

    
    return(
        <div className="containerWelcome">
            <Navbar />  
            <div className="container firstContainer">
                <section className="row firstSection">
                    <div className="col">
                        <div className="titleContainer">
                            <h1>
                                Películas y series ilimitadas y mucho más.
                            </h1>
                            <h5> Disfruta donde quieras. Cancela cuando quieras.</h5>
                        </div>
                        <div className="comenzarContainer">
                            <h6>¿Quieres ver Netflix ya? Ingresa tu email para 
                                crear una cuenta o reinicar tu membresía de Netflix.
                            </h6>
                            <input 
                                type="email" 
                                placeholder=" Email"
                                value={correo.campo}
                                onChange={changeValue}
                                ref={inp}
                            />
                            <button 
                                onClick={validacion} 
                            > <h4> 
                                Comenzar
                                <FontAwesomeIcon className="welcomeNext" icon={faAngleRight} />
                            </h4>  
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            
            <div className="divider"> </div>

            <div className="secondContainer">
                <div className="container">
                    <section className="row">
                        <div className="col textContainer">
                            <h1>Disfruta en tu TV.</h1>
                            <h4>
                                Ve en smart TV, PlayStation, Xbox,
                                Chromecast, Apple TV, reproductores de Blu-ray y más.
                            </h4>
                        </div>
                        {/* Carousel */} 
                        <div className="col">
                            <div className="contenedorCarrusel">
                                <Carrusel />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        
            <div className="divider"> </div>

            <div className="secondContainer">
                <div className="container">
                    <section className="row">
                        <div className="col">
                            <div className="contenedorCarrusel">
                                <Carrusel />
                            </div>
                        </div>
                        <div className="col">
                            <div className="col textContainer">
                                    <h1>Descarga tus series para verlas offline.</h1>
                                    <h4>
                                        Guarda tu contenido favorito y tendrás siempre algo para ver.
                                    </h4>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            
            <div className="divider"> </div> 
            
            <div className="secondContainer">
                <div className="container">
                    <section className="row">
                        <div className="col">
                            <div className="col textContainer">
                                <h1>Disfruta donde quieras.</h1>
                                <h4>
                                    Películas y series ilimitadas en tu teléfono, tablet, computadora 
                                    y TV sin costos extra.
                                </h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="contenedorCarrusel">
                                <Carrusel />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="divider"> </div> 

            <div className="secondContainer">
                <div className="container">
                    <section className="row">
                        <div className="col">
                            <div className="contenedorCarrusel">
                                <Carrusel />
                            </div>
                        </div>
                        <div className="col">
                            <div className="col textContainer">
                                <h1>Crea perfiles para niños</h1>
                                <h4>
                                    Los niños vivirán aventuras sus personajes favoritos en un espacio diseñados
                                    exclusivamente para ellos, sin costo con tu membresía.
                                </h4>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            
            <div className="divider"> </div>

            <div className="lastContainer">
                <div className="container">
                    <section className="row">
                        <div className="col">
                            <div>
                                <h1>Preguntas frecuentes.</h1>
                                <div className="preguntasWrapper">
                                    <ul>
                                        <li>
                                            <div className="preguntaWrapperli">
                                                <div onClick={changeDisplay}>
                                                    <div className="preguntaContainer">¿Qué es Netflix?</div> 
                                                    <div className="plusContainer"> + </div>
                                                </div>
                                                
                                                <div className="descripcionPF" ref={primera}>
                                                    Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.
                                                    <br/>
                                                    <br />
                                                    Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay 
                                                    algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="preguntaWrapperli">
                                                <div onClick={()=>alert("esto es un mensaje")}>
                                                    <div className="preguntaContainer">¿Cuánto cuesta Netflix?</div> 
                                                    <div className="plusContainer"> + </div>
                                                </div>  
                                                
                                                <p className="descripcionPF">
                                                    Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 379 hasta $ 939 al mes (sin impuestos incluidos). Sin costos adicionales ni contratos.
                                                </p>
                                            </div>                                            
                                        </li>
                                        <li>
                                            <div className="preguntaWrapperli">
                                                <div onClick={()=>alert("esto es un mensaje")}>
                                                    <div className="preguntaContainer">¿Dónde puedo ver Netflix?</div> 
                                                    <div className="plusContainer"> + </div>
                                                </div>
                                                
                                                <p className="descripcionPF">
                                                    Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.
                                                    <br/>
                                                    <br/>
                                                    Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="preguntaWrapperli">
                                                <div onClick={()=>alert("esto es un mensaje")}>
                                                    <div className="preguntaContainer">¿Cómo cancelo?</div> 
                                                    <div className="plusContainer"> + </div>
                                                </div>
                                                
                                                <p className="descripcionPF">
                                                    Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="preguntaWrapperli">
                                                <div onClick={()=>alert("esto es un mensaje")}>
                                                    <div className="preguntaContainer">¿Qué puedo ver en Netflix?</div> 
                                                    <div className="plusContainer"> + </div>
                                                </div>
                                                
                                                <p className="descripcionPF">
                                                    Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="preguntaWrapperli">
                                                <div onClick={()=>alert("esto es un mensaje")}>
                                                    <div className="preguntaContainer">¿Es bueno netflix para los niños?</div> 
                                                    <div className="plusContainer"> + </div>
                                                </div>
                                                
                                                <p className="descripcionPF">
                                                    La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan   el control mientras los peques disfrutan series y películas familiares en su propio espacio.
                                                    <br/>
                                                    <br/>
                                                    Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en    función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="comenzarContainer">
                                <h6>¿Quieres ver Netflix ya? Ingresa tu email para 
                                    crear una cuenta o reinicar tu membresía de Netflix.
                                </h6>
                                <input type="email" placeholder=" Email"/>
                                <button> 
                                    <h4>
                                        Comenzar 
                                        <FontAwesomeIcon className="welcomeNext" icon={faAngleRight} />
                                    </h4>  
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="divider"> </div>

            <div className="wrapperFooter">
                <Footer />
            </div>
        </div>
    )
}

export default Welcome;