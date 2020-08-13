import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }
    render() {
        return (
            <div className="header mb-5">
                <div id="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offer mb-3 mb-lg-0"><Link to={'/admin'} className="btn btn-success ">Admin</Link></div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a href="index.html" className="navbar-brand home"><img src="img/logo-small.png" alt="Obaju logo" className="d-inline-block d-md-none" /><span className="sr-only">SHOP MINI</span></a>
                        <div className="navbar-buttons">
                            <button type="button" data-toggle="collapse" data-target="#navigation" className="btn btn-outline-secondary navbar-toggler"><span className="sr-only">Toggle navigation</span><i className="fa fa-align-justify" /></button>
                            <button type="button" data-toggle="collapse" data-target="#search" className="btn btn-outline-secondary navbar-toggler"><span className="sr-only">Toggle search</span><i className="fa fa-search" /></button><a href="basket.html" className="btn btn-outline-secondary navbar-toggler"><i className="fa fa-shopping-cart" /></a>
                        </div>
                        <div id="navigation" className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
                                <li className="nav-item"><Link to={'/about'} className="nav-link">About</Link></li>
                                <li className="nav-item"><Link to={'/contact'} className="nav-link">Contact</Link></li>
                                <li className="nav-item"><Link to={'/blog'} className="nav-link">Blog</Link></li>
                            </ul>
                            <div className="navbar-buttons d-flex justify-content-end">
                                <div id="search-not-mobile" className="navbar-collapse collapse" /><a data-toggle="collapse" href="#search" className="btn navbar-btn btn-primary d-none d-lg-inline-block"><span className="sr-only">Toggle search</span><i className="fa fa-search" /></a>
                                <div id="basket-overview" className="navbar-collapse collapse d-none d-lg-block"><Link to={'/cart'} className="btn btn-primary navbar-btn"><i className="fa fa-shopping-cart" /><span></span></Link></div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div id="search" className="collapse">
                    <div className="container">
                        <form role="search" className="ml-auto">
                            <div className="input-group">
                                <input type="text" placeholder="Search" className="form-control" />
                                <div className="input-group-append">
                                    <button type="button" className="btn btn-primary"><i className="fa fa-search" /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
