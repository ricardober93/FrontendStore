import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  TextareaAutosize,
  Select,
  Button,
  TextField,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { addCategory } from "../../providers/CategoryProvider";
import { Alert } from "@material-ui/lab";
import { useHistory } from "react-router";
import InputForm from "../../../components/InputForm";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "grid",
    gridGap: "15px",
  },
}));

export default function FormCategory() {
  let history = useHistory();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image_url: "",
      featured: "",
      state: "",
    },
    // Yup para las validaciones
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre de la categoria es requerido"),
    }),
    onSubmit: async (values) => {
      try {
        console.log(values);
        let response = await addCategory(values);
        if (response) {
        }
      } catch (err) {
        console.warn(err);
      }
    },
  });
  return (
    <form className={classes.gridItem} onSubmit={formik.handleSubmit}>
      <FormControl>
        <TextField
          variant="outlined"
          name="name"
          label="categoria"
          placeholder="Agregar una categoria"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <Alert severity="error">{formik.errors.name}</Alert>
        ) : null}
      </FormControl>
      <FormControl>
        <TextareaAutosize
          name="description"
          rowsMax={4}
          rows={4}
          aria-label="descripcion"
          placeholder="Agregar una descripcion"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <Alert severity="error">{formik.errors.description}</Alert>
        ) : null}
      </FormControl>
      <FormControl>
        <InputForm
          name="image_url"
          type="file"
          placeholder="Agregar una imagen"
          onChange={formik.handleChange}
          value={formik.values.image_url}
        />
        {formik.touched.image_url && formik.errors.image_url ? (
          <Alert severity="error">{formik.errors.image_url}</Alert>
        ) : null}
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel id="featured">featured</InputLabel>
        <Select
          labelId="featured"
          id="featured"
          name="featured"
          value={formik.values.featured}
          onChange={formik.handleChange}
          label="featured"
        >
          <MenuItem value={false}>No</MenuItem>
          <MenuItem value={true}>si</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel id="state">State</InputLabel>
        <Select
          labelId="state"
          id="state"
          name="state"
          value={formik.values.state}
          onChange={formik.handleChange}
          label="state"
        >
          <MenuItem value="available">available</MenuItem>
          <MenuItem value="unavailable">unavailable</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Guardar Producto
      </Button>
    </form>
  );
}
