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
class GeorgeKaleyComponent extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="GeorgeKaley">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                height="300"
                image={require("../images/georgekaley.png")}
               // image={require("../images/kaley.png")}
                title="GeorgeKaley"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You're like Kaley and George!
                </Typography>
                <Typography>
                  While thoughtfulness is what George
                  <br />
                  looks for in others,
                  <br />
                  he doesn't think a lot about his costume choices...
                  <br />
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
          </Card>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(GeorgeKaleyComponent);
