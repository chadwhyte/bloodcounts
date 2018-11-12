import { ITerms } from "../../../locale/terms";
import { IBloodCount } from "./blood_count/blood-count.interface";
export interface IDashboardState {
  showAddBloodCount: boolean;
}

export interface IDashboardProps {
  summaries: IBloodCount[];
  terms: ITerms;
  addBloodCount(bloodCount: IBloodCount): void;
  getBloodCounts(): void;
}
