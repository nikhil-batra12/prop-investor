import React from "react";
import _ from "lodash";
import Image from "react-bootstrap/Image";
import PropertyTile from "components/propertyTile/propertyTile";
import { Row, Col, Button } from "react-bootstrap";
import "./home.css";
class HomeModule extends React.PureComponent<
  { popularHouses: any; onGetPopularHouses: () => void },
  { houses: any }
> {
  state = {
    houses: [],
  };

  componentDidMount() {
    this.props.onGetPopularHouses();
  }

  handleGetAllProperties = () => {
    const {
      popularHouses: { status, data },
    } = this.props;
    const topHouses = _.slice(data, 0, 4);
    const properties = _.map(topHouses, (property, index) => {
      return <PropertyTile config={property} key={`property-${index}`} />;
    });
    return properties;
  };

  render() {
    const allProperties = this.handleGetAllProperties();
    return (
      <>
        <Row className="pt-5 pb-5" id="properties">
          <Col
            xs={12}
            lg={{ span: 5, offset: 1 }}
            className="text-lg-left text-md-center p-4"
          >
            <h1 className="pb-4">
              Real Estate Investment Made Easy And Accessible To Everyone
            </h1>
            <div className="text-lg-justify" style={{ fontSize: "22px" }}>
              For the first time, investors around the globe can buy into the US
              real estate market through fully-compliant, fractional, tokenized
              ownership. Powered by blockchain.
            </div>
            <Button size="lg" variant="outline-primary" className="mt-5">
              Know More
            </Button>
          </Col>
          <Col xs={12} lg={5}>
            <Image src="images/banner.png" fluid />
          </Col>
        </Row>

        <h2 className="mb-3">Popular Properties</h2>
        <Row className="justify-content-center">{allProperties}</Row>
      </>
    );
  }
}

export default HomeModule;
