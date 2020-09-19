import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { signInAction } from "../user/auth/store/AuthAction";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PaymentIcon from '@material-ui/icons/Payment';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';

const drawerWidth = "18%";
const drawerMinWidth = 280;
const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		minWidth: drawerMinWidth,
		background: '#665C84',
		color: 'white',
	},
	drawerHeader: {
		display: 'flex',
		color: 'white',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	colorWhite: {
		color: 'white',
		textDecoration: 'none'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		color: 'white',
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	logOut: {
		background: 'white !important',
		color: '#1b1c1e',
		textDecoration: 'none',
		borderRadius: '0 50px 0 0',
	},
	colorLogOut: {
		color: '#1b1c1e',
		textDecoration: 'none',
	}
}));

export default function DrawerMenu(props) {
	const classes = useStyles();
	const messages = useSelector((state) => state.language.messages.drawer_menu);
	const user = useSelector((state) => state.user.user);
	const theme = useTheme();
	const dispatch = useDispatch();

	const logout = () => {
		dispatch(signInAction({}));
		localStorage.removeItem('user');
	}

	return (
		<Drawer
			className={classes.drawer}
			variant={props.varient}
			anchor={props.anchor}
			open={props.open}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.drawerHeader}>
				<IconButton onClick={props.onClick} className={classes.colorWhite}>
					{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
			</div>
			<List className={classes.content}>
				{user?.role?.name ? <Link to="/profile" className={classes.colorWhite}>
					<ListItem button >
						<ListItemIcon>
							<AccountCircleIcon className={classes.colorWhite} />
						</ListItemIcon>
						<ListItemText primary={messages['profile']} />
					</ListItem>
				</Link> : null}
				{user?.role?.name === 'admin' ? <Link to="/dashboard" className={classes.colorWhite}>
					<ListItem button >
						<ListItemIcon>
							<DashboardIcon className={classes.colorWhite} />
						</ListItemIcon>
						<ListItemText primary={messages['dashboard']} />
					</ListItem>
				</Link> : null}
				{user?.role?.name ? <Link to="/cart-history" className={classes.colorWhite}>
					<ListItem button >
						<ListItemIcon>
							<ShoppingCartIcon className={classes.colorWhite} />
						</ListItemIcon>
						<ListItemText primary={messages['shopping_history']} />
					</ListItem>
				</Link> : null}
				<ListItem button >
					<ListItemIcon>
						<PaymentIcon className={classes.colorWhite} />
					</ListItemIcon>
					<ListItemText primary={messages['payment_methods']} />
				</ListItem>
			</List>
			<List className={classes.logOut}>
				{user?.role?.name ? <Link to="/login" className={classes.colorLogOut} >
					<ListItem onClick={logout} button >
						<ListItemIcon>
							<PersonOutlineIcon />
						</ListItemIcon>
						<ListItemText primary={messages['log_out']} />
					</ListItem>
				</Link> : <Link to="/login" className={classes.colorLogOut} >
						<ListItem onClick={logout} button >
							<ListItemIcon>
								<PersonOutlineIcon />
							</ListItemIcon>
							<ListItemText primary={messages['log_in']} />
						</ListItem>
					</Link>}
			</List>
		</Drawer>

	)
}
