import React from "react";
import { Card, CardActions as Actions, CardContent as Content, CardMedia as Media, CardHeader as Header, IconButton, Button, Typography, Rating } from "@mui/material";
import './style.css';

const Cards = (props) => {
  const { name, kind } = props;

  return (
    <Card className="card" style={{ backgroundColor: '#19697B' }}>
      <Media component="img" height='300' image="/img/pc.jpg" alt={props.name} />
      <Content>
        <Typography variant="h5" component="div" style={{ color: "#f6f6f6" }}>
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ color: "#F6F6F6" }}>
          {props.kind}
        </Typography>
        <Actions>
          <Rating name="read-only" value={3} readOnly />
        </Actions>
      </Content>
    </Card>
  )
}

export default Cards;
