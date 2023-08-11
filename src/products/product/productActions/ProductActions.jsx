


import { CardActions, IconButton, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductActions({price,addToCart}) {




    return (
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="body1" color="initial">
            &#8362;{price}
        </Typography>
            <IconButton onClick={addToCart}>
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    );
}
