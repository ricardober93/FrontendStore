import React from 'react'
import UserCard from './UserCard'
import ReportCards from './ReportCards'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    sidebar: {
      // position: 'fixed',
      display: "grid",
      minHeight: '609px',
      height:'100%',
      width: 300,
      alignContent: 'space-around',
      justifyContent:'center',
      backgroundColor:"#665C84",
    },
  }));

export default function Sidebar() {
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            <UserCard name="UserAdmin" role="superadmin"/>
            <ReportCards />
        </div>
    )
}
