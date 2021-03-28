import React from "react";
import _ from "lodash";
import { Button, Col, Image, Jumbotron, Container, Row } from "react-bootstrap";
import "./properties.css";
import RegisterNewPropertyForm from "components/registerNewProperty/registerNewProperty";
import { Link } from "react-router-dom";

class PropertiesModule extends React.PureComponent<
  {
    allProperties: any;
    onGetAllProperties: () => void;
  },
  { showAddNewPropertyModal: boolean }
> {
  state = {
    showAddNewPropertyModal: false,
  };

  componentDidMount() {
    this.props.onGetAllProperties();
  }

  handleShowPropertyModal = () => {
    this.setState({ showAddNewPropertyModal: true });
  };

  handleHidePropertyModal = () => {
    this.setState({ showAddNewPropertyModal: false });
  };

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
          <Image src={config.images[0]} fluid className="fixed-height" />
          <h3>{config.name}</h3>
          <p>{config.about}</p>
          <p>
            <Button variant="primary">
              <Link to={`/property-details/${config.id}`}>Learn more</Link>
            </Button>
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
    const { showAddNewPropertyModal } = this.state;
    console.log(showAddNewPropertyModal);
    return (
      <Container fluid id="properties">
        <Button
          className="float-sm-right mt-2"
          onClick={this.handleShowPropertyModal}
        >
          Add New Property
        </Button>
        <h2 className="mb-3">All Properties</h2>
        <Row>{allProperties}</Row>
        {showAddNewPropertyModal && (
          <RegisterNewPropertyForm onClose={this.handleHidePropertyModal} />
        )}
      </Container>
    );
  }
}

export default PropertiesModule;
