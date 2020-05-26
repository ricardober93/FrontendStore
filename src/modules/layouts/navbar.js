import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
} from "@material-ui/core";// componente de Notificacion
import Notification from "../components/Notification";
// componetne de Avatar
import AvatarImage from "../components/AvatarImage";
// componente de busquedas
import Search from "../components/Search";
// componetne de MoblieMenu
import MobileMenu from "./MobileMenu";
// componente de Drawer
import DrawerMenu from "./DrawerMenu";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    color: "white",
  },
  navbar: {
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#665C84",
  },
  title: {
    color: "#665C84",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
    },
  },
  cart: {
    overflow: "auto",
    width: "auto",
    padding: 0,
    margin: 0,
    marginRight: "20px",
    [theme.breakpoints.down(600)]: {
      display: "none",
    },
  },
  cartText: {
    display: "inline-block",
    padding: "1px 8px",
    margin: 0,
    marginTop: "10px",
    marginRight: "4px",
    float: "right",
    borderRadius: "258px",
    backgroundColor: "#F3F3F3",
    color: "#BFBFBF",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "16px",
    [theme.breakpoints.down(600)]: {
      display: "none",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    color: "#665C84",
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpenFn] = useState(false);
  const [numberOfNotifications, setNumberOfNotificationsFn] = useState(10);
  const [mobileMoreAnchorElement, setMobileMoreAnchorElementFn] = useState(0);

  const handleDrawerOpenandCloseFn = () => {
    setOpenFn(!open);
  };

  const handleMobileMenuCloseFn = () => {
    setMobileMoreAnchorElementFn(0);
  };

  const handleMobileMenuOpenFn = (e) => {
    setMobileMoreAnchorElementFn(e.currentTarget);
  };
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <>
      <CssBaseline />
      <div className={classes.grow}>
        <AppBar className={classes.navbar} position="static">
          <Container>
            <div className={classes.cart}>
              <p className={classes.cartText}>Calle 4 No. 65-13, Valledupar</p>
            </div>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                aria-label="open drawer"
                onClick={handleDrawerOpenandCloseFn}
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                E-Commerce
              </Typography>
              <Search />
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton aria-label="cart">
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton aria-label="show new notifications">
                  <Notification numberOfNotifications={numberOfNotifications} />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                >
                  <AvatarImage />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpenFn}
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
        <DrawerMenu
          variant="temporary"
          anchor="left"
          open={open}
          onClick={handleDrawerOpenandCloseFn}
        />
        <MobileMenu
          mobileMenuId={mobileMenuId}
          numberOfNotifications={numberOfNotifications}
          mobileMoreAnchorElement={mobileMoreAnchorElement}
          handleMobileMenuCloseFn={handleMobileMenuCloseFn}
        />
      </div>
    </>
  );
}
