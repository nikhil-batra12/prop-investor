import React from "react";
import * as constants from "./constants";
import HouseTile from "components/houseTile/houseTile";
import ImageCarousel from "components/imageCarousel/imageCarousel";
class HomeModule extends React.PureComponent<
  any,
  { details: string; onGetDetails: () => void }
> {
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
