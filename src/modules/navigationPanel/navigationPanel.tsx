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
import {
  PersonCircle,
  Power,
  Tools,
  Wallet,
  HouseFill,
  Building,
  CurrencyBitcoin,
} from "react-bootstrap-icons";

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
          <Link to="/">
            <CurrencyBitcoin size={35} />
            lockMyPlot
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">
                <HouseFill className="mr-1" size={20} />
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/properties">
                <Building className="mr-1" />
                Properties
              </Link>
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
                <PersonCircle size={25} className="mr-3" />
                Welcome, {userDetails.firstName} {userDetails.lastName}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/my-profile">
                    <Tools className="mr-2" />
                    My Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/my-investments">
                    <Wallet className="mr-2" />
                    My Investments
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogoutClick}>
                  <Power className="mr-2" />
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
      <Navbar bg="dark" variant="dark" expand="md" fixed="bottom" >
      <div className="light-gray-color">&#169; 2021</div>
      </Navbar>
    </>
  );
};

export default NavigationPanel;
