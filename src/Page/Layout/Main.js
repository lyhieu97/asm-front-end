import React from 'react'
import Header from '../../Components/Main/Header'
import Nav from '../../Components/Main/Nav'
import Footer from '../../Components/Main/Footer'


export default ({ children }) => {
    return (
        <div>
            <Header />
            <Nav />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}