import React from 'react';
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Badge } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  notificationsIcon: {
    color: "#665C84",
  },
}));

export default function Notification({ numberOfNotifications }) {
  const classes = useStyles();

  if (numberOfNotifications === 0)
    return <NotificationsIcon className={classes.notificationsIcon} />;

  return (
    <Badge badgeContent={numberOfNotifications} color="secondary">
      <NotificationsIcon className={classes.notificationsIcon} />
    </Badge>
  );
}

Notification.propTypes = {
  numberOfNotifications: PropTypes.number,
};
