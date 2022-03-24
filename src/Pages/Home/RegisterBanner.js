import { Button, Container } from "react-bootstrap";
import React from "react";
import { Fade } from "react-reveal";

const RegisterBanner = () => {
  return (
    <div className="bg-dark">
      <Container>
        <div className="p-md-5">
          <div className="align-middle text-light p-md-5">
            <Fade bottom>
              <div>
                <h1 className="pt-5 fw-bold">
                  BUILDING BRIDGES THROUGH LEADERSHIP TRAINING JUNIOR 30 & 31
                </h1>
                <p className="fw-bold d-inline">Application Deadline: </p>
                <small>March 27, 2022</small>
                <p>
                  Program Timeline: <small>May 16, 2022- June 2022</small>
                </p>
              </div>
              <div>
                <Button
                  variant="danger"
                  className="ps-3 pe-3 fw-bold me-2 mt-xs-3 text-uppercase"
                >
                  Register Now
                </Button>
                <Button
                  variant="light"
                  className="ps-3 pe-3 border bg-transparent text-light fw-bold border-2 ms-2 text-uppercase"
                >
                  Learn more
                </Button>
              </div>
            </Fade>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterBanner;
