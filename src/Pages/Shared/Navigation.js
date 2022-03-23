import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../Images/mujraikandi youth (2) (1).png";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              style={{ width: "80px", height: "80px", borderRadius: "40px" }}
              src={logo}
              alt=""
            />
            <h4
              style={{
                display: "inline",
                marginLeft: "10px",
              }}
              className="fw-bold"
            >
              Mujraikandi-Youth
            </h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                className="text-light text-decoration-none text-uppercase fs-5 fw-bold me-3"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="text-light text-decoration-none text-uppercase fs-5 fw-bold me-3"
                to="/mission"
              >
                Mission
              </NavLink>
              <NavLink
                className="text-light text-decoration-none text-uppercase fs-5 fw-bold me-3"
                to="/team"
              >
                Team
              </NavLink>
              <NavLink
                className="text-light text-decoration-none text-uppercase fs-5 fw-bold"
                to="/about"
              >
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
