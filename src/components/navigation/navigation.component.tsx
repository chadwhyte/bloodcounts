import * as React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

export default class Navigation extends React.Component {
  public render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>Blood Counts</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>about</NavItem>
          <NavItem>contact</NavItem>
          <NavItem>login / create account</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
