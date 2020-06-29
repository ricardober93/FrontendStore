import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      textAlign: 'center',
      padding: '3px',
      backgroundColor: 'DarkSalmon',
      color: 'white'
    },
  });

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <p>Author: Hege Refsnes
            <a href="mailto:hege@example.com">hege@example.com</a></p>
        </footer>
    )
}
