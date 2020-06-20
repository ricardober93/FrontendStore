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
import { Alert, AlertTitle } from "@material-ui/lab";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputForm from "../../../components/InputForm";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import Router from "next/router";
import head from 'next/head'
import { useRouter } from 'next/router'
import { useDispatch } from "react-redux";
import { signInAction } from "../store/AuthAction";
import { AuthLoginfn } from './../providers/AuthProvider'

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
    height: "380px",
    maxHeight: "400px",
    width: "350px",
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
  const router = useRouter()
  const messages = useSelector((state) => state.language.messages.login);
  const [open, setOpen] = useState(false);
  const [errors, setError] = useState([]);
  const [openQuery, setOpenQuery] = useState(false);
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
        let data = await AuthLoginfn(values);
        console.log(data.data.data.token);
        if (data) {
          dispatch(signInAction(data.data.data.token));
          router.push("/");
      }
    }catch (msg) {
        setError(msg);
        console.log(errors);
        setOpen(true);
      }
    },
  });

 useEffect(() => {
   if (router.query.msg) {
    setOpenQuery(true)
   }

 }, [errors])
  return (
    <Container className={classes.root}>
      <style global jsx>
        {`
        html,
        body,
        main,
        div#__next {
          height: 96%;
          background: #2193b0;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #6dd5ed, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        },`}
      </style>
      {/* utilizar toda la altura de la pagina */}
      <Grid container>
        <Card className={classes.card}>
        {
          router.query ?
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
                {router.query.msg}
              </Alert>
            </Collapse>
            : nll
        }
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
                onClick={() => Router.push("/")}
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
                onClick={() => Router.push("/singin")}
                className={classes.span}
              >
                {messages.link_sing_up}
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}

export default Login;
