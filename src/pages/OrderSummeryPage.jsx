

import { Box, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'

export default function OrderSummeryPage({orderDetails,totalPrice,orderId}) {
    
    return (
    <Container sx={{marginTop:"4vh"}}>
        <Typography variant="body1" color="initial"sx={{marginBottom:"4vh"}}>Order Number: {orderId}</Typography>
        {orderDetails?.map((product)=><Box display="flex" justifyContent="space-between">
            <Typography variant="body1" color="initial">
                &#8362;{product.price * (product.amount ? product.amount : 1)} Amount: {product.amount ? product.amount : 1}
            </Typography>
            <Typography variant="body1" color="initial" sx={{ textAlign: "end" }}>
                {product.name}
            </Typography>
            
            <CardMedia sx={{ width: "5vw" }} component="img" src={product.imageArray[0].imageUrl} alt={product.imageArray[0].imageAlt} />


        </Box>)}

            <Typography variant="body1" color="initial" sx={{marginTop:"2vh"}}>Total Price:{totalPrice}</Typography>
        
    </Container>
  )
}
