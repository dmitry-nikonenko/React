import React, { Component } from "react";
import MoviePage from "./MoviePage/MoviePage";
import data from "./data.json";

class App extends Component {
  state = {};
  render() {
    return <MoviePage data={data} />;
  }
}
export default App;
