import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from "../../firebase/firebase.utils";
import UserActionTypes from "./user.types";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = () => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const setUserSession = (user) => ({
  type: UserActionTypes.SET_USER_SESSION,
  payload: user,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const getSnapshotFromUserAuth = async (
  dispatch,
  userAuth,
  additionalData
) => {
  try {
    const userRef = await createUserProfileDocument(userAuth, additionalData);
    const userSnapshot = await userRef.get();
    dispatch(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    dispatch(signInFailure(error));
  }
};

export const googleSignInAsync = () => {
  return async (dispatch) => {
    dispatch(googleSignInStart());
    try {
      const { user } = await auth.signInWithPopup(googleProvider);
      await getSnapshotFromUserAuth(dispatch, user);
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
};

export const emailSignInAsync = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(emailSignInStart());
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      await getSnapshotFromUserAuth(dispatch, user);
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
};

export const signUpAsync = ({ email, password, displayName }) => {
  console.log({ email, password, displayName });
  return async (dispatch) => {
    dispatch(signUpStart());
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await getSnapshotFromUserAuth(dispatch, user);
      dispatch(signUpSuccess(user, { displayName }));
    } catch (error) {
      dispatch(signUpFailure(error.message));
    }
  };
};

export const signOutAsync = () => {
  return async (dispatch) => {
    dispatch(signOutStart);
    try {
      await auth.signOut();
      dispatch(signOutSuccess());
    } catch (error) {
      dispatch(signUpFailure(error));
    }
  };
};
