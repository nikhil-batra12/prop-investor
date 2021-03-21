import React from "react";
import _ from "lodash";
import { Form } from "react-bootstrap";
import validation from "utils/formValidity/validation";
import FormFeedback from "./formFeedback";

class FormGenerator extends React.PureComponent<{
  form: any;
  isFormSubmitted: boolean;
  onUpdateForm: (valid: boolean) => void;
}> {
  state = {
    formObj: this.props.form,
  };

  setFormValidity = () => {
    const { formObj } = this.state;
    const { onUpdateForm } = this.props;
    const updatedFormObj = { ...formObj };
    updatedFormObj.formValid = validation.checkFormValidity(updatedFormObj);
    onUpdateForm(updatedFormObj);
    this.setState({ formObj: updatedFormObj });
  };

  updateForm = (id, value) => {
    const { formObj } = this.state;
    const updatedForm = { ...formObj };
    const updatedFormFields = [...updatedForm.fields];
    const index = _.findIndex(updatedFormFields, ["controlId", id]);
    const updatedField = { ...updatedFormFields[index] };
    updatedField.value = value;

    const { valid, validationMessages } = validation.checkFieldValidity(
      updatedField.rules,
      updatedField.value
    );
    updatedField.valid = valid;
    updatedField.validationMessages =
      validationMessages || updatedField?.rules[0]?.message;
    updatedFormFields[index] = updatedField;
    updatedForm.fields = updatedFormFields;
    this.setState({ formObj: updatedForm }, () => this.setFormValidity());
  };

  handleTextBoxChange = (event) => {
    const { value, id } = event.target;
    this.updateForm(id, value);
  };

  generateFormField = (elementConfig) => {
    const { isFormSubmitted } = this.props;
    const {
      type,
      controlId,
      label,
      placeholder,
      controlType,
      valid,
      validationMessages,
      value,
      size = "lg",
      rules,
    } = elementConfig;
    const messages = _.isEmpty(validationMessages)
      ? [rules[0]?.message]
      : validationMessages;
    switch (type) {
      case "TEXTBOX":
        return (
          <Form.Group controlId={controlId} key={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
              type={controlType}
              placeholder={placeholder}
              size={size}
              onChange={this.handleTextBoxChange}
              isValid={valid}
              isInvalid={isFormSubmitted && !valid}
              value={value}
            />
            <FormFeedback valid={valid} validationMessages={messages} />
          </Form.Group>
        );
    }
  };

  render() {
    const { formObj } = this.state;

    const formContent = _.map(formObj.fields, (field) =>
      this.generateFormField(field)
    );
    return <>{formContent}</>;
  }
}

export default FormGenerator;
