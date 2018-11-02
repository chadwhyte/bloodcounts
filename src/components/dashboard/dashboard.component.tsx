import * as React from "react";
import { Button, Col, Grid, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addBloodCount } from "../../state/actions/add-blood-count.action";
import AddBloodCount from "../blood_count/add-blood-count.component";
import DashBoardCharts from "./dashboard-charts.component";
import "./dashboard.css";

interface IDashboardState {
  addBloodCount: boolean;
}

interface IDashboardProps {
  summaries: string[];
}

export class BloodCountDashboard extends React.Component<IDashboardProps, IDashboardState> {
  public constructor(props: IDashboardProps) {
    super(props);
    this.state = {
      addBloodCount: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddAction = this.handleAddAction.bind(this);
  }

  public componentDidMount() {
    addBloodCount(1234);

    // tslint:disable-next-line:no-console
    console.log(`componentDidMount: ${this.props.summaries}`);
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
        <AddBloodCount show={this.state.addBloodCount} handleClose={this.handleClose} />
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
    this.setState({ addBloodCount: false });
  }

  private handleShow() {
    this.setState({ addBloodCount: true });
  }

  private handleAddAction() {
    addBloodCount(123);
  }
}

const mapStateToProps = (state: any) => {
  // tslint:disable-next-line:no-console
  console.log(`mapStateToProps: ${state}`);

  return {
    summaries: state.payload
  };
};

function mapDispatchToProps(dispatch: any) {
  // tslint:disable-next-line:no-console
  console.log(`mapDispatchToProps: ${"executed"}`);
  return bindActionCreators({ bloodCounts: addBloodCount }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BloodCountDashboard);
