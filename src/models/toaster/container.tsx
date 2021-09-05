import { connect } from "react-redux";
import * as selectors from "./selectors";
import Toaster from "./toaster";
import * as actions from "./actions";

const mapStateToProps = (state) => {
  const showToaster = selectors.getToasterState(state);
  const status = selectors.getToasterStatus(state);
  const message = selectors.getToasterMessage(state);

  return {
    showToaster,
    status,
    message
  };
};

const mapDispatchToProps = {
  onHideToaster: actions.hideToaster,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);
