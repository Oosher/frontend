



import React, { useCallback, useEffect, useState } from 'react'
import { getAllOrders, getOrderStatuses, upDateOrders } from '../products/services/productServices'
import { useUserService } from '../users/provider/UserProvider'
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography, Button } from '@mui/material';
import { Box } from '@mui/joy';
import { useProductService } from '../products/providers/ProductsProvider';

export default function OrderManegmentPage() {
    
    const [allOrders,setAllOrders] = useState([]);

    const [statuses,setStatuses ] = useState([]);

    const [filter,setFilter] = useState("Sort By")

    const {user} = useUserService();

    const {fixDate , orderStatus} = useProductService();

    useEffect(()=>{
        if(user&&allOrders?.length===0){
            
            getAllOrders(user?.email,user?.name.first).then((res)=>setAllOrders(res?.data))
        }

        if(statuses?.length===0){
            getOrderStatuses().then((res)=>setStatuses(res));
            
        }
    },[user,statuses,allOrders.length])
    

        const changeStatus = useCallback( ({target},orderId) =>{
            const index = allOrders.findIndex((order)=>orderId===order._id);
            setAllOrders((prev)=>{
                
                const updatedOrders = [...prev]
                
                if (index!==-1) {

                    updatedOrders[index].orderStatus=target.value;
                    
                }

                return updatedOrders;
        })
        
    },[allOrders]);


    const saveAllChanges = ()=>{

        upDateOrders(allOrders,user._id).then((res)=>window.location.reload());


    }

    
    const filterBySelect = ({target}) =>{

        setFilter(target.value)


        switch (target.value) {
            case "orderStatus":
                setAllOrders((prev)=>prev.sort((a,b)=>b.orderStatus.localeCompare(a.orderStatus)))
                break;
            case "priceAscending":
                setAllOrders((prev)=>prev.sort((a,b)=>a.totalPriceNis-b.totalPriceNis));
                break;
        
            case "priceDescending":
                setAllOrders((prev)=>prev.sort((a,b)=>b.totalPriceNis-a.totalPriceNis));
                break;
        
            default:
                break;
        }

    }

    return (
    <Container sx={{marginTop:"3vh"}}>
        <Typography variant="body1" color="initial">order by:</Typography> 
        <select value={filter} onChange={filterBySelect}>
            <option value="SortBy">Sort By</option>
            <option value="orderStatus">Order Status</option>
            <option value="priceAscending">Price Ascending</option>
            <option value="priceDescending">Price Descending</option>
        </select>
        <Button variant="contained" color="inherit"  sx={{display:"block",width:"17%", margin:"0 auto 20px"}} onClick={saveAllChanges} >
            Save All Changes
        </Button>
        {allOrders.map((order)=><Accordion key={order._id} sx={{marginBottom:"1vh",bgcolor:orderStatus(order.orderStatus)}}>
            <AccordionSummary sx={{padding:"5px",height:"fit-content",display:"flex",flexDirection:"row"}}>
                <Typography variant="body1" color="initial" sx={{width:"70%"}}>Order ID : {order._id}</Typography>
                <Typography variant="body1" color="initial">Customer Email: {order.email}</Typography>
                
            </AccordionSummary>

            <AccordionDetails sx={{width:"50vw"}}>
                <Typography variant="body1" color="initial" marginBottom="1vh">Created At: {fixDate( order.createdAt)}</Typography>
                <Typography variant="body1" color="initial" marginBottom="1vh">OrderStatus {}</Typography>
                <select value={order?.orderStatus} onChange={(e)=>{changeStatus(e,order._id)}}>
                    {statuses?.map((status)=><option key={status} value={status}>{status}</option>)}
                </select>
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
