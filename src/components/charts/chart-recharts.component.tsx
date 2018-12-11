import * as moment from "moment";
import * as React from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { IChartProps, IChartSeries } from "./chart.interface";

export default class ReChart extends React.Component<IChartProps, {}> {
  constructor(props: IChartProps) {
    super(props);
  }

  public render() {
    const chartLines: IChartSeries[] = [
      { name: "White Blood Count", dataKey: "whiteBloodCount", stroke: "red", yAxisId: "right" },
      { name: "ANC", dataKey: "absoluteNeutrophilCount", stroke: "#82ca9d", yAxisId: "left" },
      { name: "Hemoglobin", dataKey: "hemoglobin", stroke: "orange", yAxisId: "left" },
      { name: "Platelets", dataKey: "platelets", stroke: "blue", yAxisId: "left" }
    ];

    return (
      <ResponsiveContainer height={500} width="100%">
        <LineChart data={this.props.data} margin={{ top: 30, right: 30, left: 0, bottom: 30 }}>
          <XAxis dataKey="date" tickMargin={10} type="category" tickFormatter={this.formatDateValue} />
          <YAxis yAxisId="left" tickMargin={5} />
          <YAxis yAxisId="right" orientation="right" tickMargin={5} />
          <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} />
          <Tooltip />
          <Legend align="right" wrapperStyle={{ paddingTop: "15px" }} />

          {chartLines.map(line => {
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

  private formatDateValue(dateValue: any) {
    return moment(dateValue).format("MMM D");
  }

  // ToDo
  // private formatTooltip(value: number, name: string) {
  //   if (name === "date") {
  //     return this.formatDateValue(value);
  //   }

  //   return value;
  // }
}
