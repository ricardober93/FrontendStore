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
  Collapse,
  IconButton,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";

import { AuthSignUpfn } from "../providers/AuthProvider";
import { useDispatch } from "react-redux";
import { signUpAction } from "../store/AuthAction";

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
    marginTop: "10px",
    height: "100%",
  },
  card: {
    padding: theme.spacing(4),
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

const Signin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.language.messages.login);
  const [open, setOpen] = React.useState(false);
  const [errors, setError] = useState({
    error: false,
    msg:''
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      lastname: "",
      name: "",
      password: "",
    },
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
        let res = await AuthSignUpfn(values);
          // dispatch(signUpAction(res.data.data))
          /* router.push({
            pathname: '/login',
            query: { msg: res.msg },
          }) */
      } catch (error) {
        setError(error);
        /* router.push("/singin"); */
      }
    },
  });
  return (
    <Container className={classes.root}>
      <Grid container>
        <Card className={classes.card}>
        {errors ? (
            <Collapse in={open}>
              <Alert
              severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
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
            <Typography variant="h5" component="h4">
              <ArrowBackIcon
                className={classes.back}
                // onClick={() => Router.push("/")}
              />{" "}
              Register
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
                  id="lastname"
                  name="lastname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                />
                {formik.touched.lastname && formik.errors.lastname ? (
                  <Alert severity="error">{formik.errors.lastname}</Alert>
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
              Tienes Cuenta.{" "}
              <span
                /* onClick={() => Router.push("/login")} */
                className={classes.span}
              >
                Inicia Sesión
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

export default Signin;
