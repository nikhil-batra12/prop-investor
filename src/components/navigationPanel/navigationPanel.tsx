import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import LoginSignupForm from "components/loginSignupForm/loginSignupForm";

const NavigationPanel = () => {
  const [showLogin, setLogin] = useState(false);
  const [mode, setMode] = useState(null);

  const handleLoginClick = () => {
    setLogin(true);
    setMode("LOGIN");
  };
  const handleSignupClick = () => {
    setLogin(true);
    setMode("SIGNUP");
  };

  const handleLoginModalHide = () => setLogin(false);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>

          <Button variant="primary" className="mr-3" onClick={handleLoginClick}>
            Log In
          </Button>
          <Button variant="outline-secondary" onClick={handleSignupClick}>
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Navbar>
      {showLogin && (
        <LoginSignupForm handleClose={handleLoginModalHide} mode={mode} />
      )}
    </>
  );
};

export default NavigationPanel;
