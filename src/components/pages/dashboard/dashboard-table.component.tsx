import * as React from "react";
import { Table } from "react-bootstrap";
import Moment from "react-moment";
import { IDashboardTableProps } from "./dashboard.interface";

export default class DashboardTable extends React.Component<IDashboardTableProps, {}> {
  public render() {
    if (!this.props.summaries) {
      return <p>Loading...</p>;
    }

    return (
      <Table striped={true} hover={true} responsive={true} bordered={true} condensed={true}>
        <thead>
          <tr>
            <th>Date</th>
            <th>White blood count</th>
            <th>Hemoglobin</th>
            <th>Platelets</th>
            <th>ANC (Absolute Neutrophil Count)</th>
            <th>Dose</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {this.props.summaries.map(summary => {
            return (
              <tr key={summary.id}>
                <td>
                  <Moment format="MMM D, YYYY">{summary.date}</Moment>
                </td>
                <td>{summary.whiteBloodCount}</td>
                <td>{summary.hemoglobin}</td>
                <td>{summary.platelets}</td>
                <td>{summary.absoluteNeutrophilCount}</td>
                <td>{summary.dose}</td>
                <td>{summary.notes}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
