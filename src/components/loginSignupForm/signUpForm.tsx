import React from "react";
import _ from "lodash";
import { Button, Form, Modal, Spinner, Toast } from "react-bootstrap";
import * as helpers from "utils/helpers";
import FormGenerator from "components/formGenerator/formGenerator";
import * as constants from "./constants";

class SignUpForm extends React.PureComponent<
  {
    onClose: () => void;
    onChangeMode: () => void;
    onSignup: (params) => void;
    signupInfo: any;
  },
  { isFormSubmitted: boolean; isFormValid: boolean; generatedPostObj: any }
> {
  state = {
    isFormSubmitted: false,
    isFormValid: false,
    generatedPostObj: {},
  };

  handleSubmit = (event) => {
    const { isFormValid } = this.state;
    const { onSignup } = this.props;
    event.preventDefault();
    event.stopPropagation();
    if (isFormValid) {
      onSignup(this.state.generatedPostObj);
    }
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
    const { onChangeMode, signupInfo } = this.props;
    const { isFormSubmitted } = this.state;
    const isPending = helpers.isPending(signupInfo.status);
    const isFailure = helpers.isFailure(signupInfo.status);
    return (
      <Form noValidate onSubmit={this.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
          {isFailure && (
            <Toast>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">Login Failed</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>
                {signupInfo.message || "Something went wrong"}
              </Toast.Body>
            </Toast>
          )}
        </Modal.Header>
        <Modal.Body>
          <FormGenerator
            form={constants.signupFormConfig}
            isFormSubmitted={isFormSubmitted}
            onUpdateForm={this.updateForm}
          />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button
            variant="primary"
            type="submit"
            block
            size="lg"
            disabled={isPending}
          >
            Sign Up
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
            Already have an account?{" "}
            <Button variant="link" className="pl-1 pt-0" onClick={onChangeMode}>
              Login In Now!
            </Button>
          </Form.Label>
        </Modal.Footer>
      </Form>
    );
  }
}

export default SignUpForm;
