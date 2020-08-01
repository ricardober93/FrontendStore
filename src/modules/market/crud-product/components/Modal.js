import React, { useState, Fragment } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Zoom,
  IconButton,
} from "@material-ui/core";
import FormUpdateProduct from "./FormUpdateProduct";
import FormProduct from "./FormProduct";
import { getProducts } from "../../providers/ProductProvider";
import EditIcon from "@material-ui/icons/Edit";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const Modal = (props) => {
  
  const [open, setOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dataProduct, setDataProduct] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setFormSubmitted(false);
    setOpen(false);
  };

  const updateSubmitted = async () => {
    setOpen(false);
    await getProducts().then(response => {
      //setDataProduct(response.data);
      setDataProduct(true);
    });
  };

  return (
    <Fragment>
      <IconButton
        edge={"start"}
        size={"medium"}
        style={{ color: "#3f51b5" }}
        onClick={handleClickOpen}
      >
        {props.type === "addProduct" ? <PersonAddIcon /> : <EditIcon />}
      </IconButton>
      {open && (
        <Dialog open={open} onClose={handleClose} TransitionComponent={Zoom}>
          <DialogContent>
            <DialogContentText>{props.titleModal}</DialogContentText>

            {props.type === "addProduct" ? (
              <FormProduct
                newProduct={props.newProduct}
                submitUpdate={updateSubmitted}
                handleClose={handleClose}
              />
            ) : (
              <FormUpdateProduct
                update={props.newProduct}
                dataProduct={props.dataProduct}
                submitUpdate={updateSubmitted}
                handleClose={handleClose}
              />
            )}
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      )}
    </Fragment>
  );
};

export default Modal;
