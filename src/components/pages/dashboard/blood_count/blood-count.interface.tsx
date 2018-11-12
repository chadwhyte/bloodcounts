export interface IBloodCount {
  id: string;
  date: Date;
  whiteBloodCount?: number;
  hemoglobin?: number;
  platelets?: number;
  absoluteNeutrophilCount?: number;
  dose?: number;
  notes?: string;
}
