import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import Fileuploader from 'react-firebase-file-uploader';
import {
  Grid,
  TextField,
  Button,
  Typography,
  TextareaAutosize,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import UserIcon from '@material-ui/icons/AccountBox';
import NameIcon from '@material-ui/icons/AccountBoxOutlined';
import { updateProduct } from '../../providers/ProductProvider';
import { FirebaseContext } from '../../../../firebase';

import { useStyles } from '../../styles/StylesForm';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alert from '@material-ui/lab/Alert';

const FormUpdateProduct = (props) => {
  //State para la imagenes
  const [formData, setFormData] = useState({
    id: props.dataProduct.id,
    name: props.dataProduct.name,
    description: props.dataProduct.description,
    image: props.dataProduct.image,
    state: props.dataProduct.state,
    featured: props.dataProduct.featured,
  });
  const [selectedFeatured, setSelectedFeatured] = useState(formData.featured);
  const [urlImage, setUrlImage] = useState(formData.image);
  const [selectedState, setSelectedState] = useState(formData.state);
  const [sendingImage, setSendingImage] = useState(false);

  //Context con las operaciones de firebase
  const { firebase } = useContext(FirebaseContext);

  const messages = useSelector(
    (state) => state.language.messages.form_update_product
  );
  const classes = useStyles();

  const [formState, setFormState] = useState(false);

  const formik = useFormik({
    initialValues: {
      id: formData.id,
      name: formData.name,
      description: formData.description,
      image: '',
      featured: formData.featured,
      state: formData.state,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(3, messages.name_min_required)
        .required(messages.name_required),
      description: Yup.string(),
      image: Yup.string(),
      featured: Yup.number(),
      state: Yup.number(),
    }),
    onSubmit: (data) => {

      data.featured = selectedFeatured;
      data.state = selectedState;
      data.image = urlImage;

      try {
        updateProduct({
          id: formData.id,
          name: data.name,
          description: data.description,
          image_preview: data.image,
          featured: data.featured,
          state: data.state,
        })

        setFormState(true);
        console.log(data)
        setFormData({
          _id: data.id,
          name: data.name,
          description: data.description,
          image: data.image,
          featured: data.featured,
          state: data.state,
        });

        closeForm(data);
        //Redireccionar
        //window.location.href = '/categories';
      } catch (error) {
        console.error(error);
      }
    },
  });

  //Todo sobre las imagenes
  const handleUploadError = (error) => {
    console.error(error);
  };

  const handleUploadSuccess = async (name) => {
    //Almacenar URL
    setSendingImage(true);
    const url = await firebase.storage
      .ref('categories')
      .child(name)
      .getDownloadURL();
    setUrlImage(url);
    setSendingImage(false);
  };

  const closeForm = () => {
    props.submitUpdate();
    props.update(formData._id, formData);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      {formData.submitted ? (
        <Alert
          content={messages.form_update_user_submitted_success}
          type="success"
        />
      ) : (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                label={messages.label_name}
                type="string"
                fullWidth
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <NameIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {formik.errors.name ? (
                <Typography variant="subtitle2" color="error">
                  {formik.errors.name}
                </Typography>
              ) : null}
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="state-input">{messages.label_state}</InputLabel>
                <Select
                  labelId="state-input"
                  id="state"
                  name="state"
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  displayEmpty
                >
                  <MenuItem value={1}>Disponible</MenuItem>
                  <MenuItem value={3}>No Disponible</MenuItem>
                </Select>
              </FormControl>
              {formik.errors.state ? (
                <Typography variant="subtitle2" color="error">
                  {formik.errors.state}
                </Typography>
              ) : null}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextareaAutosize
                className={classes.textArea}
                id="description"
                type="string"
                fullWidth
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <UserIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {formik.errors.description ? (
                <Typography variant="subtitle2" color="error">
                  {formik.errors.description}
                </Typography>
              ) : null}
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="featured-input">
                  {messages.featured_product}
                </InputLabel>
                <Select
                  labelId="featured-input"
                  id="featured"
                  value={
                    selectedFeatured ? selectedFeatured : formData.featured
                  }
                  onChange={(e) => {
                    setSelectedFeatured(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  displayEmpty
                >
                  <MenuItem value={1}>Sí</MenuItem>
                  <MenuItem value={0}>No</MenuItem>
                </Select>
              </FormControl>
              {formik.errors.featured ? (
                <Typography variant="subtitle2" color="error">
                  {formik.errors.featured}
                </Typography>
              ) : null}
            </Grid>

            <Grid item xs={12} sm={6} className={classes.gridImage}>
              {/* <img src={formData.image} /> */}
              <Fileuploader
                accept="image/*"
                id="image"
                name="image"
                randomizeFilename
                storageRef={firebase.storage.ref('categories')}
                onUploadError={handleUploadError}
                onUploadSuccess={handleUploadSuccess}
              />
              {formik.touched.image && formik.errors.image ? (
                <Typography variant="subtitle2" color="error">
                  {formik.errors.image}
                </Typography>
              ) : null}
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={sendingImage}
                type="submit"
                variant="contained"
                color="primary"
              >
                {messages.label_button_save}
              </Button>
              <Button
                onClick={props.handleClose}
                style={{ marginLeft: 5 }}
                variant="outlined"
                color="primary"
              >
                {messages.label_button_exit}
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </form>
  );
};

export default FormUpdateProduct;
