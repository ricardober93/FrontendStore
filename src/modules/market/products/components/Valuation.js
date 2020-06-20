import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Zoom, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const Valuation = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid xs={12} sm={6}>
          <Zoom>
            <Paper elevation={4} className={classes.paper}>
              <svg className={classes.svg}>
                <polygon
                  points="0,100 50,00, 100,100"
                  className={classes.polygon}
                />
              </svg>
            </Paper>
          </Zoom>
        </Grid>
        <Grid xs={12} sm={6}>
          <Typography>DOU</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Valuation;
