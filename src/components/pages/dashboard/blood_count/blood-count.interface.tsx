export interface IBloodCount {
  id: string;
  date: number;
  whiteBloodCount?: number;
  hemoglobin?: number;
  platelets?: number;
  absoluteNeutrophilCount?: number;
  dose?: number;
  notes?: string;
}
