import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import { ChartImage } from "./images/";

const ChartsCard = ({ classes, ...restProps }) => {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.image}
          image={ChartImage}
          title="Charts Card"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Charts
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A chart is a graphical representation of data, in which "the data is
            represented by symbols.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="inherit">
          Visit
        </Button>
      </CardActions>
    </Card>
  );
};

export default ChartsCard;
