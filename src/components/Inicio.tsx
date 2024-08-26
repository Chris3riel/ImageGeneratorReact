import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Dashboard";

function Inicio(){

    return (<>
    <section id="hero" className="position-relative min-vh-100" >
        <div className="position-relative z-2">
            <Navbar/>

            <div className="container mt-5 bg-transparent rounded-4 p-4 w-50 border-light border-2 border">
                <h1 className="text-white fw-bold mb-4">BIENVENIDO A WAY.ia</h1>
                <br />
                <p className="text-white"> El proyecto "Way" es una inteligencia artificial generativa avanzada que tiene como objetivo
                    la creación automática de imágenes y videos de alta calidad. Esta tecnología encuentra
                    aplicaciones en campos como el diseño gráfico, la producción publicitaria, y la generación
                    de contenido visual para redes sociales y otros medios digitales.</p>                                                                                       
                <a type="button" href="/menu"  className="text-white rounded-2 btn btn-outline-light fw-bolder">MENU</a>
            </div>
            
            <Footer/>
        </div>

        <video muted autoPlay loop className="position-absolute top-0 w-100 h-100 object-fit-cover circle-in-top-left-animation">
            <source src="../../VID_20240821_191124_372.mp4" type="video/mp4"/>
        </video>
        
        <div className="capa position-absolute top-0 w-100 h-100 bg-black opacity-50 "></div>
    </section>
    </>);
}

export default Inicio;