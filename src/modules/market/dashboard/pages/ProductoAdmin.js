import router from "next/router";
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
    width:'80%',
    margin: '20px auto'
  },
  table: {
    minWidth: 650,
    padding: theme.spacing(2)
  },
}));

function createData(name, stock, precio, cat, action) {
  return { name, stock, precio, cat, action };
}

const rows = [
  createData('Camisa Amarrila', 40, 25.000, 'Ropa', 'Editar'),
  createData('Zapatillas Nike', 20, 50.000, 'Zapatos', 'Editar'),
  createData('Zapatos de Cuero', 100, 16.000, 'Zapatos', 'Editar'),
  createData('Jeans Capri', 30, 35.000, 'Ropa', 'Editar'),
  createData('Zapatos Addidas', 70, 70.000, 'Zapatos', 'Editar'),
];

export default function ProductoAdmin() {
  const classes = useStyles();
  return (
    <Dashboard>
      <NabvarHome />
      <section className={classes.sectionProduct}>
        <div className={classes.flex}>
          <div className={classes.sectionTitle}>
            <h2 className={classes.title}>Productos</h2>
            <span>40 productos agregados</span>
          </div>
          <div className={classes.sectionButton}>
            <Button onClick={()=> ( router.push('/dashboard-createproduct') )} sm variant="contained" color="primary" disableElevation>
              Agregar Producto
            </Button>
          </div>
        </div>
      </section>

      {/* Table */}
      <Grid container className={classes.container} >
      <TableContainer component={Paper}>
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
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Dashboard>
  );
}
