import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, TextField, Card, InputAdornment, Button, Input, InputLabel, IconButton, Modal } from "@material-ui/core";
import AvatarImage from "../../../components/AvatarImage";
import HouseIcon from "@material-ui/icons/House";
import EditIcon from '@material-ui/icons/Edit';
import { useSelector, useDispatch } from "react-redux";
import InputForm from "../../../components/InputForm";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { updateUser } from "../../providers/UserProvider";
import { updateUserAction } from "../../auth/store/AuthAction";
import ModalPassword from './ModalPassword';

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
  textInput: {
    color: '#000000',
    fontSize: 20,
    marginTop: '5%'
  },
  iconEditProfile: {
    position: 'absolute',
    display: 'none',
    marginRight: 50,
    marginTop: '20%'
  }
}));

export default function Profile() {
  const dispatch = useDispatch()
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const messages = useSelector((state) => state.language.messages.profile);
  const userRedux = useSelector((state) => state.user);
  // const [address, setAddress] = useState("");

  const { user } = userRedux;
  const formik = useFormik({
    initialValues: {
      id: user._id,
      name: user?.name,
      lastname: user?.lastname,
      email: user?.email,
      phone: user?.phone,
      address: user?.address
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Required'),
      lastname: Yup.string()
        .required('Required'),
      email: Yup.string()
        .required('Required'),
      phone: Yup.number(),
      address: Yup.string()
    }),
    onSubmit: async (values) => {
      try {
        let response = await updateUser(values);
        dispatch(updateUserAction(response.data));
        let auth = {
          user: response.data,
          token: userRedux.token
        }
        localStorage.setItem('user', JSON.stringify(auth));
      } catch (error) {
        console.error(error);
      }
    }
  })


  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const coords = await getLatLng(results[0]);
  };

  return (
    <Container maxWidth="md" style={{ padding: 30 }} >
      <Grid container className={classes.root} spacing={2}>
        <Typography variant="h4" colorPrimary style={{ marginBottom: 20 }}  >
          {messages.title}
        </Typography>
        <Grid sm={12} xs={12} direction="row" className={classes.div}>
          <Grid sm={2}>
            <Button>
              <AvatarImage classes={classes.large} />
            </Button>
          </Grid>
          <Grid container alignItems="flex-end" classes={classes.text}>
            <div>
              <Typography variant="h5" colorPrimary>
                {capitalize(user.name)} {capitalize(user.lastname)}
              </Typography>
              <Typography variant="h6" colorPrimary>
                {user.email}
              </Typography>
            </div>
          </Grid>
          {!user?.google_id ? <Grid justify="center" alignItems="flex-end">
            <ModalPassword />
          </Grid> : null}
        </Grid>
      </Grid>
      <Grid xs={12} style={{ margin: 0, padding: 0 }} >
        <form onSubmit={formik.handleSubmit} className={classes.form} autoComplete="off">
          <Grid container className={classes.div} spacing={3}>
            <Grid xs={12} item xs>
              <Grid xs={12}>
                <InputLabel className={classes.textInput}><strong>Nombre</strong></InputLabel>
                <InputForm
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
              </Grid>
              <Grid xs={12}>
                <InputLabel className={classes.textInput}><strong>Correo</strong></InputLabel>
                <InputForm
                  placeholder="ejemplo@gmail.com"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </Grid>
              <Grid xs={12}>
                <InputLabel className={classes.textInput}><strong>Dirección</strong></InputLabel>
                <InputForm
                  name="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
                {/*<PlacesAutocomplete
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
                      <InputForm
                        label={messages.form_label_address}
                        {...getInputProps()}
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
                </PlacesAutocomplete>*/}
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid xs={12}>
                <InputLabel className={classes.textInput}><strong>Apellido</strong></InputLabel>
                <InputForm
                  name="lastname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                />
                {formik.touched.lastname && formik.errors.lastname ? (
                  <div>{formik.errors.lastname}</div>
                ) : null}
              </Grid>
              <Grid xs={12}>
                <InputLabel className={classes.textInput}><strong>Teléfono</strong></InputLabel>
                <InputForm
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} container className={classes.div} spacing={3}>
            <Button
              classes={classes.bottom}
              variant="contained"
              color="primary"
              type="submit"
            >
              {messages.btn_save_changes}
            </Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}
