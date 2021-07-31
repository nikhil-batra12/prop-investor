import { connect } from "react-redux";
import * as selectors from "./selectors";
import Loader from "./loader";

const mapStateToProps = (state) => {
  const isShowLoader = selectors.getLoaderState(state);

  return {
    isShowLoader,
  };
};

export default connect(mapStateToProps, null)(Loader);
