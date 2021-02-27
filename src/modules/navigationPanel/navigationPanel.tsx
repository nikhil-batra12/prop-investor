import React, { useState } from "react";
import _ from "lodash";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import LoginSignupForm from "components/loginSignupForm/loginSignupForm";
import Sidebar from "components/sidebar/sidebar";
import { Link } from "react-router-dom";
import "./navigationPanel.css";

const NavigationPanel = (props) => {
  const { onLogin, onSignup, loginInfo, signupInfo, userInfo } = props;
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

  const isUserLogged = !_.isEmpty(userInfo);

  const handleLoginModalHide = () => setLogin(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Navbar.Brand href="#home">React</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/properties">Properties</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {isUserLogged && (
          <div>
            Welcome, {userInfo.firstName} {userInfo.lastName}
          </div>
        )}
        {!isUserLogged && (
          <>
            <Button
              variant="primary"
              className="mr-3"
              onClick={handleLoginClick}
            >
              Log In
            </Button>
            <Button
              variant="light"
              className="mr-3"
              onClick={handleSignupClick}
            >
              Sign Up
            </Button>
          </>
        )}
        <div className="sidebar-burger">
          <Sidebar />
        </div>
      </Navbar>
      {showLogin && (
        <LoginSignupForm
          handleClose={handleLoginModalHide}
          mode={mode}
          onLogin={onLogin}
          loginInfo={loginInfo}
          onSignup={onSignup}
          signupInfo={signupInfo}
        />
      )}
    </>
  );
};

export default NavigationPanel;
