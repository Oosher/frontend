

import { CardHeader, CardMedia } from '@mui/material'
import React from 'react'

export default function ProductHead({title,src}) {
    return (
        <>
            <CardMedia component="img" image={src} sx={{height:"20vh"}}/>
            <CardHeader title={title}/>
            
        </>
    )
}
