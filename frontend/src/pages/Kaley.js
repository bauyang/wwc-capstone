import React, { Component } from "react";
import AppNav from "../components/AppNav";
import ResultsComponent from "../components/ResultsComponent";
import KaleyComponent from "../components/KaleyComponent";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Kaley extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <KaleyComponent />
        {/* <Button variant="outlined">Default</Button> */}


    
      </div>
    );
  }
}
export default Kaley;
