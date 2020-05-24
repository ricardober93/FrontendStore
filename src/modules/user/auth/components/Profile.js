import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Avatar,
  Button,
  TextField,
  Paper,
} from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 380,
    width: 260,
  },
  grid: {
    display: "flex",
    gridTemplateColumns: "1fr 1fr 1fr",
    alignContent: "center",
    justifyContent: "center",
    height: 500,
    
  },
  div: {
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    padding: theme.spacing(4),
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    marginTop: 10,
  },
  btn: {
    marginTop: 15,
  },
  palette: {
    background: green,
  },
  form: {
    "& > *": {
      margin: theme.spacing(4),
      width: "25ch",
    },
  },
}));

export default function Profile() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid
          container
          className={classes.grid}
          justify="center"
          spacing={spacing}
        >
          <Grid item>
            <Paper className={classes.paper}>
              <div className={classes.div}>
                <Typography variant="h4" colorPrimary>
                  Profile
                </Typography>
                <Avatar
                  alt="Remy Sharp"
                  src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
                  className={classes.large}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                >
                  Change Password
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.btn}
                >
                  Paid Method
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <div className={classes.paper}>
                <form className={classes.form} noValidate autoComplete="off">
                  <TextField id="standard-basic" label="Name" />
                  <TextField id="standard-basic" label="LastName" />
                  <TextField id="standard-basic" label="Email" />
                </form>
              </div>
            </Paper>
          </Grid>
          <Grid item>
            <div className={classes.paper}>
              <Button variant="contained" className={classes.palette}>
                Save changes
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
