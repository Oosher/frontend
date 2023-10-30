

import { CardActionArea, CardHeader, CardMedia } from '@mui/material'
import React from 'react'
import {  useNavigate } from 'react-router-dom'
import ROUTS from '../../../routes/Routs';

export default function ProductHead({title,src,productId}) {

    const goto = useNavigate();


    const cardClick = ()=>{

        goto(`${ROUTS.PRODUCTPAGE}/${productId}`);

    }

    return (
        <CardActionArea onClick={cardClick}>
            <CardMedia component="img" image={src} sx={{height:"20vh"}}/>
            <CardHeader title={title}/>
        </CardActionArea>
            
    )
}
