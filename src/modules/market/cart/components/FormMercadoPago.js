import React, { useState, useEffect } from 'react';
import { Button, Modal, Card, Grid, InputLabel } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputForm from "../../../components/InputForm";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from 'yup';
//services
import { newCart } from "../../providers/CartProvider";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const FormMercadoPago = ({ handleClose, open, total, productsInCart }) => {

    const classes = useStyles();
    const user = useSelector((state) => state.user.user);
    const [modalStyle] = useState(getModalStyle);
    const [cardNumber, setCardNumber] = useState('4170068810108020');
    const [paymentMethodId, setPaymentMethodId] = useState(null);

    useEffect(() => {
        payment();
    }, [])

    const formik = useFormik({
        initialValues: {
            cardholderName: 'Pepe botella',
            email: 'newlogiclp@gmail.com',
            cardExpirationMonth: 11,
            cardExpirationYear: 25,
            securityCode: '123',
            docNumber: '12341234',
            paymentMethodId: '',
            cardToken: '',
        },
        validationSchema: Yup.object({
            cardholderName: Yup.string()
                .required('Requerido'),
            email: Yup.string()
                .email('Debe ser un email valido')
                .required('Requerido'),
            cardExpirationMonth: Yup.number()
                .min(1, 'Elige un mes valido')
                .max(12, 'Elige un mes valido')
                .required('Requerido'),
            cardExpirationYear: Yup.number()
                .required('Requerido')
                .min(20, 'Elige un anio valido')
                .max(99, 'Elige un anio valido'),
            securityCode: Yup.number()
                .required('Requerido')
                .min(100, 'Codigo invalido')
                .max(9999, 'Codigo invalido'),
            docNumber: Yup.number()
                .required('Requerido')
                .max(1000000, 'Documento invalido')
                .max(99999999, 'Documento invalido'),
        }),
        onSubmit: async (values) => {
            let form_mp = values
            form_mp.paymentMethodId = paymentMethodId
            console.log('form_mp', form_mp)

            if (!paymentMethodId) {
                alert('tarjeta invalida')
            }

            let data = {
                products: productsInCart,
                total,
                user_id: user.id,
                form_mp,
            };
            console.log(data);
            await newCart(data);
            handleClose()
            try {
            } catch (error) {
                console.error(error);
            }
        }
    })

    const payment = async () => {
        window.Mercadopago.setPublishableKey("TEST-d64731c0-34e1-4e79-b669-4a36a31f713e");
        window.Mercadopago.getIdentificationTypes();
    };

    const guessPaymentMethod = (e) => {
        setCardNumber(e.target.value);
        let cardnumber = e.target.value;
        if (cardnumber.length >= 6) {
            let bin = cardnumber.substring(0, 6);
            window.Mercadopago.getPaymentMethod({
                "bin": bin
            }, setPaymentMethod);
        }
    };

    function setPaymentMethod(status, response) {
        if (status == 200) {
            setPaymentMethodId(response[0].id)
        } else {
            console.log(`payment method info error: ${response}`);
        }
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>

            <form onSubmit={formik.handleSubmit}>
                <Grid container className={classes.div} spacing={3}>
                    <Grid xs={12} sm={6}>
                        <InputLabel className={classes.textInput}><strong>Nombre y Apellido</strong></InputLabel>
                        <InputForm
                            name="cardholderName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cardholderName}
                        />
                        {formik.touched.cardholderName && formik.errors.cardholderName ? (
                            <div>{formik.errors.cardholderName}</div>
                        ) : null}
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <InputLabel className={classes.textInput}><strong>Email</strong></InputLabel>
                        <InputForm
                            placeholder="ejemplo@gmail.com"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                    </Grid>
                    <Grid xs={12} sm={12}>
                        <InputLabel className={classes.textInput}><strong>Numero de la Tarjeta</strong></InputLabel>
                        <InputForm
                            name="cardNumber"
                            onChange={e => guessPaymentMethod(e)}
                            value={cardNumber}
                        />
                    </Grid>
                    <Grid xs={6} sm={4}>
                        <InputLabel className={classes.textInput}><strong>CVC</strong></InputLabel>
                        <InputForm
                            name="securityCode"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.securityCode}
                        />
                        {formik.touched.securityCode && formik.errors.securityCode ? (
                            <div>{formik.errors.securityCode}</div>
                        ) : null}
                    </Grid>
                    <Grid xs={6} sm={4}>
                        <InputLabel className={classes.textInput}><strong>Mes de vencimiento</strong></InputLabel>
                        <InputForm
                            name="cardExpirationMonth"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cardExpirationMonth}
                        />
                        {formik.touched.cardExpirationMonth && formik.errors.cardExpirationMonth ? (
                            <div>{formik.errors.cardExpirationMonth}</div>
                        ) : null}
                    </Grid>
                    <Grid xs={6} sm={4}>
                        <InputLabel className={classes.textInput}><strong>Año de vencimiento</strong></InputLabel>
                        <InputForm
                            name="cardExpirationYear"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cardExpirationYear}
                        />
                        {formik.touched.cardExpirationYear && formik.errors.cardExpirationYear ? (
                            <div>{formik.errors.cardExpirationYear}</div>
                        ) : null}
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <p>
                            <label for="docType">Tipo de documento</label>
                            <select id="docType">
                                <option value="DNI">DNI</option>
                                <option value="CI">Cedula</option>
                                <option value="LC">L.C.</option>
                                <option value="LE">L.E.</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </p>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <InputLabel className={classes.textInput}><strong>Numero de Documento</strong></InputLabel>
                        <InputForm
                            name="docNumber"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.docNumber}
                        />
                        {formik.touched.docNumber && formik.errors.docNumber ? (
                            <div>{formik.errors.docNumber}</div>
                        ) : null}
                    </Grid>
                    <Grid xs={12} sm={12}>
                        <Button type='submit'>Pagar</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default FormMercadoPago;