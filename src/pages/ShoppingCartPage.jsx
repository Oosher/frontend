






import React from 'react'
import { useProductService } from '../products/providers/ProductsProvider'
import Typography from '@mui/material/Typography'
import { Box, CardMedia, Button, Container } from '@mui/material';
import { getCartFromLocalStorage, removeItemFromCart } from '../localStorage/localStorageService';

export default function ShoppingCartPage() {
  const {cart,setCart} = useProductService();




  const removeItem = (itemId)  =>{

      removeItemFromCart(itemId);
      setCart(getCartFromLocalStorage());

  }


  return (
    <Container sx={{ width: "fit-content" }}>
      {cart?.map((product, i) => (
        <Box sx={{ display: "flex", height: "5vh", margin: "1vh", justifyContent: "flex-end", gap: "1vw" }} key={i}>
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
          <Box sx={{ display: "flex", width: "23vw", justifyContent: "space-between" }}>
            <Typography variant="body1" color="initial">
              &#8362;{product.price * (product.amount ? product.amount : 1)} Amount: {product.amount ? product.amount : 1}
            </Typography>
            <Typography variant="body1" color="initial" sx={{ textAlign: "end" }}>
              {product.name}
            </Typography>
          </Box>
          <CardMedia sx={{ width: "5vw" }} component="img" src={product.imageArray[0].imageUrl} alt={product.imageArray[0].imageAlt} />
        </Box>
      ))}
    </Container>
  );
}
