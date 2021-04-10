import React from "react";
import _ from "lodash";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./propertyTile.css";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class PropertyTile extends React.PureComponent<
  { config: any; key: string },
  { houses: any }
> {
  render() {
    const { config, key } = this.props;
    return (
      <Col key={key} xs={12} md={6} lg={3} className="d-inline-block">
        <Jumbotron className="p-3">
          <h3>{config.name}</h3>
          <Image src={config.images[0]} fluid className="fixed-height" />
          <p>{config.about}</p>
          <p>
            <Button variant="primary">
              <Link
                to={`/property-details/${config.id}`}
                className="redirect-button"
              >
                Learn more
              </Link>
            </Button>
          </p>
        </Jumbotron>
      </Col>
    );
  }
}

export default PropertyTile;
