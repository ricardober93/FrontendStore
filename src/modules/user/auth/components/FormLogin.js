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
 } from '@material-ui/core';
 import { Alert } from '@material-ui/lab';
import {  useFormik } from 'formik';
import * as Yup from 'yup';
import InputForm from '../../../components/InputForm'


function Login() {

        // formik para crear el formulario
        const formik = useFormik({
            initialValues: {
              email: '',
              password:'',
            },
            // Yup para las validaciones
            validationSchema: Yup.object({
                email: Yup.string()
                  .email('Invalid email address')
                  .min(6, 'much short')
                  .required('Required'),
                password: Yup.string()
                    .min(8, 'much short')
                    .required('Required')
              }),
            onSubmit: values => {
              console.log(values)
            },
          });



    return (
        <Container height="100%" style={{ padding: 30 }}>
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
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Card padding={2}>
                    <CardContent>
                        <Typography 
                            variant="h4"
                            component="h4"
                            justify="center"
                            alignItems="center"
                        >
                            Wellcome to Store
                        </Typography>
                                <form style={{ marginTop: 20 }}      onSubmit={formik.handleSubmit}>
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
                                    fullWidth 
                                    variant="contained" 
                                    color="primary"
                                    style={{ marginTop: 20 }}
                                    >
                                        Login
                                    </Button>
                                </form>
                                <Typography style={{ marginTop: 20 }}>
                            Don´t have a account. Sing up
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    )
}

export default Login
