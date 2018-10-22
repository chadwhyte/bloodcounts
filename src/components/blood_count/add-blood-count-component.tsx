import * as React from "react";
import { Button, ButtonGroup, Grid } from "react-bootstrap";

export default class AddBloodCount extends React.Component {
  public render() {
    return (
      <div>
        <Grid>
          <h2>Blood count result</h2>
          <p>ToDo: Fields to include: date, counts, notes, star (allows the user to favourite this particular count)</p>
          <ButtonGroup>
            <Button bsStyle="success">OK</Button>
            <Button bsStyle="warning">Cancel</Button>
          </ButtonGroup>
        </Grid>
      </div>
    );
  }
}
