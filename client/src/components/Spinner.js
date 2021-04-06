import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const BootsrtapSpinner = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Spinner animation="border" variant="info" />
      </Row>
    </Container>
  );
};

export default BootsrtapSpinner;
