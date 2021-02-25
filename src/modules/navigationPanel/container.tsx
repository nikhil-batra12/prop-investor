import { connect } from "react-redux";
import * as selectors from "./selectors";
import * as actions from "./actions";
import NavigationPanel from "./navigationPanel";

const mapStateToProps = (state) => {
  const allProperties = selectors.getAllProperies(state);

  return {
    allProperties,
  };
};

const mapDispatchToProps = {
  onLogin: actions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationPanel);
