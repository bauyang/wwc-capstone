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
class GeorgeLionelComponent extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="GeorgeLionel">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                height="300"
                image={require("../images/georgelionel.png")}
                // image={require("../images/george.png")}
                title="GeorgeLionel"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You're like Lional and George!
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
export default withStyles(useStyles)(GeorgeLionelComponent);
