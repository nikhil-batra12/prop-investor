import React from "react";
import _ from "lodash";
import { Button, Form, Modal } from "react-bootstrap";
import FormGenerator from "components/formGenerator/formGenerator";
import * as constants from "./constants";

class RegisterNewPropertyForm extends React.PureComponent<
  { onClose: () => void },
  { isFormSubmitted: boolean; isFormValid: boolean; generatedPostObj: any }
> {
  state = {
    isFormSubmitted: false,
    isFormValid: false,
    generatedPostObj: {},
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
    const { isFormSubmitted } = this.state;
    const { onClose } = this.props;
    console.log("rendered");
    return (
      <Modal show onHide={onClose}>
        <Form noValidate onSubmit={this.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Register New</Modal.Title>
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
              Register
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default RegisterNewPropertyForm;
