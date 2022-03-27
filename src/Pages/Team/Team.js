import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Robin from "../../Images/Team/IMG_20210925_075014.png";
import Saimon from "../../Images/Team/Saimon.2.png";
import "./Team.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Team = () => {
  return (
    <Container style={{ marginTop: "150px" }}>
      <Row md={2} xs={1} sm={1} className="team">
        <Col className="mt-5">
          <div className="image-property">
            <img src={Saimon} alt="" />
          </div>
          <div className="text">
            <h1 className="text-uppercase fw-bold fs-2 mt-4 text-success">
              Saimon hasan
            </h1>
            <h4 className="fw-bold text-uppercase text-secondary">moderator</h4>
            <p className="fs-2">
              <a
                href="https://www.facebook.com/saymon.hasan.399"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                className="ms-3 text-danger"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                className="ms-3 text-primary"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </p>
          </div>
        </Col>
        <Col className="mt-5">
          <div className="image-property">
            <img src={Robin} alt="" />
          </div>
          <div className="text">
            <h1 className="text-uppercase fw-bold fs-2 mt-4 text-success">
              Robin hawlader
            </h1>
            <h4 className="fw-bold text-uppercase text-secondary">
              Web-developer
            </h4>
            <p className="fs-2">
              <a
                href="https://www.facebook.com/rjtonmoyislam.robin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                className="ms-3 text-danger"
                href="https://www.instagram.com/muhammadrobin360/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                className="ms-3 text-primary"
                href="https://www.linkedin.com/in/robin-hawlader-830867220"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="ms-3 text-dark"
                href="https://github.com/Robin-hawlader"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
