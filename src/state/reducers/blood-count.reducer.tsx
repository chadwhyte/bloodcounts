import { ADD_BLOOD_COUNT, GET_BLOOD_COUNTS } from "../actions/action-types";

const initialState = [1, 2, 3, 4];

export default function bloodCounts(state = initialState, action: any) {
  switch (action.type) {
    case ADD_BLOOD_COUNT:
      return state.concat(action.payload);
    case GET_BLOOD_COUNTS:
      /**
       * ToDo: Get from somewhere...
       */
      return state;
    default:
      return state;
  }
}
