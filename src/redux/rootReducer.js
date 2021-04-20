import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import formReducer from "./form/form.reducer";
import jobReducer from "./jobs/jobs.reducer";
import userReducer from "./user/user.reducer";

// Using redux-persist to store data in localStorage
// key -> root
// storge -> localStorage
// whitelist -> list of reducers to be stored

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["jobs", "form"],
};

const rootReducer = combineReducers({
  user: userReducer,
  jobs: jobReducer,
  form: formReducer,
});

export default persistReducer(persistConfig, rootReducer);
