import * as _ from "lodash";
import * as React from "react";
import { Button, Col, Grid, Row, Table } from "react-bootstrap";
import Moment from "react-moment";
import ReChart from "../../charts/chart-recharts.component";
import AddBloodCount from "./blood_count/add-blood-count.container";
import { IBloodCount } from "./blood_count/blood-count.interface";
import { IDashboardProps, IDashboardState } from "./dashboard.interface";

export default class BloodCountDashboard extends React.Component<IDashboardProps, IDashboardState> {
  public constructor(props: IDashboardProps) {
    super(props);
    this.state = {
      showAddBloodCount: false
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
              <ReChart title="Blood Counts" data={this.getBloodCounts()} />
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
          </tr>
        </thead>
        <tbody>
          {this.getBloodCounts().map(summary => {
            return (
              <tr key={summary.id}>
                <td>
                  <Moment format="MMM D, YYYY">{summary.date}</Moment>
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

  private getBloodCounts(): IBloodCount[] {
    return _.orderBy(this.props.summaries, "date");
  }

  private handleClose() {
    this.setState({ showAddBloodCount: false });
  }

  private handleShow() {
    this.setState({ showAddBloodCount: true });
  }
}
