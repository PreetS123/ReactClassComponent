import { Divider, Grid, Typography } from '@mui/material'
import React from 'react';
import { posts } from "../Data/Data";
import Markdown from "markdown-to-jsx";
 

export const Main = ({title}) => {
    
  return (
    <Grid item xs={12} md={8}>
        <Typography varient='h5' gutterBottom>{title}
        </Typography> 
        <Divider/>
        {
            posts.map(post=>(
                <Markdown key={post.body}>{post.body}</Markdown>
            ))
        }
    </Grid>
    )
}
