import * as React from "react";
import { Button, Col, Grid, Row, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addBloodCount, getBloodCounts } from "../../state/actions/blood-count.actions";
import AddBloodCount from "../blood_count/add-blood-count.component";
import { IBloodCount } from "../blood_count/blood-count.interface";
import DashBoardCharts from "./dashboard-charts.component";

import "./dashboard.css";

interface IDashboardState {
  showAddBloodCount: boolean;
}

interface IDashboardProps {
  summaries: IBloodCount[];
  addBloodCount(bloodCount: IBloodCount): void;
  getBloodCounts(): void;
}

export class BloodCountDashboard extends React.Component<IDashboardProps, IDashboardState> {
  public constructor(props: IDashboardProps) {
    super(props);
    this.state = {
      showAddBloodCount: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddAction = this.handleAddAction.bind(this);
  }

  public componentDidMount() {
    this.props.getBloodCounts();
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
              <Button bsStyle="danger" onClick={this.handleAddAction}>
                Action Test
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <DashBoardCharts />
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
                <td>{summary.date.toDateString()}</td>
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

const mapStateToProps = (state: any) => {
  return {
    summaries: state.bloodCounts
  };
};

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ addBloodCount, getBloodCounts }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BloodCountDashboard);
