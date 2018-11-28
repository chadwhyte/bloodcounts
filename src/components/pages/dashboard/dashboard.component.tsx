import * as _ from "lodash";
import * as React from "react";
import { Button, Col, Grid, Row, Table } from "react-bootstrap";
import Moment from "react-moment";
import AddBloodCount from "./blood_count/add-blood-count.container";
import { IBloodCount } from "./blood_count/blood-count.interface";
import DashBoardCharts from "./dashboard-charts/dashboard-charts.component";
import { IDashboardProps, IDashboardState } from "./dashboard.interface";

export default class BloodCountDashboard extends React.Component<IDashboardProps, IDashboardState> {
  public constructor(props: IDashboardProps) {
    super(props);
    this.state = {
      showAddBloodCount: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddAction = this.handleAddAction.bind(this);
  }

  public render() {
    const ancData: number[] = _.reject(this.props.summaries.map(s => s.absoluteNeutrophilCount), _.isNil);

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={8}>
              <h2>Blood counts</h2>
            </Col>
            <Col xs={6} md={4}>
              <div>
                <Button bsStyle="primary" onClick={this.handleShow}>
                  <span className="glyphicon glyphicon-plus addBloodCountButton" />
                  Add Blood Count
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <DashBoardCharts ancData={ancData} />
            </Col>
          </Row>
        </Grid>
        {this.renderSummaries()}
        <AddBloodCount show={this.state.showAddBloodCount} handleClose={this.handleClose} />
      </div>
    );
  }

  private renderSummaries() {
    if (!this.props.summaries) {
      return <p>Loading...</p>;
    }

    // const { terms } = this.props;

    return (
      <Table striped={true} hover={true} responsive={true} bordered={true} condensed={true}>
        <thead>
          <tr>
            {/* ToDo: extract these out to a terms/constants class */}
            <th>Date</th>
            <th>White blood count</th>
            <th>Hemoglobin</th>
            <th>Platelets</th>
            <th>ANC (Absolute Neutrophil Count)</th>
            <th>Dose</th>
            <th>Notes</th>
            {/* <th>{terms.date}</th>
            <th>{terms.wbc}</th>
            <th>{terms.hemoglobin}</th>
            <th>{terms.platelets}</th>
            <th>{terms.anc}</th>
            <th>{terms.dose}</th>
            <th>{terms.notes}</th> */}
          </tr>
        </thead>
        <tbody>
          {this.props.summaries.map(summary => {
            return (
              <tr key={summary.id}>
                <td>
                  <Moment format="MMM D YYYY">{summary.date.toString()}</Moment>
                </td>
                <td>{summary.whiteBloodCount}</td>
                <td>{summary.hemoglobin}</td>
                <td>{summary.platelets}</td>
                <td>{summary.absoluteNeutrophilCount}</td>
                <td>{summary.dose}</td>
                <td>{summary.notes}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }

  private handleClose() {
    this.setState({ showAddBloodCount: false });
  }

  private handleShow() {
    this.setState({ showAddBloodCount: true });
  }

  private handleAddAction() {
    const value: IBloodCount = {
      absoluteNeutrophilCount: randomNumber(),
      date: new Date("12/12/2018"),
      hemoglobin: randomNumber(),
      id: randomNumber().toString(),
      platelets: randomNumber(),
      whiteBloodCount: randomNumber()
    };

    this.props.addBloodCount(value);
  }
}

function randomNumber(): number {
  return Math.floor(Math.random() * 100) + 1;
}
