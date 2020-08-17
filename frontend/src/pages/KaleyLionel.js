import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import KaleyLionelComponent from "../components/KaleyLionelComponent";
class KaleyLionel extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <KaleyLionelComponent />
      </div>
    );
  }
}
export default KaleyLionel;