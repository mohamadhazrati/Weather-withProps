import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Weather = ({cityName,setCityName,getData,children}) => {
  return <div>
     <Container className="mt-3">
        <Form onSubmit={(e) => e.preventDefault()}>
          <Row>
            <Col lg={{ span: 5, offset: 3 }} md={{ span: 5, offset: 3 }}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  onChange={(e) => setCityName(e.target.value)}
                  value={cityName}
                />
              </Form.Group>
            </Col>
            <Col lg="1" md="1">
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  if (cityName.trim()) {
                    getData();
                  }
                  setCityName("");
                }}
              >
                search
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      {children}
  </div>;
};

export default Weather;
