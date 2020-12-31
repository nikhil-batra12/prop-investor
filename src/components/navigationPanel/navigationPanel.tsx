import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import LoginSignupForm from "components/loginSignupForm/loginSignupForm";
import Sidebar from "components/sidebar/sidebar";

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
    // <div id="outer-container">
    <>
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Navbar.Brand href="#home">React</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary" className="mr-3" onClick={handleLoginClick}>
          Log In
        </Button>
        <Button variant="light" className="mr-3" onClick={handleSignupClick}>
          Sign Up
        </Button>
        <div className="sidebar-burger">
          <Sidebar />
        </div>
      </Navbar>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      {showLogin && (
        <LoginSignupForm handleClose={handleLoginModalHide} mode={mode} />
      )}
    </>
  );
};

export default NavigationPanel;
