import * as React from "react";
import { Grid } from "react-bootstrap";
import AddBloodCount from "../blood_count/add-blood-count-component";

export default class BloodCountDashboard extends React.Component {
  public render() {
    return (
      <Grid>
        <h1>My blood counts</h1>
        <p>Display a summary of blood counts with a graph here...</p>
        <AddBloodCount />
      </Grid>
    );
  }
}
