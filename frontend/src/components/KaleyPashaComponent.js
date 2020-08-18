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
                <Typography>
                  While Kaley may be the most helpful
                  <br />
                  in a tough situation, you might
                  <br />
                  catch her looking at cute animal pictures at work...
                  <br />
                </Typography>
                <Typography>
                  Pasha could eat <b>a lot</b> of ice cream
                  <br />
                  despite his karaoke song
                  <br />
                  involving cheeseburgers. Suspicious...
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
    export default withStyles(useStyles)(KaleyPashaComponent);