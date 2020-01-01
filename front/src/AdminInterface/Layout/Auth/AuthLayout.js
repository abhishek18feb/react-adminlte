import React, { useEffect } from 'react';
import './AuthLayout.css';


const AuthLayout = props => {
    useEffect(() => {
        document.body.className = '';
        document.body.classList.add("hold-transition", "skin-blue", "sidebar-mini");
    })

    return (
        <React.Fragment>
            <div className="wrapper">

                <header className="main-header">

                    <a href="../../index2.html" className="logo">

                        <span className="logo-mini"><b>A</b>LT</span>

                        <span className="logo-lg"><b>Admin</b>LTE</span>
                    </a>

                    <nav className="navbar navbar-static-top">

                        <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </a>

                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">

                                <li className="dropdown messages-menu">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="fa fa-envelope-o"></i>
                                        <span className="label label-success">4</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="header">You have 4 messages</li>
                                        <li>

                                            <ul className="menu">
                                                <li>
                                                    <a href="#">
                                                        <div className="pull-left">
                                                            <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                        </div>
                                                        <h4>
                                                            Support Team
                      <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                        </h4>
                                                        <p>Why not buy a new awesome theme?</p>
                                                    </a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li className="footer"><a href="#">See All Messages</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown notifications-menu">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="fa fa-bell-o"></i>
                                        <span className="label label-warning">10</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="header">You have 10 notifications</li>
                                        <li>

                                            <ul className="menu">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-users text-aqua"></i> 5 new members joined today
                  </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="footer"><a href="#">View all</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown tasks-menu">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="fa fa-flag-o"></i>
                                        <span className="label label-danger">9</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="header">You have 9 tasks</li>
                                        <li>

                                            <ul className="menu">
                                                <li>
                                                    <a href="#">
                                                        <h3>
                                                            Design some buttons
                      <small className="pull-right">20%</small>
                                                        </h3>
                                                        <div className="progress xs">
                                                            <div className="progress-bar progress-bar-aqua" style={{ width: "20%" }} role="progressbar"
                                                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="sr-only">20% Complete</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li className="footer">
                                            <a href="#">View all tasks</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="dropdown user user-menu">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="../../dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                                        <span className="hidden-xs">Alexander Pierce</span>
                                    </a>
                                    <ul className="dropdown-menu">

                                        <li className="user-header">
                                            <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />

                                            <p>
                                                Alexander Pierce - Web Developer <small>Member since Nov. 2012</small>
                                            </p>
                                        </li>

                                        <li className="user-body">
                                            <div className="row">
                                                <div className="col-xs-4 text-center">
                                                    <a href="#">Followers</a>
                                                </div>
                                                <div className="col-xs-4 text-center">
                                                    <a href="#">Sales</a>
                                                </div>
                                                <div className="col-xs-4 text-center">
                                                    <a href="#">Friends</a>
                                                </div>
                                            </div>

                                        </li>

                                        <li className="user-footer">
                                            <div className="pull-left">
                                                <a href="#" className="btn btn-default btn-flat">Profile</a>
                                            </div>
                                            <div className="pull-right">
                                                <a href="#" className="btn btn-default btn-flat">Sign out</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>




                <aside className="main-sidebar">

                    <section className="sidebar">

                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
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
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="../../index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                                    <li><a href="../../index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-files-o"></i>
                                    <span>Layout Options</span>
                                    <span className="pull-right-container">
                                        <span className="label label-primary pull-right">4</span>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="../layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                                    <li><a href="../layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                                    <li><a href="../layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                                    <li><a href="../layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="../widgets.html">
                                    <i className="fa fa-th"></i> <span>Widgets</span>
                                    <span className="pull-right-container">
                                        <small className="label pull-right bg-green">Hot</small>
                                    </span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-pie-chart"></i>
                                    <span>Charts</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="../charts/chartjs.html"><i className="fa fa-circle-o"></i> ChartJS</a></li>
                                    <li><a href="../charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
                                    <li><a href="../charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
                                    <li><a href="../charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-laptop"></i>
                                    <span>UI Elements</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="../UI/general.html"><i className="fa fa-circle-o"></i> General</a></li>
                                    <li><a href="../UI/icons.html"><i className="fa fa-circle-o"></i> Icons</a></li>
                                    <li><a href="../UI/buttons.html"><i className="fa fa-circle-o"></i> Buttons</a></li>
                                    <li><a href="../UI/sliders.html"><i className="fa fa-circle-o"></i> Sliders</a></li>
                                    <li><a href="../UI/timeline.html"><i className="fa fa-circle-o"></i> Timeline</a></li>
                                    <li><a href="../UI/modals.html"><i className="fa fa-circle-o"></i> Modals</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-edit"></i> <span>Forms</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="../forms/general.html"><i className="fa fa-circle-o"></i> General Elements</a></li>
                                    <li><a href="../forms/advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
                                    <li><a href="../forms/editors.html"><i className="fa fa-circle-o"></i> Editors</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-table"></i> <span>Tables</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="../tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                                    <li><a href="../tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="../calendar.html">
                                    <i className="fa fa-calendar"></i> <span>Calendar</span>
                                    <span className="pull-right-container">
                                        <small className="label pull-right bg-red">3</small>
                                        <small className="label pull-right bg-blue">17</small>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="../mailbox/mailbox.html">
                                    <i className="fa fa-envelope"></i> <span>Mailbox</span>
                                    <span className="pull-right-container">
                                        <small className="label pull-right bg-yellow">12</small>
                                        <small className="label pull-right bg-green">16</small>
                                        <small className="label pull-right bg-red">5</small>
                                    </span>
                                </a>
                            </li>
                            <li className="treeview active">
                                <a href="#">
                                    <i className="fa fa-folder"></i> <span>Examples</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
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
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-share"></i> <span>Multilevel</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                                    <li className="treeview">
                                        <a href="#"><i className="fa fa-circle-o"></i> Level One
              <span className="pull-right-container">
                                                <i className="fa fa-angle-left pull-right"></i>
                                            </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="#"><i className="fa fa-circle-o"></i> Level Two</a></li>
                                            <li className="treeview">
                                                <a href="#"><i className="fa fa-circle-o"></i> Level Two
                  <span className="pull-right-container">
                                                        <i className="fa fa-angle-left pull-right"></i>
                                                    </span>
                                                </a>
                                                <ul className="treeview-menu">
                                                    <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                                                    <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                                </ul>
                            </li>
                            <li><a href="https://adminlte.io/docs"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
                            <li className="header">LABELS</li>
                            <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                            <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                            <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
                        </ul>
                    </section>

                </aside>




                <div className="content-wrapper" style={{ minHeight: "1126px" }}>

                    <section className="content-header">
                        <h1>
                            Blank page
      <small>it all starts here</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                            <li><a href="#">Examples</a></li>
                            <li className="active">Blank page</li>
                        </ol>
                    </section>


                    <section className="content">


                        <div className="box">
                            <div className="box-header with-border">
                                <h3 className="box-title">Title</h3>

                                <div className="box-tools pull-right">
                                    <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                                        title="Collapse">
                                        <i className="fa fa-minus"></i></button>
                                    <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                        <i className="fa fa-times"></i></button>
                                </div>
                            </div>
                            <div className="box-body">
                                Start creating your amazing application!
      </div>

                            <div className="box-footer">
                                Footer
      </div>

                        </div>


                    </section>

                </div>


                <footer className="main-footer">
                    <div className="pull-right hidden-xs">
                        <b>Version</b> 2.4.0
  </div>
                    <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
                    reserved.
</footer>


                <aside className="control-sidebar control-sidebar-dark">

                    <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
                        <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home"></i></a></li>

                        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gears"></i></a></li>
                    </ul>

                    <div className="tab-content">

                        <div className="tab-pane" id="control-sidebar-home-tab">
                            <h3 className="control-sidebar-heading">Recent Activity</h3>
                            <ul className="control-sidebar-menu">
                                <li>
                                    <a href="#">
                                        <i className="menu-icon fa fa-birthday-cake bg-red"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Langdon's Birthday</h4>

                                            <p>Will be 23 on April 24th</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="menu-icon fa fa-user bg-yellow"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Frodo Updated His Profile</h4>

                                            <p>New phone +1(800)555-1234</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="menu-icon fa fa-envelope-o bg-light-blue"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Nora Joined Mailing List</h4>

                                            <p>nora@example.com</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="menu-icon fa fa-file-code-o bg-green"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Cron Job 254 Executed</h4>

                                            <p>Execution time 5 seconds</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>


                            <h3 className="control-sidebar-heading">Tasks Progress</h3>
                            <ul className="control-sidebar-menu">
                                <li>
                                    <a href="#">
                                        <h4 className="control-sidebar-subheading">
                                            Custom Template Design
              <span className="label label-danger pull-right">70%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-danger" style={{ width: "70%" }}></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h4 className="control-sidebar-subheading">
                                            Update Resume
              <span className="label label-success pull-right">95%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-success" style={{ width: "95%" }}></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h4 className="control-sidebar-subheading">
                                            Laravel Integration
              <span className="label label-warning pull-right">50%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-warning" style={{ width: "50%" }}></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h4 className="control-sidebar-subheading">
                                            Back End Framework
              <span className="label label-primary pull-right">68%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-primary" style={{ width: "68%" }}></div>
                                        </div>
                                    </a>
                                </li>
                            </ul>


                        </div>


                        <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>


                        <div className="tab-pane" id="control-sidebar-settings-tab">
                            <form method="post">
                                <h3 className="control-sidebar-heading">General Settings</h3>

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Report panel usage
                                        <input type="checkbox" className="pull-right" />
                                    </label>

                                    <p>
                                        Some information about this general settings option
          </p>
                                </div>


                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Allow mail redirect
                                        <input type="checkbox" className="pull-right" />
                                    </label>

                                    <p>
                                        Other sets of options are available
          </p>
                                </div>


                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Expose author name in posts
                                        <input type="checkbox" className="pull-right" />
                                    </label>

                                    <p>
                                        Allow the user to show his name in blog posts
          </p>
                                </div>


                                <h3 className="control-sidebar-heading">Chat Settings</h3>

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Show me as online
                                        <input type="checkbox" className="pull-right" />
                                    </label>
                                </div>


                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Turn off notifications
            <input type="checkbox" className="pull-right" />
                                    </label>
                                </div>


                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Delete chat history
            <a href="#" className="text-red pull-right"><i className="fa fa-trash-o"></i></a>
                                    </label>
                                </div>

                            </form>
                        </div>

                    </div>
                </aside>


                <div className="control-sidebar-bg"></div>
            </div>
        </React.Fragment>
    )
}

export default AuthLayout;