import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Router from 'next/router'

import {AuthSignUpfn} from '../providers/AuthProvider'
import {useDispatch} from 'react-redux'
import { signUpAction } from "../store/AuthAction";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    padding: theme.spacing(3),
  },
  formControl: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  form: {
    marginTop: "20px",
    height: "90%",
  },
  card: {
    padding: theme.spacing(4),
    borderRadius: "20px",
    height: "420px",
    minHeight: '420px',
    maxHeight: "480px",
    width: "380px",
  },
  btn: {
    backgroundColor: "#665C84 !important",
    width: "100%",
    padding: "8px 30px",
    marginTop: theme.spacing(5),
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#FFBA5A !important",
      color: "#000000",
    },
  },
  singUp: {
    color: "#8B8B8B",
    fontSize: "14px",
    marginTop: theme.spacing(2),
  },
  span: {
    fontWeight: "bold",
    cursor:'pointer'
  },
  back:{
      cursor:'pointer'
  }
}));

const Signin = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const messages = useSelector((state) => state.language.messages.login);
  //State del componente
  const [user, saveUser] = useState({
    name: "",
    lastname: "",
    password: "",
    email: "",
    role:1
  });
  const [Error, setError] = useState("")
  const formik = useFormik({
    initialValues: {
      email: "",
      lastname: "",
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .min(3, "much short")
        .required("Required"),
      password: Yup.string().min(6, "much short").required("Required"),
    }),
    onSubmit: async (values) => {
      saveUser({
        ...user,
        name: values.name,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
      });
     try {
      let res = await AuthSignUpfn(user)
      if (res) {
        console.log(res)
        // dispatch(signUpAction(res)) 
      }
     } catch (error) {
      setError(error)
      console.log(Error)
      Router.push('/singin')
     }
    },
  });
  return (
    <Container className={classes.root}>
      <style global jsx>{`
        html,
        body,
        main,
        div#__next {
          height: 100%;
          background: #2193b0;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #6dd5ed, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        },
        
      `}</style>
      <Grid container>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h4">
              <ArrowBackIcon className={classes.back} onClick={() => Router.push('/')} /> Register
            </Typography>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <Alert severity="error">{formik.errors.name}</Alert>
                ) : null}
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="Lastname">Last Name</InputLabel>
                <Input
                  id="Lastname"
                  name="Lastname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Lastname}
                />
                {formik.touched.Lastname && formik.errors.Lastname ? (
                  <Alert severity="error">{formik.errors.Lastname}</Alert>
                ) : null}
              </FormControl>         
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.password && formik.errors.password ? (
                  <Alert severity="error">{formik.errors.email}</Alert>
                ) : null}
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <Alert severity="error">{formik.errors.password}</Alert>
                ) : null}
              </FormControl>
              <Button type="submit" variant="contained" className={classes.btn}>
                Register
              </Button>
            </form>
            <Typography className={classes.singUp}>
            Tienes Cuenta. <span onClick={() => Router.push('/login')}  className={classes.span}>Inicia Sesión</span> 
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

export default Signin;
