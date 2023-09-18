
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import ROUTS from '../routes/Routs';
export default function ErrorPage() {
  return (
    <Container sx={{width:"80vw",marginTop:"5vh"}}>
        <Typography variant="h1" component="h1" >
            404 - Page Not Found
        </Typography>
        <Typography variant="body1" paragraph sx={{marginTop:"2vh"}}>
            The page you are looking for does not exist.
        </Typography>
        <Button
            variant="contained"
            color="primary"
            component={Link}
            to={ROUTS.ROOT}
            sx={{width:"100%",height:"12vh",fontSize:"3rem",marginTop:"25vh"}}
        
        >
        Go to Home
        </Button>
    </Container>
  )
}
