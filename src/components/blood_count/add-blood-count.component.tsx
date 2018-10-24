import * as React from "react";
import { Button, ControlLabel, FormControl, FormGroup, Modal, ModalBody, ModalHeader } from "react-bootstrap";

interface IProps {
  show: boolean;
  handleClose(): void;
}

export default class AddBloodCount extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <ModalHeader>
          <h3>Add blood count</h3>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <ControlLabel>Date</ControlLabel>
            <FormControl
              type="date"
              // value={this.state.value}
              placeholder="Enter text"
              // onChange={this.handleChange}
            />
            <ControlLabel>Notes</ControlLabel>
            <FormControl
              type="string"
              // value={this.state.value}
              placeholder="Enter text"
              // onChange={this.handleChange}
            />
          </FormGroup>
        </ModalBody>
        <Modal.Footer>
          <Button bsStyle="success" onClick={this.props.handleClose}>
            OK
          </Button>
          <Button bsStyle="warning" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
