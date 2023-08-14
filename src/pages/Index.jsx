






import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../products/services/productServices';
import Product from '../products/product/Product';


export default function Index() {

    const [products,setProducts] = useState([]);

    
    useEffect(()=>{
        getProducts().then((result)=>setProducts(result))
            

    },[])





    if (products===[])  return  <Typography variant="body1" color="initial">No products where found found</Typography>


    return (
      <Container sx={{ position: "relative", display: "flex" }}>
        <Grid container spacing={2} direction="row-reverse">
          {products?.map((product, index) => (
            <Grid item xs={4} key={index}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
}
