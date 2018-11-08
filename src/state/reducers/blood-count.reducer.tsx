import { IBloodCount } from "../../components/blood_count/blood-count.interface";
import { ADD_BLOOD_COUNT, GET_BLOOD_COUNTS } from "../actions/action-types";

const initialState = [1, 2, 3, 4];
const initialBloodCountState: IBloodCount[] = generateInitialBloodCounts();

function generateInitialBloodCounts(): IBloodCount[] {
  const bloodCounts: IBloodCount[] = [];

  for (let i = 0; i < 10; i++) {
    bloodCounts.push(generateBloodCount());
  }

  return bloodCounts;
}

function generateBloodCount(): IBloodCount {
  return {
    absoluteNeutrophilCount: randomNumber(),
    date: new Date("12/12/12"),
    hemoglobin: randomNumber(),
    platelets: randomNumber(),
    whiteBloodCount: randomNumber()
  };
}

function randomNumber(): number {
  return Math.floor(Math.random() * 100) + 1;
}

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
