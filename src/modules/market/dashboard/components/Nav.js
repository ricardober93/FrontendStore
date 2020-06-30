import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "grid",
    height: 120,
    width:'100%',
    alignContent: 'center',
    justifyContent:'center',
  },
  headerMenu:{
    width:500,
    display:'flex',
    alignContent:'space-around'
  }
}));

export default function Nav() {
  const classes = useStyles();
  return (
    <nav className={classes.header}>
      <ul className={classes.headerMenu}>
        <li className="items">
          <a className="item active" href="#home">
            Home
          </a>
        </li>
        <li className="items">
          <a className="item" href="#setting">
            Setting
          </a>
        </li>
      </ul>
      <div className="search">
        <input
          className="search__input"
          type="search"
          name=""
          placeholder="&nbsp; Search Report"
        />
        <i className="fas fa-search"></i>
      </div>
      <div className="navbar-responsive">
          <label id="non-display" for="toggle-main">
            <i className="fas fa-bars"></i>
          </label>
          <input type="checkbox" id="toggle-main" />
          <nav className="main__navigation">
            <a className="nav__link active" href="#overview">
              Overview
            </a>
            <a className="nav__link" href="#products">
              Products
            </a>
            <a className="nav__link" href="#shipping">
              Shipping
            </a>
            <a className="nav__link" href="#payment">
              Payment
            </a>
          </nav>
        </div>
    </nav>
  );
}
