

import { Container, Grid } from '@mui/material'
import React from 'react'
import { useProductService } from '../products/providers/ProductsProvider'
import Product from '../products/product/Product';

export default function LikedProducts() {

    const {likedItems} = useProductService();

  return (
<Container sx={{display:"flex",flexDirection:"column"}}>
    <Grid container direction="column">
        {likedItems.map((prod)=><Grid item key={prod.name}><Product product={prod} /></Grid>)}
    </Grid> 

</Container>
  )
}
