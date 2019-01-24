import * as moment from "moment";
import * as React from "react";
import { Checkbox } from "react-bootstrap";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { IChartProps } from "./chart.interface";

interface IChartState {
  lineStatus: IChartLineStatus[];
}

interface IChartLineStatus {
  dataKey: string;
  visible: boolean;
}

export default class ReChart extends React.Component<IChartProps, IChartState> {
  constructor(props: IChartProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        {this.renderLegend()}
        {this.renderChart()}
      </div>
    );
  }

  private renderLegend() {
    const series = this.props.series;

    return (
      <div>
        {series.map(line => {
          return (
            <Checkbox key={line.dataKey} color={line.stroke} name={line.dataKey} onClick={this.onLegendItemClicked}>
              {line.name}
            </Checkbox>
          );
        })}
      </div>
    );
  }

  // tslint:disable-next-line:no-empty
  private onLegendItemClicked(event: any) {
    // tslint:disable-next-line:no-console
    console.log(event.target.name);
  }

  private renderChart() {
    return (
      <ResponsiveContainer height={500} width="100%">
        <LineChart data={this.props.data} margin={{ top: 30, right: 30, left: 0, bottom: 30 }}>
          <XAxis dataKey="date" tickMargin={10} type="category" tickFormatter={this.formatDateValue} />
          <YAxis yAxisId="left" tickMargin={5} />
          <YAxis yAxisId="right" orientation="right" tickMargin={5} />
          <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} />
          <Tooltip />
          <Legend align="right" wrapperStyle={{ paddingTop: "15px" }} />
          {this.props.series.map(line => {
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
