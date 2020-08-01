import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  menu: {
    overflow: "hidden",
    marginTop: "40px",
    marginBottom: "20px",
  },
  title: {
    float: "left",
  },
  button: {
    float: "right",
    textDecoration: "none",
  },
  products: {
    marginTop: "10px",
  },
  centeredParagraph: {
    textAlign: "center",
    position: "absolute",
    margin: "auto",
    top: 40,
    right: 0,
    bottom: 0,
    left: 0,
    width: "300px",
    height: "300px",
  },
}));
