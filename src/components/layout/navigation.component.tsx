import * as React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
  public render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Blood Counts</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            <Link to="/about">about</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">contact</Link>
          </NavItem>
          <NavItem>
            <Link to="/account">login / create account</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
