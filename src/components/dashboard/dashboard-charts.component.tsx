import * as React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import Chart from "../charts/chart.component";

export default class DashBoardCharts extends React.Component {
  public render() {
    return (
      <Grid>
        <Row>
          <Col md={6}>
            <Chart title="White blood count" color="purple" />
          </Col>
          <Col md={6}>
            <Chart title="Hemoglobin" color="orange" />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Chart title="Platelets" color="red" />
          </Col>
          <Col md={6}>
            <Chart title="ANC" color="blue" />
          </Col>
        </Row>
      </Grid>
    );
  }
}
