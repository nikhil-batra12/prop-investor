import React from "react";
import _ from "lodash";
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
  { houses: any; activeHouseImg: any }
> {
  state = {
    houses: [],
    activeHouseImg: null,
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

  handleActiveImgChange = (src) => {
    this.setState({ activeHouseImg: src });
  };

  render() {
    const {
      propertyDetails: { status, data },
    } = this.props;
    const { activeHouseImg } = this.state;
    const imgSrc = data && data.images && data.images[0];
    const activeSrc = activeHouseImg || imgSrc;
    const isDataEmpty = _.isEmpty(data);
    return (
      <>
        <h2 className="pb-4">Property Details</h2>
        <Row className="pb-5">
          {!isDataEmpty && (
            <Col
              xs={12}
              // lg={{ span: 5, offset: 1 }}
              md={6}
              className="text-lg-left text-md-center"
            >
              {_.map(data.images, (image, index) => {
                if (index == "0") {
                  return (
                    <Image
                      src={activeSrc}
                      fluid
                      className="d-block"
                      key={image}
                    />
                  );
                } else {
                  let classNames = ["pt-3"];
                  if (index != "1") {
                    classNames.push("pl-3");
                  }
                  const cNames = classNames.join(" ");
                  return (
                    <Image
                      src={image}
                      fluid
                      width="150"
                      height="150"
                      className={cNames}
                      key={image}
                      onClick={() => this.handleActiveImgChange(image)}
                    />
                  );
                }
              })}
            </Col>
          )}
          <Col xs={12} md={6}>
            <div>
              {!isDataEmpty && (
                <>
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
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th colSpan={2}>Property Insights</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Value</td>
                        <td>{data.value}</td>
                      </tr>
                      <tr>
                        <td>Number Of Bathrooms</td>
                        <td>{data.numOfBathrooms}</td>
                      </tr>
                      <tr>
                        <td>Number Of Bedrooms</td>
                        <td>{data.numOfBedrooms}</td>
                      </tr>
                      <tr>
                        <td>Area(Square Feet)</td>
                        <td>{data.squareFeet}</td>
                      </tr>
                      <tr>
                        <td>Value</td>
                        <td>{data.value}</td>
                      </tr>
                    </tbody>
                  </Table>
                </>
              )}
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default withRouter(PropertyDetails);
