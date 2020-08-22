import React, { useState } from 'react';
import { Modal, TextField, Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { updatePasswordUser } from '../../providers/UserProvider';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Configuración del Modal de Material-ui
function getModalStyle() {
  const top = 50 ;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    textField: {
      width: '100%',
      marginTop: '5%'
    }
}));

export default function ModalPassword() {
  const messages = useSelector((state) => state.language.messages.profile);
  // Configuración del Modal de Material-ui
  const [ modalStyle ] = useState(getModalStyle);
  const [ open, setOpen ] = useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  // Formik
  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: ''
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string()
      .required('Required'),
      newPassword: Yup.string()
      .required('Required'),
    }),
    onSubmit: async (values, {resetForm}) => {
      console.log(values);
      try {
        
        let response = await updatePasswordUser(values);
        console.log(response);
        handleClose();
        resetForm({values: ''});
       
      } catch (error) {
        console.error(error);
      }
    }
  })


  return ( 
    <div>
      <Button 
        type="button"
        className="btn btn-block btn-primary"
        variant="contained" 
        style={{background: '#edc847'}}
        onClick={() => {
          handleOpen();
        }}
      ><strong>{messages.btn_changes_password}</strong>
      </Button>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
        }}
      >
        <div align="center" style={modalStyle} className={classes.paper}>
          <h2><strong>{messages.btn_changes_password}</strong></h2>
              
          <form onSubmit={formik.handleSubmit}>
            <TextField 
              autoComplete="on"
              type="password"
              label="Contraseña actual" 
              name="currentPassword"
              className={classes.textField} 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.currentPassword}
            />
            {formik.touched.currentPassword && formik.errors.currentPassword ? (<div>{formik.errors.currentPassword}</div>
            ) : null}
            <Divider/>
            <TextField 
              autoComplete="on"
              type="password"
              label="Nueva contraseña" 
              name="newPassword"
              className={classes.textField} 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.newPassword}
            />
            {formik.touched.newPassword && formik.errors.newPassword ? (
            <div>{formik.errors.newPassword}</div>
            ) : null}
            <Divider/>
            <div style={{marginTop: 20}}>
              <Button 
              type="submit"
              style={{background: '#edc847'}} 
              className="btn btn-block btn-primary"
              variant="contained" 
              >Guardar Cambios</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}
 