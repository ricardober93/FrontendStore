import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core/";
const useStyles = makeStyles({
  root: {
    backgroundColor: '#665C84',
    color: 'white',
    textAlign: 'center',
  },
  datos_empresas: {
    marginTop: 20,
    marginLeft: 40
  },
  datos_form: {
    fontSize: '22px',
    margin: '15px auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  datos_form_text: {
    margin: 0,
    fontWeight: 400,
  },
  form: {
    width: '100%',
    display: 'flex',
    marginTop: '15px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form_input: {
    border: 'none',
    borderRadius: '15px',
    height: 30,
  },
  form_button: {
    marginLeft: '15px',
    border: 'none',
    borderRadius: '20px',
    background: '#FF7657',
    padding: '8px  20px',
    color: 'white',
    textTransform: 'capitalize'
  },
  datos_acceso_rapido: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    alignSelf: 'flex-start',
    marginTop: '15px',
  },
  links: {
    display: 'flex',
  },
  imagenGrid: {
    display: 'flex'
  },
  containerShoes: {
    flex: 1
  },
  imageF: {
    width: '100%',
    height: 'auto',
    backgroundPositionY: 'center'
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" className={classes.root}>
      <Grid item md={12} sm={12}>
        <div className={classes.datos_empresas}>
          <div className={classes.datos_form}>
            <h4 className={classes.datos_form_text}>Conoce las <strong> Promociones</strong></h4>
            <form className={classes.form}> <input className={classes.form_input} type="text" /> <button className={classes.form_button} >Enviar</button> </form>
          </div>
          <Grid container alignItems="center" className={classes.datos_acceso_rapido}>
            <Grid item xs={12} sm={4} className={classes.brand}>
              LOGO
              </Grid>
            <Grid container xs={12} sm={8} justify="center" className={classes.links}>
              <Grid item xs={12} sm={4} justify="center">
                <h4>Categorias</h4>
                <p>Zapatos</p>
                <p>Tennis</p>
                <p>Sandalias</p>
              </Grid>
              <Grid item xs={12} sm={4} justify="center">
                <h4>Nosotros</h4>
                <p>Quienes Somos</p>
                <p>Contactanos</p>
              </Grid>
              <Grid item xs={12} sm={4} justify="center" >
                <h4>Redes Sociales</h4>
                <p>Instagram</p>
                <p>Twitter</p>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
      {/* <Grid item md={6} className={classes.imagenGrid}>
        <div className={classes.containerShoes} >
          <img className={classes.imageF} src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt=""/>
        </div>
     </Grid> */}
    </Grid>
  )
}
