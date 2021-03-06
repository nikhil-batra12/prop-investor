import { combineReducers } from "redux";
import homeReducer from "modules/home/reducer";
import propertiesReducer from "modules/properties/reducer";
import propertyDetailsReducer from "modules/propertyDetails/reducer";
import authReducer from "models/authorization/reducer";

export default combineReducers({
  ...homeReducer,
  ...propertiesReducer,
  ...propertyDetailsReducer,
  ...authReducer,
});
