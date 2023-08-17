






import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Product from '../products/product/Product';
import { useProductService } from '../products/providers/ProductsProvider';


export default function Index() {

    const { products, currentCategory } = useProductService();
    
    const [page,setPage] = useState([]);

    useEffect(()=>{
    
            if (!currentCategory) {
              setPage(products);
            }
            else{

              setPage(products?.filter((product)=>product.category===currentCategory))

            }



    },[page,products,currentCategory])





    if (products===[])  return  <Typography variant="body1" color="initial">No products where found found</Typography>


    return (
      <Container sx={{ position: "relative", display: "flex" }}>
        <Grid container spacing={2} direction="row-reverse">
          {page?.map((product, index) => (
            <Grid item xs={4} key={index}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
}
