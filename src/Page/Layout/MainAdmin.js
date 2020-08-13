import React from 'react'
import Sidebar from '../../Components/Admin/Sidebar'
import Topbar from '../../Components/Admin/Topbar'
import Footer from '../../Components/Admin/Footer'


export default ({ children }) => {
    return (
        <div>
            {/* <Topbar/>
            <div className="container-fluid">
                            {children}
                        </div>
            <Sidebar/>
            <Footer/> */}
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}