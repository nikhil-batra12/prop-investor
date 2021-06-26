export const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export const NON_EMPTY_REGEX = /^(?!\s*$).+/;

export const ONLY_ALHABETS = /^[A-Za-z]+$/;

export const ZIP_CODE = /^(\d+-?)+\d+$/;

export const ONLY_NUMBERS = /^[0-9]*$/;

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
  name: {
    rules: [
      { id: "REQUIRED", message: "Name is Required" },
      { id: "ALPHABETS", message: "Only Alphabets are Allowed" },
    ],
  },
  address: {
    rules: [{ id: "REQUIRED", message: "Address is Required" }],
  },
  landmark: {
    rules: [{ id: "REQUIRED", message: "Landmark is Required" }],
  },
  mapLink: {
    rules: [{ id: "REQUIRED", message: "Maplink is Required" }],
  },
  about: {
    rules: [{ id: "REQUIRED", message: "Description is Required" }],
  },
  rooms: {
    rules: [
      { id: "REQUIRED", message: "Rooms is Required" },
      { id: "NUMBERS", message: "Only Numeric Values are Allowed" },
    ],
  },
  area: {
    rules: [
      { id: "REQUIRED", message: "Area is Required" },
      { id: "NUMBERS", message: "Only Numeric Values are Allowed" },
    ],
  },
  value: {
    rules: [
      { id: "REQUIRED", message: "Value is Required" },
      { id: "NUMBERS", message: "Only Numeric Values are Allowed" },
    ],
  },
  images: {
    rules: [{ id: "REQUIRED", message: "Images are Required" }],
  },
  tokAddress: {
    // rules: [{ id: "REQUIRED", message: "Token Address is Required" }],
    rules: [],
  },
};
