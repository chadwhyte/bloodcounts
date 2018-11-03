import { ADD_BLOOD_COUNT, GET_BLOOD_COUNTS } from "./action-types";

export function addBloodCount(wbc: number) {
  return {
    payload: wbc,
    type: ADD_BLOOD_COUNT
  };
}

export function getBloodCounts() {
  return {
    type: GET_BLOOD_COUNTS
  };
}
