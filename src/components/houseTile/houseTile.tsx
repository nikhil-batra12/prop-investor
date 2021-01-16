import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Col, Container, Row, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

class HouseTile extends React.PureComponent {
  render() {
    return (
      <Container fluid>
        <h2>Properties for Sale</h2>
        <Row>
          <Carousel className=" mr-auto ml-auto">
            <Carousel.Item>
              <Col xs={12} md={6} lg={3} className="d-inline-block">
                <Jumbotron>
                  <h1>Hello, world1</h1>
                  <Image src="images/house1.jpeg" fluid />
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </Jumbotron>
              </Col>
              <Col xs={12} md={6} lg={3} className="d-inline-block">
                <Jumbotron>
                  <h1>Hello, world2</h1>
                  <Image src="images/house1.jpeg" fluid />
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </Jumbotron>
              </Col>
              <Col xs={12} md={6} lg={3} className="d-inline-block">
                <Jumbotron>
                  <h1>Hello, world3</h1>
                  <Image src="images/house1.jpeg" fluid />
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </Jumbotron>
              </Col>
              <Col xs={12} md={6} lg={3} className="d-inline-block">
                <Jumbotron>
                  <h1>Hello, world4</h1>
                  <Image src="images/house1.jpeg" fluid />
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </Jumbotron>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col xs={12} md={6} lg={3} className="d-inline-block">
                <Jumbotron>
                  <h1>Hello, world5</h1>
                  <Image src="images/house2.jpg" fluid />
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </Jumbotron>
              </Col>
              <Col xs={12} md={6} lg={3} className="d-inline-block">
                <Jumbotron>
                  <h1>Hello, world6</h1>
                  <Image src="images/house2.jpg" fluid />
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </Jumbotron>
              </Col>
              <Col xs={12} md={6} lg={3} className="d-inline-block">
                <Jumbotron>
                  <h1>Hello, world7</h1>
                  <Image src="images/house2.jpg" fluid />
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </Jumbotron>
              </Col>
              <Col xs={12} md={6} lg={3} className="d-inline-block">
                <Jumbotron>
                  <h1>Hello, world8</h1>
                  <Image src="images/house2.jpg" fluid />
                  <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                  </p>
                  <p>
                    <Button variant="primary">Learn more</Button>
                  </p>
                </Jumbotron>
              </Col>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    );
  }
}

export default HouseTile;
