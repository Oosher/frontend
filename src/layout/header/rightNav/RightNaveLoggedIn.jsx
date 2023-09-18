








import {  Avatar, Box, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { useUserService } from '../../../users/provider/UserProvider';
import { useNavigate } from 'react-router-dom';
import ROUTS from '../../../routes/Routs';
import ShoppingCartButton from './ShoppingCartButton';
import { useProductService } from '../../../products/providers/ProductsProvider';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function RightNaveLoggedIn({userName,imageSrc}) {

  const [anchorEl,setAnchorEl] = useState(null);
  const {logOut,user} = useUserService()
  const {setCurrentCategory} = useProductService()
  const Navigate = useNavigate();

  const {mobile} = useProductService();

  const menuOpen = (e)=>{
    setAnchorEl(e.currentTarget)
  }

  const changeMenuStatus = useCallback( (e)=>{

    setAnchorEl(null);

  },[]);

  const clearCategory = ()=>{

    setCurrentCategory("")

  }
  

  return (
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",justifyItems:"center",alignContent:"center",height:"100%"}}>
      <IconButton sx={{width:"fit-content",height:"fit-content"}}  onClick={()=>{Navigate(ROUTS.LIKEDPRODUCTS)}}>
        <FavoriteIcon  sx={{fontSize:mobile?"3rem":"4rem" , color:"red"}}/>
      </IconButton>
      <ShoppingCartButton />
      
      <IconButton sx={{ alignSelf: "center", marginRight: "2vw" }} onClick={menuOpen}>
        <Avatar alt={`${userName} profile picture`} src={imageSrc} sx={{ width:mobile?"50px" : "80px", height:mobile?"50px" : "80px"}} />
      </IconButton>
      <Menu
      
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={changeMenuStatus}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}

        sx={{marginTop:"90px",position:"absolute"}}
        
      >
        <MenuItem
          onClick={() => {
            logOut();
            changeMenuStatus();
            clearCategory();
          }}
        >
          Log out
        </MenuItem>
        <MenuItem
          onClick={() => {
            Navigate(ROUTS.USERPAGE);
            changeMenuStatus();
            clearCategory();
          }}
        >
          User Page
        </MenuItem>
        {user?.isAdmin && (
          <MenuItem
            onClick={() => {
              changeMenuStatus();
              Navigate(ROUTS.CREATEPRODUCT);
              clearCategory();
            }}
          >
            Create new product
          </MenuItem>
        )}

        <MenuItem
          onClick={() => {
            Navigate(ROUTS.MYORDERS);
            changeMenuStatus();
            clearCategory();
          }}
        >
          My Orders
        </MenuItem>
        {user?.isAdmin && (
          <MenuItem
            onClick={() => {
              changeMenuStatus();
              Navigate(ROUTS.MENAGEORDERS);
              clearCategory();
            }}
          >Menage Orders
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
}
