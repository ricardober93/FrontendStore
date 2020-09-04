import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  FormControl,
  TextareaAutosize,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";
import InputForm from "../../../components/InputForm";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "90px",
    width: "100%",
    alignContent: "center",
    justifyContent: "flex-start",
    padding: "2em 9em",
  },
  gridItem: {
    display: 'grid',
    gridGap: '15px'
  }
}));
export default function FormAddProduct() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "",
      desription: "",
      marca: '',
      categoria: '',
      SKU: "",
      stock: 0,
      precio: 0,
      imagenPrev: "",
      images: [],
    },
    // Yup para las validaciones
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es requerido"),
      desription: Yup.string().required("la descricipcion es requerida"),
    }),
    onSubmit: async (values) => {
      try {
        console.log(values);
      } catch (err) {
        console.warn(err);
      }
    },
  });
  return (
    <form>
      <section className={classes.gridContainer}>
        <Grid item className={classes.gridItem}>
          <FormControl>
            <InputForm
              name="name"
              placeholder="Agregar el titulo de tu procuto"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </FormControl>
          <FormControl>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Empty"
              rowsMax={10}
              rows={7} />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel id="categoria">Categoria</InputLabel>
            <Select
              labelId="categoria"
              id="categoria"
              value={formik.values.categoria}
              label="Categoria"
            >
              <MenuItem value={'Jeans'}>Jeans</MenuItem>
              <MenuItem value={'Zapatos'}>Zapatos</MenuItem>
              <MenuItem value={'Camisas'}>Camisas</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel id="marca">Marca</InputLabel>
            <Select
              labelId="marca"
              id="Marca"
              value={formik.values.marca}
              label="Marca"
            >
              <MenuItem value={'Addidas'}>Addidas</MenuItem>
              <MenuItem value={'Leviton'}>Leviton</MenuItem>
              <MenuItem value={'laKoste'}>laKoste</MenuItem>
            </Select>
          </FormControl>

        </Grid>
        <Grid item className={classes.gridItem}>
          <FormControl>
            <InputForm
              name="SKU"
              placeholder="Agregar el SKU de tu procuto"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.SKU}
            />
          </FormControl>
          <FormControl>
            <InputForm
              name="stock"
              type="number"
              placeholder="Agregar la cantidad del procuto"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.stock}
            />
          </FormControl>
          <FormControl>
            <InputForm
              name="precio"
              type="number"
              placeholder="Agregar el precio de tu producto"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.precio}
            />
          </FormControl>
          <Button variant="contained" color="primary" > Guardar Producto </Button>
        </Grid>
      </section>
    </form>
  );
}
