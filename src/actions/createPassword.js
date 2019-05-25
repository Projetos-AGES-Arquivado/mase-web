import passwordServices from "libs/services/passwordServices";

export const SUBMIT_CREATE_PASSOWORD = Symbol("SUBMIT_CREATE_PASSOWORD");
export const SUBMIT_CREATE_PASSOWORD_SUCCESS = Symbol(
  "SUBMIT_CREATE_PASSOWORD_SUCCESS"
);
export const SUBMIT_CREATE_PASSOWORD_ERROR = Symbol(
  "SUBMIT_CREATE_PASSOWORD_ERROR"
);

export function createPassword(jwt, password, onSuccess) {
  return dispatch => {
    dispatch({
      type: SUBMIT_CREATE_PASSOWORD
    });
    return passwordServices
      .submitCreatePassword({ jwt, password })
      .then(res => {
        if (res.status < 400) {
          dispatch(onSubmitCreatePasswordSuccess(res.data));
          onSuccess();
        } else dispatch(onSubmitCreatePasswordError());
      })
      .catch(error => {
        dispatch(onSubmitCreatePasswordError());
      });
  };
}

function onSubmitCreatePasswordSuccess(payload) {
  return {
    type: SUBMIT_CREATE_PASSOWORD_SUCCESS,
    payload: payload
  };
}

function onSubmitCreatePasswordError() {
  return {
    type: SUBMIT_CREATE_PASSOWORD_ERROR
  };
}
