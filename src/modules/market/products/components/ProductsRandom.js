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
		width: theme.spacing(15),
		height: theme.spacing(15),
	},
}));

const ProductsRandom = ({ productsRandom }) => {
	const classes = useStyles();
	const theme = useTheme();
	const messages = useSelector((state) => state.language.messages.product_detail);
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = productsRandom.length;

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
				<Typography variant="h4" component="h2">{messages.products_random}</Typography>
				<AutoPlaySwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={activeStep}
					onChangeIndex={handleStepChange}
					enableMouseEvents
				>
					{productsRandom.map((step, index) => (
						<Container>
							<div align="center" key={step.label}>
								{Math.abs(activeStep - index) <= 2 ? (
									<Avatar
										className={classes.large}
										src={step.image_preview}
										alt={step.name}
									/>
								) : null}
							</div>
							<div align="center">
								<Typography variant="h4" component="h2">{step.name}</Typography>
								<Typography variant="h6" component="h6"> $ {step.price}</Typography>
							</div>
						</Container>
					))}
				</AutoPlaySwipeableViews>
			</div>
		</Container>
	);
};

export default ProductsRandom;
