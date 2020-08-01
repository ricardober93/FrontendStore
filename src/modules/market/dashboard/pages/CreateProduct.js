import React from 'react'
import Dashboard from '../components/Dashboard'
import NabvarHome from '../components/NabvarHome'
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import PanelProduct from '../../crud-product/pages/PanelProduct';
import FormAddProduct from '../components/FormAddProduct';
import { Redirect } from 'react-router'

const useStyles = makeStyles((theme) => ({

  flex: {
    display: "flex",
    width: "100%",
    height:40,
    alignContent: "center",
    justifyContent: "flex-start",
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(3)
  },
  arrow: {
    display: "flex",
    height:40,
    alignContent: "center",
  },
  h2:{
    display: "flex",
    alignContent: "center",
    height:'100%',
    margin:0,
    marginLeft: theme.spacing(2),
    fontWeight:400,
    fontSize: '28px'
  }
}));

export default function CreateProduct() {
    const classes = useStyles();
   
    return (
    <Dashboard>
      <NabvarHome />
      <section className={classes.flex} >
          <ArrowBackIcon  className={classes.arrow} onClick={() => <Redirect to="/" />}/>
          <h2 className={classes.h2}>Crear un nuevo producto</h2>
      </section>
      <section>
       <PanelProduct />
       <FormAddProduct />
      </section>
    </Dashboard>
    )
}
