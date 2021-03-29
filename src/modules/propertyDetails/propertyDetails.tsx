import React from "react";
import Image from "react-bootstrap/Image";
import HouseTile from "components/houseTile/houseTile";
import { Row, Col, Button, Table } from "react-bootstrap";
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
    console.log(data);
    return (
      <>
        <h2 className="pb-4">Property Details</h2>
        <Row className="pb-5">
          <Col
            xs={12}
            // lg={{ span: 5, offset: 1 }}
            md={6}
            className="text-lg-left text-md-center"
          >
            <Image src="/images/house2.jpg" fluid />
          </Col>
          <Col xs={12} md={6}>
            <div>
              {data && (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th colSpan={2}>Locaton Highlights</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{data.name}</td>
                    </tr>
                    <tr>
                      <td>About</td>
                      <td>{data.about}</td>
                    </tr>
                    <tr>
                      <td>Adress Line 1</td>
                      <td>{data.address_1}</td>
                    </tr>
                    <tr>
                      <td>Adress Line 2</td>
                      <td>{data.address_2}</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>{data.city}</td>
                    </tr>
                    <tr>
                      <td>State</td>
                      <td>{data.state}</td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>{data.country}</td>
                    </tr>
                    <tr>
                      <td>Zip</td>
                      <td>{data.zip}</td>
                    </tr>
                  </tbody>
                </Table>
              )}
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default withRouter(PropertyDetails);
