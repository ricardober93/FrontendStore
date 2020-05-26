import React from "react";
import PropTypes from "prop-types";
import Alerts from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  alert: {
    padding: theme.spacing(0, 0, 2, 0),
  },
}));

export default function Alert({ title, type, content }) {
  const classes = useStyles();
  return (
    <div className={classes.alert}>
      <Alerts severity={type}>
        {title ? <AlertTitle>{title}</AlertTitle> : null}
        {content}
      </Alerts>
    </div>
  );
}

Alert.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "success", "info", "warning"]).isRequired,
};
