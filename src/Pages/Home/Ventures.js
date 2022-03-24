import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import logo from "../../Images/background-logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Ventures = () => {
  return (
    <div style={{ backgroundColor: "#012412" }}>
      <Container className="p-3">
        <Row md={3} xs={1}>
          <Col md={8} className="text-start">
            <h1 className=" text-uppercase text-light fw-bold mt-5">
              <span className="border-bottom border-5 border-danger">
                Mujraikandi
              </span>
              -youth ventures
            </h1>
            <p className="text-light mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              perspiciatis autem, quibusdam corrupti et labore necessitatibus
              similique minus cupiditate at maxime quam officiis eos voluptatum
              culpa accusantium voluptas, explicabo excepturi a asperiores?
              Ullam molestiae voluptatem atque sunt eveniet facere sit dicta,
              itaque corrupti, eligendi sequi, cumque soluta voluptatibus
              exercitationem eaque!
            </p>
            <Button
              variant="light"
              className="ps-3 pe-3 border bg-transparent fw-bold border-2 ms-2 text-uppercase"
            >
              <a
                href="https://www.facebook.com/mujrikandi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                visit page
              </a>
            </Button>
          </Col>
          <Col>
            <img
              style={{
                filter: "drop-shadow(0px 0px 20px white)",
                height: "400px",
              }}
              src={logo}
              alt=""
            />
            <p className="fs-2">
              <a href="https://www.facebook.com/mujrikandi">
                <FaFacebook />
              </a>
              <a className="ms-3 text-danger" href="https://www.instagram.com">
                <FaInstagram />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ventures;
