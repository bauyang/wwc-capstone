import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import ZachGeorgeComponent from "../components/ZachGeorgeComponent";
class ZachGeorge extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <ZachGeorgeComponent />
      </div>
    );
  }
}
export default ZachGeorge;
