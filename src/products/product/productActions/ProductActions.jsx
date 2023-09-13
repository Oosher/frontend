


import { Box, CardActions, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useUserService } from '../../../users/provider/UserProvider';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProduct } from '../../services/productServices';
import { useProductService } from '../../providers/ProductsProvider';
import { useNavigate } from 'react-router-dom';
import ROUTS from '../../../routes/Routs';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { getLikedProducts, removeLikedProduct, saveProductToLocalStorage } from '../../../localStorage/localStorageService';

export default function ProductActions({price,addToCart,product}) {

  const [isLiked , setIsLiked] = useState(false);
  const {user} = useUserService()
  const {products,setProducts,likedItems,setLikedItems} = useProductService();
  const navigate = useNavigate();
  

  useEffect(()=>{
    if (likedItems.findIndex(prod=>prod.name===product.name)===-1){
      setIsLiked(false);
    }
    else{
      setIsLiked(true);
    }
  },[likedItems,product.name])


  
  const handleDelete = () =>{

    deleteProduct(product?._id,user?._id);
    setProducts(products?.filter((prod)=>prod._id!==product?._id))

  }

  const handleLike= async()=>{


    if (likedItems.findIndex(prod=>prod.name===product.name)===-1) {
      await saveProductToLocalStorage(product);
      setIsLiked(true);
      setLikedItems( await getLikedProducts());
    }
    else{
      setIsLiked(false);
      await removeLikedProduct(product);
      setLikedItems( await getLikedProducts());
    }
    
  

  }

    return (
      <CardActions sx={{ display: "flex", justifyContent: "space-between" ,height:"fit-content"}}>
        <Box display="flex" alignItems="center">
          { user?.isAdmin&&<>
            <IconButton  onClick={handleDelete}>
              <DeleteIcon/>
            </IconButton>
            <IconButton onClick={()=>navigate(`${ROUTS.EDITPRODUCTPAGE}/${product?._id}`)}>
              <EditIcon/>
            </IconButton>
            <IconButton onClick={handleLike} >
              <FavoriteBorderIcon sx={{color:isLiked?"red":null}}/>
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
