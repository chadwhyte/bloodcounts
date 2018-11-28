import * as React from "react";
import { HorizontalGridLines, LineSeries, XAxis, XYPlot, YAxis } from "react-vis";
import { IChartProps } from "./chart.interface";

export default class ReactVisChart extends React.Component<IChartProps, {}> {
  constructor(props: IChartProps) {
    super(props);
  }
  public render() {
    return (
      <div>
        <XYPlot width={300} height={300}>
          <XAxis />
          <YAxis />
          <HorizontalGridLines />
          <LineSeries data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]} />
        </XYPlot>
      </div>
    );
  }
}
