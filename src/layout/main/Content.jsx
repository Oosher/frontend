import { Box } from '@mui/material'
import React from 'react'

export default function Content({children}) {
    return (
        <Box sx={{minHeight:"84.7vh"}}>{children}</Box>
    )
}
