import React from "react";
import { Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";

const Info = ({ info, icon, loading, parseDate }) => {
  return (
    <>
      {loading ? (
        <Spinner animation="border" variant="info" />
      ) : Object.keys(info).length ? (
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 4 }} className="mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
                />
                <Card.Body>
                  <Card.Title>
                    {info.name}|{info.weather[0].description}
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    temp: <h1>{info.main.temp}</h1> C
                  </ListGroup.Item>
                  <ListGroup.Item>
                    temp_min: {info.main.temp_min} C
                  </ListGroup.Item>
                  <ListGroup.Item>
                    temp_max: {info.main.temp_max} C
                  </ListGroup.Item>
                  <ListGroup.Item>
                    feels_like: {info.main.feels_like} C
                  </ListGroup.Item>
                  <ListGroup.Item>
                    humidity: {info.main.humidity} %
                  </ListGroup.Item>
                  <ListGroup.Item>
                    pressure: {info.main.pressure} Pa
                  </ListGroup.Item>
                  <ListGroup.Item>speed: {info.wind.speed} m/s</ListGroup.Item>
                  <ListGroup.Item>
                    sunrise: {parseDate(info.sys.sunrise)}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    sunset: {parseDate(info.sys.sunset)}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default Info;
