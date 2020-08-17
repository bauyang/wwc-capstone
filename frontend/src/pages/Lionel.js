import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import LionelComponent from "../components/LionelComponent";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
class Lionel extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <LionelComponent />
        <Button component={Link} to="/Quiz" color="primary">
      Retake
    </Button>
      </div>
    );
  }
}
export default Lionel;
