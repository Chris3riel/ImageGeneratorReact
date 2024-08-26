function Navbar(){

    return (
        <nav className="navbar navbar-expand-lg bg-transparent">
  <div className="container-fluid">
    <a className="navbar-brand text-white fw-bold" href="#">Way.ia</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/nosotros">Sobre Nosotros</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Opciones
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/Registro">Registrarse</a></li>
            <li><a className="dropdown-item" href="#">Iniciar Sesión</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Reportar un problema</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-black-50" aria-disabled="true">help</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn bg-primary text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    );
}

export default Navbar;