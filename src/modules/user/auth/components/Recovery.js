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
import React from "react";

function restoreData() {
  // formik para crear el formulario
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    // Yup para las validaciones
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .min(6, "much short")
        .required("Required"),
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
            <Typography variant="h4" component="h4">
              Recuperar Contraseña
            </Typography>
            <Typography
              style={{ marginTop: 20 }}
              color="textSecondary"
              gutterBottom
            >
              Enter your email and we will send you instructions to restore your
              password.
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: 20 }}
              >
                Restablecer contraseña
              </Button>
              <Typography style={{ marginTop: 20 }} color="textSecondary">
                Remember to look at your spam
              </Typography>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}

export default restoreData;
