import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  Card,
  CardContent,
  Grid,
  Paper,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Language from "../../language/components/Language";

//Action de redux
import { setColorsAction } from "../store/ColorsAction";
import { updateColors } from "../../provider/CustomizationProvider";

const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(2),
  },
  root: {
    minWidth: 150,
    maxWidth: 700,
  },
  box: {
    minWidth: 200,
    maxWidth: 700,
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Color = () => {
  const currentColors = useSelector((state) => state.customization.colors);
  const messages = useSelector((state) => state.language.messages);

  const classes = useStyles();
  //state del componente
  const [colorPrimary, setColorPrimary] = useState(currentColors.colorPrimary);
  const [colorSecondary, setColorSecondary] = useState(
    currentColors.colorSecondary
  );
  const [textPrimary, setTextPrimary] = useState(currentColors.textPrimary);
  const [textSecondary, setTextSecondary] = useState(
    currentColors.textSecondary
  );

  //State de Show
  const [showColorPrimary, setShowColorPrimary] = useState(false);
  const [showColorSecondary, setShowColorSecondary] = useState(false);
  const [showTextPrimary, setShowTextPrimary] = useState(false);
  const [showTextSecondary, setShowTextSecondary] = useState(false);

  //utilizar useDispatch y te crea una funcion
  const dispatch = useDispatch();

  const onChangeColorPrimary = (color) => {
    setColorPrimary(color);
  };

  const onChangeColorSecondary = (color) => {
    setColorSecondary(color);
  };

  const onChangeTextPrimary = (color) => {
    setTextPrimary(color);
  };

  const onChangeTextSecondary = (color) => {
    setTextSecondary(color);
  };

  const openColorPrimary = () => {
    setShowColorPrimary(!showColorPrimary);
  };

  const openColorSecondary = () => {
    setShowColorSecondary(!showColorSecondary);
  };

  const openTextPrimary = () => {
    setShowTextPrimary(!showTextPrimary);
  };

  const openTextSecondary = () => {
    setShowTextSecondary(!showTextSecondary);
  };

  const onClick = () => {
    const colorPicker = {
      colorPrimary,
      colorSecondary,
      textPrimary,
      textSecondary,
    };
    // localStorage.setItem('colors', JSON.stringify(colorPicker))
    dispatch(setColorsAction(colorPicker));
    return updateColors(colorPicker);
  };

  return (
    <Card variant="outlined" className={classes.box}>
      <CardContent>
        <Grid className={classes.control} item xs={12}>
          <Card variant="outlined" className={classes.root}>
            <CardContent>
              <Grid className={classes.control} item xs={12}>
                <Grid container justify="center" spacing={2}>
                  <Grid xs={5}>
                    <br />
                    <br />
                    <br />
                    <Paper>{messages.color_primary}</Paper>
                  </Grid>
                  <Grid xs={6} item>
                    <div
                      style={{
                        backgroundColor: colorPrimary,
                        height: 100,
                        width: 100,
                        transition: "ease all 500ms",
                      }}
                    ></div>
                  </Grid>
                </Grid>
                <Grid align="center" xs={12}>
                  <br />
                  <br />
                  <Button
                    align="center"
                    variant="contained"
                    color="primary"
                    onClick={openColorPrimary}
                  >
                    {messages.color_picker_change}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <br />
          <Card variant="outlined" className={classes.root}>
            <CardContent>
              <Grid className={classes.control} item xs={12}>
                <Grid container justify="center" spacing={3}>
                  <Grid xs={5}>
                    <br />
                    <br />
                    <br />
                    <Paper>{messages.color_secondary}</Paper>
                  </Grid>
                  <Grid xs={6} item>
                    <div
                      style={{
                        backgroundColor: colorSecondary,
                        height: 100,
                        width: 100,
                        transition: "ease all 500ms",
                      }}
                    ></div>
                  </Grid>
                </Grid>
                <Grid align="center" xs={12}>
                  <br />
                  <br />
                  <Button
                    align="center"
                    variant="contained"
                    color="primary"
                    onClick={openColorPrimary}
                  >
                    {messages.color_picker_change}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <br />
          <Card variant="outlined" className={classes.root}>
            <CardContent>
              <Grid className={classes.control} item xs={12}>
                <Grid container justify="center" spacing={3}>
                  <Grid xs={5}>
                    <br />
                    <br />
                    <br />
                    <Paper>{messages.text_primary}</Paper>
                  </Grid>
                  <Grid xs={6} item>
                    <div
                      style={{
                        backgroundColor: textPrimary,
                        height: 100,
                        width: 100,
                        transition: "ease all 500ms",
                      }}
                    ></div>
                  </Grid>
                </Grid>
                <Grid align="center" xs={12}>
                  <br />
                  <br />
                  <Button
                    align="center"
                    variant="contained"
                    color="primary"
                    onClick={openColorPrimary}
                  >
                    {messages.color_picker_change}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <br />
          <Card variant="outlined" className={classes.root}>
            <CardContent>
              <Grid className={classes.control} item xs={12}>
                <Grid container justify="center" spacing={3}>
                  <Grid xs={5}>
                    <br />
                    <br />
                    <br />
                    <Paper>{messages.text_secondary}</Paper>
                  </Grid>
                  <Grid xs={6} item>
                    <div
                      style={{
                        backgroundColor: textSecondary,
                        height: 100,
                        width: 100,
                        transition: "ease all 500ms",
                      }}
                    ></div>
                  </Grid>
                </Grid>
                <Grid align="center" xs={12}>
                  <br />
                  <br />
                  <Button
                    align="center"
                    variant="contained"
                    color="primary"
                    onClick={openColorPrimary}
                  >
                    {messages.color_picker_change}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Dialog
            open={showColorPrimary}
            onClose={openColorPrimary}
            aria-labelledby="form-dialog-title"
          >
            <ChromePicker
              color={colorPrimary}
              onChangeComplete={(colorPrimary) => {
                onChangeColorPrimary(colorPrimary.hex);
              }}
            />
          </Dialog>
          <Dialog
            open={showColorSecondary}
            onClose={openColorSecondary}
            aria-labelledby="form-dialog-title"
          >
            <ChromePicker
              color={colorSecondary}
              onChangeComplete={(colorSecondary) => {
                onChangeColorSecondary(colorSecondary.hex);
              }}
            />
          </Dialog>
          <Dialog
            open={showTextPrimary}
            onClose={openTextPrimary}
            aria-labelledby="form-dialog-title"
          >
            <ChromePicker
              color={textPrimary}
              onChangeComplete={(textPrimary) => {
                onChangeTextPrimary(textPrimary.hex);
              }}
            />
          </Dialog>
          <Dialog
            open={showTextSecondary}
            onClose={openTextSecondary}
            aria-labelledby="form-dialog-title"
          >
            <ChromePicker
              color={textSecondary}
              onChangeComplete={(textSecondary) => {
                onChangeTextSecondary(textSecondary.hex);
              }}
            />
          </Dialog>
          <Grid container direction="column" className={classes.button}>
            <Grid align="right" item>
              <br />
              <br />
              <br />
              <Button
                startIcon={<SaveIcon />}
                variant="contained"
                onClick={onClick}
                color="primary"
              >
                {messages.color_picker_save}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Color;
