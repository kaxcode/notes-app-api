import React, { Component } from "react";
import "./App.css";
import NavBar from "./containers/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <NavBar />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
