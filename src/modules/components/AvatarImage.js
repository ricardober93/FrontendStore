import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default function AvatarImage(props) {
  const classes = useStyles();
  return (
    <Avatar
      className={props ? props.classes : classes.small}
      alt="User name"
      src="/static/img/user.jpg"
    />
  );
}
