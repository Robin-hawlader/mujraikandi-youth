import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Fade, Zoom } from "react-reveal";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-bg">
      <Container style={{ backgroundColor: "white", padding: "50px" }}>
        <Row md={3} xs={1} sm={1}>
          <Col>
            <Fade left>
              <h2 style={{ color: "#03592d" }}>Lorem, ipsum dolor sit.</h2>
            </Fade>
            <Fade right>
              <h2 style={{ color: "#03592d" }}>Lorem, ipsum dolor sit.</h2>
            </Fade>
            <Fade left>
              <h2 style={{ color: "#03592d" }}>Lorem, ipsum dolor sit.</h2>
            </Fade>
            <Container style={{ margin: "20% 0% 0% 20%" }}>
              <Fade right>
                <Button
                  variant="danger"
                  className="d-block shadow ps-4 pe-4 pt-2 pb-2 fw-bold fs-5 text-uppercase"
                >
                  Register Now
                </Button>
              </Fade>
              <Fade left>
                <Button
                  variant="light"
                  className="border border-2 border-success d-block mt-4 ms-1 ps-4 pe-4 pt-2 pb-2 mb-4 fw-bold fs-5 text-success text-uppercase"
                >
                  Learn More
                </Button>
              </Fade>
            </Container>
          </Col>
          <Col md={8}>
            <Zoom>
              <img
                src="https://bylc.org/assets/images/cover-1160x774.jpg"
                alt=""
                className="img-fluid pt-4 pb-4"
              />
            </Zoom>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
