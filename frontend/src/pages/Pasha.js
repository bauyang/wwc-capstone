import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import PashaComponent from "../components/PashaComponent";
class Pasha extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <PashaComponent/>
      </div>
    );
  }
}
export default Pasha;
