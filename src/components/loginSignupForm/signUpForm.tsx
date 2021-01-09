import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import FormGenerator from "components/formGenerator/formGenerator";
import * as constants from "./constants";

class SignUpForm extends React.PureComponent<
  { onClose: () => void; onChangeMode: () => void },
  { isFormSubmitted: boolean; isFormValid: boolean }
> {
  state = {
    isFormSubmitted: false,
    isFormValid: false,
  };

  handleSubmit = (event) => {
    const { isFormValid } = this.state;
    if (isFormValid) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ isFormSubmitted: true });
  };

  updateForm = (valid) => {
    this.setState({ isFormValid: valid });
  };

  render() {
    const { onChangeMode } = this.props;
    const { isFormSubmitted } = this.state;
    return (
      <Form noValidate onSubmit={this.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGenerator
            form={constants.signupFormConfig}
            isFormSubmitted={isFormSubmitted}
            onUpdateForm={this.updateForm}
          />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" type="submit" block size="lg">
            Sign Up
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
