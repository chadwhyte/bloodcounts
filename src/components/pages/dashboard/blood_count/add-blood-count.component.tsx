import * as React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { ValidationStateType } from "../../../common/field-validation-state.type";
import FormField from "../../../common/form-field.component";
import { IAddBloodCountProps, IAddBloodCountState } from "./add-blood-count.interface";

const MIN_NUMBER_INPUT = 0;
const MAX_NUMBER_INPUT = 5000;

export default class AddBloodCount extends React.Component<IAddBloodCountProps, IAddBloodCountState> {
  public constructor(props: IAddBloodCountProps) {
    super(props);
    this.state = {
      bloodCount: {
        date: new Date().getTime(),
        id: "abc123"
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onWbcChange = this.onWbcChange.bind(this);
    this.onHemoglobinChange = this.onHemoglobinChange.bind(this);
    this.onPlateletsChange = this.onPlateletsChange.bind(this);
    this.onAncChange = this.onAncChange.bind(this);
    this.onDoseChange = this.onDoseChange.bind(this);
    this.onNotesChange = this.onNotesChange.bind(this);
  }

  public render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <ModalHeader closeButton={true}>
          <h3>Add blood count</h3>
        </ModalHeader>
        <ModalBody>
          <FormField type="date" label="Date" value={this.state.bloodCount.date} handleChange={this.onDateChange} />
          <FormField
            type="text"
            label="White blood count"
            value={this.state.bloodCount.whiteBloodCount}
            validationState={this.resolveValidationState(this.validateNumber(this.state.bloodCount.whiteBloodCount))}
            handleChange={this.onWbcChange}
          />
          <FormField
            type="text"
            label="Hemoglobin"
            value={this.state.bloodCount.hemoglobin}
            validationState={this.resolveValidationState(this.validateNumber(this.state.bloodCount.hemoglobin))}
            handleChange={this.onHemoglobinChange}
          />
          <FormField
            type="text"
            label="Platelets"
            value={this.state.bloodCount.platelets}
            validationState={this.resolveValidationState(this.validateNumber(this.state.bloodCount.platelets))}
            handleChange={this.onPlateletsChange}
          />
          <FormField
            type="text"
            label="ANC"
            value={this.state.bloodCount.absoluteNeutrophilCount}
            validationState={this.resolveValidationState(
              this.validateNumber(this.state.bloodCount.absoluteNeutrophilCount)
            )}
            handleChange={this.onAncChange}
          />
          <FormField
            type="text"
            label="Dose"
            value={this.state.bloodCount.dose}
            validationState={this.resolveValidationState(this.validateNumber(this.state.bloodCount.dose))}
            handleChange={this.onDoseChange}
          />
          <FormField
            type="text"
            label="Notes"
            value={this.state.bloodCount.notes}
            validationState={this.resolveValidationState(true)}
            handleChange={this.onNotesChange}
          />
        </ModalBody>
        <Modal.Footer>
          <Button bsStyle="success" onClick={this.handleSubmit}>
            OK
          </Button>
          <Button bsStyle="warning" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  private handleSubmit() {
    this.props.addBloodCount(this.state.bloodCount);
    this.props.handleClose();
  }

  private resolveValidationState(isValid: boolean): ValidationStateType {
    return isValid === true ? null : "error";
  }

  private validateNumber(value?: number): boolean {
    return !value || (value >= MIN_NUMBER_INPUT && value <= MAX_NUMBER_INPUT);
  }

  private onDateChange(e: any) {
    this.setState({ bloodCount: { ...this.state.bloodCount, date: e.target.value } });
  }

  private onWbcChange(e: any) {
    this.setState({ bloodCount: { ...this.state.bloodCount, whiteBloodCount: e.target.value } });
  }

  private onHemoglobinChange(e: any) {
    this.setState({ bloodCount: { ...this.state.bloodCount, hemoglobin: e.target.value } });
  }

  private onPlateletsChange(e: any) {
    this.setState({ bloodCount: { ...this.state.bloodCount, platelets: e.target.value } });
  }

  private onAncChange(e: any) {
    this.setState({ bloodCount: { ...this.state.bloodCount, absoluteNeutrophilCount: e.target.value } });
  }

  private onDoseChange(e: any) {
    this.setState({ bloodCount: { ...this.state.bloodCount, dose: e.target.value } });
  }

  private onNotesChange(e: any) {
    this.setState({ bloodCount: { ...this.state.bloodCount, notes: e.target.value } });
  }
}
