






import { Box, Container, Typography } from '@mui/material'
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
    <Box sx={{bgcolor:"yellow",height:"100vh",position:"relative",display:"flex"}}>
        {products?.map((product,index)=><Container key={index}><Product product={product}/></Container>)}
    </Box>
    )
}
