import React, {useState} from 'react'

import {
  Container,
  Grid,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Button,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputForm from "../../../components/InputForm";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Router from 'next/router'

import {useDispatch} from 'react-redux'
import { signInAction } from "../store/AuthAction";
import { AuthLoginfn } from "../providers/AuthProvider";


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display:'grid',
    alignContent: 'center',
    justifyContent:'center', 
    padding: theme.spacing(3) 
  },
  formControl:{
    width:'100%',
    marginTop:theme.spacing(2),
  },
  form:{
    marginTop:'20px',
    height: '90%'
  },
  card:{
    padding: theme.spacing(4),
    borderRadius:'20px',
    height:'380px',
    maxHeight: '400px',
    width:'350px',
  },
  btn:{
    backgroundColor: '#665C84 !important',
    width: '100%',
    padding: '8px 30px',
    marginTop: theme.spacing(5),
    color: '#ffffff',
    '&:hover': { 
      backgroundColor: '#FFBA5A !important',
      color: '#000000',
    },
  },
  singUp:{
    color: '#8B8B8B',
    fontSize: '14px',
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

function Login() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const messages = useSelector((state) => state.language.messages.login);

  const [Error, setError] = useState("")

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
      password: Yup.string().min(6, messages.pass_short).required(messages.pass_requied),
    }),
    onSubmit: async (values) => {
      try {
        let user = await AuthLoginfn(values)
        dispatch(signInAction(user.token))
      } catch (error) {
        setError(error)
        Router.push('/login')
      }
      Router.push('/')

    },
  });

  return (
    <Container className={classes.root}>
        <style global jsx>{`
        html,
        body,
        main,
        div#__next {
          height: 96%;
          background: #2193b0;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #6dd5ed, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        },
        
      `}</style>
    {/* utilizar toda la altura de la pagina */}     
      <Grid container>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              variant="h4"
              component="h4"
            >
            <ArrowBackIcon className={classes.back} onClick={() => Router.push('/')} /> { messages.title }
            </Typography>
            {
              Error ?
              <Alert severity="error">{formik.errors.password}</Alert>
              : null
            }
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
              <Button
                type="submit"
                className={classes.btn}
                variant="contained"
              >
                { messages.btn_login }
              </Button>
            </form>
            <Typography className={classes.singUp}>
            { messages.not_account }. <span onClick={() => Router.push('/singin')} className={classes.span}>{ messages.link_sing_up }</span> 
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}

export default Login;
