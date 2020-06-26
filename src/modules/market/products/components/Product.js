import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";


const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    height: 330,
    borderRadius: '20px',
    margin: '15px',
  },
  img:{
    height: '130px',
    width:250,
    borderRadius: '20px',
  },
  title:{
    width: '100%' ,
    fontSize: '1.6em',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'Bold',
    marginTop:'0px',
    marginBottom:'0px'
  },
  popularidad: {
    width:'100%',
    display:'flex',
    justifyContent: 'center',
    alignContent:'center',
    fontSize: '1.3em',
    fontWeight: 'semibold',
    marginTop:'3px'
  },
  star: {
    display:'flex',
    alignItems:'center',
    justifyItems:'center',
    marginRight:'6px'
  },
  number: {
    margin: 0,
    display:'flex',
    alignItems:'center',
    },
  category: {
    fontSize: '.9em',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontWeight: 'regular',
    marginTop: '2px'
  },
  description: {
    fontSize: '.8em',
    textAlign: 'center'
  },
  action: {
    backgroundColor: '#665C84',
    textAlign:'center',
    color: 'white',
  },
  button:{
    width:'100%',
    color: 'white',
    display: 'flex',
    justifyItems:'center'
  }
});


export default function Product({ key, product }) {
  const classes = useStyles();

  const descriptionFn = (string) => {
    return string.substr(0,120)
  }

  const star = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>

  return (
    <Link href="/product/[product_id]" as={`/product/${product.id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.img}
            component="img"
            alt="Imagen"
            image="https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg"
            title="Imagen"
          />
          <CardContent>
            <Typography gutterBottom className={classes.title}>
              {product.name}
            </Typography>
            <Typography gutterBottom className={classes.category}>
              {product.category}
            </Typography>
            <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
              { descriptionFn(product.description) + '...'}
            </Typography>
            <div className={classes.popularidad}>
                <span className={classes.star}> {star}{star}{star}{star}{star} </span>
                <p className={classes.number} >4.5</p>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions  className={classes.action}>
          <Button className={classes.button} size="small">
            Ver más
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}
