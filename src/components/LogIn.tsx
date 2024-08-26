import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Dashboard.css";

function LogIn(){
    return(
        <>
        <section className="position-relative min-vh-100 square-in-hesitate-animation">
            <div className="position-relative z-2">
                <Navbar/>

                <main className="position-relative">

                <h5 className="border-2 text-white m-4">Login</h5>

                <div className="row w-100 h-100 p-5 g-0 square-in-hesitate-animation">
                    
                    {/*Columna 1*/}
                    <div className="col bg-white rounded-start-5 p-4">

                        <form>
                            <div className="mb-3">
                                <label  className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label">Check me out</label>
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        
                        </form>
                    </div>

                    {/*Columna 2*/}
                    <div className="col h-100 w-100">
                        <img className="h-100 w-100 rounded-end-5 shadow-sm" src="../../img/FemaleAdventurer1.webp" alt="" />
                    </div>

                </div>

                </main>

                <Footer/>
            </div>

            <img className="position-absolute top-0 w-100 h-100 object-fit-cover img-fluid" src="../../img/Jellyfish.webp" alt="" />

            <div className="position-absolute top-0 w-100 h-100 opacity-75 bg-black"></div>

        </section>
        </>
    );
}

export default LogIn;