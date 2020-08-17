import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import GeorgeKaleyComponent from "../components/GeorgeKaleyComponent";
class GeorgeKaley extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <GeorgeKaleyComponent />
      </div>
    );
  }
}
export default GeorgeKaley;