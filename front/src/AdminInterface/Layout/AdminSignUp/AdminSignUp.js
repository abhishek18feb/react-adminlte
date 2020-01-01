import React, { useEffect } from 'react';
import './AdminSignUp.css'
const AdminSignUp = props => {
    useEffect(() => {
        document.body.className = '';
        document.body.classList.add("hold-transition", "login-page");
    })
    return (
        <React.Fragment>
            <div className="login-box">
                <div className="login-logo">
                    <a href="#"><b>Admin</b>LTE</a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Register a new membership</p>
                    <form method="post">
                        <div className="form-group has-feedback">
                            <input type="text" className="form-control" placeholder="Full name" />
                            <span className="glyphicon glyphicon-user form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Email" />
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password" />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Retype password" />
                            <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <div className="">
                                    <label className="checkbox-container"> I agree to the <a href="#">terms</a>
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
                            </div>
                        </div>
                    </form>
                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign up using Facebook</a>
                        <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign up using Google+</a>
                    </div>
                    <a href="register.html" className="text-center">I already have a membership</a>
                </div>
            </div>
        </React.Fragment >
    )
}

export default AdminSignUp;