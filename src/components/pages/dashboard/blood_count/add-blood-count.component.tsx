import * as React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { ValidationStateType } from "../../../common/field-validation-state.type";
import FormField from "../../../common/form-field.component";
import { IAddBloodCountProps, IAddBloodCountState } from "./add-blood-count.interface";

export default class AddBloodCount extends React.Component<IAddBloodCountProps, IAddBloodCountState> {
  public constructor(props: IAddBloodCountProps) {
    super(props);
    this.state = {
      bloodCount: {
        date: new Date(),
        id: "abc123"
      }
    };
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
          <FormField
            type="text"
            label="White blood count"
            validationState={this.resolveValidationState(
              this.validateNumber(0, 10000, this.state.bloodCount.whiteBloodCount)
            )}
            handleChange={this.onWbcChange}
          />
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

  private resolveValidationState(isValid: boolean): ValidationStateType {
    return isValid === true ? null : "error";
  }

  private validateNumber(minLength: number, maxLength: number, value?: number): boolean {
    return !value || (value >= minLength && value <= maxLength);
  }

  private onWbcChange(e: any) {
    this.setState({ bloodCount: { ...this.state.bloodCount, whiteBloodCount: e.target.value } });
  }
}
