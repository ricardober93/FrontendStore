import React, { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import Fileuploader from "react-firebase-file-uploader";
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
} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import UserIcon from "@material-ui/icons/AccountBox";
import NameIcon from "@material-ui/icons/AccountBoxOutlined";
import { FirebaseContext } from "../../../../firebase";

import { useStyles } from "../../styles/StylesForm";
import { addProduct } from "../../providers/ProductProvider";
import { getCategories } from "../../providers/CategoryProvider";
import { getBrands } from "../../providers/BrandProvider";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormProduct = ({ submitUpdate, newProduct, handleClose }) => {
  //State para la imagenes
  const [urlImage, setUrlImage] = useState("");

  const [selectedFeatured, setSelectedFeatured] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  //Context con las operaciones de firebase
  const { firebase } = useContext(FirebaseContext);

  const messages = useSelector(
    (state) => state.language.messages.form_product
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
      name: "",
      description: "",
      sku: "",
      price: "",
      category: "",
      brand: "",
      featured: false,
      image: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(3, "El nombre debe tener al menos 3 letras")
        .required("El nombre es obligatorio"),
      sku: Yup.string()
        .required("El SKU es obligatorio"),
      price: Yup.number(),
      description: Yup.string(),
      image: Yup.string(),
      featured: Yup.string(),
    }),
    onSubmit: async (data) => {
      try {
        //Mandar producto a firebase
        data.image = urlImage;
        data.featured = selectedFeatured;
        data.category = selectedCategory;
        data.brand = selectedBrand;
        
        // Mandar producto a la BD  
        await addProduct({
          "name": data.name,
          "description": data.description,
          "sku": data.sku,
          "price": data.price,
          "category_id": data.category,
          "brand_id": data.brand,
          "image_preview": urlImage,
          "featured": data.featured,
        })

        closeForm(data);
        //Redireccionar
        //window.location.href = '/menu';
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
    const url = await firebase.storage
      .ref("products")
      .child(name)
      .getDownloadURL();

    await setUrlImage(url);
  };

  const closeForm = (data) => {
    submitUpdate();
    newProduct(data);
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
              value={selectedCategory}
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
              value={selectedBrand}
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
              value={selectedFeatured}
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
            onClick={handleClose}
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

export default FormProduct;
