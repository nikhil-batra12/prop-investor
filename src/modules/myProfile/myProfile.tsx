import React from "react";
import _ from "lodash";
import * as validationConstants from "utils/formValidity/constants";
import * as countriesConstant from "utils/constants/countries";
import * as statesConstant from "utils/constants/states";
import validation from "utils/formValidity/validation";
import FormFeedback from "components/formGenerator/formFeedback";
import {
  Button,
  Form,
  Jumbotron,
  Spinner,
  Toast,
  Col,
  Row,
  InputGroup,
} from "react-bootstrap";
import * as helpers from "utils/helpers";
import { CheckCircleFill, PatchExclamationFill } from "react-bootstrap-icons";

class MyProfile extends React.PureComponent<
  {
    userDetails: any;
    updateUserStatus: any;
    onUpdateUser: (data: any) => void;
  },
  {
    isFormSubmitted: boolean;
    isFormValid: boolean;
    form: any;
    showToast: boolean;
    isReadOnly: boolean;
  }
> {
  state = {
    isFormSubmitted: false,
    isFormValid: false,
    showToast: false,
    isReadOnly: true,
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
      // password: {
      //   valid: false,
      //   value: "",
      //   rules: validationConstants.validation.password.rules,
      //   validationMessages: [
      //     validationConstants.validation.password.rules[0].message,
      //   ],
      // },
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
      country: {
        valid: true,
        value: "",
      },
      tokAddress: {
        valid: false,
        value: "",
        // rules: validationConstants.validation.tokAddress.rules,
        // validationMessages: [
        //   validationConstants.validation.tokAddress.rules[0].message,
        // ],
      },
    },
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   const { userDetails } = nextProps;
  //   const initialFormState = {};
  //   _.forOwn(prevState.form, (value, key) => {

  //     initialFormState[key] = {
  //       ...prevState.form[key],
  //       value: userDetails[key],
  //       valid: true,
  //     };
  //   });
  //   return {
  //     form: initialFormState,
  //   };
  // }

  componentDidMount() {
    const { userDetails } = this.props;
    const initialFormState = {};
    const { form } = this.state;
    _.forOwn(form, (value, key) => {
      const { valid, validationMessages } = validation.checkFieldValidity(
        form[key].rules,
        userDetails[key]
      );
      initialFormState[key] = {
        ...form[key],
        value: userDetails[key],
        valid,
        validationMessages,
      };
    });
    this.setState({ form: initialFormState });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userDetails != this.props.userDetails) {
      const { userDetails } = this.props;
      const initialFormState = {};
      const { form } = this.state;
      _.forOwn(form, (value, key) => {
        const { valid, validationMessages } = validation.checkFieldValidity(
          form[key].rules,
          userDetails[key]
        );
        initialFormState[key] = {
          ...form[key],
          value: userDetails[key],
          valid,
          validationMessages,
        };
      });
      this.setState({ form: initialFormState });
    }
  }

  handleSubmit = (event) => {
    const { isFormValid } = this.state;
    const { onUpdateUser } = this.props;
    event.preventDefault();
    event.stopPropagation();
    if (isFormValid) {
      const postObj = this.generateFormPostObj();
      onUpdateUser(postObj);
      this.setState({ showToast: true, isReadOnly: true });
    }
    this.setState({ isFormSubmitted: true });
  };

  generateFormPostObj = () => {
    let postObj = {};
    _.forOwn(this.state.form, (value, key) => (postObj[key] = value.value));
    postObj = _.omit(postObj, "password");
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

  handleHideToast = () => {
    this.setState({ showToast: false });
  };

  handleEditTap = () => {
    this.setState({ isReadOnly: false });
  };

  handleCancelTap = () => {
    this.setState({ isReadOnly: true });
  };

  render() {
    const { isFormSubmitted, form, showToast, isReadOnly } = this.state;
    const { updateUserStatus, userDetails } = this.props;
    const isPending = helpers.isPending(updateUserStatus.status);
    const isFailure = helpers.isFailure(updateUserStatus.status);
    const isSuccess = helpers.isSuccess(updateUserStatus.status);
    const msg = updateUserStatus?.message;
    const disableForm = isFailure || isReadOnly;
    return (
      <Row className="mt-3">
        <Col xs={12} md={{ span: 6, offset: 1 }}>
          <Form noValidate onSubmit={this.handleSubmit}>
            <Toast
              show={(isFailure || isSuccess) && showToast}
              onClose={this.handleHideToast}
            >
              <Toast.Header>
                <strong className="mr-auto">
                  {isSuccess ? "Success" : "Failed"}
                </strong>
              </Toast.Header>
              <Toast.Body>{msg}</Toast.Body>
            </Toast>
            <Jumbotron className="p-3">
              <h2>My Profile</h2>
              <div className="required d-flex">* Required fields</div>
              <fieldset disabled={disableForm}>
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
                        validationMessages={
                          form["firstName"].validationMessages
                        }
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
                {/* <Form.Group controlId="password" key="password">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                size="lg"
                onChange={this.handleTextBoxChange}
                isValid={form["password"].valid}
                isInvalid={isFormSubmitted && !form["password"].valid}
                value={form["password"].value || userDetails["password"]}
              />
              <FormFeedback
                valid={form["password"].valid}
                validationMessages={form["password"].validationMessages}
              />
            </Form.Group> */}
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
                <Form.Group controlId="country">
                  <Form.Label>
                    Select County<span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    size="lg"
                    onChange={this.handleCountryChange}
                    defaultValue={userDetails["country"]}
                  >
                    {_.map(countriesConstant.countriesList, (country) => (
                      <option key={country.code}>{country.name}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Group controlId="state" key="state">
                      <Form.Label>
                        Select State<span className="required">*</span>
                      </Form.Label>
                      <Form.Control
                        as="select"
                        size="lg"
                        onChange={this.handleCountryChange}
                        defaultValue={userDetails["state"]}
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
                  </Col>
                  <Col>
                    <Form.Group controlId="zip" key="zip">
                      <Form.Label>
                        Enter Zip Code<span className="required">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
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
                <Form.Group controlId="tokAddress" key="tokAddress">
                  <Form.Label>Enter Token Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Token Address"
                    size="lg"
                    onChange={this.handleTextBoxChange}
                    // isValid={form["tokAddress"].valid}
                    // isInvalid={isFormSubmitted && !form["tokAddress"].valid}
                    value={form["tokAddress"].value}
                  />
                  {/* <FormFeedback
                  valid={form["tokAddress"].valid}
                  validationMessages={form["tokAddress"].validationMessages}
                /> */}
                </Form.Group>
              </fieldset>
              {isReadOnly && (
                <Button
                  variant="light"
                  type="submit"
                  size="lg"
                  className="mr-2"
                  onClick={this.handleEditTap}
                >
                  Edit Profile
                </Button>
              )}
              {!isReadOnly && (
                <Button
                  variant="light"
                  type="submit"
                  size="lg"
                  className="mr-2"
                  onClick={this.handleCancelTap}
                >
                  Cancel
                </Button>
              )}
              <Button
                variant="primary"
                type="submit"
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
          </Form>
        </Col>
        <Col xs={12} md={4}>
          <Jumbotron className="p-3">
            <h2>KYC Details</h2>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Kyc Verification</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                value={userDetails["kycStatus"]}
                disabled
                className={
                  userDetails["kycStatus"] === "UNVERIFIED"
                    ? "kyc-fail"
                    : "kyc-pass"
                }
              />
              <InputGroup.Append>
                <InputGroup.Text>
                  {userDetails["kycStatus"] === "UNVERIFIED" ? (
                    <PatchExclamationFill size={25} />
                  ) : (
                    <CheckCircleFill size={25} />
                  )}
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            {userDetails["kycStatus"] === "UNVERIFIED" ? (
              <Button variant="primary">Verify Now</Button>
            ) : null}
          </Jumbotron>
          <Jumbotron className="p-3">
            <h2>Account Details</h2>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Email Verification</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                value={userDetails["emailVerificationStatus"]}
                disabled
                className={
                  userDetails["emailVerificationStatus"] === "UNVERIFIED"
                    ? "kyc-fail"
                    : "kyc-pass"
                }
              />
              <InputGroup.Append>
                <InputGroup.Text>
                  {userDetails["emailVerificationStatus"] === "UNVERIFIED" ? (
                    <PatchExclamationFill size={25} />
                  ) : (
                    <CheckCircleFill size={25} />
                  )}
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            {userDetails["emailVerificationStatus"] === "UNVERIFIED" ? (
              <Button variant="primary">Verify Now</Button>
            ) : null}
          </Jumbotron>
          <Jumbotron className="p-3">
            <h2>Manage Password</h2>
            <Button variant="primary" className="mr-3 mb-3">
              Change Password
            </Button>
            <Button variant="light" className="mr-3 mb-3">
              Forgot Password
            </Button>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}

export default MyProfile;
