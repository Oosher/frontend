
import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import ROUTS from '../../../routes/Routs';

export default function RightNav() {
    return (
      <Box sx={{ display: "flex", gap: "1vw", alignItems: "center", marginRight: "2vw" }}>
        <Link to={ROUTS.LOGIN} style={{ textDecoration: "none" }}>
          <Typography  variant="h6" color="initial">
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
