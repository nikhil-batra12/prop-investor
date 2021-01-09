import React from "react";
import { Button, Form, Modal, Tab, Tabs } from "react-bootstrap";
import LoginForm from "./loginForm";
import SignUpForm from "./signUpForm";
import _ from "lodash";

class loginSignupForm extends React.PureComponent<
  { handleClose: () => void; mode: string },
  { mode: string }
> {
  state = {
    mode: this.props.mode,
  };

  handleChangeMode = (type = "LOGIN") => this.setState({ mode: type });

  render() {
    const { handleClose } = this.props;
    const { mode } = this.state;
    return (
      <Modal show onHide={handleClose}>
        {mode === "LOGIN" && (
          <LoginForm
            onChangeMode={_.partial(this.handleChangeMode, "SIGNUP")}
            onClose={handleClose}
          />
        )}
        {mode === "SIGNUP" && (
          <SignUpForm
            onChangeMode={_.partial(this.handleChangeMode, "LOGIN")}
            onClose={handleClose}
          />
        )}
      </Modal>
    );
  }
}

export default loginSignupForm;
