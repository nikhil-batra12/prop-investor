import React from "react";
import Image from "react-bootstrap/Image";
import HouseTile from "components/houseTile/houseTile";
import { Row, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router";

class PropertyDetails extends React.PureComponent<
  {
    propertyDetails: any;
    onGetPropertyDetails: (propertyId) => void;
    onResetPropertyDetails: () => void;
    match: any;
  },
  { houses: any }
> {
  state = {
    houses: [],
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.props.onGetPropertyDetails(params.propertyId);
  }

  componentWillUnmount() {
    this.props.onResetPropertyDetails();
  }

  render() {
    const {
      propertyDetails: { status, data },
    } = this.props;
    return (
      <>
        <Row className="pb-5">
          <Col
            xs={12}
            lg={{ span: 5, offset: 1 }}
            className="text-lg-left text-md-center p-4"
          >
            <h2 className="pb-4">Property Details</h2>
            <Image src="/images/house2.jpg" fluid />
          </Col>
        </Row>
      </>
    );
  }
}

export default withRouter(PropertyDetails);
