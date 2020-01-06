import React, { useState } from 'react';


const Leftnav = props => {
    const [activeKey, setActiveKey] = useState(0);
    const handleItemClick = index => {
        setActiveKey(index);
    }
    return (
        <React.Fragment>
            <aside className="main-sidebar">

                <section className="sidebar">

                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>

                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>

                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className={1 === activeKey ? 'treeview menu-open' : 'treeview'} key="1" onClick={() => handleItemClick(1)}>
                            <a href="#">
                                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu" style={{ display: 1 === activeKey ? 'block' : 'none' }}>
                                <li><a href="../../index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                                <li><a href="../../index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                            </ul>
                        </li>
                        <li className={2 === activeKey ? 'treeview menu-open' : 'treeview'} key="2" onClick={() => handleItemClick(2)}>
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>Layout Options</span>
                                <span className="pull-right-container">
                                    <span className="label label-primary pull-right">4</span>
                                </span>
                            </a>
                            <ul className="treeview-menu" style={{ display: 2 === activeKey ? 'block' : 'none', transition: "1s" }}>
                                <li><a href="../layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                                <li><a href="../layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                                <li><a href="../layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                                <li><a href="../layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
                            </ul>
                        </li>

                        <li className={3 === activeKey ? 'treeview menu-open' : 'treeview'} key="3" onClick={() => handleItemClick(3)}>
                            <a href="#">
                                <i className="fa fa-folder"></i> <span>Examples</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu" style={{ display: 3 === activeKey ? 'block' : 'none' }}>
                                <li><a href="invoice.html"><i className="fa fa-circle-o"></i> Invoice</a></li>
                                <li><a href="profile.html"><i className="fa fa-circle-o"></i> Profile</a></li>
                                <li><a href="login.html"><i className="fa fa-circle-o"></i> Login</a></li>
                                <li><a href="register.html"><i className="fa fa-circle-o"></i> Register</a></li>
                                <li><a href="lockscreen.html"><i className="fa fa-circle-o"></i> Lockscreen</a></li>
                                <li><a href="404.html"><i className="fa fa-circle-o"></i> 404 Error</a></li>
                                <li><a href="500.html"><i className="fa fa-circle-o"></i> 500 Error</a></li>
                                <li className="active"><a href="blank.html"><i className="fa fa-circle-o"></i> Blank Page</a></li>
                                <li><a href="pace.html"><i className="fa fa-circle-o"></i> Pace Page</a></li>
                            </ul>
                        </li>


                    </ul>
                </section>

            </aside>
        </React.Fragment>
    )
}

export default Leftnav