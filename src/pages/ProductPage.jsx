


import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../products/services/productServices';
import { Box, Button, Typography } from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductPage() {

    const [product,setProduct] = useState({})
    const {id} = useParams();

    

    useEffect(()=>{

        getProduct(id).then((result)=>setProduct(result));

    },[id])

    return (
        <Box sx={{display:"flex",flexDirection:"column",width:"80%",margin:"0 auto"}}>
            <Box sx={{display:"flex" , justifyContent:"space-between",alignItems:"center"}}>
                <Typography variant="h3" color="initial">{product?.name}</Typography>
                <img src={product?.imageUrl} alt={product?.imageAlt} style={{height:"40vh"}}/>
            </Box>
            <Button variant="contained" color="info" sx={{}}>
                <ShoppingCartIcon/>
            </Button>

        </Box>
    )
}
