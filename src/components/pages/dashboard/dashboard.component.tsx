import * as _ from "lodash";
import * as React from "react";
import { Button } from "react-bootstrap";
import AddBloodCount from "./blood_count/add-blood-count.container";
import { IBloodCount } from "./blood_count/blood-count.interface";
import DashboardChart from "./dashboard-chart.component";
import DashboardTable from "./dashboard-table.component";
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
        <Button bsStyle="primary" onClick={this.handleShow}>
          <span className="glyphicon glyphicon-plus addBloodCountButton" />
          Add Blood Count
        </Button>
        <DashboardChart summaries={this.getBloodCounts("asc")} />
        <DashboardTable summaries={this.getBloodCounts("desc")} />
        <AddBloodCount show={this.state.showAddBloodCount} handleClose={this.handleClose} />
      </div>
    );
  }

  private getBloodCounts(order: "desc" | "asc"): IBloodCount[] {
    return _.orderBy(this.props.summaries, "date", order);
  }

  private handleClose() {
    this.setState({ showAddBloodCount: false });
  }

  private handleShow() {
    this.setState({ showAddBloodCount: true });
  }
}
