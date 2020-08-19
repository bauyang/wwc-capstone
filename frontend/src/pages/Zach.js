import React, { Component } from "react";
import AppNav from "../components/AppNav";
//import ResultsComponent from "../components/ResultsComponent";
import ZachComponent from "../components/ZachComponent";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
class Zach extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
       
        <ZachComponent />
       
      </div>
    );
  }
}
export default Zach;
