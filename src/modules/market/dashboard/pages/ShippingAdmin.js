import React from "react";
import Dashboard from "../components/Dashboard";
import {
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '425px',
    maxHeight: '425px',
    minWidth: '660px',
    display: 'grid',
    gridTemplateColumns: '10fr 4fr'
  },
  col1: {
    padding: theme.spacing(2)
  },
  scroll: {
    overflowY: 'scroll',
    height: '425px'
  },
  sectionProduct: {
    width: "100%",
  },
  flex: {
    display: "flex",
    width: "100%",
    alignContent: "center",
    justifyContent: "flex-start",
    marginTop: theme.spacing(0)
  },
  sectionTitle: {
    width: "30%",
    display: "grid",
    aligContent: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
    margin: 0,
  },
  table: {
    minWidth: 650,
    padding: theme.spacing(1)
  },
  btn: {
    marginBottom: theme.spacing(2)
  },
}));

function createData(name, stock, precio, cat,) {
  return { name, stock, precio, cat, };
}

const rows = [
  createData('Camisa Amarrila', 40, 25.000, 'Ropa'),
  createData('Zapatillas Nike', 20, 50.000, 'Zapatos'),
  createData('Zapatos de Cuero', 100, 16.000, 'Zapatos'),
  createData('Jeans Capri', 30, 35.000, 'Ropa'),
  createData('Zapatos Addidas', 70, 70.000, 'Zapatos'),
];

export default function ShippingAdmin() {
  const classes = useStyles();
  return (
    <Dashboard>
      <Grid container className={classes.root} spacing={0} col={2}>
        <Grid item xs={12} md={12} className={classes.col1}>
          <Grid container className={classes.scroll} justify="center" spacing={1} col={1}>
            <Grid item>
              <section className={classes.sectionProduct}>
                <div className={classes.flex}>
                  <div className={classes.sectionTitle}>
                    <h2 className={classes.title}>Por Revisar</h2>
                    <span>40 Envios Nuevos</span>
                  </div>
                </div>
              </section>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name Producto</TableCell>
                      <TableCell align="right">Stock</TableCell>
                      <TableCell align="right">Precio</TableCell>
                      <TableCell align="right">Categoria</TableCell>
                      <TableCell align="right">Acciones</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.stock}</TableCell>
                        <TableCell align="right">{row.precio}</TableCell>
                        <TableCell align="right">{row.cat}</TableCell>
                        <TableCell align="right">revisar </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item >
              <section className={classes.sectionProduct}>
                <div className={classes.flex}>
                  <div className={classes.sectionTitle}>
                    <h2 className={classes.title}>Envios Completados</h2>
                    <span>90 Envios Exitosos este mes</span>
                  </div>
                </div>
              </section>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name Producto</TableCell>
                      <TableCell align="right">Stock</TableCell>
                      <TableCell align="right">Precio</TableCell>
                      <TableCell align="right">Categoria</TableCell>
                      <TableCell align="right">Acciones</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.stock}</TableCell>
                        <TableCell align="right">{row.precio}</TableCell>
                        <TableCell align="right">{row.cat}</TableCell>
                        <TableCell align="right"> revisar  </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.col1}>
          <div>
            <Button variant="contained" color="secondary" size="large" className={classes.btn}>
              Devoluciones
          </Button>
          </div>

          <Paper className={classes.col1}>
            <p> pedidio #234562</p>
            <p> pedidio #234562</p>
            <p> pedidio #234562</p>
          </Paper>

        </Grid>
      </Grid>
    </Dashboard>
  );
}
