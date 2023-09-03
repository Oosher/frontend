


import { Box, CardActions, IconButton, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useUserService } from '../../../users/provider/UserProvider';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProduct } from '../../services/productServices';
import { useProductService } from '../../providers/ProductsProvider';

export default function ProductActions({price,addToCart,product}) {

  const {user} = useUserService()
  const {products,setProducts} = useProductService()

  const handleDelete = () =>{

    deleteProduct(product?._id,user?._id);
    setProducts(products?.filter((prod)=>prod._id!==product?._id))

  }

    return (
      <CardActions sx={{ display: "flex", justifyContent: "space-between" ,height:"fit-content"}}>
        <Box display="flex" alignItems="center">
          { user?.isAdmin&&<>
            <IconButton  onClick={handleDelete}>
              <DeleteIcon/>
            </IconButton>
            <IconButton>
              <EditIcon/>
            </IconButton>
          </>}
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="body1" color="initial">
            &#8362;{price}
          </Typography>
          <IconButton onClick={() => addToCart(product)} >
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </CardActions>
    );
}
