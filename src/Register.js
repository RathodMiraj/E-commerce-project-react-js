import React, { useEffect, useState } from 'react';
import imagees from './Image/regi.jpg';
import './Style/02.css';
import { Link, useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import ToggleTheme from './TogglePage';

const Register = () => {

    const [alldata, setAllData] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const navigate = useNavigate()


    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('alldata'))
        setAllData(data)
    }, [])

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        pass: Yup.string().required('Password is required')
            .min(8, "Minimum 8 characters"),
        contact: Yup.string().required('Contact is required')
            .min(10, "Minimum 10 characters")
            .matches(/^[6789]\d{9}$/, 'Invalid mobile number'),
        gender: Yup.string().required('Gender is required'),

    });


    const onSubmit = (values, { resetForm }) => {
        let rathod = {
            name: values.name,
            email: values.email,
            role: 'user',
            pass: values.pass,
            contact: values.contact,
            gender: values.gender,
            image: previewImage,
            cart: [],
            MyOrder: [],
            Address: [],
            CorUserid: Date.now(),
        };

        // Check if alldata is null or an empty array
        if (alldata === null || alldata.length === 0) {
            let newData = [rathod];
            setAllData(newData);
            localStorage.setItem('alldata', JSON.stringify(newData));
        } else {
            let das = alldata.some((data) => data.email === values.email);

            if (das) {
                alert('Email already registered');
            } else {
                let newData = [...alldata, rathod];
                setAllData(newData);
                localStorage.setItem('alldata', JSON.stringify(newData));
            }
        }

        resetForm();
        setPreviewImage(null);
    };


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            pass: '',
            contact: '',
            gender: '',
            role: 'user',

        },

        validationSchema,
        onSubmit,

    });

    return (
        <div>
            <div >
                <ToggleTheme />

                <div className="container ">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className='col-lg-6 d-flex align-items-center justify-content-center '>
                                <div>
                                    <h2 className="mb-lg-3 ms-2 text-center asdas">Register Page</h2>
                                    <img className='Image-control mb-4' src={imagees} alt="" />


                                </div>
                            </div>

                            <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                                <div className="mx-1 mx-md-4 p-3">

                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example1c">
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="form3Example1c"
                                                    name="name"
                                                    value={formik.values.name}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''
                                                        }`}
                                                />
                                                {formik.touched.name && formik.errors.name && (
                                                    <div className="invalid-feedback">{formik.errors.name}</div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example3c">
                                                    Your Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="form3Example3c"
                                                    name="email"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={`form-control ${formik.touched.email && formik.errors.email
                                                        ? 'is-invalid'
                                                        : ''
                                                        }`}
                                                />
                                                {formik.touched.email && formik.errors.email && (
                                                    <div className="invalid-feedback">{formik.errors.email}</div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example4c">
                                                    Password
                                                </label>
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    id="form3Example4c"
                                                    name="pass"
                                                    value={formik.values.pass}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={`form-control ${formik.touched.pass && formik.errors.pass ? 'is-invalid' : ''
                                                        }`}
                                                />
                                                {formik.touched.pass && formik.errors.pass && (
                                                    <div className="invalid-feedback">{formik.errors.pass}</div>
                                                )}
                                            </div>

                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example5c">
                                                    Gender
                                                </label>
                                                <select
                                                    id="form3Example5c"
                                                    name="gender"
                                                    value={formik.values.gender}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={`form-select ${formik.touched.gender && formik.errors.gender ? 'is-invalid' : ''}`}
                                                >
                                                    <option value="">Select Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                                {formik.touched.gender && formik.errors.gender && (
                                                    <div className="invalid-feedback">{formik.errors.gender}</div>
                                                )}
                                            </div>
                                        </div>


                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example3c">
                                                    Contact
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="form3Example3c"
                                                    name="contact"
                                                    value={formik.values.contact}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={`form-control ${formik.touched.contact && formik.errors.contact ? 'is-invalid' : ''}`}
                                                />
                                                {formik.touched.contact && formik.errors.contact && (
                                                    <div className="invalid-feedback">{formik.errors.contact}</div>
                                                )}
                                            </div>
                                        </div>


                                        <div className="pb-4 dsad">
                                            <Link
                                                style={{ textDecoration: 'none' }}
                                                className="text-dark"
                                                to={'/'}
                                            >
                                                Already have an Account??
                                            </Link>
                                        </div>

                                        <div className="d-flex dsad  mb-lg-4">


                                            <button type="submit"
                                                class="buttoncd button-4 btn-lg btn-block Login-fonts mt-2 ps-3"
                                            >Register
                                            </button>

                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Register;
