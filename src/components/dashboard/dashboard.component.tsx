import * as React from "react";
import { Button } from "react-bootstrap";
import AddBloodCount from "../blood_count/add-blood-count.component";
import "./dashboard.css";
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
      <div>
        <h1>My blood counts</h1>
        <p>Display a summary of blood counts with a graph here...</p>
        <AddBloodCount show={this.state.addBloodCount} handleClose={this.handleClose} />
        <Button bsStyle="primary" onClick={this.handleShow}>
          <span className="glyphicon glyphicon-plus addBloodCountButton" />
          Add Blood Count
        </Button>
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
