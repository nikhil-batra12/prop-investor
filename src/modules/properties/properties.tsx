import React from "react";
import _ from "lodash";
import { Button, Col, Image, Jumbotron, Container, Row } from "react-bootstrap";
import "./properties.css";
import RegisterNewPropertyForm from "components/registerNewProperty/registerNewProperty";
import PropertyTile from "components/propertyTile/propertyTile";
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

  handleGetAllProperties = () => {
    const {
      allProperties: { data },
    } = this.props;
    const properties = _.map(data, (property, index) => {
      return <PropertyTile config={property} key={`property-${index}`} />;
    });
    return properties;
  };

  render() {
    const allProperties = this.handleGetAllProperties();
    const { showAddNewPropertyModal } = this.state;
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
