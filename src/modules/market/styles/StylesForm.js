import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  menu: {
    overflow: 'hidden',
    marginTop: '40px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  formControl: {
    minWidth: 200,
  },
  formControlUpdate: {
    minWidth: 150,
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
  },
  gridContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  gridItem: {
    marginBottom: '60px',
    marginRight: '50px',
  },
  gridImage: {
    marginBottom: '50px',
    marginTop: '28px',
  },
  gridImageProduct: {
    marginBottom: '10px',
    marginTop: '10px',
  },
  button: {
    margin: '0',
  },
  gridEnviar: {
    marginBottom: '10px',
  },
  textArea: {
    minHeight: '100px',
    maxHeight: '200px',
    minWidth: '270px',
    maxWidth: '500px',
  },
  image: {
    maxWidth: '100px',
    borderRadius: '5px',
  },
}));
