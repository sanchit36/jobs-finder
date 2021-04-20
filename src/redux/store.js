import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

// Adding middleWares to store
const middleWares = [thunk];

// only add these middleWares in development environment
if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

// Creating the store
const store = createStore(rootReducer, applyMiddleware(...middleWares));

// making the store persist Data
export const persistor = persistStore(store);

export default store;
