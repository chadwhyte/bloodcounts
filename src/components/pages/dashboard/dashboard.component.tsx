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
    this.handleAddAction = this.handleAddAction.bind(this);
  }

  public render() {
    // const ancData: number[] = _.reject(this.props.summaries.map(s => s.absoluteNeutrophilCount), _.isNil);

    const data = [
      { date: "2018-09-26", anc: 2700, wbc: 5.1, hgb: 133, plt: 264 },
      { date: "2018-10-05", anc: 900, wbc: 3.9, hgb: 109, plt: 508 },
      { date: "2018-10-13", anc: 900, wbc: 4.2, hgb: 123, plt: 613 },
      { date: "2018-10-19", anc: 700, wbc: 3.8, hgb: 129, plt: 477 },
      { date: "2018-10-26", anc: 900, wbc: 4.2, hgb: 122, plt: 618 },
      { date: "2018-10-28", anc: null, wbc: 1.6, hgb: null, plt: null },
      { date: "2018-11-03", anc: 1400, wbc: 5.1, hgb: 127, plt: 692 },
      { date: "2018-11-04", anc: 1000, wbc: null, hgb: null, plt: null },
      { date: "2018-11-10", anc: 1400, wbc: 5.1, hgb: 113, plt: 546 },
      { date: "2018-11-17", anc: 900, wbc: 5.0, hgb: 107, plt: 516 },
      { date: "2018-11-23", anc: 1000, wbc: 3.9, hgb: 105, plt: 472 }
    ];

    // const dataTest = this.props.summaries.map(summary => {
    //   ({ date: summary.date })
    // });

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
              <ReChart title="Blood Counts" data={data} />
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
