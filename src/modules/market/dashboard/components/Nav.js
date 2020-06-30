import React from "react";
import Link from 'next/link'
import { makeStyles } from "@material-ui/core/styles";
import {Grid} from "@material-ui/core/";
import { Search } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  header: {
    display: "grid",
    height: 120,
    width:'100%',
    marginRight: theme.spacing(2)
  },
  headerMenu:{
    width:500,
    display:'flex',
    alignContent:'center',
    justifyContent:'space-around',
    justifySelf:'flex-end',
    padding: theme.spacing(2.3),
    marginRight: theme.spacing(3)
  },
  mainMenu:{
    width:'50%',
    listStyle:'none',
    display:'flex',
    justifyContent:'space-around',
    alignContent:'center',
  },
  item:{
    color:'#969696',
    fontSize: '1.3em',
    textDecoration: 'none',
    textTransform: 'none',
    display:'flex',
    alignSelf:'center'
  },
  search:{
    width: '50%',
    backgroundColor: '#EAEAEA',
    borderRadius: 20,
    display:'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  searchInput:{
    border:'none',
    height: '100%',
    width:'70%',
    borderRadius: 20,
    color: '#969696',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: '#EAEAEA',
  },
  Icon: {
    height: 40,
    color: "#665C84",
  },
}));

export default function Nav() {
  const classes = useStyles();
  return (
    <Grid container className={classes.header}>
      <nav className={classes.headerMenu}>
      <div className={classes.mainMenu}>
        <Link href="#">
            <li  className={classes.item}>Home</li>
        </Link>
        <Link href="#"  >
            <li className={classes.item}>Setting</li>
        </Link>
      </div>
      <div className={classes.search}>
        <input
          className={classes.searchInput}
          type="search"
          name=""
          placeholder="Search Report"
        />
        <Search className={classes.Icon}/>
      </div>
      </nav>
      <div className="navbarResponsive">
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
    </Grid>
  );
}
