import React from 'react'
 import {Card, CardContent,Typography,CardActions,Button} from '@mui/material';
 import { makeStyles } from '@mui/styles';


const useStyles=makeStyles({
    title:{
        fontFamily:'Monsterserrat',
        fontSize:40,
    },
    cover:{
      backgroundImage:`url(https://images.unsplash.com/photo-1605785577216-841a8b5bf826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9vbiUyMHRyZWV8ZW58MHx8MHx8&w=1000&q=80)`,
      backgroundPosition:'center',
      padding:'30px 25px'
    },
   
});

export const FeaturedPost = () => {
const classes= useStyles();
 


  return (
    <>
      
      <Card className={classes.cover}>
            <CardContent className={classes.textContainer}>
                <Typography className={classes.title} gutterBottom>Title of a long featured post</Typography>
                <Typography varient='h5'>
                    multiple lines of a text that form the lede, infracstructure quickly and efficiently about what's most inter-contents.
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.btn}>Read More...</Button>
            </CardActions>
      </Card>
    </>
  )
}
