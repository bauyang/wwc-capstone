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
class KaleyPashaComponent extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
        <div>
        <div className="KaleyPasha">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                height="500"
              //  image={require("../images/kaley.png")}
                image={require("../images/kaleypasha.png")}
                title="KaleyPasha"
              ></CardMedia>

              <CardContent>
                <Typography variant="h5" component="h2">
                  You're like Kaley and Pasha!
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
    export default withStyles(useStyles)(KaleyPashaComponent);