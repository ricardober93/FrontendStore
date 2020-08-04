import React from 'react';
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
import Dashboard from "../components/Dashboard";
import PanelProduct from "../../crud-product/pages/PanelProduct";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Redirect } from 'react-router'

const useStyles = makeStyles((theme) => ({
  sectionProduct: {
    width: "100%",
  },
  flex: {
    display: "flex",
    width: "100%",
    alignContent: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing(2)
  },
  sectionTitle: {
    width: "30%",
    display: "grid",
    aligContent: "center",
    justifyContent: "center",
  },
  sectionButton: {
    width: "30%",
    display: "flex",
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

export default function ProductAdmin() {
  const classes = useStyles();
  return (
    <Dashboard>
      <PanelProduct />
    </Dashboard>
  );
}
