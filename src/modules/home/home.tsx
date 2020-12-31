import React from "react";
import * as constants from "./constants";
import HouseTile from "components/houseTile/houseTile";
import ImageCarousel from "components/imageCarousel/imageCarousel";
import { getRequest } from "api/restService";
import axios from "axios";
class HomeModule extends React.PureComponent<
  any,
  { details: string; onGetDetails: () => void }
> {
  componentDidMount() {
    getRequest({ url: "/todos/1" }).then((response) =>
      console.log("response recieved")
    );
  }

  render() {
    const { details = "123", onGetDetails } = this.props;
    return (
      <>
        <HouseTile />
        <ImageCarousel config={constants.CAROUSEL_CONFIG} />
      </>
    );
  }
}

export default HomeModule;
