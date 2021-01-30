import React from "react";
import _ from "lodash";
import { Button, Col, Image, Jumbotron, Container, Row } from "react-bootstrap";
import "./properties.css";

class PropertiesModule extends React.PureComponent<{
  allProperties: any;
  onGetAllProperties: () => void;
}> {
  componentDidMount() {
    this.props.onGetAllProperties();
  }

  getProperty(config, index) {
    return (
      <Col
        key={`house-${index}`}
        xs={12}
        md={6}
        lg={4}
        className="d-inline-block"
      >
        <Jumbotron className="p-3">
          <Image src={config.imgSrc} fluid className="fixed-height" />
          <h3>{config.address}</h3>
          <p>{config.description}</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </Col>
    );
  }

  handleGetAllProperties = () => {
    const {
      allProperties: { data },
    } = this.props;
    const properties = _.map(data, (property, index) => {
      return this.getProperty(property, index);
    });
    return properties;
  };

  render() {
    const allProperties = this.handleGetAllProperties();
    return (
      <Container fluid>
        <h2 className="mb-3">All Properties</h2>
        <Row>{allProperties}</Row>
      </Container>
    );
  }
}

export default PropertiesModule;
