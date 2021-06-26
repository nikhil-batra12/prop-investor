import React from "react";
import _ from "lodash";
import { Button, Form, Modal, Col } from "react-bootstrap";
import FormFeedback from "components/formGenerator/formFeedback";
import validation from "utils/formValidity/validation";
import bsCustomFileInput from "bs-custom-file-input";
import * as countriesConstant from "utils/constants/countries";
import * as statesConstant from "utils/constants/states";
import * as validationConstants from "utils/formValidity/constants";

class RegisterNewPropertyForm extends React.PureComponent<
  {
    onClose: () => void;
    onRegisterProperty: (obj: any) => void;
    registerPropertyStatus: any;
  },
  { isFormSubmitted: boolean; isFormValid: boolean; form: any }
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
        rules: validationConstants.validation.address.rules,
        validationMessages: [
          validationConstants.validation.address.rules[0].message,
        ],
      },
      address_2: {
        valid: false,
        value: "",
        rules: validationConstants.validation.address.rules,
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
      fileImage: {
        valid: false,
        value: "",
        rules: validationConstants.validation.images.rules,
        validationMessages: [
          validationConstants.validation.images.rules[0].message,
        ],
      },
    },
  };

  componentDidMount() {
    bsCustomFileInput.init();
  }

  handleSubmit = (event) => {
    const { isFormValid } = this.state;
    const { onRegisterProperty } = this.props;
    event.preventDefault();
    event.stopPropagation();
    onRegisterProperty(this.generateFormPostObj());
    if (isFormValid) {
      const postObj = this.generateFormPostObj();
      onRegisterProperty(postObj);
    }
    this.setState({ isFormSubmitted: true });
  };

  generateFormPostObj = () => {
    const formData: any = new FormData();
    _.forOwn(this.state.form, (value, key) =>
      formData.append(key, value.value)
    );
    for (var value of formData.values()) {
      console.log(value);
    }
    return formData;
  };

  setFormValidity = () => {
    const { form } = this.state;
    this.setState({ isFormValid: validation.checkFormValidity(form) });
  };

  handleChange = (event) => {
    const files = event.target.files[0];

    this.updateForm("fileImage", files);
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

  handleCountryChange = (event) => {
    const { id, value } = event.target;
    console.log(id, value);
    this.updateForm(id, value);
  };

  render() {
    const { isFormSubmitted, form } = this.state;
    const { onClose } = this.props;
    return (
      <Modal show onHide={onClose}>
        <Form noValidate onSubmit={this.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Register New</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="name" key="name">
              <Form.Label>
                Enter Property Name<span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Name"
                size="lg"
                onChange={this.handleTextBoxChange}
                isValid={form["name"].valid}
                isInvalid={isFormSubmitted && !form["name"].valid}
                value={form["name"].value}
              />
              <FormFeedback
                valid={form["name"].valid}
                validationMessages={form["name"].validationMessages}
              />
            </Form.Group>

            <Form.Group controlId="address_1" key="address_1">
              <Form.Label>
                Enter Address Line 1<span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Address Line 1"
                size="lg"
                onChange={this.handleTextBoxChange}
                isValid={form["address_1"].valid}
                isInvalid={isFormSubmitted && !form["address_1"].valid}
                value={form["address_1"].value}
              />
              <FormFeedback
                valid={form["address_1"].valid}
                validationMessages={form["address_1"].validationMessages}
              />
            </Form.Group>
            <Form.Group controlId="address_2" key="address_2">
              <Form.Label>
                Enter Address Line 2<span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Address Line 2"
                size="lg"
                onChange={this.handleTextBoxChange}
                isValid={form["address_2"].valid}
                isInvalid={isFormSubmitted && !form["address_2"].valid}
                value={form["address_2"].value}
              />
              <FormFeedback
                valid={form["address_2"].valid}
                validationMessages={form["address_2"].validationMessages}
              />
            </Form.Group>
            <Form.Group controlId="country">
              <Form.Label>
                Select County<span className="required">*</span>
              </Form.Label>
              <Form.Control
                as="select"
                size="lg"
                onChange={this.handleCountryChange}
              >
                {_.map(countriesConstant.countriesList, (country) => (
                  <option key={country.code}>{country.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="city" key="city">
              <Form.Label>
                Enter City Name<span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter City Name"
                size="lg"
                onChange={this.handleTextBoxChange}
                isValid={form["city"].valid}
                isInvalid={isFormSubmitted && !form["city"].valid}
                value={form["city"].value}
              />
              <FormFeedback
                valid={form["city"].valid}
                validationMessages={form["city"].validationMessages}
              />
            </Form.Group>
            <Form.Group controlId="state" key="state">
            <Form.Label>
              Select State<span className="required">*</span>
            </Form.Label>
            <Form.Control
              as="select"
              size="lg"
              onChange={this.handleCountryChange}
            >
              {_.map(
                statesConstant.statesList[form["country"].value],
                (state) => (
                  <option key={state.id}>{state.name}</option>
                )
              )}
            </Form.Control>
            <FormFeedback
              valid={form["state"].valid}
              validationMessages={form["state"].validationMessages}
            />
          </Form.Group>
                <Form.Group controlId="zip" key="zip">
                  <Form.Label>
                    Enter Zip Code<span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Zip Code"
                    size="lg"
                    onChange={this.handleTextBoxChange}
                    isValid={form["zip"].valid}
                    isInvalid={isFormSubmitted && !form["zip"].valid}
                    value={form["zip"].value}
                  />
                  <FormFeedback
                    valid={form["zip"].valid}
                    validationMessages={form["zip"].validationMessages}
                  />
                </Form.Group>
            <Form.Group controlId="landmark" key="landmark">
              <Form.Label>
                Enter Landmark<span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Landmark Name"
                size="lg"
                onChange={this.handleTextBoxChange}
                isValid={form["landmark"].valid}
                isInvalid={isFormSubmitted && !form["landmark"].valid}
                value={form["landmark"].value}
              />
              <FormFeedback
                valid={form["landmark"].valid}
                validationMessages={form["landmark"].validationMessages}
              />
            </Form.Group>
            
            <Form.Group controlId="mapLink" key="mapLink">
              <Form.Label>
                Enter mapLink<span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Map Link"
                size="lg"
                onChange={this.handleTextBoxChange}
                isValid={form["mapLink"].valid}
                isInvalid={isFormSubmitted && !form["mapLink"].valid}
                value={form["mapLink"].value}
              />
              <FormFeedback
                valid={form["mapLink"].valid}
                validationMessages={form["mapLink"].validationMessages}
              />
            </Form.Group>
            <Form.Group controlId="numberOfBathrooms" key="numberOfBathrooms">
              <Form.Label>
                Enter Number Of Bathrooms<span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Number Of Bathrooms"
                size="lg"
                onChange={this.handleTextBoxChange}
                isValid={form["numberOfBathrooms"].valid}
                isInvalid={isFormSubmitted && !form["numberOfBathrooms"].valid}
                value={form["numberOfBathrooms"].value}
              />
              <FormFeedback
                valid={form["numberOfBathrooms"].valid}
                validationMessages={
                  form["numberOfBathrooms"].validationMessages
                }
              />
            </Form.Group>
            <Form.Group controlId="numberOfBedrooms" key="numberOfBedrooms">
              <Form.Label>
                Enter Number Of Bedrooms<span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Number Of Bedrooms"
                size="lg"
                onChange={this.handleTextBoxChange}
                isValid={form["numberOfBedrooms"].valid}
                isInvalid={isFormSubmitted && !form["numberOfBedrooms"].valid}
                value={form["numberOfBedrooms"].value}
              />
              <FormFeedback
                valid={form["numberOfBedrooms"].valid}
                validationMessages={form["numberOfBedrooms"].validationMessages}
              />
            </Form.Group>
            <Form.Group controlId="squareFeet" key="squareFeet">
              <Form.Label>
                Enter Area(square Feet)<span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Area in Square Feet"
                size="lg"
                onChange={this.handleTextBoxChange}
                isValid={form["squareFeet"].valid}
                isInvalid={isFormSubmitted && !form["squareFeet"].valid}
                value={form["squareFeet"].value}
              />
              <FormFeedback
                valid={form["squareFeet"].valid}
                validationMessages={form["squareFeet"].validationMessages}
              />
            </Form.Group>
            <Form.Group controlId="value" key="value">
              <Form.Label>
                Enter value(USD)<span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Property value"
                size="lg"
                onChange={this.handleTextBoxChange}
                isValid={form["value"].valid}
                isInvalid={isFormSubmitted && !form["value"].valid}
                value={form["value"].value}
              />
              <FormFeedback
                valid={form["value"].valid}
                validationMessages={form["value"].validationMessages}
              />
            </Form.Group>
            <Form.File
              className="position-relative"
              required
              name="file"
              label={`Property Image`}
              onChange={this.handleChange}
              isValid={form["fileImage"].valid}
              multiple
              id="fileImage"
              feedbackTooltip
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
