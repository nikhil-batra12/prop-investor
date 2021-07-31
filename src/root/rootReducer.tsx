import { combineReducers } from "redux";
import homeReducer from "modules/home/reducer";
import propertiesReducer from "modules/properties/reducer";
import propertyDetailsReducer from "modules/propertyDetails/reducer";
import myInvestmentsReducer from "modules/myInvestments/reducer";
import authReducer from "models/authorization/reducer";
import loaderReducer from "models/loader/reducer";

export default combineReducers({
  ...homeReducer,
  ...propertiesReducer,
  ...propertyDetailsReducer,
  ...myInvestmentsReducer,
  ...authReducer,
  ...loaderReducer
});
