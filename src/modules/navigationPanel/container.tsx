import { connect } from "react-redux";
import * as authSelectors from "models/authorization/selectors";
import * as authActions from "models/authorization/actions";
import NavigationPanel from "./navigationPanel";

const mapStateToProps = (state) => {
  const loginInfo = authSelectors.getLoginStatus(state);
  const signupInfo = authSelectors.getSignupStatus(state);
  const userDetails = authSelectors.getUserDetails(state);
  return {
    loginInfo,
    signupInfo,
    userDetails,
  };
};

const mapDispatchToProps = {
  onLogin: authActions.login,
  onSignup: authActions.signup,
  onLogout: authActions.logout,
  onFetchUser: authActions.fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationPanel);
