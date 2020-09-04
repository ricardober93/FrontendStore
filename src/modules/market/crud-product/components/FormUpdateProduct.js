import React, { useState, useContext, useEffect } from 'react';
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
import { getCategories } from "../../providers/CategoryProvider";
import { getBrands } from "../../providers/BrandProvider";
import { FirebaseContext } from '../../../../firebase';

import { useStyles } from '../../styles/StylesForm';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alert from '@material-ui/lab/Alert';

const FormUpdateProduct = (props) => {
  //State para la imagenes
  const [formData, setFormData] = useState({
    id: props.dataProduct._id,
    name: props.dataProduct.name,
    sku: props.dataProduct.SKU,
    price: props.dataProduct.price,
    description: props.dataProduct.description,
    image: props.dataProduct.image_preview,
    category: props.dataProduct.category._id,
    brand: props.dataProduct.brand._id,
    featured: props.dataProduct.featured,
  });


  const [selectedFeatured, setSelectedFeatured] = useState(formData.featured);
  const [selectedCategory, setSelectedCategory] = useState(formData.category);
  const [selectedBrand, setSelectedBrand] = useState(formData.brand);

  const [urlImage, setUrlImage] = useState(formData.image);
  const [sendingImage, setSendingImage] = useState(false);

  //Context con las operaciones de firebase
  const { firebase } = useContext(FirebaseContext);

  const messages = useSelector(
    (state) => state.language.messages.form_update_product
  );
  const classes = useStyles();

  const [formState, setFormState] = useState(false);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchBrands();
  }, []);

  const fetchCategories = async () => {
    await getCategories().then(response => {
      setCategories(response.data);
    });
  };

  const fetchBrands = async () => {
    await getBrands().then(response => {
      setBrands(response.data);
    });
  };

  const formik = useFormik({
    initialValues: {
      id: formData.id,
      name: formData.name,
      price: formData.price,
      sku: formData.sku,
      description: formData.description,
      image: formData.image,
      featured: selectedFeatured,
      state: formData.state,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(3, messages.name_min_required)
        .required(messages.name_required),
      description: Yup.string(),
    }),
    onSubmit: (data) => {

      data.featured = selectedFeatured;
      data.category = selectedCategory;
      data.brand = selectedBrand;
      data.image = urlImage;

      try {
        updateProduct({
          _id: formData.id,
          name: data.name,
          description: data.description,
          image_preview: data.image,
          sku: data.sku,
          price: data.price,
          featured: data.featured,
          category_id: data.category,
          brand_id: data.brand,
        })

        setFormState(true);
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
      .ref('products')
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
        <Grid item xs={12} sm={6}>
          <TextField
            id="sku"
            label={messages.label_sku}
            type="string"
            fullWidth
            value={formik.values.sku}
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
          {formik.errors.sku ? (
            <Typography variant="subtitle2" color="error">
              {formik.errors.sku}
            </Typography>
          ) : null}
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextareaAutosize
            className={classes.textArea}
            id="description"
            placeholder={messages.label_description}
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

        <Grid item xs={12} sm={4}>
          <FormControl className={classes.formControl}>
            <InputLabel id="category-input">
              {messages.label_category}
            </InputLabel>
            <Select
              labelId="category-input"
              id="category"
              value={selectedCategory ? selectedCategory : formData.category}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
              }}
              onBlur={formik.handleBlur}
              displayEmpty
            >
              {categories.map((category) => (
                <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {formik.errors.featured ? (
            <Typography variant="subtitle2" color="error">
              {formik.errors.featured}
            </Typography>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl className={classes.formControl}>
            <InputLabel id="brand-input">
              {messages.label_brand}
            </InputLabel>
            <Select
              labelId="brand-input"
              id="brand"
              value={selectedBrand ? selectedBrand : formData.brand}
              onChange={(e) => {
                setSelectedBrand(e.target.value);
              }}
              onBlur={formik.handleBlur}
              displayEmpty
            >
              {brands.map((brand) => (
                <MenuItem key={brand._id} value={brand._id}>{brand.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {formik.errors.featured ? (
            <Typography variant="subtitle2" color="error">
              {formik.errors.featured}
            </Typography>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl className={classes.formControl}>
            <InputLabel id="featured-input">
              {messages.featured_product}
            </InputLabel>
            <Select
              labelId="featured-input"
              id="featured"
              value={selectedFeatured ? selectedFeatured : formData.featured}
              onChange={(e) => {
                setSelectedFeatured(e.target.value);
              }}
              onBlur={formik.handleBlur}
              displayEmpty
            >
              <MenuItem value={true}>Sí</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          {formik.errors.featured ? (
            <Typography variant="subtitle2" color="error">
              {formik.errors.featured}
            </Typography>
          ) : null}
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="price"
            label={messages.label_price}
            type="number"
            fullWidth
            value={formik.values.price}
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
          {formik.errors.price ? (
            <Typography variant="subtitle2" color="error">
              {formik.errors.price}
            </Typography>
          ) : null}
        </Grid>

        <Grid item xs={12} sm={6} className={classes.gridImage}>
          <Fileuploader
            accept="image/*"
            id="image"
            name="image"
            randomizeFilename
            storageRef={firebase.storage.ref("products")}
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
            disabled={formState}
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
    </form>
  );
};

export default FormUpdateProduct;
