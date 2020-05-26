import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: "258px",
    backgroundColor: "#F3F3F3",
    "&:hover": {
      backgroundColor: fade("#BFBFBF", 0.3),
    },
    marginRight: 0,
    marginLeft: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      marginLeft: theme.spacing(9),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    color: "#665C84",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#BFBFBF",
    fontWeight: "bold",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function Search() {
  const classes = useStyles();
  const messages = useSelector((state) => state.language.messages.search);

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder={messages.placeholder}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
}