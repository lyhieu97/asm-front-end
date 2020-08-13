import React from 'react'


const Topbar = props => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <form className="form-inline">
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars" />
                </button>
            </form>
            {/* Topbar Search */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm" />
                        </button>
                    </div>
                </div>
            </form>
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-search fa-fw" />
                    </a>
                    {/* Dropdown - Messages */}
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
                {/* Nav Item - Alerts */}
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-bell fa-fw" />
                        {/* Counter - Alerts */}
                        <span className="badge badge-danger badge-counter">3+</span>
                    </a>
                    {/* Dropdown - Alerts */}
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                        <h6 className="dropdown-header">
                            Alerts Center
                    </h6>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="mr-3">
                                <div className="icon-circle bg-primary">
                                    <i className="fas fa-file-alt text-white" />
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 12, 2019</div>
                                <span className="font-weight-bold">A new monthly report is ready to download!</span>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="mr-3">
                                <div className="icon-circle bg-success">
                                    <i className="fas fa-donate text-white" />
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 7, 2019</div>
                        $290.29 has been deposited into your account!
                      </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="mr-3">
                                <div className="icon-circle bg-warning">
                                    <i className="fas fa-exclamation-triangle text-white" />
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 2, 2019</div>
                        Spending Alert: We've noticed unusually high spending for your account.
                      </div>
                        </a>
                        <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                    </div>
                </li>
                {/* Nav Item - Messages */}
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-envelope fa-fw" />
                        {/* Counter - Messages */}
                        <span className="badge badge-danger badge-counter">7</span>
                    </a>
                    {/* Dropdown - Messages */}
                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                        <h6 className="dropdown-header">
                            Message Center
                    </h6>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="" />
                                <div className="status-indicator bg-success" />
                            </div>
                            <div className="font-weight-bold">
                                <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                                <div className="small text-gray-500">Emily Fowler · 58m</div>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="" />
                                <div className="status-indicator" />
                            </div>
                            <div>
                                <div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                                <div className="small text-gray-500">Jae Chun · 1d</div>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt="" />
                                <div className="status-indicator bg-warning" />
                            </div>
                            <div>
                                <div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                            </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="" />
                                <div className="status-indicator bg-success" />
                            </div>
                            <div>
                                <div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                                <div className="small text-gray-500">Chicken the Dog · 2w</div>
                            </div>
                        </a>
                        <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                    </div>
                </li>
                <div className="topbar-divider d-none d-sm-block" />
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Ly Hieu</span>
                        <img className="img-profile rounded-circle" src="https://scontent.fhan7-1.fna.fbcdn.net/v/t1.0-9/s960x960/72997559_1240372352967969_7126412459278306357_o.jpg?_nc_cat=110&_nc_sid=110474&_nc_ohc=ZmZOu-9lSMgAX9t1Dh6&_nc_ht=scontent.fhan7-1.fna&_nc_tp=7&oh=61a85f88d5b4e2336e57779f1c32b82b&oe=5F3D4E41" />
                    </a>
                    {/* Dropdown - User Information */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                      Profile
                    </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                      Settings
                    </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                      Activity Log
                    </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                      Logout
                    </a>
                    </div>
                </li>
            </ul>
        </nav>
        // <div className="page">
        //     <header className="header">
        //         <nav className="navbar">
        //             <div className="container-fluid">
        //                 <div className="navbar-holder d-flex align-items-center justify-content-between">
        //                     <div className="navbar-header"><a id="toggle-btn" href="#" className="menu-btn"><i className="icon-bars"> </i></a><a href="index.html" className="navbar-brand">
        //                         <div className="brand-text d-none d-md-inline-block"><span>Bootstrap </span><strong className="text-primary">Dashboard</strong></div></a></div>
        //                     <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
        //                         {/* Notifications dropdown*/}
        //                         <li className="nav-item dropdown"> <a id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><i className="fa fa-bell" /><span className="badge badge-warning">12</span></a>
        //                             <ul aria-labelledby="notifications" className="dropdown-menu">
        //                                 <li><a rel="nofollow" href="#" className="dropdown-item">
        //                                     <div className="notification d-flex justify-content-between">
        //                                         <div className="notification-content"><i className="fa fa-envelope" />You have 6 new messages </div>
        //                                         <div className="notification-time"><small>4 minutes ago</small></div>
        //                                     </div></a></li>
        //                                 <li><a rel="nofollow" href="#" className="dropdown-item">
        //                                     <div className="notification d-flex justify-content-between">
        //                                         <div className="notification-content"><i className="fa fa-twitter" />You have 2 followers</div>
        //                                         <div className="notification-time"><small>4 minutes ago</small></div>
        //                                     </div></a></li>
        //                                 <li><a rel="nofollow" href="#" className="dropdown-item">
        //                                     <div className="notification d-flex justify-content-between">
        //                                         <div className="notification-content"><i className="fa fa-upload" />Server Rebooted</div>
        //                                         <div className="notification-time"><small>4 minutes ago</small></div>
        //                                     </div></a></li>
        //                                 <li><a rel="nofollow" href="#" className="dropdown-item">
        //                                     <div className="notification d-flex justify-content-between">
        //                                         <div className="notification-content"><i className="fa fa-twitter" />You have 2 followers</div>
        //                                         <div className="notification-time"><small>10 minutes ago</small></div>
        //                                     </div></a></li>
        //                                 <li><a rel="nofollow" href="#" className="dropdown-item all-notifications text-center"> <strong> <i className="fa fa-bell" />view all notifications                                          </strong></a></li>
        //                             </ul>
        //                         </li>
        //                         {/* Messages dropdown*/}
        //                         <li className="nav-item dropdown"> <a id="messages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><i className="fa fa-envelope" /><span className="badge badge-info">10</span></a>
        //                             <ul aria-labelledby="notifications" className="dropdown-menu">
        //                                 <li><a rel="nofollow" href="#" className="dropdown-item d-flex">
        //                                     <div className="msg-profile"> <img src="img/avatar-1.jpg" alt="..." className="img-fluid rounded-circle" /></div>
        //                                     <div className="msg-body">
        //                                         <h3 className="h5">Jason Doe</h3><span>sent you a direct message</span><small>3 days ago at 7:58 pm - 10.06.2014</small>
        //                                     </div></a></li>
        //                                 <li><a rel="nofollow" href="#" className="dropdown-item d-flex">
        //                                     <div className="msg-profile"> <img src="img/avatar-2.jpg" alt="..." className="img-fluid rounded-circle" /></div>
        //                                     <div className="msg-body">
        //                                         <h3 className="h5">Frank Williams</h3><span>sent you a direct message</span><small>3 days ago at 7:58 pm - 10.06.2014</small>
        //                                     </div></a></li>
        //                                 <li><a rel="nofollow" href="#" className="dropdown-item d-flex">
        //                                     <div className="msg-profile"> <img src="img/avatar-3.jpg" alt="..." className="img-fluid rounded-circle" /></div>
        //                                     <div className="msg-body">
        //                                         <h3 className="h5">Ashley Wood</h3><span>sent you a direct message</span><small>3 days ago at 7:58 pm - 10.06.2014</small>
        //                                     </div></a></li>
        //                                 <li><a rel="nofollow" href="#" className="dropdown-item all-notifications text-center"> <strong> <i className="fa fa-envelope" />Read all messages  </strong></a></li>
        //                             </ul>
        //                         </li>
        //                         {/* Languages dropdown    */}
        //                         <li className="nav-item dropdown"><a id="languages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link language dropdown-toggle"><img src="img/flags/16/GB.png" alt="English" /><span className="d-none d-sm-inline-block">English</span></a>
        //                             <ul aria-labelledby="languages" className="dropdown-menu">
        //                                 <li><a rel="nofollow" href="#" className="dropdown-item"> <img src="img/flags/16/DE.png" alt="English" className="mr-2" /><span>German</span></a></li>
        //                                 <li><a rel="nofollow" href="#" className="dropdown-item"> <img src="img/flags/16/FR.png" alt="English" className="mr-2" /><span>French                                                       </span></a></li>
        //                             </ul>
        //                         </li>
        //                         {/* Log out*/}
        //                         <li className="nav-item"><a href="login.html" className="nav-link logout"> <span className="d-none d-sm-inline-block">Logout</span><i className="fa fa-sign-out" /></a></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </nav>
        //     </header>
        // </div>
    )
}

Topbar.propTypes = {

}

export default Topbar
