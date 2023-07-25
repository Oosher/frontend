


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
        <Box sx={{display:"flex",flexDirection:"column",width:"60%",margin:"0 auto"}}>

            <Box sx={{display:"flex" , justifyContent:"start",gap:"5vw"}}>
                <img src={product?.imageUrl} alt={product?.imageAlt} style={{height:"40vh",width:"30vw"}}/>
                <Box sx={{marginTop:"5vh"}}>
                    <Typography variant="h3" color="initial">{product?.name}</Typography>
                    <Typography variant="body1" color="initial" sx={{marginTop:"2vh"}}>{product?.description}</Typography>


                </Box>
                
            </Box>
                    <Button variant="contained" color="info" sx={{width:"50%",alignSelf:"end"}}>
                        <ShoppingCartIcon/>
                    </Button>
        </Box>
    )
}
