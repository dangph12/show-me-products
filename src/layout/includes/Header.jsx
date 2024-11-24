import React from "react";
import { Nav } from "react-bootstrap";
import routes from "../../routes/index";

function Header() {
  return (
    <Nav>
      {routes.map((route, idx) => (
        <Nav.Item key={idx + route.name}>
          <Nav.Link href={route.path}>{route.name}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default Header;
