import { connect } from "react-redux";
import * as selectors from "./selectors";
import * as actions from "./actions";
import Properties from "./properties";

const mapStateToProps = (state, ownProps) => {
  const allProperties = selectors.getAllProperies(state);

  return {
    allProperties,
  };
};

const mapDispatchToProps = {
  onGetAllProperties: actions.fetchAllProperties,
};

export default connect(mapStateToProps, mapDispatchToProps)(Properties);
