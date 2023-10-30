

import { Box, CardMedia, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { clearShoppingCart, getCartFromLocalStorage } from '../localStorage/localStorageService';
import { useProductService } from '../products/providers/ProductsProvider';

export default function OrderSummeryPage({orderDetails,totalPrice,orderId}) {
   const {setCart} = useProductService();

   const [orders,setOrders] = useState([]);
    const [price,setPrice] = useState(0);
    useEffect(()=>{
        if (orderDetails.length!==0) {
            setOrders(orderDetails);
            setPrice(totalPrice);
            clearShoppingCart();
            setCart(getCartFromLocalStorage());     
        }
        

    },[orderDetails,setCart,totalPrice])
    return (
    <Container sx={{marginTop:"4vh"}}>
        <Typography variant="body1" color="initial"sx={{marginBottom:"4vh"}}>Order Number: {orderId}</Typography>
        {orders?.map((product)=><Box display="flex" width="100%" justifyContent="space-between" alignItems="center">
            <Typography variant="body1" color="initial" width="15%" >
                &#8362;{product.price * (product.amount ? product.amount : 1)} Amount: {product.amount ? product.amount : 1}
            </Typography>

                <Typography variant="body1" color="initial">
                    {product.name}
                </Typography>
            
            <CardMedia sx={{ width: "5vw" }} component="img" src={product.imageArray[0].imageUrl} alt={product.imageArray[0].imageAlt} />


        </Box>)}

            <Typography variant="body1" color="initial" sx={{marginTop:"2vh"}}>Total Price:{price}</Typography>
        
    </Container>
  )
}
