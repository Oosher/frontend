








import {  Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { useUserService } from '../../../users/provider/UserProvider';
import { useNavigate } from 'react-router-dom';
import ROUTS from '../../../routes/Routs';
import ShoppingCartButton from './ShoppingCartButton';


export default function RightNaveLoggedIn({userName,imageSrc}) {

  const [isOpen,setIsOpen] = useState(false);
  const {logOut,user} = useUserService()
  const Navigate = useNavigate();

  const changeMenuStatus = useCallback( ()=>{

    setIsOpen((prev)=>!prev)

  
  },[])

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
          }}
        >
          Log out
        </MenuItem>
        {user?.isAdmin && (
          <MenuItem
            onClick={() => {
              changeMenuStatus();
              Navigate(ROUTS.CREATEPRODUCT);
            }}
          >
            Create new product
          </MenuItem>
        )}

        <MenuItem
          onClick={() => {
            Navigate(ROUTS.MYORDERS);
            changeMenuStatus();
          }}
        >
          My Orders
        </MenuItem>
      </Menu>
    </>
  );
}
