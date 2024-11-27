import React from "react";
import { Nav } from "react-bootstrap";
import routes from "../../routes/index";
import Container from "react-bootstrap/Container";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
  NavDropdown,
} from "react-bootstrap";

function Header() {
  return (
    // <Nav className="container">
    //   <img
    //     src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png"
    //     width="80"
    //     alt="eBay Logo"
    //   />

    //   {routes.map((route, idx) => (
    //     <Nav.Item key={idx + route.name}>
    //       <Nav.Link href={route.path}>{route.name}</Nav.Link>
    //     </Nav.Item>
    //   ))}
    // </Nav>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            style={{ width: "150px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {routes.map((route, index) => (
              <Nav.Link  style={{marginLeft: "50px"}} href={route.path}>
                <strong>{route.name}</strong>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
