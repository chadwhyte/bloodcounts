export interface ITerms {
  anc: string;
  date: string;
  dose: string;
  hemoglobin: string;
  notes: string;
  platelets: string;
  wbc: string;
}

export const terms: ITerms = {
  anc: "Absolute Neutrophil Count",
  date: "Date",
  dose: "Dose",
  hemoglobin: "Hemoglobin",
  notes: "Notes",
  platelets: "Platelets",
  wbc: "White blood count"
};
