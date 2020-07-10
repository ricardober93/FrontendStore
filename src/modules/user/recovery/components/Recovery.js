import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display:'grid',
    alignContent: 'center',
    justifyContent:'center',
    
  },
 
}));

const RestoreData = () => {

  const classes = useStyles();
  const messages = useSelector((state) => state.language.messages.recovery);
  // formik para crear el formulario
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    // Yup para las validaciones
    validationSchema: Yup.object({
      email: Yup.string()
        .email(messages.email_invalid)
        .min(6, messages.msg_shot)
        .required(messages.email_required),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container height="100%" className={classes.root} style={{ padding: 30 }}>
      {/* utilizar toda la altura de la pagina */}
      <Grid container justify="center" alignItems="center">
        <Card padding={2}>
          <CardContent>
            <Typography variant="h4" component="h4">
              { messages.title }
            </Typography>
            <Typography
              style={{ marginTop: 20 }}
            >
              { messages.messages_restore }
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
                fullWidth="true"
                variant="contained"
                color="primary"
                style={{ marginTop: 20 }}
              >
                { messages.btn_resotre }
              </Button>
              <Typography style={{ marginTop: 20 }} color="textSecondary">
              { messages.check_span }
              </Typography>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}

export default RestoreData;
