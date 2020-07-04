import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: 60,
    alignContent: 'center',
    justifyContent:'center',
  },
  textProfile:{
    marginLeft: theme.spacing(2),
    display:'grid',
    alignContent:'center'
  },
  img:{
    height:60,
    borderRadius: 30,
  },
  roleProfile:{
    margin:0,
    color:'#00000'
  },
  nameProfile:{
    margin:0,
    color:'#FFFFFF',
    fontWeight:'bold'
  },
}));

export default function UserCard({name , role}) {
  const classes = useStyles();
    return (
        <section className={classes.root}>

        <div>
          <img src="static/img/user.jpg" alt="" className={classes.img}/>
        </div>

        <div className={classes.textProfile}>
          <h3 className={classes.roleProfile}> {name} </h3>
          <p className={classes.nameProfile}> {role} </p>
        </div>

      </section>
    )
}
 