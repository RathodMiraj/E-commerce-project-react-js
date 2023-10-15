import './Style/01.css';

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Mode.css';
import ToggleTheme from './TogglePage';


const Login = () => {

    let [alldata, SetData] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    const notify = () => toast("Please Enter Your Old Email And Click To Forgot Password!");
    const navigate = useNavigate();

    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        let data = [];

        if (localStorage.getItem('alldata')) {
            data = JSON.parse(localStorage.getItem('alldata'));
            SetData(data);
        }
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        pass: Yup.string()
            .required('Password is required')
            .min(8, "Minimum 8 characters"),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            pass: '',
        },

        validationSchema,
        onSubmit: (values) => {
            let alldata = JSON.parse(localStorage.getItem('alldata'));

            let user = null;

            if (!values.email || !values.pass) {
                alert('Please fill in all fields');

            } else {
                for (let i = 0; i < alldata.length; i++) {
                    if (alldata[i].email === values.email && alldata[i].pass === values.pass) {
                        user = alldata[i];
                        break;
                    }
                }

                if (!user) {
                    alert('Incorrect email or password');
                } else {
                    if (user.role === 'admin') {
                        navigate('/admin');
                    } else {
                        navigate('/index');

                        localStorage.setItem('LoginId', user.CorUserid);
                        localStorage.setItem('LoginEmail', user.email);

                    }
                }
            }
        },
    });

    function forgotPass() {
        for (let i = 0; i < alldata.length; i++) {
            if (alldata[i].email == document.getElementById('email').value) {
                navigate("/conformPassword/" + alldata[i].CorUserid);
                localStorage.setItem('id', alldata[i].CorUserid);
            }
        }
    }

    const register = () => {
        navigate('/register');
    }

    return (
        <div>
            <ToggleTheme />

            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="img-fluid" alt="Phone image" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 p-4 offset-xl-1">
                            <h2 className="mb-5 dic-center">Login Page</h2>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-outline mb-4 mt-3">
                                    <label className="form-label pb-1" htmlFor="form1Example13">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className={`form-control asdasd form-control-lg ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                        {...formik.getFieldProps('email')}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <div className="invalid-feedback">{formik.errors.email}</div>
                                    )}
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <div className="form-outline flex-fill mb-0">
                                        <label className="form-label pb-1" htmlFor="form3Example4c">
                                            Password
                                        </label>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id="pass"
                                            className={`form-control asdasd form-control-lg ${formik.touched.pass && formik.errors.pass ? 'is-invalid' : ''}`}
                                            {...formik.getFieldProps('pass')}
                                        />
                                        {formik.touched.pass && formik.errors.pass && (
                                            <div className="invalid-feedback">{formik.errors.pass}</div>
                                        )}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div onClick={notify} className="form-check p-0 m-0">
                                        <a
                                            className="text-dark text-center decoration"
                                            style={{ cursor: 'pointer' }}
                                            onClick={forgotPass}

                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <ToastContainer />
                                <div className="Login-fonts">
                                    <button type="submit" class="buttoncd button-4 btn-lg btn-block Login-fonts mt-2 ps-4">LOGIN</button>
                                    <button onClick={register} type="button" class="buttoncd button-4 ms-4 btn-lg btn-block Login-fonts ps-3 mt-2">REGISTER</button>

                                    {/* <button type="submit" className="btn btn-primary btn-lg btn-block Login-fonts mt-2">LOGIN</button> */}
                                    {/* <button  type="button" className="btn btn-primary ms-4 btn-lg btn-block Login-fonts mt-2">REGISTER</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
