import { combineReducers } from "redux";
import formReducer from "./form/form.reducer";
import jobReducer from "./jobs/jobs.reducer";

const rootReducer = combineReducers({
  jobs: jobReducer,
  form: formReducer,
});

export default rootReducer;
