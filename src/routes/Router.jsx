







import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Index'
import ROUTS from './Routs.js'
import Page2 from '../pages/Page2'
import ProductPage from '../pages/ProductPage'
import LogIn from '../pages/LogIn'
import SignUpPage from '../pages/SignUpPage'


export default function Router() {
    return (
      <Routes>
        <Route path={ROUTS.ROOT} element={<Index />} />
        <Route path={ROUTS.PAGE2} element={<Page2 />} />
        <Route path={`${ROUTS.PRODUCTPAGE}/:id`} element={<ProductPage />} />
        <Route path={ROUTS.LOGIN} element={<LogIn/>} />
        <Route path={ROUTS.SIGNUP} element={<SignUpPage/>} />
      </Routes>
    );
}
