import React, { useEffect } from 'react';
import Header from '../../Elements/Header/Header';
import Leftnav from '../../Elements/Leftnav/Leftnav';
import Footer from '../../Elements/Footer/Footer';
import Rightnav from '../../Elements/Rightnav/Rightnav';
import './AuthLayout.css';


const AuthLayout = props => {
    useEffect(() => {
        document.body.className = '';
        document.body.classList.add("hold-transition", "skin-blue", "sidebar-mini");
    })

    return (
        <React.Fragment>
            <div className="wrapper">
                <Header />
                <Leftnav />
                <div className="content-wrapper" style={{ minHeight: "1126px" }}>

                    <section className="content-header">
                        <h1>
                            Blank page<small>it all starts here</small>
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
                <Footer />
                <Rightnav />


                <div className="control-sidebar-bg"></div>
            </div>
        </React.Fragment>
    )
}

export default AuthLayout;