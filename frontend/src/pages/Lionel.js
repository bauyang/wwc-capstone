import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import LionelComponent from "../components/LionelComponent";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
class Lionel extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />

        <LionelComponent />
      </div>
    );
  }
}
export default Lionel;
