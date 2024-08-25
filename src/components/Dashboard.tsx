import Navbar from "./Navbar";
import "./Dashboard.css"; 
import Footer from "./Footer";

function Dashboard() {
    return (
        <>
            <section className="position-relative min-vh-100">
                <div className="position-relative z-2">
                    <Navbar />
                    
                    <h4 className="container text-white mt-4" >Formulario de ejemplo</h4>

                    <main className="row rounded-4 p-4 m-4 gap-2 mb-0">
                        <aside className="col bg-transparent text-white rounded-2 square-in-hesitate-animation">
                            <h5 className="m-2">Formulario 1</h5>
                            <br />
                            <form>
                                <div className="row mb-3">
                                    <label className="col-sm-2 col-form-label">NO.</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-sm-2 col-form-label">Texto</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" />
                                    </div>
                                </div>
                                <fieldset className="row mb-3">
                                    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                            <label className="form-check-label">
                                                First radio
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                            <label className="form-check-label">
                                                Second radio
                                            </label>
                                        </div>
                                        <div className="form-check disabled">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                                            <label className="form-check-label">
                                                Third disabled radio
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="row mb-3">
                                    <div className="col-sm-10 offset-sm-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                            <label className="form-check-label">
                                                Example checkbox
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                            <br />
                        </aside>

                        <aside className="col bg-white rounded-2 square-in-hesitate-animation">
                            <h5 className="m-2">Json</h5>
                            <br />
                            <label className="form-label">Importar un Json</label>
                            <textarea className="form-control mb-2" id="exampleFormControlTextarea1"></textarea>
                        </aside>

                        <aside className="col bg-transparent border border-2 border-light rounded-2 square-in-hesitate-animation">
                            <h5 className="m-2 text-white">Output</h5>
                            <br />
                        </aside>

                    </main>
                    <Footer/>
                </div>

                <img className="position-absolute top-0 w-100 h-100 object-fit-cover img-fluid circle-in-bottom-right-animation" src="../../public/img/Screenshot from 2024-08-22 11-28-56.png" alt="" />

                <div className="position-absolute top-0 w-100 h-100 bg-black opacity-25"></div>
            </section>
        </>
    );
}

export default Dashboard;
