import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const BusinessCard = ({ data }) => {
    const handleLinkedInClick = () => {
        window.open(data.Linkedin, '_blank');
    };

    const handleTwitterClick = () => {
        window.open(data.Twitter, '_blank');
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.description}
                </Typography>
                <br /><br />
                <Typography gutterBottom variant="h5">
                    Interests
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.interests}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleLinkedInClick}>LinkedIn</Button>
                <Button size="small" onClick={handleTwitterClick}>Twitter</Button>
            </CardActions>
        </Card>
    );
}

export default BusinessCard;
