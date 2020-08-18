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
class ZachGeorgeComponent extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
        <div>
        <div className="ZachGeorge">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                height="300"
               // image={require("../images/zach.png")}
                image={require("../images/zachgeorge.png")}
                title="ZachGeorge"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You're like Zach and George!
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
                  Zach would be more likely to enjoy
                  <br />
                  a long walk at Hogwarts
                  <br />
                  than at the beach. But doesn't like costumes...
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
    export default withStyles(useStyles)(ZachGeorgeComponent);