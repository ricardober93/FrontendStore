import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import AvatarImage from "../../../components/AvatarImage";
import { useSelector } from "react-redux";
import InputForm from "../../../components/InputForm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  div: {
    display: "flex",
    alignContent: "flex-center",
    justifyContent: "center",
  },
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    marginRight: 15,
  },
  text: {
    width: theme.spacing(5),
    height: 80,
  },
  form: {
    width: "100%",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  bottom: {
    display: "block",
    width: "100%",
    marginTop: 3
  },
}));

export default function Profile() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const messages = useSelector((state) => state.language.messages.profile);

  return (
    <Container maxWidth="md"style={{ padding: 30 }} >
      <Grid container className={classes.root} spacing={2}>
        <Typography variant="h4" colorPrimary style={{ marginBottom: 20 }}  >
          {messages.title}
        </Typography>
        <Grid direction="row" className={classes.div}>
          <div>
            <AvatarImage classes={classes.large} />
          </div>
          <Grid container alignItems="flex-end" classes={classes.text}>
            <div>
              <Typography variant="h5" colorPrimary>
                Carlos Martinez Solano
              </Typography>
              <Typography variant="h6" colorPrimary>
                Cmartinez@gmail.com
              </Typography>
            </div>
          </Grid>
          <Grid justify="center" alignItems="flex-end">
            <Button variant="contained" color="primary">
              {messages.btn_changes_password}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid style={{ margin: 0, padding: 0}} >
        <form className={classes.form} autoComplete="off">
          <Grid container className={classes.div} spacing={3}>
            <Grid item xs>
              <InputForm
                placeholder="Nombre"
                name="name"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
              />
              <InputForm
                placeholder="Apellido"
                name="lastname"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
              />
              <InputForm
                placeholder="email"
                name="email"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
              />
            </Grid>
            <Grid item xs>
              <InputForm
                placeholder="Telefono"
                name="movil"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
              />
              <InputForm
                placeholder="Dirección"
                name="address"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
              />
            </Grid>
          </Grid>
          <Grid container className={classes.div} spacing={3}>
            <Button
              classes={classes.bottom}
              variant="contained"
              color="primary"
            >
              {messages.btn_save_changes}
            </Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}
