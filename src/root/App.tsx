import React from "react";
import "./App.css";
import Home from "modules/home";
import NavigationPanel from "components/navigationPanel/navigationPanel";

function App() {
  return (
    <div className="App">
      <NavigationPanel />
      <Home />
    </div>
  );
}

export default App;
