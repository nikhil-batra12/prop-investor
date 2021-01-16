import React from "react";
import Image from "react-bootstrap/Image";
import HouseTile from "components/houseTile/houseTile";
import ImageCarousel from "components/imageCarousel/imageCarousel";
import { getRequest } from "api/restService";
import { Row, Col, Button } from "react-bootstrap";
class HomeModule extends React.PureComponent<
  { details: string; onGetDetails: () => void },
  { houses: any }
> {
  state = {
    houses: [],
  };

  componentDidMount() {
    // getRequest({ url: "/house" }).then((response) =>
    //   this.setState({ houses: response.data.houses })
    // );
  }

  render() {
    const { details = "123", onGetDetails } = this.props;
    const { houses } = this.state;
    console.log(houses);
    return (
      <>
        <Row className="pt-5 pb-5">
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

        <HouseTile />
        <ImageCarousel config={houses} />
      </>
    );
  }
}

export default HomeModule;
