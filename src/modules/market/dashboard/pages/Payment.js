import React from 'react';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Dashboard from "../components/Dashboard";
import NabvarHome from "../components/NabvarHome";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    sectionProduct: {
      width: "100%",
    },
    flex: {
      display: "flex",
      width: "100%",
      alignContent: "center",
      justifyContent: "flex-start",
      marginTop: theme.spacing(2)
    },
    sectionTitle: {
      width: "20%",
      display: "grid",
      aligContent: "center",
      justifyContent: "center",
    },
    title: {
      fontWeight: "bold",
      fontSize: "18px",
      margin: 0,
    },
    container:{
      width:'90%',
      margin: '30px auto'
    },
    table: {
      minWidth: 650,
      padding: theme.spacing(1)
    },
  }));
const rows =[
  {name: 'Carlos', producto: 'Zapatos Azules Nike', precio: 45.000, estado: 'Aprovado'},
  {name: 'Manuel', producto: 'Zapatos Amarrillos Nike', precio: 48.000, estado: 'Rechazado'}
]
export default function Payment() {
    const classes = useStyles();
    return (
      <Dashboard>
        <NabvarHome />
        <section className={classes.sectionProduct}>
          <div className={classes.flex}>
            <div className={classes.sectionTitle}>
              <h2 className={classes.title}>Payment</h2>
              <span>40 Pagos nuevos</span>
            </div>
          </div>
        </section>
        {/* Table */}
        <Grid container className={classes.container} >
        <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Producto</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.producto}</TableCell>
                        <TableCell align="right">{row.precio}</TableCell>
                        <TableCell align="right">{row.estado}</TableCell>
                      </TableRow>
                    ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
      </Dashboard>
    );
}
