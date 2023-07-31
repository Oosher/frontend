








import {  Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { useUserService } from '../../../users/provider/UserProvider';


export default function RightNaveLoggedIn({userName,imageSrc}) {

  const [isOpen,setIsOpen] = useState(false);


  const {logOut} = useUserService()

  const changeMenuStatus = useCallback( ()=>{

    setIsOpen((prev)=>!prev)

  
  },[])

  return (
    <>
      <IconButton sx={{ alignSelf: "center", marginRight: "2vw" }} onClick={changeMenuStatus}>
        <Avatar alt={`${userName} profile picture`} src={imageSrc} sx={{ width: "80px", height: "80px" }} />
      </IconButton>
      <Menu
        anchorOrigin={{
          verticalL: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{ verticalL: "top", horizontal: "right" }}
        open={isOpen}
        onClose={changeMenuStatus}
        sx={{marginLeft:"-1.3vw",marginTop:"90px"}}
      >
        <MenuItem onClick={()=>{
          logOut();
          changeMenuStatus();
          
          }}>Log out</MenuItem>
      </Menu>
    </>
  );
}
