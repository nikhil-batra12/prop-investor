import { connect } from "react-redux";
import * as selectors from "./selectors";
import * as actions from "./actions";
import Properties from "./properties";

const mapStateToProps = (state) => {
  const allProperties = selectors.getAllProperties(state);
  const registerPropertyStatus = selectors.getRegisterPropertyStatus(state);

  return {
    allProperties,
    registerPropertyStatus
  };
};

const mapDispatchToProps = {
  onGetAllProperties: actions.fetchAllProperties,
  onRegisterProperty: actions.registerProperty,
};

export default connect(mapStateToProps, mapDispatchToProps)(Properties);
