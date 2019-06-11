import React, { Component } from "react";
import Reader from "./Reader";
import data from "./data.json";

class App extends Component {
  state = {};
  render() {
    return <Reader data={data} />;
  }
}
export default App;
