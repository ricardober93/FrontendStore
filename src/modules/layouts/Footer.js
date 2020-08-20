import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
const useStyles = makeStyles({
  root: { 
    backgroundColor: '#665C84',
    color: 'white',
  },
  datos_empresas: {
    marginTop: 20,
    marginLeft:40
  },
  datos_form: {
    fontSize: '22px',
    margin: '15px 0',
  },
  datos_form_text: {
    margin: 0,
    fontWeight: 400,
  },
  form: {
    width: '100%',
    marginTop: '15px',
  },
  form_input: {
    border: 'none',
    borderRadius: '15px',
    width: '70%',
    height: 30,
  },
  form_button: {
    border: 'none',
    borderRadius: '20px',
    background: '#FF7657',
    padding: '8px  20px',
    color: 'white',
    textTransform: 'capitalize'
  },
  datos_acceso_rapido: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    alignItems:'center'
  },
  links:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyContent:'space-around'
  }
});

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container col={2} className={classes.root}>
      <Grid item >
        <div className={classes.datos_empresas}>
          <div className={classes.datos_form}>
            <h4 className={classes.datos_form_text}>Conoce las <strong> Promociones</strong></h4>
            <form className={classes.form}> <input className={classes.form_input} type="text"/> <button className={classes.form_button} >Enviar</button> </form>
          </div>
          <div className={classes.datos_acceso_rapido}>
            <div className="datos_brand">
              LOGO
              </div>
            <div className={classes.links}>
              <Grid item className="link_cat">
                <h4>Categorias</h4>
                <p>Zapatos</p>
                <p>Tennis</p>
                <p>Sandalias</p>
              </Grid>
              <Grid item className="link_Nosotros">
                <h4>Nosotros</h4>
                <p>Quienes Somos</p>
                <p>Contactanos</p>
              </Grid>
              <Grid item className="link_rrss">
                <h4>Redes Sociales</h4>
                <p>Instagram</p>
                <p>Twitter</p>
              </Grid>
            </div>
          </div>
        </div>
     </Grid>
     <Grid item ></Grid>
    </Grid>
  )
}
