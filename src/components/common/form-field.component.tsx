import * as React from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";
import { ValidationStateType } from "./field-validation-state.type";

import "./form-field.css";

interface IFormFieldProps {
  type: string;
  label: string;
  value: any;
  placeholder?: string;
  componentClass?: string;
  validationState?: ValidationStateType;
  handleChange?(event: React.FormEvent<FormControl>): void;
}

export default class FormField extends React.Component<IFormFieldProps> {
  public render() {
    return (
      <FormGroup validationState={this.props.validationState}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          type={this.props.type}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.handleChange}
          componentClass={this.props.componentClass}
          className="formControl"
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}
