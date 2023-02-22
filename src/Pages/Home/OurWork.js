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
        <p className="fs-4 text-start mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
          consequatur nihil illum eius! Assumenda voluptatibus hic reprehenderit
          molestias. Praesentium dolore beatae unde cum delectus numquam. Natus,
          nulla! Saepe ullam beatae reiciendis harum nesciunt nisi doloribus
          voluptates vero atque voluptatibus. Dignissimos voluptatibus non sunt
          reiciendis nostrum odio iusto facere magnam nihil!
        </p>
        <Row xs={1} md={4} className="g-4 mt-5 mb-5">
          {works.map((work) => (
            <Service key={work.id} work={work}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurWork;
