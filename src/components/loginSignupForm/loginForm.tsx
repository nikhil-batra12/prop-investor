import React from "react";
import _ from "lodash";
import { Button, Form, Modal } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import FormGenerator from "components/formGenerator/formGenerator";
import * as constants from "./constants";
class LoginForm extends React.PureComponent<
  { onClose: () => void; onChangeMode: () => void },
  { isFormSubmitted: boolean; isFormValid: boolean; generatedPostObj: any }
> {
  state = {
    isFormSubmitted: false,
    isFormValid: false,
    generatedPostObj: {},
  };

  onSignIn = (googleUser) => {
    localStorage.setItem("token", googleUser.tokenId);
    this.props.onClose();
  };

  onFailed = (res) => console.log(res);

  handleSubmit = (event) => {
    const { isFormValid } = this.state;
    if (isFormValid) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(this.state.generatedPostObj);
    this.setState({ isFormSubmitted: true });
  };

  generateFormPostObj = (formObj) => {
    const postObj = {};
    _.map(formObj.fields, (field) => (postObj[field.controlId] = field.value));
    return postObj;
  };

  updateForm = (formObj) => {
    this.setState({ generatedPostObj: this.generateFormPostObj(formObj) });
    this.setState({ isFormValid: formObj.formValid });
  };

  render() {
    const { onChangeMode } = this.props;
    const { isFormSubmitted } = this.state;
    return (
      <Form noValidate onSubmit={this.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGenerator
            form={constants.loginFormConfig}
            isFormSubmitted={isFormSubmitted}
            onUpdateForm={this.updateForm}
          />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" type="submit" size="lg" block>
            Log In
          </Button>
          <Button variant="link" block>
            <GoogleLogin
              clientId="614608788173-s48a5n2q5fr119f48fm6tprgbh5299gn.apps.googleusercontent.com"
              buttonText="Sign In via Google"
              onSuccess={this.onSignIn}
              onFailure={this.onSignIn}
              cookiePolicy={"single_host_origin"}
            />
          </Button>
          <Form.Label>
            Don't have an account?
            <Button variant="link" className="pl-1 pt-0" onClick={onChangeMode}>
              Sign Up Now!
            </Button>
          </Form.Label>
        </Modal.Footer>
      </Form>
    );
  }
}

export default LoginForm;
