import { ADD_BLOOD_COUNT } from "./action-types";

export function addBloodCount(wbc: number) {
  // tslint:disable-next-line:no-console
  console.log(`addBloodCount-action: ${wbc}`);

  return {
    payload: wbc,
    type: ADD_BLOOD_COUNT
  };
}
