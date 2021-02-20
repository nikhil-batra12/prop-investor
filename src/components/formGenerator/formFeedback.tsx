import React from "react";
import { Form } from "react-bootstrap";

const getMessage = (validationMessages = []) => {
  if (validationMessages.length) {
    return validationMessages[0];
  }
};

const FormFeedback = (props) => {
  const { valid, validationMessages } = props;
  const message = getMessage(validationMessages);
  const content = valid ? null : (
    <Form.Control.Feedback type="invalid">{message}</Form.Control.Feedback>
  );
  return <>{content}</>;
};

export default FormFeedback;
