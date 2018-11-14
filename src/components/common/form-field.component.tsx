import * as React from "react";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";
import { ValidationStateType } from "./field-validation-state.type";

import "./form-field.css";

interface IFormFieldProps {
  type: string;
  label: string;
  placeholder?: string;
  componentClass?: string;
  validationState?: ValidationStateType;
  handleChange?(): void;
}

interface IFormFieldState {
  value: any;
}

export default class FormField extends React.Component<IFormFieldProps, IFormFieldState> {
  constructor(props: IFormFieldProps) {
    super(props);
    this.state = {
      value: null
    };
  }

  public render() {
    return (
      <FormGroup validationState={this.props.validationState}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          type={this.props.type}
          value={this.state.value}
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
