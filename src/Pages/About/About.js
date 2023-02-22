import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sagar from "../../Images/Author/Sagar khalshi.png";
import "./About.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <Container style={{ marginTop: "150px" }}>
      <div>
        <Row md={3} xs={1} sm={1}>
          <Col>
            <img className="img-fluid" src={sagar} alt="" />
          </Col>
          <Col md={8} className="text-start author">
            <div style={{ fontFamily: "Times New Roman" }}>
              <h1 className="text-uppercase name-prop">
                <span className="border-bottom border-4 border-danger">
                  sagar
                </span>
                -khalashi
              </h1>
              <p className=" text-property fs-4 mt-5">
                Sagar Khalasi is currently serving as the President of
                Muzraikandi Youth Welfare Association. In 2019, he was convened
                and a full 42-member committee was announced. But later in 2020,
                he was elected president by the rest of the organization. He is
                currently performing his duties with utmost devotion.
              </p>
              <p className="fs-2 mt-4">
                <a
                  href="https://www.facebook.com/sagar.ahmed.1238"
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
        </Row>
      </div>
    </Container>
  );
};

export default About;
