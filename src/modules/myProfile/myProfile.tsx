import React from "react";
import _ from "lodash";
import * as validationConstants from "utils/formValidity/constants";
import * as countriesConstant from "utils/constants/countries";
import validation from "utils/formValidity/validation";
import FormFeedback from "components/formGenerator/formFeedback";
import { Button, Form, Jumbotron, Spinner, Toast, Col } from "react-bootstrap";
import * as helpers from "utils/helpers";

class MyProfile extends React.PureComponent<
  {
    userDetails: any;
    fetchUserStatus: any;
    onUpdateUser: () => void;
  },
  { isFormSubmitted: boolean; isFormValid: boolean; form: any }
> {
  state = {
    isFormSubmitted: false,
    isFormValid: false,
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
        valid: false,
        value: "",
        rules: validationConstants.validation.state.rules,
        validationMessages: [
          validationConstants.validation.state.rules[0].message,
        ],
      },
      zip: {
        valid: false,
        value: "",
        rules: validationConstants.validation.zip.rules,
        validationMessages: [
          validationConstants.validation.zip.rules[0].message,
        ],
      },
    },
  };

  handleSubmit = (event) => {
    const { isFormValid } = this.state;
    // const { onSignup } = this.props;
    event.preventDefault();
    event.stopPropagation();
    if (isFormValid) {
      const postObj = this.generateFormPostObj();
      // onSignup(postObj);
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
    console.log(id, value);
    this.updateForm(id, value);
  };

  render() {
    const { isFormSubmitted, form } = this.state;
    const { fetchUserStatus, userDetails } = this.props;
    const isPending = helpers.isPending(fetchUserStatus.status);
    const isFailure = helpers.isFailure(fetchUserStatus.status);
    return (
      <Form noValidate onSubmit={this.handleSubmit}>
        <Col xs={12} md={8} lg={6} className="m-auto">
          <Jumbotron className="p-3">
            <h2>My Profile</h2>
            <Form.Row>
              <Col>
                <Form.Group controlId="firstName" key="firstName">
                  <Form.Label>Enter First Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter First Name"
                    size="lg"
                    onChange={this.handleTextBoxChange}
                    isValid={form["firstName"].valid}
                    isInvalid={isFormSubmitted && !form["firstName"].valid}
                    value={form["firstName"].value || userDetails["firstName"]}
                  />
                  <FormFeedback
                    valid={form["firstName"].valid}
                    validationMessages={form["firstName"].validationMessages}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="lastName" key="lastName">
                  <Form.Label>Enter Last Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Last Name"
                    size="lg"
                    onChange={this.handleTextBoxChange}
                    isValid={form["lastName"].valid}
                    isInvalid={isFormSubmitted && !form["lastName"].valid}
                    value={form["lastName"].value || userDetails["lastName"]}
                  />
                  <FormFeedback
                    valid={form["lastName"].valid}
                    validationMessages={form["lastName"].validationMessages}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
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
            <Form.Group controlId="city" key="city">
              <Form.Label>Enter City Name</Form.Label>
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
            <Form.Row>
              <Col>
                <Form.Group controlId="state" key="state">
                  <Form.Label>Enter State Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter State Name"
                    size="lg"
                    onChange={this.handleTextBoxChange}
                    isValid={form["state"].valid}
                    isInvalid={isFormSubmitted && !form["state"].valid}
                    value={form["state"].value}
                  />
                  <FormFeedback
                    valid={form["state"].valid}
                    validationMessages={form["state"].validationMessages}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="zip" key="zip">
                  <Form.Label>Enter Zip Code</Form.Label>
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
              </Col>
            </Form.Row>
            <Form.Group controlId="country">
              <Form.Label>Select County</Form.Label>
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
            <Button
              variant="primary"
              type="submit"
              block
              size="lg"
              disabled={isPending}
            >
              Save Changes
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
          </Jumbotron>
        </Col>
      </Form>
    );
  }
}

export default MyProfile;
