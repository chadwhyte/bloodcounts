import * as React from "react";
import { Button, Col, Grid, Row } from "react-bootstrap";
import AddBloodCount from "../blood_count/add-blood-count.component";
import DashBoardCharts from "./dashboard-charts.component";
import "./dashboard.css";

interface IDashboardState {
  addBloodCount: boolean;
}

export default class BloodCountDashboard extends React.Component<{}, IDashboardState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      addBloodCount: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  public render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <h2>Blood counts</h2>
            </Col>
            <Col>
              <Button bsStyle="primary" onClick={this.handleShow}>
                <span className="glyphicon glyphicon-plus addBloodCountButton" />
                Add Blood Count
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <DashBoardCharts />
            </Col>
          </Row>
        </Grid>
        <AddBloodCount show={this.state.addBloodCount} handleClose={this.handleClose} />
      </div>
    );
  }

  private handleClose() {
    this.setState({ addBloodCount: false });
  }

  private handleShow() {
    this.setState({ addBloodCount: true });
  }
}
