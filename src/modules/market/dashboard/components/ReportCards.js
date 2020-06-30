import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ViewAgenda } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  cards: {
    height: 300,
    width: 230,
    display: "grid",
    gridGap: 20,
    alignSelf: "center",
  },
  card: {
    height: 60,
    display: "flex",
    alignContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 30,
  },
  boxIcon: {
    width: 60,
    padding: 10,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "salmon",
    borderRadius: 30,
  },
  Icon: {
    height: 40,
    color: "white",
  },
  textCard: {
    padding: theme.spacing(1.5),
    display:'grid',
    gridGap:0,
    },
    text: {
      margin:0,
      fontWeight: "bold",
    },
    text2: {
      margin:0,
      fontSize:18,
      fontWeight: 'regular'
    }
}));

export default function ReportCards() {
  const classes = useStyles();
  return (
    <nav className={classes.cards}>
      <div className={classes.card}>
        <div className={classes.boxIcon}>
          <ViewAgenda className={classes.Icon} />
        </div>
        <div className={classes.textCard}>
          <p className={classes.text}>View Analitycs</p>
          <p className={classes.text2}>1</p>
        </div>
      </div>

      <div className={classes.card}>
        <div className={classes.boxIcon}>
          <ViewAgenda className={classes.Icon} />
        </div>
        <div className={classes.textCard}>
          <p className={classes.text}>Succesifuly Send</p>
          <p className={classes.text2}>120</p>
        </div>
      </div>

      <div className={classes.card}>
        <div className={classes.boxIcon}>
          <ViewAgenda className={classes.Icon} />
        </div>
        <div className={classes.textCard}>
          <p className={classes.text}>Earn month</p>
          <p className={classes.text2}>$30000</p>
        </div>
      </div>
    </nav>
  );
}
