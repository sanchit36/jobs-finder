import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.CHECK_USER_SESSION:
      const user = JSON.parse(localStorage.getItem("authUser"));
      return {
        ...state,
        currentUser: user,
        error: null,
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      localStorage.setItem("authUser", JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      localStorage.removeItem("authUser");
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
