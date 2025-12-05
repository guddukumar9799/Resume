import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">RESUME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSdyLFxoEaE7kC6-HvW7EbCWP5duDXvV6GEkVP44Mq-fKR5xNA/viewform?usp=publish-editor">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
