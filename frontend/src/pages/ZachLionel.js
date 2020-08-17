import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import ZachLionelComponent from "../components/ZachLionelComponent";
class ZachLionel extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <ZachLionelComponent />
      </div>
    );
  }
}
export default ZachLionel;