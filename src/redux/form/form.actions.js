import formActionsTypes from "./form.types";

const setFormData = (data) => ({
  type: formActionsTypes.SET_FORM_DATA,
  payload: data,
});

const clearFormData = () => ({
  type: formActionsTypes.CLEAR_FORM_DATA,
});

export { setFormData, clearFormData };
