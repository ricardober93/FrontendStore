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

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display:'grid',
    alignContent: 'center',
    justifyContent:'center',
    
  },
 
}));

function Login() {
  const classes = useStyles();
  const messages = useSelector((state) => state.language.messages.login);
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
      password: Yup.string().min(8, messages.pass_short).required(messages.pass_requied),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container height="100%" className={classes.root} style={{ padding: 30 }}>
        <style global jsx>{`
        html,
        body,
        main,
        div#__next {
          height: 96%;
        },
        
      `}</style>
    {/* utilizar toda la altura de la pagina */}     
      <Grid container height="100%"  >
        <Card padding={2}>
          <CardContent>
            <Typography
              variant="h4"
              component="h4"
            >
             { messages.title }
            </Typography>
            <form style={{ marginTop: 20 }} onSubmit={formik.handleSubmit}>
              <FormControl fullWidth="true">
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

              <FormControl fullWidth="true">
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
                fullWidth="true"
                variant="contained"
                color="primary"
                style={{ marginTop: 20 }}
              >
                { messages.btn_login }
              </Button>
            </form>
            <Typography style={{ marginTop: 20 }}>
            { messages.not_account }. { messages.link_sing_up }
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}

export default Login;
