import React from 'react'
import { Link }  from 'react-router-dom'
import { makeStyles, useTheme  } from "@material-ui/core/styles";
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

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
   drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function DrawerMenu (props) {
    const classes = useStyles();
    const theme = useTheme();
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
          <IconButton onClick={props.onClick}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
          <Link style={{textDecoration: 'none'}} to="/profile">
            <ListItem button >
              <ListItemIcon>
                <AccountCircleIcon /> 
              </ListItemIcon>
              <ListItemText primary={'Perfil'} />
            </ListItem>
          </Link>
          <ListItem button >
            <ListItemIcon>
              <ShoppingCartIcon /> 
            </ListItemIcon>
            <ListItemText primary={'Historial del carrito'} />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <PaymentIcon /> 
            </ListItemIcon>
            <ListItemText primary={'Métodos de Pago'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <Link style={{textDecoration: 'none'}} to="/login">
            <ListItem button >
              <ListItemIcon>
                <PersonOutlineIcon /> 
              </ListItemIcon>
              <ListItemText primary={'Cerrar Sesión'} />
            </ListItem>
          </Link>
        </List>
      </Drawer>

    )
}
