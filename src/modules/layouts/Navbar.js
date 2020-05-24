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
} from "@material-ui/core";
import MobileMenu from "./MobileMenu";
import Notification from "../components/Notification";
import AvatarImage from "../components/AvatarImage";
import Search from "../components/Search";

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
  const [mobileMoreAnchorElement, setMobileMoreAnchorElementFn] = useState(
    null
  );
  const [numberOfNotifications, setNumberOfNotificationsFn] = useState(10);

  const handleMobileMenuCloseFn = () => {
    setMobileMoreAnchorElementFn(null);
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
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                aria-label="open drawer"
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
