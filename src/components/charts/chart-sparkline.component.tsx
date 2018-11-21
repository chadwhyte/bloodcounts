import * as React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from "react-sparklines";
import { ISparklineChartProps } from "./chart-sparkline.interface";

export default class SparklineChart extends React.Component<ISparklineChartProps, {}> {
  constructor(props: ISparklineChartProps) {
    super(props);
  }
  public render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <Sparklines data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="mean" />
          <SparklinesSpots />
        </Sparklines>
      </div>
    );
  }
}
