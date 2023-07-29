
import { AppBar } from '@mui/material'
import React from 'react'
import LeftNav from './leftNav/LeftNav'
import RightNav from './rightNav/RightNav'

export default function Header() {
    return (
        <AppBar sx={{position:"relative",height:"10vh",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <LeftNav/>

            <RightNav/>
        </AppBar>
    )
}
