import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import {
    Select,
    MenuItem,
    TextField,
    FormControl,
    InputLabel,
    Typography,
} from "@material-ui/core";
//services
//import CartProvider from '../../providers/CartProvider';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const Subtotal = ({productsInCart, total}) => {

    const classes = useStyles();
    const [formSuccess, setFormSuccess] = useState(false);
    const [form, setForm] = useState({
        send: '',
        name: '',
        address: '',
    })
    const [store, setStore] = useState({
        ddi: '+54',
        ddn: '11',
        phone: '44131539'
    })
    const messages = useSelector(state => state.languages.messages);
    const user = useSelector(state => state.security.user);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const confirmBuy = async () => {

        if( form.name == '' || form.address == '' || form.send === '' ){
            return setFormSuccess(true)
        }

        let cartText = ''
        productsInCart.map((product) =>{
            cartText = cartText + product.name + ':%20$' + product.price + '%20cantidad:' + product.quantity + '%0A'
        });

        let data = {
            products: productsInCart,
            total: total,
            user_id: user.id
        }

        console.log(data)

        //CartProvider.createCart(data);

        //window.location.href = "https://api.whatsapp.com/send?phone="+ store.ddi + store.ddn + store.phone + "&text=HOME-MARKET%0A%0AHola%20acabo%20de%20realizar%20un%20pedido%0A%0ATipo%20de%20entrega:%20" + form.send + "%0A%0ANombre:%20" + form.name + "%0ADireccion:%20" + form.address + "%0ATOTAL: $%20" + total +"%0A%0A" + cartText;
    
    }

    return (
        <Container>
            <p>Total: $ {total}</p>
            <TextField variant="filled" className="m-3" name="name" value={form.name} onChange={handleChange} label="Nombre*" />
            <TextField variant="filled" className="m-3" name="address" value={form.address} onChange={handleChange} label="Direccion*" />
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Tipo de Entrega*</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="send"
                    value={form.send}
                    onChange={handleChange}
                >
                    <MenuItem value={'Envio a Domicilio'}>Envio a Domicilio</MenuItem>
                    <MenuItem value={'Retiro en Sucursal'}>Retiro en Sucursal</MenuItem>
                </Select>
            </FormControl>
            <Button type="button" onClick={confirmBuy} className="btn btn-success col-md-2 mb-3 float-right">{messages['cart_product_buy']}</Button>
            { formSuccess ? <Typography variant="h6" color="error">*Campos obligatorios</Typography> : null}
            <br/>
            <br/>
        </Container>
    );
}

export default Subtotal;
