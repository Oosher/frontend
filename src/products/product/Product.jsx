

import { Card } from '@mui/material'
import React, { useCallback } from 'react'
import ProductHead from './productHead/ProductHead'
import ProductActions from './productActions/ProductActions'
import { getCartFromLocalStorage, saveToLocalStorageCart } from '../../localStorage/localStorageService'
import { useProductService } from '../providers/ProductsProvider'

export default function Product({product}) {




    const {setCart} = useProductService();

    
    const addToCart = useCallback(()=>{
        saveToLocalStorageCart(product);
        setCart(getCartFromLocalStorage());
    },[product,setCart])

    return (
        <Card sx={{height:"30vh",marginTop:"1.5vh"}} >
            <ProductHead title={product?.name} src={product?.imageArray[0].imageUrl} productId={product._id} />
            <ProductActions price={product?.price} addToCart={addToCart}/>
        </Card>
    )
}
