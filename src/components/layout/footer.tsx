import * as React from "react";

export default class Footer extends React.Component {
  public render() {
    const currentYear = new Date().getFullYear();

    return (
      <div>
        <p className="text-center">Copyright &copy; {currentYear}</p>
      </div>
    );
  }
}
