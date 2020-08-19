import React, { Component } from "react";
import AppNav from "../components/AppNav";
import ResultsComponent from "../components/ResultsComponent";
import GeorgeComponent from "../components/GeorgeComponent";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
class George extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
       
        <GeorgeComponent />
        
      </div>
    );
  }
}
export default George;
