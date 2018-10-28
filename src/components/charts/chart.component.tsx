import * as React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from "react-sparklines";

interface IChartProps {
  title: string;
  color: string;
}

export default class Chart extends React.Component<IChartProps, {}> {
  constructor(props: IChartProps) {
    super(props);
  }
  public render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <Sparklines data={[5, 10, 5, 20, 5, 10, 5, 20, 5, 10, 5, 20]}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="mean" />
          <SparklinesSpots />
        </Sparklines>
      </div>
    );
  }
}
