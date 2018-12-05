import * as React from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { IChartLine } from "./chart-line.interface";
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
      { date: "2018-11-04", anc: 1000, wbc: null, hgb: null, plt: null },
      { date: "2018-11-10", anc: 1400, wbc: 5.1, hgb: 113, plt: 546 },
      { date: "2018-11-17", anc: 900, wbc: 5.0, hgb: 107, plt: 516 },
      { date: "2018-11-23", anc: 1000, wbc: 3.9, hgb: 105, plt: 472 }
    ];

    const charLines: IChartLine[] = [
      { name: "White Blood Count", dataKey: "wbc", stroke: "red", yAxisId: "right" },
      { name: "ANC", dataKey: "anc", stroke: "#82ca9d", yAxisId: "left" },
      { name: "Hemoglobin", dataKey: "hgb", stroke: "orange", yAxisId: "left" },
      { name: "Platelets", dataKey: "plt", stroke: "blue", yAxisId: "left" }
    ];

    return (
      <ResponsiveContainer height={500} width="100%">
        <LineChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 30 }}>
          <XAxis dataKey="date" tickMargin={10} />
          <YAxis yAxisId="left" tickMargin={5} />
          <YAxis yAxisId="right" orientation="right" tickMargin={5} />
          <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} />
          <Tooltip />
          <Legend align="right" wrapperStyle={{ paddingTop: "15px" }} />

          {charLines.map(line => {
            return (
              <Line
                key={line.dataKey}
                type="monotone"
                dataKey={line.dataKey}
                name={line.name}
                dot={false}
                stroke={line.stroke}
                strokeWidth={2}
                activeDot={{ r: 6 }}
                connectNulls={true}
                yAxisId={line.yAxisId}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
