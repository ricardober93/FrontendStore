import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    Width: 320,
    height: 340,
  },
  img: {
    height: 250,
    width: '100%',
  },
  title: {
    width: '100%',
    fontSize: '1.6em',
    textTransform: 'uppercase',
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: '0px',
    marginBottom: '0px'
  },
  price: {
    fontSize: '1.3em',
    textAlign: 'left',
    fontWeight: 'regular',
  },
});


export default function Product({ key, product }) {
  const classes = useStyles();

  // const descriptionFn = (string) => {
  //   return string.substr(0,120)
  // }

  // const star = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>

  return (
    <Link style={{ textDecoration: 'none' }} to={`/product/${product._id}`}>
      <Card className={classes.root} style={{ margin: 30 }}>
        <CardActionArea>
          <CardMedia className={classes.img}
            component="img"
            alt="Imagen"
            height="140"
            image={product.image_preview}
            title="Imagen"
          />
          <CardContent>
            <Typography gutterBottom className={classes.title}>
              {product.name}
            </Typography>
            <Typography gutterBottom className={classes.price} variant="h5" component="h2">
              $ 120.000
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
