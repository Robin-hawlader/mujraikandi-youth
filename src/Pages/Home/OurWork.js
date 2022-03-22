import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Shared/Service";

const OurWork = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    fetch("works.json")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);
  return (
    <div>
      <Container>
        <h1 className="text-uppercase text-bold text-success">what we do</h1>
        <Row xs={2} md={4} className="g-4 mt-5 mb-5">
          {works.map((work) => (
            <Service key={work.id} work={work}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurWork;
