import React from "react";
import _ from "lodash";
import * as constants from "./constants";
import FormGenerator from "components/formGenerator/formGenerator";

class MyProfile extends React.PureComponent<
  {
    userDetails: any;
    onUpdateUser: () => void;
  },
  { isFormSubmitted: boolean; isFormValid: boolean; generatedPostObj: any }
> {
  state = {
    isFormSubmitted: false,
    isFormValid: false,
    generatedPostObj: {},
    formObj: _.cloneDeep(constants.myProfileConfig),
  };

  getFormWithValues = () => {
    const { userDetails } = this.props;
    const form = _.cloneDeep(constants.myProfileConfig);
    form.fields = _.map(form.fields, (field) => {
      field.value = field.value || userDetails[field.controlId];
      return { ...field };
    });
    return form;
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
    const form = this.getFormWithValues();
    const { isFormSubmitted } = this.state;
    return (
      <FormGenerator
        form={form}
        isFormSubmitted={isFormSubmitted}
        onUpdateForm={this.updateForm}
      />
    );
  }
}

export default MyProfile;
