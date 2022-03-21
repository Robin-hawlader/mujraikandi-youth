import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
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
                // textDecoration: "underline",
                // textDecorationColor: "red",
                // textDecorationThickness: "3px",
              }}
            >
              Mujraikandi-Youth
            </h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-light" href="#features">
                Home
              </Nav.Link>
              <Nav.Link className="text-light" href="#pricing">
                Mission
              </Nav.Link>
              <Nav.Link className="text-light" href="#pricing">
                About
              </Nav.Link>
              <Nav.Link className="text-light" href="#pricing">
                Vission
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
