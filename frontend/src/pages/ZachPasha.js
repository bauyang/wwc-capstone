import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import ZachPashaComponent from "../components/ZachPashaComponent";
class ZachPasha extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <ZachPashaComponent />
      </div>
    );
  }
}
export default ZachPasha;
