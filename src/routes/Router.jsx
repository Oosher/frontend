







import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Index'
import ROUTS from './Routs.js'
import Page2 from '../pages/Page2'
import ProductPage from '../pages/ProductPage'
import LogIn from '../pages/LogIn'
import SignUpPage from '../pages/SignUpPage'
import CreateNewProductPage from '../pages/CreateNewProductPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import MyOrders from '../pages/MyOrders'
import OrderManegmentPage from '../pages/OrderManegmentPage'
import UserPage from '../pages/UserPage'
import EditProductPage from '../pages/EditProductPage'
import LikedProducts from '../pages/LikedProducts'
import AboutPage from '../pages/AboutPage'
import ErrorPage from '../pages/ErrorPage'


export default function Router() {
    return (
      <Routes>
        <Route path={ROUTS.ROOT} element={<Index />} />
        <Route path={ROUTS.PAGE2} element={<Page2 />} />
        <Route path={`${ROUTS.PRODUCTPAGE}/:id`} element={<ProductPage />} />
        <Route path={ROUTS.LOGIN} element={<LogIn />} />
        <Route path={ROUTS.SIGNUP} element={<SignUpPage />} />
        <Route path={ROUTS.CREATEPRODUCT} element={<CreateNewProductPage />} />
        <Route path={ROUTS.CART} element={<ShoppingCartPage />} />
        <Route path={ROUTS.MYORDERS} element={<MyOrders/>} />
        <Route path={ROUTS.MENAGEORDERS} element={<OrderManegmentPage/>} />
        <Route path={ROUTS.USERPAGE} element={<UserPage/>} />
        <Route path={`${ROUTS.EDITPRODUCTPAGE}/:id`} element={<EditProductPage />} />
        <Route path={ROUTS.LIKEDPRODUCTS} element={<LikedProducts/>} />
        <Route path={ROUTS.ABOUTUS} element={<AboutPage/>} />
        <Route path={"*"} element={<ErrorPage/>} />
      </Routes>
    );
}
