import React, { useState, useEffect } from "react";
import _ from "lodash";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import LoginSignupForm from "components/loginSignupForm/loginSignupForm";
import Sidebar from "components/sidebar/sidebar";
import { Link } from "react-router-dom";
import "./navigationPanel.css";

const NavigationPanel = (props) => {
  const {
    onLogin,
    onSignup,
    onLogout,
    loginInfo,
    signupInfo,
    userDetails,
    onFetchUser,
  } = props;

  useEffect(() => onFetchUser(), []);

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

  const handleLogoutClick = () => {
    setLogin(false);
    setMode("Login");
    onLogout();
  };

  const isUserLogged = !_.isEmpty(userDetails);

  const handleLoginModalHide = () => setLogin(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Navbar.Brand>
          <Link to="/">BlockMyPlot</Link>
        </Navbar.Brand>
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
          <>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="border-0 bg-transparent light-gray-color"
              >
                Welcome, {userDetails.firstName} {userDetails.lastName}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/my-profile">My Profile</Link>
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogoutClick}>
                  Sign Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
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
      {showLogin && !isUserLogged && (
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
