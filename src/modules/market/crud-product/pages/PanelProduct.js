import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { Container, Typography, Box, Divider } from '@material-ui/core';
import IconInactive from '@material-ui/icons/RemoveCircleOutline';
import IconActive from '@material-ui/icons/CheckCircleOutline';
//import EnhancedTableHead from '../components/EnhancedTableHead';
import Modal from '../components/Modal';
import { stableSort, getSorting } from './tableFunctions';
import { green, red } from "@material-ui/core/colors";
import { getProducts } from '../../providers/ProductProvider';

function EnhancedTableHead(props) {
  const messages = useSelector((state) => state.language.messages.panel_products);
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const headCells = [
    {
      id: 'name',
      disableOrder: true,
      label: messages.name,
    },
    {
      id: 'description',
      disableOrder: false,
      label: messages.description,
    },
    {
      id: 'image',
      disableOrder: false,
      label: messages.image,
    },
    { id: 'featured', disableOrder: false, label: messages.featured },
    { id: 'state', disableOrder: false, label: messages.state },
    { id: 'options', disableOrder: true, label: messages.actions },
  ];

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  iconActive: {
    color: green[500],
  },
  iconInactive: {
    color: red[500],
  },
  typography: {
    margin: theme.spacing(2, 2, 2, 0),
  },
  box: {
    padding: theme.spacing(0, 2, 2, 0),
  },
  image:{
    height: 75
  }
}));

export default function PanelProduct() {
  const classes = useStyles();
  const messages = useSelector(
    (state) => state.language.messages.panel_products
  );
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("username");
  const [page, setPage] = React.useState(0);
  const dense = true; //cambiar a false para tener modificar el tamaño de la tabla
  const rowsPerPage = 5;
  const [products, setProducts] = React.useState([]);
  const [dataSuccess, setDataSucess] = React.useState(false);

  useEffect(() => {
    fetchUsersAndRoles();
  }, []);

  const fetchUsersAndRoles = async () => {
    await getProducts().then(response => {
      setProducts(response.data);
      setDataSucess(true);
    });
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProductTable = (id, updatedProduct) => {
    setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
  };

  return (
    <Container>
      <Box display={'flex'}>
        <Box margin={0}>
          <Typography
            variant={'h5'}
            style={{ marginLeft: 0 }}
            className={classes.typography}
          >
            {messages.products}
          </Typography>
        </Box>
      </Box>
      <Box display={'flex'}>
        <Box className={classes.box}>
          <Modal
            color="primary"
            titleModal={messages.new_product}
            type="addProduct"
            dataProducts={products}
            newProduct={addProduct}
          ></Modal>
        </Box>
      </Box>
      <Divider />
      {dataSuccess ? (
        <Paper className={classes.paper}>
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {stableSort(products, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((product) => {
                    return (
                      <TableRow hover tabIndex={-1} key={product.id}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.description}</TableCell>
                        <TableCell>
                          <img
                            className={classes.image}
                            src={product.image_preview}
                          />
                        </TableCell>
                        <TableCell>{product.featured ? 'SI' : 'NO'}</TableCell>
                        <TableCell>
                          {product.state_id == 3 ? (
                            <IconInactive className={classes.iconInactive} />
                          ) : (
                            <IconActive className={classes.iconActive} />
                          )}
                        </TableCell>
                        <TableCell>
                          <Modal
                            titleModal={messages.edit_product}
                            dataProduct={product}
                            type="updateProduct"
                            newProduct={updateProductTable}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            labelRowsPerPage={messages.table_pagination}
            rowsPerPageOptions={[4]}
            component="div"
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
          />
        </Paper>
      ) : null}
    </Container>
  );
}

