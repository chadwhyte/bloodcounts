import { ADD_BLOOD_COUNT, GET_BLOOD_COUNTS } from "../actions/action-types";

// const initialState = {
//   bloodCounts: [1, 2, 3, 4]
// };

// const initialState = {
//   bloodCounts: []
// };

export default function bloodCounts(state = [], action: any) {
  switch (action.type) {
    case ADD_BLOOD_COUNT:
      /**
       * TODO: add to the list...
       */

      //   return state.bloodCounts.concat(action.payload);

      //    bloodCounts: state.bloodCounts.
      return [1, 2, 3, 4, ...action.payload];
    case GET_BLOOD_COUNTS:
      /**
       * Get from somewhere...
       */
      return [1, 2, 3, 4];
    //   return state.bloodCounts;
    default:
      return state;
  }
}
