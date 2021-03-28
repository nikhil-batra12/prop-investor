import React from "react";
import _ from "lodash";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Col, Container, Row, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

class HouseTile extends React.PureComponent<{ houses: any }> {
  getHouse(config, index) {
    return (
      <Col
        key={`house-${index}`}
        xs={12}
        md={6}
        lg={3}
        className="d-inline-block"
      >
        <Jumbotron className="p-3">
          <h3>{config.name}</h3>
          <Image src={config.images[0]} fluid />
          <p>{config.about}</p>
          <p>
            <Button variant="primary">
              <Link to={"/property-details/${config.id}"}>Learn more</Link>
            </Button>
          </p>
        </Jumbotron>
      </Col>
    );
  }

  handleCarouselItem(houses) {
    const windowSize = window.innerWidth;
    let splitHouses = [];
    if (windowSize < 768) {
      splitHouses = _.chunk(houses, 1);
    } else if (windowSize >= 768 && windowSize < 992) {
      splitHouses = _.chunk(houses, 2);
    } else {
      splitHouses = _.chunk(houses, 4);
    }
    return splitHouses;
  }

  handleGetAllHouses = () => {
    const { houses } = this.props;
    const splitHouses = this.handleCarouselItem(houses);
    const allHouses = _.map(splitHouses, (houseArr, index) => {
      const items = _.map(houseArr, (house, itemIndex) =>
        this.getHouse(house, itemIndex)
      );
      const carouselItem = (
        <Carousel.Item key={`carousel-${index}`}>{items}</Carousel.Item>
      );
      return carouselItem;
    });
    return allHouses;
  };

  render() {
    const housesCarousel = this.handleGetAllHouses();

    return (
      <Container fluid>
        <h2>Popular Properties for Sale</h2>
        <Row>
          <Carousel className=" mr-auto ml-auto">{housesCarousel}</Carousel>
        </Row>
      </Container>
    );
  }
}

export default HouseTile;
