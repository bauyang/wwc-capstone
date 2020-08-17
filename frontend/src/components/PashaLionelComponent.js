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
class PashaLionelComponent extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
        <div>
        <div className="PashaLionel">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                height="300"
                //image={require("../images/pasha.png")}
                image={require("../images/pashalionel.png")}
                title="PashaLionel"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You're like Pasha and Lionel!
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
    export default withStyles(useStyles)(PashaLionelComponent);