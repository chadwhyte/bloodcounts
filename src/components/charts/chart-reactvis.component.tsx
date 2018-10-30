import * as React from "react";
import { HorizontalGridLines, LineSeries, XAxis, XYPlot, YAxis } from "react-vis";

export default class ReactVisChart extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <XYPlot width={300} height={300}>
          <HorizontalGridLines />
          <LineSeries data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]} />
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    );
  }
}
