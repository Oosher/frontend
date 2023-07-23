
import { AppBar } from '@mui/material'
import React from 'react'
import LeftNav from './leftNav/LeftNav'

export default function Header() {
    return (
        <AppBar sx={{position:"relative"}}>
            <LeftNav/>
        </AppBar>
    )
}
