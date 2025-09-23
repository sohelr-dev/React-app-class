
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <button className="btn">3dot</button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav w-100 me-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-link me-auto">
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </li>
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu dropdown-menu-end ">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li> <hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar