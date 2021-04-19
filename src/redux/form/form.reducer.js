import formActionsTypes from "./form.types";

const INITIAL_STATE = {};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case formActionsTypes.SET_FORM_DATA:
      return action.payload;
    case formActionsTypes.CLEAR_FORM_DATA:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default formReducer;
