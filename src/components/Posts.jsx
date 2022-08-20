import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import {MoreVert, Favorite, Share, ThumbUpOffAlt, ThumbUp } from '@mui/icons-material';
import React from 'react'

export default function posts() {
  return (
    <div>
        <Card sx={{margin: '5px', boxShadow: '0 3px 1px solid black', padding: '3px'}}>
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                R
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <MoreVert />
                </IconButton>
            }
            title="Mr. Nobody"
            subheader="August 20, 2022"
            />
            <CardMedia
            component="img"
            height="20%"
            image="https://cdn.nimbusthemes.com/2017/09/09233341/Free-Nature-Backgrounds-Seaport-During-Daytime-by-Pexels.jpeg"
            alt="Paella dish"
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Checkbox icon={<ThumbUpOffAlt />} checkedIcon={<ThumbUp />} />
            </IconButton>
            <IconButton aria-label="share">
                <Share />
            </IconButton>
            </CardActions>
            </Card>
    </div>
  )
}
