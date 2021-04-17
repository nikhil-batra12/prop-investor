import React from "react";
import _ from "lodash";
import { Button, Form, Modal } from "react-bootstrap";
import FormGenerator from "components/formGenerator/formGenerator";
import * as constants from "./constants";
import * as countriesConstant from "utils/constants/countries";
import * as validationConstants from "utils/formValidity/constants";

class RegisterNewPropertyForm extends React.PureComponent<
  { onClose: () => void },
  { isFormSubmitted: boolean; isFormValid: boolean; generatedPostObj: any }
> {
  state = {
    isFormSubmitted: false,
    isFormValid: false,
    form: {
      name: {
        valid: false,
        value: "",
        rules: validationConstants.validation.name.rules,
        validationMessages: [
          validationConstants.validation.name.rules[0].message,
        ],
      },
      address_1: {
        valid: false,
        value: "",
        rules: validationConstants.validation.address_1.rules,
        validationMessages: [
          validationConstants.validation.address.rules[0].message,
        ],
      },
      address_2: {
        valid: false,
        value: "",
        rules: validationConstants.validation.address_2.rules,
        validationMessages: [
          validationConstants.validation.address.rules[0].message,
        ],
      },
      city: {
        valid: false,
        value: "",
        rules: validationConstants.validation.city.rules,
        validationMessages: [
          validationConstants.validation.city.rules[0].message,
        ],
      },
      state: {
        valid: false,
        value: "",
        rules: validationConstants.validation.state.rules,
        validationMessages: [
          validationConstants.validation.state.rules[0].message,
        ],
      },
      landmark: {
        valid: false,
        value: "",
        rules: validationConstants.validation.landmark.rules,
        validationMessages: [
          validationConstants.validation.landmark.rules[0].message,
        ],
      },
      country: {
        valid: true,
        value: "Afghanistan",
      },
      zip: {
        valid: false,
        value: "",
        rules: validationConstants.validation.zip.rules,
        validationMessages: [
          validationConstants.validation.zip.rules[0].message,
        ],
      },
      mapLink: {
        valid: false,
        value: "",
        rules: validationConstants.validation.mapLink.rules,
        validationMessages: [
          validationConstants.validation.mapLink.rules[0].message,
        ],
      },
      numberOfBathrooms: {
        valid: false,
        value: "",
        rules: validationConstants.validation.rooms.rules,
        validationMessages: [
          validationConstants.validation.rooms.rules[0].message,
        ],
      },
      numberOfBedrooms: {
        valid: false,
        value: "",
        rules: validationConstants.validation.rooms.rules,
        validationMessages: [
          validationConstants.validation.rooms.rules[0].message,
        ],
      },
      squareFeet: {
        valid: false,
        value: "",
        rules: validationConstants.validation.area.rules,
        validationMessages: [
          validationConstants.validation.area.rules[0].message,
        ],
      },
      value: {
        valid: false,
        value: "",
        rules: validationConstants.validation.value.rules,
        validationMessages: [
          validationConstants.validation.value.rules[0].message,
        ],
      },
    },
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
