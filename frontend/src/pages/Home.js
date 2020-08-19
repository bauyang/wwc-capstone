import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppNav from "../components/AppNav";
import UserComponent from "../components/UserComponent";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  TextField,
} from "@material-ui/core";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />

        <UserComponent />
      </div>
    );
  }
}
export default Home;
