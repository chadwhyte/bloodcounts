import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
// import ReactVisChart from "../../../charts/chart-reactvis.component";
import ReChart from "../../../charts/chart-recharts.component";
// import SparklineChart from "../../../charts/chart-sparkline.component";
import { IDashboardChartProps } from "./dashboard-charts.interface";

export default class DashboardCharts extends React.Component<IDashboardChartProps, {}> {
  public render() {
    return (
      <Grid>
        <Row>
          <Col>
            <ReChart title="ANC" color="blue" data={this.props.ancData} />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <SparklineChart title="ANC" color="blue" data={this.props.ancData} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ReactVisChart title="ANC" color="blue" data={this.props.ancData} />
          </Col>
        </Row> */}
      </Grid>
    );
  }
}
