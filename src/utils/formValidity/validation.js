import _ from "lodash";
import * as constants from "./constants";

const validateEmail = (value) => constants.EMAIL_REGEX.test(value);

const validateRequired = (value) => constants.NON_EMPTY_REGEX.test(value);

const validateAlphabets = (value) => constants.ONLY_ALHABETS.test(value);

const validateZipCode = (value) => constants.ZIP_CODE.test(value);

const validateNumbers = (value) => constants.ONLY_NUMBERS.test(value);

const pushValidationMessage = (result, message, validationMessages) => {
  if (!result) {
    validationMessages.push(message);
  }
};

const validateRule = (rule, value, validationMessages) => {
  let result = true;
  switch (rule.id) {
    case "EMAIL":
      result = validateEmail(value);
      pushValidationMessage(result, rule.message, validationMessages);
      return result;
    case "REQUIRED":
      result = validateRequired(value);
      pushValidationMessage(result, rule.message, validationMessages);
      return result;
    case "ALPHABETS":
      result = validateAlphabets(value);
      pushValidationMessage(result, rule.message, validationMessages);
      return result;
    case "ZIP_CODE":
      result = validateZipCode(value);
      pushValidationMessage(result, rule.message, validationMessages);
      return result;
    case "NUMBERS":
      result = validateNumbers(value);
      pushValidationMessage(result, rule.message, validationMessages);
      return result;
  }
};

const validation = {
  checkFieldValidity: (rules, value) => {
    const validationMessages = [];
    const isValid = _.reduce(
      rules,
      (valid, rule) => valid && validateRule(rule, value, validationMessages),
      true
    );
    return { valid: isValid, validationMessages };
  },
  checkFormValidity: (form) => {
    let isValid = true;
    _.forOwn(form, (value, key) => {
      isValid = isValid && form[key].valid;
    });

    return isValid;
  },
};

export default validation;
