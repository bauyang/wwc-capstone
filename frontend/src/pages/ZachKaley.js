import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import ZachKaleyComponent from "../components/ZachKaleyComponent";
class ZachKaley extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <ZachKaleyComponent />
      </div>
    );
  }
}
export default ZachKaley;