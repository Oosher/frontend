


import { Badge, IconButton} from '@mui/material';
import React from 'react'
import { ShoppingCart } from "@mui/icons-material";
import { useProductService } from '../../../products/providers/ProductsProvider';
import { useNavigate } from 'react-router-dom';
import ROUTS from '../../../routes/Routs';
export default function ShoppingCartButton() {



  const navigate = useNavigate();

  const {mobile} = useProductService();

  const {cart} = useProductService();





  return (
    <IconButton onClick={()=>{navigate(ROUTS.CART)}}>
      <Badge badgeContent={cart.length} color="error" sx={{ fontSize: "3rem" }}>
        <ShoppingCart sx={{ fontSize: mobile?"3rem":"4rem" }} />
      </Badge>
    </IconButton>
  );
}
