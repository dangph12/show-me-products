import React from "react";
import { Nav } from "react-bootstrap";
import routes from "../../routes/index";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
// import { FaBell, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <Nav className="container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png"
        width="80"
        alt="eBay Logo"
      />

      {routes.map((route, idx) => (
        <Nav.Item key={idx + route.name}>
          <Nav.Link href={route.path}>{route.name}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default Header;
