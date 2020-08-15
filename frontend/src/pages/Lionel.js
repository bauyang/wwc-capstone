import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import LionelComponent from "../components/LionelComponent";
class Lionel extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <LionelComponent />
      </div>
    );
  }
}
export default Lionel;
