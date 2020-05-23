import React, { useState } from 'react';
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
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signin = () => {

    //State del componente
    const [user, saveUser] = useState({
        name: '',
        lastname: '',
        password: '',
        email: '',


    })
    const formik = useFormik({
        initialValues: {
            email: '',
            lastname: '',
            name: '',
            password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required'),
            lastname: Yup.string()
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .min(6, 'much short')
                .required('Required'),
            password: Yup.string()
                .min(8, 'much short')
                .required('Required')
        }),
        onSubmit: values => {
            saveUser({
                ...user,
                name: values.name,
                lastname: values.name,
                email: values.email,
                password: values.password
            }
            );
        },

    });
    return (<Container style={{ padding: 40 }}>
        <Grid
            container justify={'center'}
        >
            <Grid item={true} item lg={6}>
                <Card padding={2}>
                    <CardContent>
                        <Typography
                            variant="h5"
                            component="h4"
                            justify="center"
                            align="center"
                        >
                            Register
                    </Typography>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl fullWidth={true}>
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
                            <FormControl fullWidth={true}>
                                <InputLabel htmlFor="lastname">Lastname</InputLabel>
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
                            <FormControl fullWidth={true}>
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
                            <FormControl fullWidth={true}>
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
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{ marginTop: 20 }}
                            >
                                Register
                                </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Container>);
}

export default Signin;
