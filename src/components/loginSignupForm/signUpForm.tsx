import React from "react";
import _ from "lodash";
import { Button, Form, Modal, Spinner, Toast, Col } from "react-bootstrap";
import * as helpers from "utils/helpers";
import validation from "utils/formValidity/validation";
import FormFeedback from "components/formGenerator/formFeedback";
import * as countriesConstant from "utils/constants/countries";
import * as statesConstant from "utils/constants/states";
import * as validationConstants from "utils/formValidity/constants";

class SignUpForm extends React.PureComponent<
  {
    onClose: () => void;
    onChangeMode: () => void;
    onSignup: (params) => void;
    signupInfo: any;
  },
  {
    isFormSubmitted: boolean;
    isFormValid: boolean;
    form: any;
    showToast: boolean;
  }
> {
  state = {
    isFormSubmitted: false,
    isFormValid: false,
    showToast: false,
    form: {
      firstName: {
        valid: false,
        value: "",
        rules: validationConstants.validation.firstName.rules,
        validationMessages: [
          validationConstants.validation.firstName.rules[0].message,
        ],
      },
      lastName: {
        valid: false,
        value: "",
        rules: validationConstants.validation.lastName.rules,
        validationMessages: [
          validationConstants.validation.lastName.rules[0].message,
        ],
      },
      username: {
        valid: false,
        value: "",
        rules: validationConstants.validation.username.rules,
        validationMessages: [
          validationConstants.validation.username.rules[0].message,
        ],
      },
      password: {
        valid: false,
        value: "",
        rules: validationConstants.validation.password.rules,
        validationMessages: [
          validationConstants.validation.password.rules[0].message,
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
        valid: true,
        value: statesConstant.statesList["Afghanistan"][0].name,
        // rules: validationConstants.validation.state.rules,
        // validationMessages: [
        //   validationConstants.validation.state.rules[0].message,
        // ],
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
      tokAddress: {
        valid: true,
        value: "",
        // rules: validationConstants.validation.tokAddress.rules,
        // validationMessages: [
        //   validationConstants.validation.tokAddress.rules[0].message,
        // ],
      },
    },
  };

  handleSubmit = (event) => {
    const { isFormValid } = this.state;
    const { onSignup } = this.props;
    event.preventDefault();
    event.stopPropagation();
    if (isFormValid) {
      const postObj = this.generateFormPostObj();
      onSignup(postObj);
      this.setState({ showToast: true });
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

  handleCountryChange = (event) => {
    const { id, value } = event.target;
    this.updateForm(id, value);
  };

  handleToastHide = () => {
    this.setState({ showToast: false });
  };

  render() {
    const { onChangeMode, signupInfo } = this.props;
    const { isFormSubmitted, form, showToast } = this.state;
    const isPending = helpers.isPending(signupInfo.status);
    const isFailure = helpers.isFailure(signupInfo.status);
    const isSuccess = helpers.isSuccess(signupInfo.status);
    return (
      <Form noValidate onSubmit={this.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
          {showToast && (isFailure || isSuccess) && (
            <Toast onClose={this.handleToastHide}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                {isFailure && (
                  <strong className="mr-auto">Signup Failed</strong>
                )}
                {isSuccess && (
                  <strong className="mr-auto">
                    Success. Please Login now.
                  </strong>
                )}
              </Toast.Header>
              <Toast.Body>
                {signupInfo.message || "Something went wrong"}
              </Toast.Body>
            </Toast>
          )}
        </Modal.Header>
        <Modal.Body>
          <div className="required d-flex">* Required fields</div>
          <Form.Row>
            <Col>
              <Form.Group controlId="firstName" key="firstName">
                <Form.Label>
                  Enter First Name<span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter First Name"
                  size="lg"
                  onChange={this.handleTextBoxChange}
                  isValid={form["firstName"].valid}
                  isInvalid={isFormSubmitted && !form["firstName"].valid}
                  value={form["firstName"].value}
                />
                <FormFeedback
                  valid={form["firstName"].valid}
                  validationMessages={form["firstName"].validationMessages}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="lastName" key="lastName">
                <Form.Label>
                  Enter Last Name<span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Last Name"
                  size="lg"
                  onChange={this.handleTextBoxChange}
                  isValid={form["lastName"].valid}
                  isInvalid={isFormSubmitted && !form["lastName"].valid}
                  value={form["lastName"].value}
                />
                <FormFeedback
                  valid={form["lastName"].valid}
                  validationMessages={form["lastName"].validationMessages}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group controlId="username" key="username">
            <Form.Label>
              Enter Email Address<span className="required">*</span>
            </Form.Label>
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
            <Form.Label>
              Enter Password<span className="required">*</span>
            </Form.Label>
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
            {/* <FormFeedback
              valid={form["state"].valid}
              validationMessages={form["state"].validationMessages}
            /> */}
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

          <Form.Group controlId="tokAddress" key="tokAddress">
            <Form.Label>Enter Token Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Token Address"
              size="lg"
              onChange={this.handleTextBoxChange}
              isValid={form["tokAddress"].valid}
              isInvalid={isFormSubmitted && !form["tokAddress"].valid}
              value={form["tokAddress"].value}
            />
            {/* <FormFeedback
              valid={form["tokAddress"].valid}
              validationMessages={form["tokAddress"].validationMessages}
            /> */}
          </Form.Group>
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
