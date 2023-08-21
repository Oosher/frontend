



import React, { useEffect, useState } from 'react'
import { getAllOrders } from '../products/services/productServices'
import { useUserService } from '../users/provider/UserProvider'
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material';
import { Box } from '@mui/joy';
import { useProductService } from '../products/providers/ProductsProvider';

export default function OrderManegmentPage() {

    const [allOrders,setAllOrders] = useState([])

    const {user} = useUserService();

    const {fixDate} = useProductService();

    useEffect(()=>{
        if(user){
            getAllOrders(user?.email,user?.name.first).then((res)=>setAllOrders(res.data))
        }
    },[user])

    return (
       <Container sx={{marginTop:"3vh"}}>
        {allOrders.map((order)=><Accordion key={order._id} sx={{marginBottom:"1vh"}}>
            <AccordionSummary sx={{padding:"5px",height:"fit-content",display:"flex",flexDirection:"row"}}>
                <Typography variant="body1" color="initial" sx={{width:"70%"}}>Order ID : {order._id}</Typography>
                <Typography variant="body1" color="initial">Customer Email: {order.email}</Typography>
                
            </AccordionSummary>

            <AccordionDetails sx={{width:"50vw"}}>
                <Typography variant="body1" color="initial" marginBottom="1vh">Created At: {fixDate( order.createdAt)}</Typography>
                <Typography variant="body1" color="initial" marginBottom="1vh">Customer Name: {order.userName}</Typography>
                <Typography variant="body1" color="initial" >Products Ordered:</Typography>
                {order.orderDetails.map((detail)=><Box display="flex" width="100%" justifyContent="space-between">
                    <Typography variant="body1" color="initial">Product: {detail.name}</Typography>
                    <Typography variant="body1" color="initial" sx={{textAlign:"right"}}>Amount: {detail.amount}</Typography>
                </Box>)}
                <Typography variant="body1" color="initial" marginTop="1vh">TotalPrice: {order.totalPriceNis}</Typography>
            </AccordionDetails>

        </Accordion>)}
       </Container>
    )
}
