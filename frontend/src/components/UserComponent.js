import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import { Grid, TextField, Button } from "@material-ui/core";
import { AccountCircleRounded } from "@material-ui/icons";
import UserService from "../services/UserService";

import AppNav from "../components/AppNav";
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
class UserComponent extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };

    this.userChange = this.userChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // this.submitUser = this.submitUser.bind(this);
  }

  userChange = (event) => {
    event.preventDefault();
    this.setState({ name: event.target.value });
    console.log("name:" + this.state.name);
  };

  handleSubmit(event) {
    event.preventDefault();
    alert(this.state.name);
    this.submitUser();
  }
  // componentDidMount() {
  //   if (this.props.name) {
  //     this.setState({
  //       name: this.props.name,
  //     });
  //   }
  // }
  saveUser = (event) => {
    this.setState({ name: event.target.value });
  };

  submitUser = () => {
    // event.preventDefault();
    const user = { userName: this.state.name };
    axios.post("http://localhost:8080/user/names", user);
    //  let name = this.state;
    // UserService.createUserNames(name).then((response) => {
    //   this.props.history.push("names");
    // });
  };

  // using this yt video https://www.youtube.com/watch?v=ieMhlyjPjWo

  // userList = () => {
  //   return this.props.history.push("names");
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let name = this.state.name;
  //   UserService.createUserNames(name).then((response) => {
  //     this.props.history.push("addUser");
  //   });
  //   this.setState({ name: "" });
  //   console.log(this.state.name);
  // };

  render() {
    return (
      <div>
        {/* <Grid item>
          <TextField
            id="input-with-icon-grid"
            label="Username"
            onChange={this.saveUser}
          />
          <Button onClick={this.submitUser}></Button>
        </Grid> */}
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <h1>Welcome to WWC's personality quiz!</h1>
          <p>Find out which WIN mentor you most likely resemble</p>
          <Grid container direction="row" justify="center" alignItems="center">
            <Card style={{ margin: 10 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="100"
                  image={require("../images/pasha.png")}
                  title="Pasha"
                ></CardMedia>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <center>
                      <b>Pasha</b>
                    </center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={{ margin: 10 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="100"
                  image={require("../images/zach.png")}
                  title="Zach"
                ></CardMedia>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <center>
                      <b>Zach</b>
                    </center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card style={{ margin: 10 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="100"
                  image={require("../images/lionel.png")}
                  title="Lionel"
                ></CardMedia>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <center>
                      <b>Lionel</b>
                    </center>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Card style={{ margin: 10 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    width="100"
                    image={require("../images/george.png")}
                    title="George"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      <center>
                        <b>George</b>
                      </center>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card style={{ margin: 10 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    width="100"
                    image={require("../images/kaley.png")}
                    title="Kaley"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      <center>
                        <b>Kaley</b>
                      </center>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <br />
          <div>
            {/* <Grid item> */}
            <TextField
              id="input-with-icon-grid"
              label="Username"
              onChange={this.saveUser}
            />
            {/* <Button onClick={this.submitUser}></Button> */}
            {/* </Grid> */}

            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/quiz"
              onClick={this.submitUser}
            >
              Take Quiz
            </Button>
          </div>
          <br />
        </Grid>
      </div>
    );
  }
}

export default UserComponent;
