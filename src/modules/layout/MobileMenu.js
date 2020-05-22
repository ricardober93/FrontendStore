import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { IconButton, Badge, MenuItem, Menu, Avatar } from "@material-ui/core";

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
          <Avatar alt="User name" src="/static/img/1.jpg" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
}
