import { combineReducers } from "redux";
import jobReducer from "./jobs/jobs.reducer";

const rootReducer = combineReducers({
  jobs: jobReducer,
});

export default rootReducer;
