import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo1.jfif";

const Navbar = () => {
  return (
    <>
      {/* <div className="container"> */}
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid ">
          <Nav.Link as={Link} to={"/"} class="navbar-brand ">
            <img src={logo} class="img-fluid w-25 h-25" alt="error" />
          </Nav.Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
              </li>
              <li class="nav-item">
                <Nav.Link as={Link} to={"/ourmodel"}>
                  Our Models
                </Nav.Link>
              </li>

              <li class="nav-item">
                <Nav.Link as={Link} to={"/buyonline"}>
                  Buy Online
                </Nav.Link>
              </li>

              <li class="nav-item">
                <Nav.Link as={Link} to={"/finance"}>
                  Finance
                </Nav.Link>
              </li>

              <li class="nav-item">
                <Nav.Link as={Link} to={"/ourmodel"}>
                  Our Models
                </Nav.Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </>
  );
};

export default Navbar;
