import React, { Component } from "react";
import QuizService from "../services/QuizService";
import QuizComponent from "./components/QuizComponent";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const useStyles = () => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});

class ResultTieComponent extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* Zach and Lionel*/}
        <div className="resultTie">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                height="300"
                image={require("../images/kaley.png")}
                title="resultTie"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You're like 50% Zach and 50% Lionel!
                </Typography>
                <Typography>blurb</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(ResultTieComponent);
