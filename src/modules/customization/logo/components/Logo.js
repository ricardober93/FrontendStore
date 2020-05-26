import React, { useState } from "react";
import {
  Avatar,
  InputAdornment,
  FormControl,
  Button,
  Select,
  MenuItem,
  Grid,
  TextField,
  InputLabel,
  Card,
  Typography,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { setLogoAction } from "../store/LogoAction";
import { updateLogo } from "../../provider/CustomizationProvider";
import ModalChangeLogo from "../components/ModalChangeLogo";
import TitleIcon from "@material-ui/icons/Title";
import ImageIcon from "@material-ui/icons/Image";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(2),
  },
  previewLogo: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  previewTitleLogo: {
    margin: theme.spacing(2),
  },
  previewLogoImg: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    left: theme.spacing(2),
  },
  previewCard: {
    height: 90,
  },
  title: {
    fontSize: 24,
  },
  root: {
    minWidth: 200,
    maxWidth: 700,
  },
  formControl: {
    minWidth: 350,
    maxWidth: 500,
  },
  button: {
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
}));
const Logo = () => {
  const classes = useStyles();
  const currentColors = useSelector((state) => state.customization.colors);
  const messages = useSelector((state) => state.language.messages);
  const logo_preview = useSelector((state) => state.logoPreview.logoPreview);
  const dispatch = useDispatch();

  const [submitted, setSubmitted] = useState(false);

  //States del titulo del logo
  const [titleLogo, setTitleLogo] = useState(logo_preview.logo_title);

  //states para controlar si se pinta de rojo el input ante un error
  const [titleError, setTitleError] = useState(false);
  const [titleErrorText, setTitleErrorText] = useState("");
  const [modeError, setModeError] = useState(false);
  const [modeErrorText, setModeErrorText] = useState("");

  //State de Logo
  const [logoImage, setLogoImg] = useState(logo_preview.logo);
  const [logoMode, setLogoMode] = useState(logo_preview.logo_mode);
  const [logoDisabled, setLogoDisabled] = useState(true);

  //States para controlar el modal que modifica el logotipo
  const [booleanSuccess, setBooleanSuccess] = useState(false);
  const [booleanError, setBooleanError] = useState(false);
  const [showModalLogo, setShowModalLogo] = useState(false);

  //Funciones de Logo
  const openCloseModalLogo = (event) => {
    setShowModalLogo(!showModalLogo);
    setBooleanSuccess(false);
    setBooleanError(false);
  };

  const onChangeMode = (event) => {
    let modeImage = event.target.value;
    setLogoMode(modeImage);
    setLogoDisabled(modeImage === "none" ? true : false);
  };

  const onChangeTitle = (event) => {
    let titleLogo = event.target.value;
    setTitleLogo(titleLogo);
    if (/^(?=.{16,}$)/g.test(titleLogo)) {
      setHelperText(messages.logo_title_long);
      setSubmitted(true);
    } else {
      clearHelperText();
      setSubmitted(false);
    }
  };

  const saveLogo = (event) => {
    const form = new FormData();
    if (logoMode === "none") {
      form.append("avatar", "");
      form.append("logo_mode", logoMode);
      form.append("logo_title", titleLogo);
      updateLogo(form)
        .then((response) => {
          //Seteo el logo definitivo.
          const data = JSON.stringify(response);
          localStorage.setItem("logo", data);
          dispatch(setLogoAction(response));
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      form.append("avatar", logoImage);
      form.append("logo_mode", logoMode);
      form.append("logo_title", titleLogo);
      updateLogo(form)
        .then((response) => {
          //Seteo el logo definitivo.
          const data = JSON.stringify(response);
          localStorage.setItem("logo", data);
          dispatch(setLogoAction(response));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  //Para setear o limpiar los errores en el input del titulo del logo
  const setHelperText = (text) => {
    setTitleError(true);
    setTitleErrorText(text);
  };

  const clearHelperText = () => {
    setTitleError(false);
    setTitleErrorText("");
  };

  return (
    <Grid container>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={2}
      >
        {/*TITULO LOGO*/}
        <Grid item xs={12} sm={4}>
          <TextField
            helperText={titleErrorText}
            error={titleError}
            name="logo-name"
            type="string"
            fullWidth
            id="logo-name"
            label={messages.logo_title_title}
            placeholder={messages.logo_title_example + ": " + titleLogo}
            onChange={onChangeTitle}
            className={classes.formControl}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TitleIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        {/*SELECCIONAR MODO LOGO*/}
        <Grid item xs={12} sm={4}>
          <FormControl className={classes.formControl}>
            <InputLabel id="select-required-label">
              {messages.logo_variant_title}
            </InputLabel>
            <Select value={logoMode} onChange={onChangeMode}>
              <MenuItem value="circle">{messages.logo_variant_circle}</MenuItem>
              <MenuItem value="rounded">
                {messages.logo_variant_rounded}
              </MenuItem>
              <MenuItem value="square">{messages.logo_variant_square}</MenuItem>
              <MenuItem value="none">{messages.logo_variant_none}</MenuItem>
            </Select>
            {modeError ? (
              <FormHelperText error={modeError}>{modeErrorText}</FormHelperText>
            ) : null}
          </FormControl>
        </Grid>
        {/*BOTON MODIFICAR LOGO*/}
        <Grid item xs={12} sm={4}>
          <Button
            align="center"
            variant="contained"
            color="primary"
            startIcon={<ImageIcon />}
            onClick={openCloseModalLogo}
          >
            {messages.logo_change_button}
          </Button>
          <ModalChangeLogo
            logoMode={logoMode}
            titleLogo={titleLogo}
            setLogoImg={setLogoImg}
            titleModal={messages.logo_change_modal_title}
            booleanError={booleanError}
            setBooleanError={setBooleanError}
            setBooleanSuccess={setBooleanSuccess}
            booleanSuccess={booleanSuccess}
            openCloseModalLogo={openCloseModalLogo}
            showModalLogo={showModalLogo}
          />
        </Grid>
        {/*SECCION VISTA PREVIA*/}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">{messages.logo_preview}</Typography>
          <Card
            className={classes.previewCard}
            style={{ backgroundColor: currentColors.colorPrimary }}
          >
            <br />
            <Grid container spacing={2}>
              <Grid className={classes.previewLogo} item xs={2}>
                {!logoDisabled ? (
                  <Avatar
                    src={logo_preview.logo}
                    variant={logoMode}
                    className={classes.previewLogoImg}
                  />
                ) : null}
              </Grid>
              <Grid item xs={8}>
                <Typography
                  style={{ color: currentColors.textPrimary }}
                  variant="h5"
                  className={classes.previewTitleLogo}
                >
                  {titleLogo}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      {/*BOTON SALVAR*/}
      <Grid
        container
        direction="column"
        justify="flex-end"
        alignItems="flex-end"
      >
        <Grid item className={classes.button}>
          <Button
            onClick={saveLogo}
            disabled={submitted}
            startIcon={<SaveIcon />}
            variant="contained"
            color="primary"
          >
            {messages.color_picker_save}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Logo;
