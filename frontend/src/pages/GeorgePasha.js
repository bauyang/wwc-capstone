import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import GeorgePashaComponent from "../components/GeorgePashaComponent";
class GeorgePasha extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <GeorgePashaComponent />
      </div>
    );
  }
}
export default GeorgePasha;