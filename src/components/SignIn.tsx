import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Dashboard.css";

function SignIn(){
    return(
        <>
        <section className="position-relative min-vh-100 bg-black wipe-in-right">

            <div className="position-relative z-2">
            
            <Navbar />

            <h5 className="text-white m-4 border-2 border-bottom">Formulario de registro</h5>

            <div className="container mt-5 bg-transparent rounded-4 p-4 w-50 border-light border-2 border">

            <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label text-white">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label text-white">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-12">
                        <label className="form-label text-white">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="col-12">
                        <label className="form-label text-white">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label text-white">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-4">
                        <label  className="form-label text-white">State</label>
                        <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label className="form-label text-white">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label text-white">
                            Check me out
                        </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
            <Footer/>
            </div>

            <img src="../../img/FemaleAdventurer1.webp" className="position-absolute top-0 w-100 h-100 object-fit-cover img-fluid" alt="" />

            <div className="position-absolute top-0 w-100 h-100 bg-black opacity-50"></div>
        </section>
        </>
    );
}

export default SignIn;