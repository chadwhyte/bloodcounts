import * as React from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { IChartProps } from "./chart.interface";

export default class ReChart extends React.Component<IChartProps, {}> {
  constructor(props: IChartProps) {
    super(props);
  }
  public render() {
    const data = [
      { date: "2018-09-26", anc: 2700, wbc: 5.1, hgb: 133, plt: 264 },
      { date: "2018-10-05", anc: 900, wbc: 3.9, hgb: 109, plt: 508 },
      { date: "2018-10-13", anc: 900, wbc: 4.2, hgb: 123, plt: 613 },
      { date: "2018-10-19", anc: 700, wbc: 3.8, hgb: 129, plt: 477 },
      { date: "2018-10-26", anc: 900, wbc: 4.2, hgb: 122, plt: 618 },
      { date: "2018-10-28", anc: null, wbc: 1.6, hgb: null, plt: null },
      { date: "2018-11-03", anc: 1400, wbc: 5.1, hgb: 127, plt: 692 },
      { date: "2018-11-04", anc: null, wbc: null, hgb: null, plt: null },
      { date: "2018-11-10", anc: 1400, wbc: 5.1, hgb: 113, plt: 546 },
      { date: "2018-11-17", anc: 900, wbc: 5.0, hgb: 107, plt: 516 },
      { date: "2018-11-23", anc: 1000, wbc: 3.9, hgb: 105, plt: 472 }
    ];

    // Date	        WBC	Hemoglobin	Platelets	ANC	Dose	Notes
    // counts.push(generateBloodCount("1", "2018-09-26", 5.1, 133, 264, 2700, 4.8, undefined));
    // counts.push(generateBloodCount("2", "2018-10-05", 3.9, 109, 508, 900, 4.8, undefined));
    // counts.push(generateBloodCount("3", "2018-10-13", 4.2, 123, 613, 900, 4.8, "Electrolytes good"));
    // counts.push(generateBloodCount("4", "2018-10-19", 3.8, 129, 477, 700, 4.8, undefined));
    // counts.push(generateBloodCount("5", "2018-10-26", 4.2, 122, 618, 900, 4.0, undefined));
    // counts.push(generateBloodCount("6", "2018-10-28", 1.6, undefined, undefined, undefined, undefined, "Hospital"));
    // counts.push(generateBloodCount("7", "2018-11-03", 5.1, 127, 692, 1400, 4.0, undefined));
    // counts.push(generateBloodCount("8", "2018-11-04", undefined, undefined, undefined, 1000, undefined, "Hospital"));
    // counts.push(generateBloodCount("9", "2018-11-10", 5.1, 113, 546, 1400, 4.0, "Electrolytes good"));
    // counts.push(generateBloodCount("10", "2018-11-17", 5.0, 107, 516, 900, 4.0, undefined));
    // counts.push(generateBloodCount("11", "2018-11-23", 3.9, 105, 472, 1000, 4.0, undefined));

    // const blah = { string: "aaa" };

    const activeDot = { r: 6 };

    return (
      <ResponsiveContainer height={500} width="100%">
        <LineChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 30 }}>
          <XAxis dataKey="date" tickMargin={10} />
          <YAxis yAxisId="left" tickMargin={5} />
          <YAxis yAxisId="right" orientation="right" tickMargin={5} />
          <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} />
          <Tooltip />
          <Legend align="right" wrapperStyle={{ paddingTop: "15px" }} />
          <Line
            type="monotone"
            dataKey="wbc"
            name="White Blood Count"
            dot={false}
            stroke="#8884d8"
            strokeWidth={2}
            activeDot={activeDot}
            connectNulls={true}
            yAxisId="right"
          />
          <Line
            type="monotone"
            dataKey="anc"
            name="ANC"
            dot={false}
            stroke="#82ca9d"
            strokeWidth={2}
            activeDot={activeDot}
            connectNulls={true}
            yAxisId="left"
          />
          <Line
            type="monotone"
            dataKey="hgb"
            name="Hemoglobin"
            dot={false}
            stroke="orange"
            strokeWidth={2}
            activeDot={activeDot}
            connectNulls={true}
            yAxisId="left"
          />
          <Line
            type="monotone"
            dataKey="plt"
            name="Platelets"
            dot={false}
            stroke="blue"
            strokeWidth={2}
            activeDot={activeDot}
            connectNulls={true}
            yAxisId="left"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
