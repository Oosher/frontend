
import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import ROUTS from '../../../routes/Routs';
import ShoppingCartButton from './ShoppingCartButton';

export default function RightNav() {
    return (
      <Box sx={{ display: "flex", gap: "1vw", alignItems: "center",width:"fit-content", marginRight: "5vw",justifyContent:"center"}}>
        <ShoppingCartButton />
        <Link to={ROUTS.LOGIN} style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="initial">
            Login
          </Typography>
        </Link>
        <Link style={{ textDecoration: "none" }} to={ROUTS.SIGNUP}>
          <Typography variant="h6" color="initial">
            SignUp
          </Typography>
        </Link>
      </Box>
    );
}
