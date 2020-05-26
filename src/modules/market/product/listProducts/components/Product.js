import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    textAlign: 'center',
    margin: 'auto 50px 30px',
    border: 0,
    backgroundColor: '#fafafa',
  },
  image: {
    borderRadius: 50,
    marginBottom: 2,
    height: 230,
  },
  button: {
    backgroundColor: '#DCE1F9',
    padding: 10,
    borderRadius: 15,
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default function Product({ product }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          className={classes.image}
          component="img"
          alt="Imagen"
          image="https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg"
          title="Imagen"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="body2" component="h2">
            {product.category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary" className={classes.button}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
