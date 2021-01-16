import React from "react";
import "./App.css";
import Home from "modules/home";
import NavigationPanel from "components/navigationPanel/navigationPanel";
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
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
