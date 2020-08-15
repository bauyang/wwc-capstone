import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import ZachComponent from "../components/ZachComponent";
class Zach extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <ZachComponent />
      </div>
    );
  }
}
export default Zach;
