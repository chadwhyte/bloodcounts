import { IBloodCount } from "../../components/blood_count/blood-count.interface";
import { ADD_BLOOD_COUNT, GET_BLOOD_COUNTS } from "./action-types";

export function addBloodCount(bloodCount: IBloodCount) {
  return {
    payload: bloodCount,
    type: ADD_BLOOD_COUNT
  };
}

export function getBloodCounts() {
  return {
    type: GET_BLOOD_COUNTS
  };
}
