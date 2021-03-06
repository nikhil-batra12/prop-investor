import React from "react";
import "./App.css";
import Home from "modules/home";
import Properties from "modules/properties";
import PropertyDetails from "modules/propertyDetails";
import NavigationPanel from "modules/navigationPanel";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
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
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
