







import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Index'
import ROUTS from './Routs.js'
import Page2 from '../pages/Page2'
import ProductPage from '../pages/ProductPage'

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTS.ROOT} element={<Index/>}/>
            <Route path={ROUTS.PAGE2} element={<Page2/>}/>
            <Route path={`${ROUTS.PRODUCTPAGE}/:id`} element={<ProductPage/>}/>
        
        </Routes>
    )
}
