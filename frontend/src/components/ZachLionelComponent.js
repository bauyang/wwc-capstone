import React, { Component } from "react";
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
const useStyles = () => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});
class ZachLionelComponent extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="ZachLionel">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                height="300"
              //  image={require("../images/zach.png")}
                image={require("../images/zachlionel.png")}
                title="ZachLionel"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You're like Zach and Lionel!
                </Typography>
                <Typography>
                  Zach would be more likely to enjoy
                  <br />
                  a long walk at Hogwarts
                  <br />
                  than at the beach. But doesn't like costumes...
                </Typography>
                <Typography>
                  Lionel is a watch-from-a-distance
                  <br />
                  type of guy, even though
                  <br />
                  his ideal place to live is very overcrowded...
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
export default withStyles(useStyles)(ZachLionelComponent);
