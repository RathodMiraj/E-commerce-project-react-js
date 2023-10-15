import React from 'react';
import Layout from './Layout';

const Contact = () => {
    return (
        <Layout>
            <section id='contact' style={{ position: 'relative', top: 110, marginBottom: 90 }} className="contact-page-sec sections contact-section">
                <div className="container">
                    <div className="row">
                        <div className=" col-md-6 col-lg-4">
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
                                            <input type="submit" />
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
        </Layout>
    );
};

export default Contact;