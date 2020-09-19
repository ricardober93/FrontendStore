import React from 'react';
import Dashboard from "../components/Dashboard";
import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent
} from "@material-ui/core";
import LocalAtmIcon from '@material-ui/icons/LocalAtm';


const useStyles = makeStyles({
  root: {
    maxWidth: 330,
    marginTop: '8%',
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)'
  },
  ajuste: {
    maxWidth: 180,
    borderRadius: '5%',
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)'
  },
  ajuste2: {
    maxWidth: 180,
    borderRadius: '5%',
    background: '#7d2181'
  },
  medio: {
    height: 200,
  },
  media: {
    height: '100%',
    width: '100%'
  },
});

export default function OverView() {
  const classes = useStyles();
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 20, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    })
  }

  useEffect(() => {
    chart()
  }, []);

  return (

    <Dashboard>
      <Container>
        <Grid container>
          <Grid xs={6} sm={6}>
            <Grid container>
              <Grid xs={6} sm={6}>
                <Card className={classes.ajuste2}>
                  <CardActionArea>
                    <CardContent>
                      <LocalAtmIcon style={{ fontSize: '400%', color: 'white' }} />
                      <Typography className={classes.medio} gutterBottom variant="h3" component="h2">
                        $ 9M
                        </Typography>
                      <Typography variant="body2" color="textPrimary " component="p">
                        VENDIDA
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid xs={6} sm={6}>
                <Card className={classes.ajuste}>
                  <CardActionArea>
                    <CardContent>
                      <Typography className={classes.medio} gutterBottom variant="h3" component="h2">
                        $ 8M
                        </Typography>
                      <Typography variant="body2" color="textPrimary" component="p">
                        VENDIDA
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid xs={12} sm={12}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardContent>
                      <Typography className={classes.media} gutterBottom variant="h5" component="h2">
                        Ejemplo
                        </Typography>
                      <Typography variant="body2" color="textPrimary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>


          <Grid xs={6} sm={6} style={{ height: '100%', width: '100%' }}>
            <Bar data={chartData} options={{
              responsive: true,
              title: { text: 'Dias de semana', display: true },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true
                    },

                  }
                ],

              }

            }} />
          </Grid>
        </Grid>
      </Container>
    </Dashboard>
  );
}
