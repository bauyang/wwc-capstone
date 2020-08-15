import React, { Component } from "react";
import AppNav from "../components/AppNav";
import ResultsComponent from "../components/ResultsComponent";
import GeorgeComponent from "../components/GeorgeComponent";
class George extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <GeorgeComponent />
      </div>
    );
  }
}
export default George;
