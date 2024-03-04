import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  // mounting#1
  constructor(props) {
    super(props);
    console.log("Constructor()");
    this.state = {};
  }
  // mounting#2 update
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps()");
    return null;
  }

  // mounting#3

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  //mounting#4
  componentDidMount() {
    console.log("componentDidMount");
  }
}

export default App;
