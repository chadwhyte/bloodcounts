import { IBloodCount } from "../../components/blood_count/blood-count.interface";
import { ADD_BLOOD_COUNT, GET_BLOOD_COUNTS } from "../actions/action-types";

const initialBloodCountState: IBloodCount[] = generateInitialBloodCounts();

function generateInitialBloodCounts(): IBloodCount[] {
  const counts: IBloodCount[] = [];

  for (let i = 0; i < 10; i++) {
    counts.push(generateBloodCount(i.toString()));
  }

  return counts;
}

function generateBloodCount(id: string): IBloodCount {
  return {
    absoluteNeutrophilCount: randomNumber(),
    date: new Date("12/12/12"),
    hemoglobin: randomNumber(),
    id,
    platelets: randomNumber(),
    whiteBloodCount: randomNumber()
  };
}

function randomNumber(): number {
  return Math.floor(Math.random() * 100) + 1;
}

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
