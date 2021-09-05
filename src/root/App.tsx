import React from "react";
import "./App.css";
import Home from "modules/home";
import Properties from "modules/properties";
import PropertyDetails from "modules/propertyDetails";
import NavigationPanel from "modules/navigationPanel";
import MyProfile from "modules/myProfile";
import MyInvestments from "modules/myInvestments";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from 'models/loader/container';
import Toaster from 'models/toaster/container';

function App() {
  return (
    <Router>
      <div className="App pb-3">
        <NavigationPanel />
        <Container fluid>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/properties">
              <Properties />
            </Route>
            <Route exact path="/property-details/:propertyId">
              <PropertyDetails />
            </Route>
            <Route exact path="/my-profile">
              <MyProfile />
            </Route>
            <Route exact path="/my-investments">
              <MyInvestments />
            </Route>
          </Switch>
        </Container>
        <Loader/>
        <Toaster/>
      </div>
    </Router>
  );
}

export default App;
