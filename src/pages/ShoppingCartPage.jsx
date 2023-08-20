






import React, { useEffect, useState } from 'react'
import { useProductService } from '../products/providers/ProductsProvider'
import Typography from '@mui/material/Typography'
import { Box, CardMedia, Button, Container } from '@mui/material';
import { getCartFromLocalStorage, removeItemFromCart } from '../localStorage/localStorageService';
import { useUserService } from '../users/provider/UserProvider';
import { createNewOrder } from '../products/services/productServices';
import OrderSummeryPage from './OrderSummeryPage';

export default function ShoppingCartPage() {

  const {cart,setCart} = useProductService();

  const {user} = useUserService();

  const [total,setTotal] = useState(0);

  const [err,setErr] = useState("");

  const [orderFinished,setOrderFinished] = useState(false);

  const [orderId,setOrderId] = useState(null);

useEffect(()=>{
    setTotal(0)

    cart.map((product)=>{

      return setTotal((prev)=>prev+(product.amount*product.price))})

},[cart])


  const removeItem = (itemId)  =>{

      removeItemFromCart(itemId);
      setCart(getCartFromLocalStorage());

  }




  const postNewOrder = ()=>{

    if(user){
      setErr("");
      createNewOrder({ orderDetails: [...getCartFromLocalStorage()], userName: user.name.first + " " + user.name.last, email: user.email, totalPriceNis: total }).then((res)=>
      {
        if (res.statusText==="OK") {
            setOrderFinished(true);
            setOrderId(res.data._id);
          
      }});

    }else{
      setErr("you must log in before checking out")
    }

  }

  if(orderFinished) return <OrderSummeryPage orderDetails={cart} totalPrice={total} orderId={orderId}/>

  return (
    <Container sx={{ width: "fit-content" }}>
      {cart?.map((product, i) => {
        return (
          <Box sx={{ display: "flex", height: "7vh", margin: "1vh", justifyContent: "flex-end", gap: "1vw" }} key={i}>
            <Button
              variant="outlined"
              color="error"
              sx={{ height: "fit-content", width: "2px" }}
              onClick={() => {
                removeItem(product._id);
              }}
            >
              X
            </Button>
            <Box sx={{ display: "flex", width: "30vw", justifyContent: "space-between" }}>
              <Typography variant="body1" color="initial">
                &#8362;{product.price * (product.amount ? product.amount : 1)} Amount: {product.amount ? product.amount : 1}
              </Typography>
              <Typography variant="body1" color="initial" sx={{ textAlign: "end" }}>
                {product.name}
              </Typography>
            </Box>
            <CardMedia sx={{ width: "5vw" }} component="img" src={product.imageArray[0].imageUrl} alt={product.imageArray[0].imageAlt} />
          </Box>
        );
      })}

      <Button variant="contained" color="primary" sx={{ width: "100%" ,fontWeight:"700",fontSize:"1.5rem",color:"black"}} onClick={postNewOrder} >
        Checkout &#8362;{total}
      </Button>

      <Typography variant="body1" color="initial">{err}</Typography>
    </Container>
  );
}
