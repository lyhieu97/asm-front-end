import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <div id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-9">
                                <h4 className="mb-3">Where to find us</h4>
                                <p><strong>VanHieu Ltd.</strong><br />Don Nguyen 3 - KTX My Dinh II<br />Nguyen Co Thach<br />My Dinh II<br />Nam Tu Liem<br />Ha Noi <br /><strong>Viet Nam</strong></p><Link to={'/contact'}>Go to contact page</Link>
                                <hr className="d-block d-md-none" />
                            </div>
                            <div className="col-lg-6 col-md-9">
                                <h4 className="mb-3">Get the news</h4>
                                <p className="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" /><span className="input-group-append">
                                            <button type="button" className="btn btn-outline-secondary">Subscribe!</button></span>
                                    </div>
                                </form>
                                <hr />
                                <h4 className="mb-3">Stay in touch</h4>
                                <p className="social"><a href="fb.com/hieulvph09406" className="facebook external"><i className="fa fa-facebook" /></a><a href="#" className="twitter external"><i className="fa fa-twitter" /></a><a href="#" className="instagram external"><i className="fa fa-instagram" /></a><a href="#" className="gplus external"><i className="fa fa-google-plus" /></a><a href="#" className="email external"><i className="fa fa-envelope" /></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="copyright">
                    <div className="container">
                        <div className="row">
                            <p>©2020 Ly Van Hieu</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
