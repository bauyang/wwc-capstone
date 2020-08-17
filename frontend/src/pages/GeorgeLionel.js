import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import GeorgeLionelComponent from "../components/GeorgeLionelComponent";
class GeorgeLionel extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <GeorgeLionelComponent />
      </div>
    );
  }
}
export default GeorgeLionel;
