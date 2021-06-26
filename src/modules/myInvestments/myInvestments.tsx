import React from "react";
import _ from "lodash";
import Image from "react-bootstrap/Image";
import { Row, Col, Table } from "react-bootstrap";

class PropertyDetails extends React.PureComponent<{
  myInvestments: any;
  onGetMyInvestments: () => void;
}> {
  componentDidMount() {
    this.props.onGetMyInvestments();
  }

  render() {
    const {
      myInvestments: { status, data },
    } = this.props;
    const isDataEmpty = _.isEmpty(data);
    return (
      <>
        <h2 className="pb-4">My Investments</h2>
        <Row className="pb-5">
          <Col xs={12} md={12} className="mr-auto">
            <div>
              {!isDataEmpty && (
                <>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>PropertyId</th>
                        <th>Property Name</th>
                        <th>Property Address</th>
                        <th>Amount(USD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {_.map(data, (investment) => {
                        return (
                          <tr>
                            <td>{investment.propertyId}</td>
                            <td>{investment.propertyName}</td>
                            <td>{investment.propertyAddress}</td>
                            <td>{investment.amount}</td>
                          </tr>
                        );
                      })}
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

export default PropertyDetails;
