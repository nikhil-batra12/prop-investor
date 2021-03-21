import React from "react";
import _ from "lodash";
import { Button, Form, Modal, Spinner, Toast } from "react-bootstrap";
import * as helpers from "utils/helpers";
import validation from "utils/formValidity/validation";
import FormFeedback from "components/formGenerator/formFeedback";
import * as constants from "./constants";
class LoginForm extends React.PureComponent<
  {
    onClose: () => void;
    onChangeMode: () => void;
    onLogin: (params) => void;
    loginInfo: any;
  },
  {
    isFormSubmitted: boolean;
    isFormValid: boolean;
    form: any;
  }
> {
  state = {
    isFormSubmitted: false,
    isFormValid: false,
    form: {
      username: {
        valid: false,
        value: "",
        rules: constants.validation.username.rules,
        validationMessages: [constants.validation.username.rules[0].message],
      },
      password: {
        valid: false,
        value: "",
        rules: constants.validation.password.rules,
        validationMessages: [constants.validation.password.rules[0].message],
      },
    },
  };

  handleSubmit = (event) => {
    const { isFormValid } = this.state;
    const { onLogin } = this.props;
    event.preventDefault();
    event.stopPropagation();
    if (isFormValid) {
      const postObj = this.generateFormPostObj();
      onLogin(postObj);
    }
    this.setState({ isFormSubmitted: true });
  };

  generateFormPostObj = () => {
    const postObj = {};
    _.forOwn(this.state.form, (value, key) => (postObj[key] = value.value));
    return postObj;
  };

  setFormValidity = () => {
    const { form } = this.state;
    this.setState({ isFormValid: validation.checkFormValidity(form) });
  };

  updateForm = (id, value) => {
    const { form } = this.state;
    const updatedForm = { ...form };
    const updatedFormField = { ...updatedForm[id] };
    updatedFormField.value = value;

    const { valid, validationMessages } = validation.checkFieldValidity(
      updatedFormField.rules,
      value
    );
    updatedFormField.valid = valid;
    updatedFormField.validationMessages =
      validationMessages || updatedFormField?.rules[0]?.message;
    updatedForm[id] = updatedFormField;
    this.setState({ form: updatedForm }, () => this.setFormValidity());
  };

  handleTextBoxChange = (event) => {
    const { value, id } = event.target;
    this.updateForm(id, value);
  };

  render() {
    const { onChangeMode, loginInfo } = this.props;
    const { isFormSubmitted, form } = this.state;
    const isPending = helpers.isPending(loginInfo.status);
    const isFailure = helpers.isFailure(loginInfo.status);
    return (
      <Form noValidate onSubmit={this.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
          {isFailure && (
            <Toast>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">Login Failed</strong>
              </Toast.Header>
              <Toast.Body>
                {loginInfo.message || "Invalid credentials"}
              </Toast.Body>
            </Toast>
          )}
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="username" key="username">
            <Form.Label>Enter Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email Address"
              size="lg"
              onChange={this.handleTextBoxChange}
              isValid={form["username"].valid}
              isInvalid={isFormSubmitted && !form["username"].valid}
              value={form["username"].value}
            />
            <FormFeedback
              valid={form["username"].valid}
              validationMessages={form["username"].validationMessages}
            />
          </Form.Group>
          <Form.Group controlId="password" key="password">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              size="lg"
              onChange={this.handleTextBoxChange}
              isValid={form["password"].valid}
              isInvalid={isFormSubmitted && !form["password"].valid}
              value={form["password"].value}
            />
            <FormFeedback
              valid={form["password"].valid}
              validationMessages={form["password"].validationMessages}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button
            variant="primary"
            type="submit"
            size="lg"
            block
            disabled={isPending}
          >
            Log In
            {isPending && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
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
