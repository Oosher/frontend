








import { Avatar } from '@mui/material'
import React from 'react'

export default function RightNaveLoggedIn({userName,imageSrc}) {
  return (
    <>
    
    <Avatar alt={`${userName} profile picture`} src={imageSrc} sx={{alignSelf:"center",marginRight:"2vw",width:"80px",height:"80px"}}/>
    
    
    </>
  )
}
