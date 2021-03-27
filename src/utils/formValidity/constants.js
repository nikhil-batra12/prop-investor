export const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export const NON_EMPTY_REGEX = /^(?!\s*$).+/;

export const ONLY_ALHABETS = /^[A-Za-z]+$/;

export const ZIP_CODE = /^(\d+-?)+\d+$/;

export const validation = {
  username: {
    rules: [
      { id: "REQUIRED", message: "Email is Required" },
      { id: "EMAIL", message: "Value is not valid" },
    ],
  },
  password: {
    rules: [{ id: "REQUIRED", message: "Password is Required" }],
  },
  firstName: {
    rules: [
      { id: "REQUIRED", message: "First Name is Required" },
      { id: "ALPHABETS", message: "Only Alphabets are Allowed" },
    ],
  },
  lastName: {
    rules: [
      { id: "REQUIRED", message: "Last Name is Required" },
      { id: "ALPHABETS", message: "Only Alphabets are Allowed" },
    ],
  },
  city: {
    rules: [
      { id: "REQUIRED", message: "City Name is Required" },
      { id: "ALPHABETS", message: "Only Alphabets are Allowed" },
    ],
  },
  state: {
    rules: [
      { id: "REQUIRED", message: "State Name is Required" },
      { id: "ALPHABETS", message: "Only Alphabets are Allowed" },
    ],
  },
  zip: {
    rules: [
      { id: "REQUIRED", message: "Zip Code is Required" },
      { id: "ZIP_CODE", message: "Only Numbers and '-' are Allowed" },
    ],
  },
};
