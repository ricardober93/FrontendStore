import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  MobileStepper,
  Container,
  Button,
  Avatar,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    description: "San Francisco – Oakland Bay Bridge, United States",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    description: "San Francisco – Oakland Bay Bridge, United States",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    description: "San Francisco – Oakland Bay Bridge, United States",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
    description: "San Francisco – Oakland Bay Bridge, United States",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    description: "San Francisco – Oakland Bay Bridge, United States",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
    paddingBottom: 20,
    flexGrow: 1,
    backgroundColor: '#F7F7F7 !important',
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Valuation = () => {
  const classes = useStyles();
  const theme = useTheme();
  const messages = useSelector((state) => state.language.messages.product_detail);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setTimeout(() => {
      setActiveStep(step);
    }, 3000);
  };

  return (
    <Container>
      <div className={classes.root}>
        <Typography variant="h4" component="h2">{messages.commentaries}</Typography>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <Container>
              <div align="center" key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Avatar
                    className={classes.large}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
              <div align="center">
                <Typography>{step.description}</Typography>
              </div>
            </Container>
          ))}
        </AutoPlaySwipeableViews>
      </div>
    </Container>
  );
};

export default Valuation;
