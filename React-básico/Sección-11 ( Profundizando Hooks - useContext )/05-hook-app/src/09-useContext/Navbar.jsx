import { Link, NavLink } from "react-router";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark rounded-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            useContext
          </Link>

          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink 
                className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}` } 
                to="/" >
                Home
              </NavLink>
              <NavLink 
                className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}` } 
                to="/about" >
                About
              </NavLink>
              <NavLink 
                className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}` } 
                to="/login" >
                Login
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
