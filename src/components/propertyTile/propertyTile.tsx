import React from "react";
import _ from "lodash";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./propertyTile.css";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imageBasePath } from "utils/constants/imageConstants";
class PropertyTile extends React.PureComponent<
  { config: any; key: string },
  { houses: any }
> {
  render() {
    const { config, key } = this.props;
    return (
      <Col
        key={key}
        xs={12}
        md={6}
        lg={3}
        className="d-inline-block"
        id="property-tile"
      >
        <Jumbotron className="p-3">
          <h3>{config.name}</h3>
          <Image
            src={`${imageBasePath}/${config.id}/${config?.imageFile?.[0]}`}
            fluid
            className="fixed-height"
          />
          {/* <Image src="images/house6.jpeg" fluid className="fixed-height" /> */}
          <p className="property-about" title={config.about}>{config.about}</p>
          <p>
            <Link
              to={`/property-details/${config.id}`}
              className="redirect-button"
            >
              <Button variant="primary">Learn more</Button>
            </Link>
          </p>
        </Jumbotron>
      </Col>
    );
  }
}

export default PropertyTile;
