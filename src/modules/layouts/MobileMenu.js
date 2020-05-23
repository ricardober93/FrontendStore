import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";

export default function MobileMenu({
  isMobileMenuOpen,
  quatityNotifications,
  handleProfileMenuOpenFn,
  mobileMoreAnchorEl,
  mobileMenuId,
  handleMobileMenuCloseFn,
}) {
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuCloseFn}
    >
      <MenuItem>
        <IconButton aria-label="show new notifications" color="inherit">
          {quatityNotifications ? (
            <Badge badgeContent={quatityNotifications} color="secondary">
              <NotificationsIcon />
            </Badge>
          ) : (
            <NotificationsIcon />
          )}
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpenFn}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
}