import { combineReducers } from "redux";
import ColorsReducer from "./modules/customization/colorPicker/store/ColorsReducer";
import LanguageReducer from "./modules/customization/language/store/LanguageReducer";
import LogoReducer from "./modules/customization/logo/store/LogoReducer";
import LogoPreviewReducer from "./modules/customization/logo/store/LogoPreviewReducer";

export default combineReducers({
  customization: ColorsReducer,
  language: LanguageReducer,
  logo: LogoReducer,
  logoPreview: LogoPreviewReducer,
});
