import { IBloodCount } from "./blood_count/blood-count.interface";

export interface IDashboardState {
  showAddBloodCount: boolean;
}

export interface IDashboardProps {
  summaries: IBloodCount[];
  addBloodCount(bloodCount: IBloodCount): void;
  getBloodCounts(): void;
}
