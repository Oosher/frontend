






import { Box, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../products/services/productServices';
import Product from '../products/product/Product';

export default function Index() {

    const [products,setProducts] = useState([]);
    
    useEffect(()=>{
        getProducts().then((result)=>setProducts(result))
        


    },[])

    return (
    <Box sx={{bgcolor:"yellow",height:"100vh",position:"relative",display:"flex"}}>
        {products?.map((product,index)=><Container key={index}><Product product={product}/></Container>)}
    </Box>
    )
}
