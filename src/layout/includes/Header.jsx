import React from "react";
import { Container, Nav } from "react-bootstrap";
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
import { Link } from "react-router-dom";
// import { FaBell, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <img
            style={{ width: "100px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png"
          ></img>

          {routes.map((r, idx) => (
            <Nav className="me-auto">
              <Nav.Link  key={idx + r.name} as={Link} to={r.path}>{r.name}</Nav.Link>
            </Nav>
          ))}
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
