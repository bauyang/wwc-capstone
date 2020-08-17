import React, { Component } from "react";
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
class ZachPashaComponent extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="ZachPasha">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                height="300"
                image={require("../images/zachpasha.png")}
              //  image={require("../images/kaley.png")}
                title="ZachPasha"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You're like Zach and Pasha!
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
export default withStyles(useStyles)(ZachPashaComponent);
