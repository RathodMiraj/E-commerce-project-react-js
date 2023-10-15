import React, { useEffect, useState } from 'react';
import './Style/Index1.css';
import Container from 'react-bootstrap/Container';
import logo from './Image/slide1.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { KEYS, getJSON } from './helper';
import Layout from './Layout';
import Footer from './Footer';
import ToggleTheme from './TogglePage';

function Index1(props) {
    const [alldata, setData] = useState([]);
    const navigate = useNavigate();
    const [cartCount, setCartCount] = useState(0);


    useEffect(() => {
        let productData = getJSON(KEYS.PRODUCT)
        if (productData) {
            setData(productData);
        }

        const cartData = JSON.parse(localStorage.getItem('cart'));
        if (cartData && Array.isArray(cartData)) {
            setCartCount(cartData.length);
        }

        const loginId = localStorage.getItem('LoginEmail')

        document.getElementById('asdf').innerHTML = loginId


    }, []);

    const user = (id) => {

        navigate("/user-product/" + id)
        // localStorage.setItem('id', id)
    }

    let expand = 'sm';

    return (
        <>
            <Layout>
                <section id='home' className="banner_main ">
                    <div className="container-fluid p-0 m-0">
                        <div className="row dasdas p-0 m-0 d_flex">
                            <div className="col-lg-5 col-md-12 m-0 p-0">
                                <div className="text-bg">
                                    <p id='asdf'></p>
                                    <h1 className='max-wi'>Computer and laptop shop</h1>
                                    <strong>Free Multipurpose Responsive</strong>
                                    <span>Landing Page 2022</span>
                                    <a style={{ textDecoration: 'none' }} href="#das">Buy Now</a>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12  padding_right1 ">
                                <div className="text-img">
                                    <figure><div data-aos="zoom-in-up" className='Imasge'></div></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="about" className="about pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage ">
                                    <h2>About</h2>
                                    <span >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley..</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2 ">
                                <div className="about_box">
                                    <figure><img className='rounded-4' src={logo} alt="#" /></figure>
                                    <a style={{ textDecoration: 'none' }} className="read_more mt-5 text-dark" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <Container fluid>
                    <div className='d-flex  justify-content-center align-items-center flex-wrap mmm pt-4 pb-4 p-2'>
                        {alldata.length > 0 ?
                            alldata && alldata.length > 0 && alldata.map((value) => (
                                <div onClick={() => user(value.id)} className='dasddasdsa product-item m-2'>
                                    <img className='dfdf' src={value.img[0]} alt="" />
                                    <div className='p-3'>
                                        <h6 className='pt-2'> Choice : {value.choice}</h6>
                                        <h6 className='pt-2'>Brand : {value.brand}</h6>
                                        <h6 className='pt-2'>Price : ₹{value.price}</h6>
                                        {/* <button className='btn btn-outline-success p-2 btn-fonts mt-3' onClick={prodecy}>Order Now</button> */}
                                    </div>
                                </div>
                            )) :
                            <h1>No Product , Please Product Add</h1>
                        }
                    </div>
                </Container>

                <div className="two_box">
                    <div className="container-fluid">
                        <div className="row d_flex">
                            <div className="col-lg-6 col-md-12">
                                <div className="two_box_img">
                                    <figure ><div data-aos="fade-down"
                                        data-aos-easing="linear"
                                        style={{ borderRadius: 20 }}
                                        data-aos-duration="5500" className='Bg-Images '></div></figure>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 center-csdsa ">
                                <div className="two_box_img ">
                                    <h3 className='fw-bold text-dark '><span class="offer ">15% <br /></span>0ffer everyday</h3>
                                    <p className='fggad text-dark center-csdsa '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id='contact' className="contact-page-sec sections ">
                    <div className="container">
                        <div className="row">
                            <div className=" col-md-6 col-lg-4 pb-4 ">
                                <div className="contact-info">
                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <i className="fas fa-map-marked"></i>
                                        </div>
                                        <div className="contact-info-text p-3">
                                            <h2>address</h2>
                                            <span> FLAT-102 , RAVIKIRAN
                                                APPARTMENT , HIRABAUG, VARACHHA
                                                ROAD, HIRABAUG, SURAT,
                                                Gujarat - 395006
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-6 col-lg-4">
                                <div className="contact-info">
                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="contact-info-text  p-3">
                                            <h2>E-mail</h2>
                                            <span>mirajrathod9672@gmail.com</span>
                                            <span>rutvikrathod07@gmail.com</span>
                                            <span>ashvinrathod2525@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-6 col-lg-4">
                                <div className="contact-info">
                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <i className="fas fa-clock"></i>
                                        </div>
                                        <div className="contact-info-text p-4">
                                            <h2 className='p-1'>office time</h2>
                                            <span>Mon - Thu  9:00 am - 4.00 pm</span>
                                            <span>Thu - Mon  10.00 pm - 5.00 pm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact-page-form" method="post">
                                    <h2 className='cnhetr fs-2 ms-1'>Get in Touch</h2>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <div className="single-input-field">
                                                    <input type="text" placeholder="Your Name" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <div className="single-input-field">
                                                    <input type="email" placeholder="E-mail" name="email" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <div className="single-input-field">
                                                    <input type="text" placeholder="Phone Number" name="phone" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <div className="single-input-field">
                                                    <input type="text" placeholder="Subject" name="subject" />
                                                </div>
                                            </div>
                                            <div className="col-md-12 message-input">
                                                <div className="single-input-field">
                                                    <textarea placeholder="Write Your Message" name="message"></textarea>
                                                </div>
                                            </div>
                                            <div className="single-input-fieldsbtn cnhetr">
                                                <input style={{ backgroundColor: "black" }} type="submit" />
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-page-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.408861700904!2d72.85989507490544!3d21.215629581334685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1abac4421d%3A0xeaf809ece6c2526a!2sHirabag%20Circle%2C%20Hirabaugh%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1693759854737!5m2!1sen!2sin" width="100%" height="400" frameborder="0" style={{ border: 'none' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

            </Layout>
        </>
    );
}

export default Index1;
