import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Dashboard";


function SobreNosotros(){
    return(
        <>
        <section className="position-relative min-vh-100 circle-in-bottom-right-animation">
            <div className="position-relative z-2">
                <Navbar />

                <h1 className="text-white fw-lighter font-monospace text-center py-3 ">IMAGENES GENERADAS CON WAY.ia</h1>

                <main className="container mt-4 border border-2 border-light rounded-5 p-4 circle-in-bottom-right-animation">
                    
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="../../img/Jellyfish.webp" className="d-block w-100 rounded-4" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="../../img/EclipsedElysium.webp" className="d-block w-100 rounded-4" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="../../img/Dimo.webp" className="d-block w-100 rounded-4" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </main>
                
                <Footer />
            </div>
            
            {/*<video muted autoPlay loop className="position-relative top-0 w-100 h-100 object-fit-cover">
                <source />
            </video>*/}
            <img className="position-absolute top-0 w-100 h-100 object-fit-cover img-fluid" src="../../img/FemaleAdventurer1.webp" alt="" />

            <div className="capa position-absolute top-0 w-100 h-100 bg-black opacity-75 "></div>
        </section>
        </>
    );
}

export default SobreNosotros;