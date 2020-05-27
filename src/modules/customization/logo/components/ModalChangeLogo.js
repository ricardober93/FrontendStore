import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
  Input,
} from "@material-ui/core";
import Alert from "../../../components/Alert";
import { useDispatch } from "react-redux";
import { setLogoPreviewAction } from "../store/LogoPreviewAction";
import { updateLogoPreview } from "../../provider/CustomizationProvider";

const ModalChangeLogo = (props) => {
  const messages = useSelector((state) => state.language.messages);

  const [msgValidation, setMsgValidation] = useState("");
  const [image, setImage] = useState("");
  const [logoSubmitted, setLogoSubmitted] = useState(false);

  const dispatch = useDispatch();

  const resolutionError = messages.modal_change_logo_resolution_error;
  const formatError = messages.modal_change_logo_format_error;
  const sizeError = messages.modal_change_logo_size_error;
  const successImage = messages.modal_change_logo_success_image;
  const emptyErrorFile = messages.modal_change_logo_empty_error_file;

  const onChangeAvatar = (e) => {
    const fileImage = e.target.files[0];
    props.setBooleanError(false);
    setImage(fileImage);
    resolutionValidator(fileImage);
    validationBrowserImage();
    validationExtensionImage(fileImage);
    validationSizeImage(fileImage);
  };

  const resolutionValidator = (fileImage) => {
    if (fileImage) {
      var height = 0;
      var width = 0;
      var _URL = window.URL || window.webkitURL;
      var img = new Image();
      img.onload = function () {
        height = img.height;
        width = img.width;
        if (width > 500 || height > 500) {
          setMsgValidation(resolutionError);
          props.setBooleanError(true);
        }
      };
      img.src = _URL.createObjectURL(fileImage);
    } else {
      props.setBooleanError(false);
    }
  };

  const validationBrowserImage = () => {
    if (!window.FileReader) {
      setMsgValidation(messages.modal_change_logo_not_support);
      props.setBooleanError(true);
      return;
    }
  };

  const validationExtensionImage = (fileImage) => {
    if (fileImage) {
      if (!/\.(jpg|png|jpeg)$/i.test(fileImage.name)) {
        setMsgValidation(formatError);
        props.setBooleanError(true);
      }
    } else {
      props.setBooleanError(false);
    }
  };

  const validationSizeImage = (fileImage) => {
    if (fileImage) {
      if (fileImage.size > 2000000) {
        setMsgValidation(sizeError);
        props.setBooleanError(true);
      }
    }
  };

  const booleanValidationSubmit = () => {
    props.setBooleanSuccess(true);
  };

  const onSubmitAvatar = (event) => {
    event.preventDefault();
    if (!image) {
      props.setBooleanError(true);
      setMsgValidation(emptyErrorFile);
    } else {
      if (!props.booleanError) {
        const form = new FormData();
        form.append("avatar", image);
        form.append("logo_title", props.titleLogo);
        form.append("logo_mode", props.logoMode);
        updateLogoPreview(form)
          .then((response) => {
            //Seteo el logo UNICAMENTE en Vista Previa
            const data = JSON.stringify(response);
            localStorage.setItem("logo_preview", data);
            dispatch(setLogoPreviewAction(response));
            setMsgValidation(successImage);
            props.setLogoImg(image);
            setLogoSubmitted(true);
            booleanValidationSubmit(true);
          })
          .catch((error) => {
            setMsgValidation(error.msg);
            console.error(error);
          });
      } else {
        setMsgValidation(resolutionError);
      }
    }
    setImage("");
  };

  const buttonCloseModal = () => {
    props.openCloseModalLogo();
    props.setBooleanSuccess(false);
    setImage("");
    setLogoSubmitted(false);
  };

  return (
    <Fragment>
      <Dialog open={props.showModalLogo} onClose={props.openCloseModalLogo}>
        <DialogContent style={{ overflow: "hidden" }}>
          <DialogContentText>{props.titleModal}</DialogContentText>
          <form onSubmit={onSubmitAvatar}>
            {props.booleanError && (
              <Alert type={"error"} content={msgValidation} />
            )}
            {props.booleanSuccess ? (
              <Alert type={"success"} content={msgValidation} />
            ) : (
              <Grid
                container
                spacing={2}
                style={{ marginBottom: 2, padding: 10 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Input
                      type="file"
                      name="avatar"
                      onChange={(e) => onChangeAvatar(e)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
            <br />
            <Grid style={{ marginLeft: "right" }}>
              {!logoSubmitted ? (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={
                    props.booleanError || props.booleanSuccess ? true : false
                  }
                  style={{ marginRight: 5 }}
                >
                  {messages.modal_change_logo_save}
                </Button>
              ) : null}
              <Button
                variant="outlined"
                onClick={buttonCloseModal}
                color="primary"
              >
                {messages.modal_change_logo_exit}
              </Button>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default ModalChangeLogo;
