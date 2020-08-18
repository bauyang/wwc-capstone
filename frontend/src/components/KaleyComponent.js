import React, { Component } from "react";
//import { Link } from "react-router-dom";

import QuizService from "../services/QuizService";
import { Link } from "react-router-dom";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import QuizComponent from "./QuizComponent";

const useStyles = () => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});

class KaleyComponent extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* kaley */}
        <div className="kaley">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                height="300"
                image={require("../images/kaley.png")}
                title="kaley"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You're like Kaley!
                </Typography>
                <Typography>
                  While Kaley may be the most helpful
                  <br />
                  in a tough situation, you might
                  <br />
                  catch her looking at cute animal pictures at work...
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button component={Link} to="/quiz" color="primary">
                Retake
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(KaleyComponent);
