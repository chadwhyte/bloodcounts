import * as React from "react";
import { Button, Grid } from "react-bootstrap";
import AddBloodCount from "../blood_count/add-blood-count.component";

interface IState {
  addBloodCount: boolean;
}

export default class BloodCountDashboard extends React.Component<{}, IState> {
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
      <Grid>
        <h1>My blood counts</h1>
        <p>Display a summary of blood counts with a graph here...</p>
        <AddBloodCount show={this.state.addBloodCount} handleClose={this.handleClose} />
        <Button onClick={this.handleShow}>Add Blood Count</Button>
      </Grid>
    );
  }

  private handleClose() {
    this.setState({ addBloodCount: false });
  }

  private handleShow() {
    this.setState({ addBloodCount: true });
  }
}
