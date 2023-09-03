








import {  Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { useUserService } from '../../../users/provider/UserProvider';
import { useNavigate } from 'react-router-dom';
import ROUTS from '../../../routes/Routs';
import ShoppingCartButton from './ShoppingCartButton';
import { useProductService } from '../../../products/providers/ProductsProvider';


export default function RightNaveLoggedIn({userName,imageSrc}) {

  const [isOpen,setIsOpen] = useState(false);
  const {logOut,user} = useUserService()
  const {setCurrentCategory} = useProductService()
  const Navigate = useNavigate();

  const changeMenuStatus = useCallback( ()=>{

    setIsOpen((prev)=>!prev);

  },[]);

  const clearCategory = ()=>{

    setCurrentCategory("")

  }
  

  return (
    <>
      <ShoppingCartButton />
      <IconButton sx={{ alignSelf: "center", marginRight: "2vw" }} onClick={changeMenuStatus}>
        <Avatar alt={`${userName} profile picture`} src={imageSrc} sx={{ width: "80px", height: "80px" }} />
      </IconButton>
      <Menu
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        open={isOpen}
        onClose={changeMenuStatus}
        sx={{ marginLeft: "-1.3vw", marginTop: "90px" }}
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
    </>
  );
}
