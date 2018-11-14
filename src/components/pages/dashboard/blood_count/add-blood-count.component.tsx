import * as React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import FormField from "../../../common/form-field.component";
import { IAddBloodCountProps, IAddBloodCountState } from "./add-blood-count.interface";

export default class AddBloodCount extends React.Component<IAddBloodCountProps, IAddBloodCountState> {
  public constructor(props: IAddBloodCountProps) {
    super(props);
    this.onWbcChange = this.onWbcChange.bind(this);
  }

  public render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <ModalHeader closeButton={true}>
          <h3>Add blood count</h3>
        </ModalHeader>
        <ModalBody>
          <FormField type="date" label="Date" />
          <FormField type="text" label="White blood count" handleChange={this.onWbcChange} />
          <FormField type="text" label="Hemoglobin" validationState="warning" />
          <FormField type="text" label="Platelets" validationState="error" />
          <FormField type="text" label="ANC" validationState="success" />
          <FormField type="text" label="Dose" />
          <FormField type="text" label="Notes" />
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

  private onWbcChange() {
    // tslint:disable-next-line:no-console
    console.log(`WBC changed`);
  }
}
