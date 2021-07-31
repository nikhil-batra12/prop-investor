import React from "react";
import _ from "lodash";
import Image from "react-bootstrap/Image";
import {
  Row,
  Col,
  Jumbotron,
  Accordion,
  Card,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import { withRouter } from "react-router";
import { imageBasePath } from "utils/constants/imageConstants";
import "./propertyDetails.css";

class PropertyDetails extends React.PureComponent<
  {
    propertyDetails: any;
    onGetPropertyDetails: (propertyId) => void;
    onResetPropertyDetails: () => void;
    match: any;
  },
  { houses: any; activeHouseImg: any; activeAccordion: any }
> {
  state = {
    houses: [],
    activeHouseImg: null,
    activeAccordion: null,
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

  handleAccordionToggle = (event) => {
    // this.setState({ activeHouseImg: src });
    console.log(event);
  };

  render() {
    const {
      propertyDetails: { status, data },
    } = this.props;
    const { activeHouseImg } = this.state;
    const imgSrc = data && data.imageFile && data.imageFile[0];
    const activeSrc =
      activeHouseImg || `${imageBasePath}/${data?.id}/${imgSrc}`;
    const isDataEmpty = _.isEmpty(data);
    return (
      <>
        <h2 className="pb-4">Property Details</h2>
        <Row className="pb-5">
          <Col xs={12} md={6}>
            <Jumbotron className="p-1">
              <div>
                {!isDataEmpty && (
                  <>
                    <h4 className="pt-3">{data.name}</h4>
                    <div>{data.about}</div>

                    <Accordion defaultActiveKey="0" className="pt-3">
                      <Card>
                        <Card.Header className="p-0">
                          <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            onClick={() => this.handleAccordionToggle("0")}
                          >
                            <h6>Property Investment Details</h6>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <Row>
                              <Col sm={6}>
                                <InputGroup className="mb-3">
                                  <InputGroup.Prepend>
                                    <InputGroup.Text
                                      id="basic-addon1"
                                      className="fix-width"
                                    >
                                      Value (USD)
                                    </InputGroup.Text>
                                  </InputGroup.Prepend>
                                  <ListGroup>
                                    <ListGroup.Item className="fix-width">
                                      {data.value}
                                    </ListGroup.Item>
                                  </ListGroup>
                                </InputGroup>
                              </Col>
                              <Col sm={6}>
                                <InputGroup className="mb-3">
                                  <InputGroup.Prepend>
                                    <InputGroup.Text
                                      id="basic-addon1"
                                      className="fix-width"
                                    >
                                      Expected Returns (USD)
                                    </InputGroup.Text>
                                  </InputGroup.Prepend>
                                  <ListGroup>
                                    <ListGroup.Item className="fix-width">
                                      {data.returns || "-"}
                                    </ListGroup.Item>
                                  </ListGroup>
                                </InputGroup>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header className="p-0">
                          <Accordion.Toggle
                            as={Card.Header}
                            eventKey="1"
                            onClick={() => this.handleAccordionToggle("1")}
                          >
                            <h6>Property Details</h6>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <Row>
                              <Col sm={6} className="text-sm-left border-right">
                                <h6>Complete Address</h6>
                                <div>{data.address_1}</div>
                                <div>{data.address_2}</div>
                                <div>{data.city}</div>
                                <div>{data.state}</div>
                                <div>{data.country}</div>
                                <div>{data.zip}</div>
                              </Col>
                              <Col sm={6}>
                                <InputGroup className="mb-3">
                                  <InputGroup.Prepend>
                                    <InputGroup.Text
                                      id="basic-addon1"
                                      className="fix-width"
                                    >
                                      Number of Bathrooms
                                    </InputGroup.Text>
                                  </InputGroup.Prepend>
                                  <ListGroup>
                                    <ListGroup.Item className="fix-width-small">
                                      {data.numOfBathrooms}
                                    </ListGroup.Item>
                                  </ListGroup>
                                  <InputGroup.Prepend>
                                    <InputGroup.Text
                                      id="basic-addon1"
                                      className="fix-width"
                                    >
                                      Number of Bedrooms
                                    </InputGroup.Text>
                                  </InputGroup.Prepend>
                                  <ListGroup>
                                    <ListGroup.Item className="fix-width-small">
                                      {data.numOfBedrooms}
                                    </ListGroup.Item>
                                  </ListGroup>
                                  <InputGroup.Prepend>
                                    <InputGroup.Text
                                      id="basic-addon1"
                                      className="fix-width"
                                    >
                                      Area(Square Feet)
                                    </InputGroup.Text>
                                  </InputGroup.Prepend>
                                  <ListGroup>
                                    <ListGroup.Item className="fix-width-small">
                                      {data.squareFeet}
                                    </ListGroup.Item>
                                  </ListGroup>
                                </InputGroup>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </>
                )}
              </div>
            </Jumbotron>
          </Col>
          {!isDataEmpty && (
            <Col
              xs={12}
              // lg={{ span: 5, offset: 1 }}
              md={6}
              className="text-lg-left text-md-center"
            >
              {_.map(data.imageFile, (image, index) => {
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
                      src={`${imageBasePath}/${data.id}/${image}`}
                      fluid
                      width="150"
                      height="150"
                      className={cNames}
                      key={image}
                      onClick={() =>
                        this.handleActiveImgChange(
                          `${imageBasePath}/${data.id}/${image}`
                        )
                      }
                    />
                  );
                }
              })}
              <h4 className="pt-3">Map Location</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1582.8162758923565!2d-121.9485773!3d37.4929966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc654f67bbf49%3A0x2d4f6c443c47fb25!2sTesla!5e0!3m2!1sen!2suk!4v1622986935125!5m2!1sen!2suk"
                width="600"
                height="250"
              ></iframe>
            </Col>
          )}
        </Row>
      </>
    );
  }
}

export default withRouter(PropertyDetails);
