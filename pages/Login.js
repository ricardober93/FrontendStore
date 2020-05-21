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

function Login() {
  // formik para crear el formulario
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // Yup para las validaciones
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .min(6, "much short")
        .required("Required"),
      password: Yup.string().min(8, "much short").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container style={{ padding: 30 }}>
      {/* utilizar toda la altura de la pagina */}
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div,
        div#__next > div > div {
          height: 100%;
        }
      `}</style>
      <Grid container direction="row" justify="center" alignItems="center">
        <Card padding={2}>
          <CardContent>
            <Typography
              variant="h4"
              component="h4"
              justify="center"
              alignItems="center"
            >
              Welcome to Store
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <FormControl fullWidth="true">
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
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
                <Input
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
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: 20 }}
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}

export default Login;
