import { makeStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
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
}));
