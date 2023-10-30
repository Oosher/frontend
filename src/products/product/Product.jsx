

import { Card } from '@mui/material'
import React from 'react'
import ProductHead from './productHead/ProductHead'
import ProductActions from './productActions/ProductActions'
import { useProductService } from '../providers/ProductsProvider'

export default function Product({product}) {




    const {addToCart} = useProductService();

    

    return (
        <Card sx={{height:"fit-content",marginTop:"1.5vh"}} >
            <ProductHead title={product?.name} src={product?.imageArray[0].imageUrl} productId={product._id} />
            <ProductActions price={product?.price} addToCart={addToCart} product={product}/>
        </Card>
    )
}
