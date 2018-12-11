export interface IChartProps {
  title: string;
  color?: string;
  data: any;
  series?: IChartSeries[];
}

export interface IChartSeries {
  name: string;
  dataKey: string;
  stroke: string;
  yAxisId: "right" | "left";
}
