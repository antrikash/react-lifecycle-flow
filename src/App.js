import React from "react";
import "./styles.css";

import TestAllLifeCycleMethods from "./Components/TestAllLifeCycleMethods";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 22
    };
  }

  onIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div>
        <TestAllLifeCycleMethods count={this.state.count} />
        <button onClick={this.onIncrement}>Counter ++</button>
        <span> Props Count: {this.state.count}</span>
      </div>
    );
  }
}
