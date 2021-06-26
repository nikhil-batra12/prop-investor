import { connect } from "react-redux";
import * as selectors from "models/authorization/selectors";
import * as actions from "models/authorization/actions";
import MyProfile from "./myProfile";

const mapStateToProps = (state) => {
  const userDetails = selectors.getUserDetails(state);
  const updateUserStatus = selectors.getUpdateUserStatus(state);

  return {
    userDetails,
    updateUserStatus,
  };
};

const mapDispatchToProps = {
  onUpdateUser: actions.updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
