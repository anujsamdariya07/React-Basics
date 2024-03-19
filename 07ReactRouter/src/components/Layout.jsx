import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            {/* This outlet is the variable part of the page layout */}
            <Outlet /> 
            <Footer />
        </>
    )
}

export default Layout
