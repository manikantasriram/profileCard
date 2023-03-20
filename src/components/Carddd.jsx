import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IconButton } from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Carddd = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h1" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Frontend Developer
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton>
        <a href="mailto:manikantasriram98@gmail.com" target="_blank" rel="noreferrer">
        <MailIcon sx={{ fontSize: 40 }} color="primary" />
        </a>
        </IconButton>
        <IconButton>
        <a href="https://github.com/manikantasriram" target="_blank" rel="noreferrer">
        <GitHubIcon sx={{ fontSize: 40 }} color="primary" />
        </a>
        </IconButton>
        <IconButton>
        <a href="https://www.linkedin.com/in/manekanttasriram/" target="_blank" rel="noreferrer">
        <LinkedInIcon sx={{ fontSize: 40 }} color="primary" />
        </a>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Carddd