import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to={'/'}>
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Home</div>
            </Link>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></NavLink>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Nav Item - Tables */}
            <li className="nav-item">
                <NavLink className="nav-link" to="/admin/products">
                    <i className="fas fa-fw fa-table" />
                    <span>Products Management</span></NavLink>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item">
                <NavLink className="nav-link" to="/admin/categorys">
                    <i className="fas fa-fw fa-table" />
                    <span>Category Management</span></NavLink>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item">
                <NavLink className="nav-link" to="/admin/blog">
                    <i className="fas fa-fw fa-table" />
                    <span>Blog Management</span></NavLink>
            </li>
        </ul>
        // <nav className="side-navbar">
        //     <div className="side-navbar-wrapper">
        //         {/* Sidebar Header    */}
        //         <div className="sidenav-header d-flex align-items-center justify-content-center">
        //             {/* User Info*/}
        //             <div className="sidenav-header-inner text-center"><img src="img/avatar-7.jpg" alt="person" className="img-fluid rounded-circle" />
        //                 <h2 className="h5">Nathan Andrews</h2><span>Web Developer</span>
        //             </div>
        //             {/* Small Brand information, appears on minimized sidebar*/}
        //             <div className="sidenav-header-logo"><a href="index.html" className="brand-small text-center"> <strong>B</strong><strong className="text-primary">D</strong></a></div>
        //         </div>
        //         {/* Sidebar Navigation Menus*/}
        //         <div className="main-menu">
        //             <h5 className="sidenav-heading">Main</h5>
        //             <ul id="side-main-menu" className="side-menu list-unstyled">
        //                 <li><NavLink to={'/admin/products'}> <i className="icon-home" />Home                           </NavLink></li>
        //                 <li><a href="forms.html"> <i className="icon-form" />Forms                           </a></li>
        //                 <li><a href="charts.html"> <i className="fa fa-bar-chart" />Charts                           </a></li>
        //                 <li className="active"><a href="tables.html"> <i className="icon-grid" />Tables                           </a></li>
        //                 <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-interface-windows" />Example dropdown </a>
        //                     <ul id="exampledropdownDropdown" className="collapse list-unstyled ">
        //                         <li><a href="#">Page</a></li>
        //                         <li><a href="#">Page</a></li>
        //                         <li><a href="#">Page</a></li>
        //                     </ul>
        //                 </li>
        //                 <li><a href="login.html"> <i className="icon-interface-windows" />Login page                           </a></li>
        //                 <li> <a href="#"> <i className="icon-mail" />Demo
        //           <div className="badge badge-warning">6 New</div></a></li>
        //             </ul>
        //         </div>
        //         <div className="admin-menu">
        //             <h5 className="sidenav-heading">Second menu</h5>
        //             <ul id="side-admin-menu" className="side-menu list-unstyled">
        //                 <li> <a href="#"> <i className="icon-screen"> </i>Demo</a></li>
        //                 <li> <a href="#"> <i className="icon-flask"> </i>Demo
        //           <div className="badge badge-info">Special</div></a></li>
        //                 <li> <a href> <i className="icon-flask"> </i>Demo</a></li>
        //                 <li> <a href> <i className="icon-picture"> </i>Demo</a></li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
