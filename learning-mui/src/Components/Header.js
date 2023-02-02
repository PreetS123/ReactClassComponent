import React from 'react';
import {Toolbar,Divider,IconButton,Typography,Badge} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
// import classes from '*.module.css';
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({
    title:{
        flexGrow:1,
    },
    tagline:{
        fontSize:20,
        textTransform:"uppercase",
        justifyContent:'center',
        fontFamily:'Monsterrat'
    },
});



export const Header = () => {
    const classes= useStyles();

  return (
    <>
    <Toolbar>
        <IconButton color='inherit'>
            <MenuIcon/>
        </IconButton>
        <Typography varient='h6' className={classes.title}>Blogging Website</Typography>
        <IconButton color='inherit'>
           <NotificationsIcon/>
        </IconButton>
        <IconButton color='inherit'>
            <AccountCircleIcon/>
        </IconButton>
        <Badge badgeContent={4} color="primary">
  <MailIcon color="action" />
</Badge>
    </Toolbar>
    <Divider/>
    <Toolbar className={classes.tagline}>
        Express your emotions through words
    </Toolbar>
    </>
  )
}
