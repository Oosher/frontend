




import { IconButton, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import ROUTS from '../../../routes/Routs';


export default function LeftNav() {
    return (
        <Toolbar>
            <Link to={ROUTS.ROOT} style={{color:"black"}}>
                <IconButton>
                    <HomeIcon/>
                </IconButton>
            </Link>
            <MenuItem>
                <Link to={ROUTS.PAGE2}>
                    <Typography variant="body1" color="initial">products</Typography>
                </Link>
            </MenuItem>
        
        </Toolbar>
    )
}
