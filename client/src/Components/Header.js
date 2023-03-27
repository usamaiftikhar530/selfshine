import selfshine from "../images/selfshine.png";

import { NavLink } from "react-router-dom";


function Header() {
  return (
    <>
      {/* NavBar */}
      <nav className="navbar navbar-expand-lg navbar-light header" >
        <NavLink to={"/"} className="navbar-brand ps-5 p-3">
          <img src={selfshine} alt="Self Shine Logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item ps-3 active">
              <NavLink to={"/"} className="nav-link fs-6 fw-bold text-dark">
                Home <span class="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item ps-3">
              <NavLink to={"/about"} className="nav-link fs-6 fw-bold text-dark">
                About
              </NavLink>
            </li>
            <li className="nav-item ps-3">
              <NavLink to={"/services"} className="nav-link fs-6 fw-bold text-dark">
                Services
              </NavLink>
            </li>
            <li className="nav-item ps-3">
              <NavLink to={"/pricing"} className="nav-link fs-6 fw-bold text-dark">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item ps-3">
              <NavLink to={"/contact"} className="nav-link fs-6 fw-bold text-dark">
                Contact
              </NavLink>
            </li>
            <li className="nav-item dropdown ps-3">
              <a
                className="nav-link dropdown-toggle fs-6 fw-bold text-dark"
                href="#"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NavLink to={"/services"} className="dropdown-item">
                  Appointment
                </NavLink>
                <NavLink to={"/openhour"} className="dropdown-item">
                  Open Hours
                </NavLink>
                <NavLink to={"/ourteam"} className="dropdown-item">
                  Our Team
                </NavLink>
                <NavLink to={"/testimonial"} className="dropdown-item">
                  Testimonial
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      
    </>
  );
}

export default Header;
