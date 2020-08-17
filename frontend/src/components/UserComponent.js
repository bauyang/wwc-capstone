import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Grid, TextField, Button } from "@material-ui/core";
import { AccountCircleRounded } from "@material-ui/icons";
import UserService from "../services/UserService";

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

  submitUser = () => {
    // event.preventDefault();
    const user = { name: this.state.name };
    axios.post("http://localhost:8080/user/", user);
    let name = this.state;
    UserService.createUserNames(name).then((response) => {
      this.props.history.push("names");
    });
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
    const { classes } = this.props;

    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircleRounded />
              </Grid>

              <Grid item onReset={this.resetUser}>
                <TextField
                  id="input-with-icon-grid"
                  name="name"
                  label="Username"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.userChange}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={this.handleSubmit}
                  component={Link}
                  to="/quiz"
                >
                  Take Quiz
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
}

export default UserComponent;
