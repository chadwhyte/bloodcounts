import { IBloodCount } from "../../components/pages/dashboard/blood_count/blood-count.interface";
import { ADD_BLOOD_COUNT, GET_BLOOD_COUNTS } from "../actions/action-types";
import { generateInitialBloodCounts } from "../blood-counts";

const initialBloodCountState: IBloodCount[] = generateInitialBloodCounts();

export default function bloodCounts(state = initialBloodCountState, action: any) {
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
