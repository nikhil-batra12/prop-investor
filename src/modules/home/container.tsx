import { connect } from "react-redux";
import * as selectors from "./selectors";
import * as actions from "./actions";
import Home from "./home";

const mapStateToProps = (state, ownProps) => {
  const details = selectors.getDetails(state);

  return {
    details,
  };
};

const mapDispatchToProps = {
  onGetDetails: actions.initFetchDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
