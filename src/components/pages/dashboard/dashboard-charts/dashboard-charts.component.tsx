import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
// import ReactVisChart from "../charts/chart-reactvis.component";
import SparklineChart from "../../../charts/chart-sparkline.component";
import { IDashboardChartProps } from "./dashboard-charts.interface";

export default class DashBoardCharts extends React.Component<IDashboardChartProps, {}> {
  public render() {
    return (
      <Grid>
        {/* <Row>
              <Col>
              <ReactVisChart />
              </Col>
          </Row> */}
        {/* <Row>
          <Col md={6}>
            <SparklineChart title="White blood count" color="purple" />
          </Col>
          <Col md={6}>
            <SparklineChart title="Hemoglobin" color="orange" />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <SparklineChart title="Platelets" color="red" />
          </Col>
          <Col md={6}>
            <SparklineChart title="ANC" color="blue" />
          </Col>
        </Row> */}
        <Row>
          <Col>
            <SparklineChart title="ANC" color="blue" data={this.props.ancData} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
