import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Collapse,
  IconButton,
} from "@material-ui/core";
import { Redirect } from 'react-router'
import { Alert, AlertTitle } from "@material-ui/lab";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputForm from "../../../components/InputForm";
import GoogleBtn from "./GoogleBtn";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { signInAction } from "../store/AuthAction";
import { AuthLoginfn } from './../providers/AuthProvider'
import jwtDecode from "jwt-decode";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    padding: theme.spacing(1),
  },
  formControl: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  form: {
    marginTop: "20px",
    height: "90%",
  },
  card: {
    padding: theme.spacing(2),
    borderRadius: "20px",
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
    cursor: "pointer",
  },
  back: {
    cursor: "pointer",
  },
}));

function Login() {

  const dispatch = useDispatch();
  const classes = useStyles();
  const messages = useSelector((state) => state.language.messages.login);
  const [open, setOpen] = useState(false);
  const [errors, setError] = useState([]);
  const [openQuery, setOpenQuery] = useState(false);
  const [redirect, setRedirect] = useState(false);

  // formik para crear el formulario
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // Yup para las validaciones
    validationSchema: Yup.object({
      email: Yup.string()
        .email(messages.email_invalid)
        .min(6, messages.msg_shot)
        .required(messages.email_required),
      password: Yup.string()
        .min(6, messages.pass_short)
        .required(messages.pass_requied),
    }),
    onSubmit: async (values) => {
      try {
        let response = await AuthLoginfn(values);
        if (response) {
          const tokenDecoded = jwtDecode(response.token);
          let auth = {
            token: response.token,
            user: tokenDecoded
          }
          dispatch(signInAction(auth));
          localStorage.setItem('user', JSON.stringify(auth));
          setRedirect(true);
        }
    }catch (msg) {
        setError(msg);
        console.error(errors);
        setOpen(true);
      }
    },
  });

  const loginSuccessGoogle = (response) => {
    if (response) {
      const tokenDecoded = jwtDecode(response.token);
      let auth = {
        token: response.token,
        user: tokenDecoded
      }
      dispatch(signInAction(auth));
      localStorage.setItem('user', JSON.stringify(auth));
      setRedirect(true);
    }
  }

  return (
    <Container className={classes.root}>

    { redirect ? <Redirect to="/" /> : null }
      {/* utilizar toda la altura de la pagina */}
      <Grid container>
        <Card className={classes.card}>
        
          <Collapse in={openQuery}>
              <Alert
              severity="success"
                action={
                  <IconButton
                    aria-label="close"
                    severity="success"
                    size="small"
                    onClick={() => {
                      setOpenQuery(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
              </Alert>
            </Collapse>
          {errors ? (
            <Collapse in={open}>
              <Alert
              severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    severity="error"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
              <AlertTitle>Error</AlertTitle>
                {errors.msg}
              </Alert>
            </Collapse>
          ) : null}
          <CardContent>
            <Typography variant="h4" component="h4">
              <ArrowBackIcon
                className={classes.back}
                onClick={() => <Redirect to="/" />}
              />{" "}
              {messages.title}
            </Typography>

            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputForm
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />

                {formik.touched.email && formik.errors.email ? (
                  <Alert severity="error">{formik.errors.email}</Alert>
                ) : null}
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputForm
                  type="password"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <Alert severity="error">{formik.errors.password}</Alert>
                ) : null}
              </FormControl>
              <Button type="submit" className={classes.btn} variant="contained">
                {messages.btn_login}
              </Button>
            </form>
            <Typography className={classes.singUp}>
              {messages.not_account}.{" "}
              <span
                onClick={() => <Redirect to="/singin" />}
                className={classes.span}
              >
                {messages.link_sing_up}
              </span>
            </Typography>
          </CardContent>
        </Card>
        <GoogleBtn loginSuccessGoogle={loginSuccessGoogle} />
      </Grid>
    </Container>
  );
}

export default Login;
