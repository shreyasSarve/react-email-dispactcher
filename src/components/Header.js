import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        className="shadow-lg p-3 mb-5 bg-white rounded"
      >
        <Container>
          <Navbar.Brand href="/" className="transition">
            <img
              src="logo.png"
              alt="logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            EmailHunt
          </Navbar.Brand>
          <Navbar.Text className="transition">
            <i>Mass-Mail Dispatcher</i>
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
}
