import React from 'react'
 import {Card, CardContent,Typography,CardActions,Button} from '@mui/material';
 import { makeStyles } from '@mui/styles';


const useStyles=makeStyles({
    title:{
        fontFamily:'Monsterserrat',
        fontSize:40,
    },
   
});

export const FeaturedPost = () => {
const classes= useStyles();
  return (
    <>
      
      <Card className={classes.cover}>
            <CardContent className={classes.textContainer}>
                <Typography className={classes.title}>Title of a long featured post</Typography>
                <Typography varient='h5'>
                    multiple lines of a text that form the lede, infracstructure quickly and efficiently about what's most inter-contents.
                </Typography>
            </CardContent>
            <CardActions>
                <Button>Read More...</Button>
            </CardActions>
      </Card>
    </>
  )
}
