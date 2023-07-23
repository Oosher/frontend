


import React from 'react'

import Header from './header/Header'

import Content from './main/Content'




export default function Layout({children}) {
    return (
        <>
            <Header/>
            <Content>{children}</Content>
        </>
    )
}
