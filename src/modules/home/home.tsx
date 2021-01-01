import React from "react";
import * as constants from "./constants";
import HouseTile from "components/houseTile/houseTile";
import ImageCarousel from "components/imageCarousel/imageCarousel";
import { getRequest } from "api/restService";
import axios from "axios";
class HomeModule extends React.PureComponent<
  { details: string; onGetDetails: () => void },
  { houses: any }
> {
  state = {
    houses: [],
  };

  componentDidMount() {
    getRequest({ url: "/house" }).then((response) =>
      this.setState({ houses: response.data.houses })
    );
  }

  render() {
    const { details = "123", onGetDetails } = this.props;
    const { houses } = this.state;
    console.log(houses);
    return (
      <>
        <HouseTile />
        <ImageCarousel config={houses} />
      </>
    );
  }
}

export default HomeModule;
