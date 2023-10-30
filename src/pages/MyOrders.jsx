

import React, { useEffect, useState } from 'react'
import { useUserService } from '../users/provider/UserProvider'
import { getMyOrders } from '../products/services/productServices';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Divider, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ROUTS from '../routes/Routs';
import { useProductService } from '../products/providers/ProductsProvider';

export default function MyOrders() {

    const [myOrders,setMyOrders] = useState();

    const navigate = useNavigate()
    const {user} = useUserService();
    const {fixDate,orderStatus} = useProductService();
    
    useEffect(()=>{
        if(user){
            getMyOrders(user).then((res)=>{
                if (res?.data.length !==0) {
                    setMyOrders(res?.data) 
                }
                
                })
        }

    },[user])


  



    if(!user){navigate(ROUTS.ROOT)}
    if(!myOrders) return <Container sx={{width:"fit-content",marginTop:"10vh"}}>
            <Typography variant="h1" color="initial"sx={{textAlign:"center"}}>You have no orders</Typography>
            <Button variant="contained" color="primary" sx={{width:"100%",fontSize:"1.5rem"}} onClick={()=>navigate(ROUTS.ROOT)}>
              Click Here to continue shopping
            </Button>
        </Container> 

  return (
   <Container>
    <Typography variant="h2" color="initial" sx={{textAlign:"center",marginTop:"2vh"}}>My Orders</Typography>

    {myOrders?.map((order)=><Accordion sx={{width:"100%",bgcolor:orderStatus(order.orderStatus)}} key={order._id}>
    <AccordionSummary sx={{display:"flex",justifyContent:"space-between"}} >
            <Typography variant="body1" color="initial">Order Number : {order._id}  </Typography>
            <Typography variant="body1" color="initial" sx={{marginLeft:"15%"}}>Order Status : {order.orderStatus}  </Typography>
            <Typography variant="body1" color="initial" sx={{position:"absolute",right:"20px"}}>Final Price : &#8362;{order.totalPriceNis}</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Typography variant="body1" color="initial" sx={{marginBottom:"1vh"}}>Order Date : {fixDate(order.createdAt)}</Typography>
            {order?.orderDetails.map((orderDetails)=><Box sx={{display:"flex" ,justifyContent:"space-between"}}>
                <Box  sx={{display:"flex"}}>
                    <Typography variant="body1" color="initial">Product Name: {orderDetails.name} 
                    </Typography>
                    <Divider orientation="vertical" flexItem sx={{margin:"0 10px 0px 10px"}}/>

                    <Typography variant="body1" color="initial"> Price per unit: {orderDetails.price}</Typography>
                    <Divider orientation="vertical" flexItem sx={{margin:"0 10px 0px 10px"}}/>

                    <Typography variant="body1" color="initial"> amount:{orderDetails.amount}</Typography>

                </Box>
                
                <Typography variant="body1" color="initial" > Total price: {orderDetails.amount * orderDetails.price}</Typography>
            </Box>)}
        </AccordionDetails>
    </Accordion>)}
   </Container>
  )
}
