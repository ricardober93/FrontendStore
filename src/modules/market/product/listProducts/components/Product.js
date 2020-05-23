import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    textAlign: "center",
  },
  image: {
    padding: 15,
  },
});

export default function Product({ key, product }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          className={classes.image}
          component="img"
          alt="Imagen"
          height="140"
          image="https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg"
          title="Imagen"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {product.category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
