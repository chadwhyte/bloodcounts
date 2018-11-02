import { ADD_BLOOD_COUNT } from "../actions/action-types";

export default function bloodCounts(state = [], action: any) {
  // tslint:disable-next-line:no-console
  console.log(`bloodCounts-reducer: ${state}, ${action.type}`);

  switch (action.type) {
    case ADD_BLOOD_COUNT:
      //   return [
      //     { summary: "summary 1" },
      //     { summary: "summary 2" },
      //     { summary: "summary 3" },
      //     { summary: "summary 4" },
      //     { summary: "summary 5" }
      //   ];
      return [1, 2, 3, 4];
    default:
      return state;
  }
}
