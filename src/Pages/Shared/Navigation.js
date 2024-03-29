import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../Images/logo-2.png";

const Navigation = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="success"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "40px",
                background: "white",
              }}
              src={logo}
              alt=""
            />
            <h4
              style={{
                display: "inline",
                marginLeft: "10px",
              }}
              className="fw-bold text-uppercase"
            >
              Mujraikandi-Youth
            </h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                className="text-light text-decoration-none text-uppercase fs-6 fw-bold me-3"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="text-light text-decoration-none text-uppercase fs-6 fw-bold me-3"
                to="/mission"
              >
                Mission
              </NavLink>
              <NavLink
                className="text-light text-decoration-none text-uppercase fs-6 fw-bold me-3"
                to="/team"
              >
                Team
              </NavLink>
              <NavLink
                className="text-light text-decoration-none text-uppercase fs-6 fw-bold me-3"
                to="/blog"
              >
                Blogs
              </NavLink>
              <NavLink
                className="text-light text-decoration-none text-uppercase fs-6 fw-bold me-3"
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
