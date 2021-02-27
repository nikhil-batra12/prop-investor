import React from "react";
import { Modal } from "react-bootstrap";
import LoginForm from "./loginForm";
import SignUpForm from "./signUpForm";
import _ from "lodash";

class loginSignupForm extends React.PureComponent<
  {
    handleClose: () => void;
    mode: string;
    loginInfo: any;
    signupInfo: any;
    onLogin: (params) => void;
    onSignup: (params) => void;
  },
  { mode: string }
> {
  state = {
    mode: this.props.mode,
  };

  handleChangeMode = (type = "LOGIN") => this.setState({ mode: type });

  render() {
    const {
      handleClose,
      onLogin,
      onSignup,
      loginInfo,
      signupInfo,
    } = this.props;
    const { mode } = this.state;
    return (
      <Modal show onHide={handleClose}>
        {mode === "LOGIN" && (
          <LoginForm
            onChangeMode={_.partial(this.handleChangeMode, "SIGNUP")}
            onClose={handleClose}
            onLogin={onLogin}
            loginInfo={loginInfo}
          />
        )}
        {mode === "SIGNUP" && (
          <SignUpForm
            onChangeMode={_.partial(this.handleChangeMode, "LOGIN")}
            onClose={handleClose}
            onSignup={onSignup}
            signupInfo={signupInfo}
          />
        )}
      </Modal>
    );
  }
}

export default loginSignupForm;
