import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Service.css";

const Service = ({ work }) => {
  const { name, image } = work;
  return (
    <div>
      <Col>
        <Card className="border-0 shadow">
          <Card.Img className="image" variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
