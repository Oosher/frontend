

import { Card } from '@mui/material'
import React from 'react'
import ProductHead from './productHead/ProductHead'
import ProductActions from './productActions/ProductActions'

export default function Product({product}) {
    return (
        <Card sx={{height:"30vh",marginTop:"1.5vh"}} >
            <ProductHead title={product?.name} src={product?.imageUrl}/>
            <ProductActions/>
        </Card>
    )
}
