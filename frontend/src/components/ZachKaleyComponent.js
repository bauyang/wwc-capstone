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
class ZachKaleyComponent extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
        <div>
        <div className="ZachKaley">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                height="300"
               // image={require("../images/zach.png")}
                image={require("../images/zachkaley.png")}
                title="ZachKaley"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You're like Zach and Kaley!
                </Typography>
                <Typography>
                  Zach would be more likely to enjoy
                  <br />
                  a long walk at Hogwarts
                  <br />
                  than at the beach. But doesn't like costumes...
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
    export default withStyles(useStyles)(ZachKaleyComponent);