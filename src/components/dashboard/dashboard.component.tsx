import * as React from "react";
import { Button, Col, Grid, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addBloodCount, getBloodCounts } from "../../state/actions/blood-count.actions";
import AddBloodCount from "../blood_count/add-blood-count.component";
import DashBoardCharts from "./dashboard-charts.component";
import "./dashboard.css";

interface IDashboardState {
  showAddBloodCount: boolean;
}

interface IDashboardProps {
  summaries: string[];
  addBloodCount(wbc: number): void;
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
        {this.renderSummaries()}
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
        <AddBloodCount show={this.state.showAddBloodCount} handleClose={this.handleClose} />
      </div>
    );
  }

  private renderSummaries() {
    if (!this.props.summaries) {
      return <p>Loading...</p>;
    }

    return this.props.summaries.map(summary => {
      return <div key={summary}>{summary}</div>;
    });
  }

  private handleClose() {
    this.setState({ showAddBloodCount: false });
  }

  private handleShow() {
    this.setState({ showAddBloodCount: true });
  }

  private handleAddAction() {
    this.props.addBloodCount(123);
  }
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
