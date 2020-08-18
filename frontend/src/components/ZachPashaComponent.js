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
                <Typography>
                  Zach would be more likely to enjoy
                  <br />
                  a long walk at Hogwarts
                  <br />
                  than at the beach. But doesn't like costumes...
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
export default withStyles(useStyles)(ZachPashaComponent);
