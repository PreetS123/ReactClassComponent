import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
    card: {
        display: "flex",
      },
      cardDetails: {
        flex: 1,
      },
      cardMedia: {
        width: 160,
      },
});
export const PostCard = ({ post }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid item xs={12} md={6} >
        <CardActionArea component="a" href="#">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" varient="h5">
                  {post.title}
                </Typography>
                <Typography color="textSecondary" varient="subtitle1">
                  {post.date}
                </Typography>
                <Typography varient="subtitle1" paragraph>{post.description}</Typography>
                <Typography varient="subtitle1" style={{ color: "skyblue" }}>
                  Continue reading...
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia
                className={classes.cardMedia}
                image={post.image}
                title={post.imageTitle}
              />
            </Hidden>
          </Card>
        </CardActionArea>
      </Grid>
    </div>
  );
};
