import React from "react";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Notification from "../components/Notification";
import AvatarImage from "../components/AvatarImage";
import PropType from "prop-types";
import { useSelector } from "react-redux";

export default function MobileMenu({
  mobileMenuId,
  numberOfNotifications,
  mobileMoreAnchorElement,
  handleMobileMenuCloseFn,
}) {
  const isMobileMenuOpen = Boolean(mobileMoreAnchorElement);
  const messages = useSelector((state) => state.language.messages.mobile_menu);

  return (
    <Menu
      anchorEl={mobileMoreAnchorElement}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuCloseFn}
    >
      <MenuItem>
        <IconButton aria-label="show new notifications" color="inherit">
          <ShoppingCartIcon style={{ color: "#665C84" }} />
        </IconButton>
        <p>{messages.cart}</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show new notifications" color="inherit">
          <Notification numberOfNotifications={numberOfNotifications} />
        </IconButton>
        <p>{messages.notifications}</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AvatarImage />
        </IconButton>
        <p>{messages.profile}</p>
      </MenuItem>
    </Menu>
  );
}

MobileMenu.propTypes = {
  mobileMenuId: PropType.string.isRequired,
  numberOfNotifications: PropType.number.isRequired,
  mobileMoreAnchorElement: PropType.number.isRequired,
  handleMobileMenuCloseFn: PropType.func.isRequired,
};
