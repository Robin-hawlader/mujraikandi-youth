import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../Images/background-logo.png";

const Ventures = () => {
  return (
    <div style={{ backgroundColor: "#012412" }}>
      <Container className="p-3">
        <Row md={2}>
          <Col>
            <h1 className="text-start text-uppercase text-light fw-bold mt-5">
              Mujraikandi-youth ventures
            </h1>
            <p className="text-light text-start mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              perspiciatis autem, quibusdam corrupti et labore necessitatibus
              similique minus cupiditate at maxime quam officiis eos voluptatum
              culpa accusantium voluptas, explicabo excepturi a asperiores?
              Ullam molestiae voluptatem atque sunt eveniet facere sit dicta,
              itaque corrupti, eligendi sequi, cumque soluta voluptatibus
              exercitationem eaque!
            </p>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ventures;
