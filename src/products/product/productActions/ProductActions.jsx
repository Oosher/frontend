


import { CardActions, IconButton } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductActions() {
    return (
        
        <CardActions sx={{display:"flex",justifyContent:"flex-end"}}>
            <IconButton>
                <ShoppingCartIcon/>
            </IconButton>
        </CardActions>
        
        
    )
}
