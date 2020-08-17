import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import KaleyPashaComponent from "../components/KaleyPashaComponent";
class KaleyPasha extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <KaleyPashaComponent />
      </div>
    );
  }
}
export default KaleyPasha;
