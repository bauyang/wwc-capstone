import React, { Component } from "react";
import AppNav from "../components/AppNav";
import ResultsComponent from "../components/ResultsComponent";
import KaleyComponent from "../components/KaleyComponent";
class Kaley extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <KaleyComponent />
      </div>
    );
  }
}
export default Kaley;
