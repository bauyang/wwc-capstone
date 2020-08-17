import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import PashaLionelComponent from "../components/PashaLionelComponent";
class PashaLionel extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <PashaLionelComponent />
      </div>
    );
  }
}
export default PashaLionel;
