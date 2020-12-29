import React from "react";
import * as constants from "./constants";
import ImageCarousel from "components/imageCarousel/imageCarousel";
class HomeModule extends React.PureComponent<
  any,
  { details: string; onGetDetails: () => void }
> {
  render() {
    const { details = "123", onGetDetails } = this.props;
    return <ImageCarousel config={constants.CAROUSEL_CONFIG} />;
  }
}

export default HomeModule;
