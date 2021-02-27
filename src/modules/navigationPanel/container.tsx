import { connect } from "react-redux";
import * as authSelectors from "models/authorization/selectors";
import * as authActons from "models/authorization/actions";
import NavigationPanel from "./navigationPanel";

const mapStateToProps = (state) => {
  const loginInfo = authSelectors.getLoginStatus(state);
  const signupInfo = authSelectors.getSignupStatus(state);
  const userDetails = authSelectors.getUserDeails(state);
  return {
    loginInfo,
    signupInfo,
    userDetails,
  };
};

const mapDispatchToProps = {
  onLogin: authActons.login,
  onSgnup: authActons.signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationPanel);
