import React from "react";
import _ from "lodash";
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
      myInvestments: { data },
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
                  <Table striped bordered hover responsive="sm">
                    <thead>
                      <tr>
                        <th>PropertyId</th>
                        <th>Property Name</th>
                        <th>Property Address</th>
                        <th>User Token Address</th>
                        <th>Amount(USD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {_.map(data, (investment) => {
                        return (
                          <tr>
                            <td>{investment.propertyID}</td>
                            <td>{investment.propertyName}</td>
                            <td className="word-break">{investment.propertyContractAddress}</td>
                            <td className="word-break">{investment.tokAddress}</td>
                            <td>{investment.amountUSDT}</td>
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
