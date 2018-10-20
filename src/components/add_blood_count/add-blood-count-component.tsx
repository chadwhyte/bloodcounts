import * as React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export default class AddBloodCount extends React.Component {
  public render() {
    return (
      <div>
        <h2>Add new blood count result:</h2>
        <p>Todo - get bootstrap css working</p>
        <ButtonGroup>
          <Button bsClass="success">OK</Button>
          <Button bsClass="warning">Cancel</Button>
        </ButtonGroup>
      </div>
    );
  }
}
