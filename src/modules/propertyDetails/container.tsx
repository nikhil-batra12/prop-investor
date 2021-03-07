import { connect } from "react-redux";
import * as selectors from "./selectors";
import * as actions from "./actions";
import PropertyDetails from "./propertyDetails";

const mapStateToProps = (state) => {
  const propertyDetails = selectors.getPropertyDetails(state);

  return {
    propertyDetails,
  };
};

const mapDispatchToProps = {
  onGetPropertyDetails: actions.fetchPropertyDetails,
  onResetPropertyDetails: actions.resetPropertyDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetails);
