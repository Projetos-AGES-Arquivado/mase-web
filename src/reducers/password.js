import Immutable from "immutable";
import * as ActionType from "actions/createPassword";

const init = {
  submitting: false,
  submitError: false,
  submitted: false
};
export const initialState = Immutable.fromJS(init);

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionType.SUBMIT_CREATE_PASSOWORD:
      return state.set("submitting", true);

    case ActionType.SUBMIT_CREATE_PASSOWORD_SUCCESS:
      return state.merge(
        Object.assign({}, init, action.payload, {
          submitted: true
        })
      );

    case ActionType.SUBMIT_CREATE_PASSOWORD_ERROR:
      return state.merge(
        Object.assign({}, init, action.payload, {
          submitError: true
        })
      );

    default:
      return state;
  }
}
