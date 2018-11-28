import * as React from "react";
// import { HorizontalGridLines, LineSeries, XAxis, XYPlot, YAxis } from "react-vis";
// import { LineChart } from "recharts";
import { IChartProps } from "./chart.interface";

export default class ReChart extends React.Component<IChartProps, {}> {
  constructor(props: IChartProps) {
    super(props);
  }
  public render() {
    return (
      <div>
        //http://recharts.org/en-US/examples/SimpleLineChart
        {/* <XYPlot width={300} height={300}>
          <XAxis />
          <YAxis />
          <HorizontalGridLines />
          <LineSeries data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]} />
        </XYPlot> */}
        {/* <LineChart
        width={300}
        height={300}
        data={data}>
          
        </LineChart>  */}
      </div>
    );
  }
}
