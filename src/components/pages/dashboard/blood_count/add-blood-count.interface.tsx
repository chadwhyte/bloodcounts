import { IBloodCount } from "./blood-count.interface";

export interface IAddBloodCountProps {
  show: boolean;
  handleClose(): void;
}

export interface IAddBloodCountState {
  bloodCount: IBloodCount;
}
