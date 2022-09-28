import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  let word = "arpit";
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Project
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to={`/feedback/${word}`}>
              Feedback
            </Nav.Link>
            <Nav.Link as={Link} to="/about-page">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/user">
              User
            </Nav.Link>
            <Nav.Link as={Link} to="/topic">
              Topic
            </Nav.Link>
            <Nav.Link as={Link} to="/registration">
              Registration
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              blog
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
