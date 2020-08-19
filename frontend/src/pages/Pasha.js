import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import PashaComponent from "../components/PashaComponent";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
class Pasha extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />

        <PashaComponent />
      </div>
    );
  }
}
export default Pasha;
