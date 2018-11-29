import { IBloodCount } from "../components/pages/dashboard/blood_count/blood-count.interface";

export function generateInitialBloodCounts(): IBloodCount[] {
  const counts: IBloodCount[] = [];

  // Date	        WBC	Hemoglobin	Platelets	ANC	Dose	Notes
  counts.push(generateBloodCount("1", "2018-09-26", 5.1, 133, 264, 2700, 4.8, undefined));
  counts.push(generateBloodCount("2", "2018-10-05", 3.9, 109, 508, 900, 4.8, undefined));
  counts.push(generateBloodCount("3", "2018-10-13", 4.2, 123, 613, 900, 4.8, "Electrolytes good"));
  counts.push(generateBloodCount("4", "2018-10-19", 3.8, 129, 477, 700, 4.8, undefined));
  counts.push(generateBloodCount("5", "2018-10-26", 4.2, 122, 618, 900, 4.0, undefined));
  counts.push(generateBloodCount("6", "2018-10-28", 1.6, undefined, undefined, undefined, undefined, "Hospital"));
  counts.push(generateBloodCount("7", "2018-11-03", 5.1, 127, 692, 1400, 4.0, undefined));
  counts.push(generateBloodCount("8", "2018-11-04", undefined, undefined, undefined, 1000, undefined, "Hospital"));
  counts.push(generateBloodCount("9", "2018-11-10", 5.1, 113, 546, 1400, 4.0, "Electrolytes good"));
  counts.push(generateBloodCount("10", "2018-11-17", 5.0, 107, 516, 900, 4.0, undefined));
  counts.push(generateBloodCount("11", "2018-11-23", 3.9, 105, 472, 1000, 4.0, undefined));

  return counts;
}

function generateBloodCount(
  id: string,
  date: string,
  whiteBloodCount?: number,
  hemoglobin?: number,
  platelets?: number,
  absoluteNeutrophilCount?: number,
  dose?: number,
  notes?: string
): IBloodCount {
  return {
    absoluteNeutrophilCount,
    date: new Date(date),
    dose,
    hemoglobin,
    id,
    notes,
    platelets,
    whiteBloodCount
  };
}
