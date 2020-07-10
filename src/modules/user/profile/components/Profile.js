import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, TextField, Card, InputAdornment, Button } from "@material-ui/core";
import AvatarImage from "../../../components/AvatarImage";
import HouseIcon from "@material-ui/icons/House";
import { useSelector } from "react-redux";
import InputForm from "../../../components/InputForm";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

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
  const user = useSelector((state) => state.user.user);
  const [address, setAddress] = useState("");

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const coords = await getLatLng(results[0]);
  };

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
                {capitalize(user.name)} {capitalize(user.lastname)}
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
                value={user.name}
              />
              <InputForm
                placeholder="Apellido"
                name="lastname"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                value={user.lastname}
              />
              <InputForm
                placeholder="email"
                name="email"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                value={user.lastname}
              />
            </Grid>
            <Grid item xs>
              <InputForm
                placeholder="Telefono"
                name="movil"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                value={user.phone}
              />
              <Typography>Direccion</Typography>
              <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <Grid item>
                    <TextField
                      label={messages.form_label_address}
                      fullWidth
                      {...getInputProps()}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <HouseIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Grid item>
                      {loading ? <Card>...loading</Card> : null}

                      {suggestions.map((suggestion) => {
                        const style = {
                          backgroundColor: suggestion.active
                            ? "#41b6e6"
                            : "#ffffff",
                        };
                        return (
                          <Card
                            {...getSuggestionItemProps(suggestion, { style })}
                          >
                            {suggestion.description}
                          </Card>
                        );
                      })}
                    </Grid>
                  </Grid>
                )}
              </PlacesAutocomplete>
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
