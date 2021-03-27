import { connect } from "react-redux";
import * as selectors from "models/authorization/selectors";
import * as actions from "./actions";
import MyProfile from "./myProfile";

const mapStateToProps = (state) => {
  const userDetails = selectors.getUserDetails(state);
  const fetchUserStatus = selectors.getFetchUserStatus(state);

  return {
    userDetails,
    fetchUserStatus,
  };
};

const mapDispatchToProps = {
  onUpdateUser: actions.fetchAllProperties,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
