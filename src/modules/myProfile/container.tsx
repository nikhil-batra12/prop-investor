import { connect } from "react-redux";
import * as selectors from "models/authorization/selectors";
import * as actions from "./actions";
import MyProfile from "./myProfile";

const mapStateToProps = (state) => {
  const userDetails = selectors.getUserDeails(state);

  return {
    userDetails,
  };
};

const mapDispatchToProps = {
  onUpdateUser: actions.fetchAllProperties,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
