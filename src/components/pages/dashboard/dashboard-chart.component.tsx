import * as React from "react";
import ReChart from "../../charts/chart-recharts.component";
import { IChartSeries } from "../../charts/chart.interface";
import { IDashboardChartProps } from "./dashboard.interface";

export default class DashboardChart extends React.Component<IDashboardChartProps, {}> {
  public render() {
    return <ReChart title="Blood Counts" data={this.props.summaries} series={this.getChartSeries()} />;
  }

  private getChartSeries(): IChartSeries[] {
    return [
      { name: "White Blood Count", dataKey: "whiteBloodCount", stroke: "red", yAxisId: "right" },
      { name: "ANC", dataKey: "absoluteNeutrophilCount", stroke: "#82ca9d", yAxisId: "left" },
      { name: "Hemoglobin", dataKey: "hemoglobin", stroke: "orange", yAxisId: "left" },
      { name: "Platelets", dataKey: "platelets", stroke: "blue", yAxisId: "left" }
    ];
  }
}
