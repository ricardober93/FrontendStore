import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from '../../../../../node_modules/formik/dist/index';
import * as Yup from 'yup';
import { updateAddressUser } from '../../../user/providers/UserProvider';
import { updateUserAction } from '../../../user/auth/store/AuthAction';
import { Input, Button } from "@material-ui/core";

export default function PanelEnvio() {
    const dispatch = useDispatch()
    const userRedux = useSelector((state) => state.user);
    const { user } = userRedux;

    const formik = useFormik({
        initialValues: {
          address: user?.address
        },
        validationSchema: Yup.object({
          address: Yup.string()
        }),
        onSubmit: async (values) => {
          console.log(values);
          try {
            let response = await updateAddressUser(values.address);
            console.log(response.data);
            dispatch(updateUserAction(response.data));
            let auth = {
              user: response.data,
              token: userRedux.token
            }
            localStorage.setItem('user', JSON.stringify(auth));

    
            /*alert(JSON.stringify(values, null, 2));
            async function fetchData() {
              await updateUser(values)
              .then((response) => {
               console.log(response.data);
              })
            }
            fetchData()*/
            
          } catch (error) {
            console.error(error);
          }
        }
    })
    console.log(user.address);
    return (
        <section className="panel-envio">
            <h1 className="panel-envio-m">Envio</h1>
            <h3 className="panel-envio-mb">Nombre del Usuario: </h3>
            <form onSubmit={formik.handleSubmit}>
                <div className="panelflex ">
                    <span className="panel-envio-m">
                        Dirección:
                        <Input
                         name="address"
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.address}
                        />
                    </span>
                    
                    <Button type="submit" className="panel-envio-button">Cambiar </Button>
                </div>
            </form>
        </section>
    )
}
