import React from 'react';
import './index.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 offset-lg-3'>
                        <div className='contact-content text-center'>
                            <div className='contact-social'>
                                <ul>
                                    <li><a className='hover-target' href=''><i className='bi bi-linkedin'></i></a></li>
                                    <li><a className='hover-target' href=''><i className='bi bi-facebook'></i></a></li>
                                    <li><a className='hover-target' href=''><i className='bi bi-instagram'></i></a></li>
                                    <li><a className='hover-target' href=''><i className='bi bi-whatsapp'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='copyright text-center'>
                <p className='m-0'>Copyright &copy; 2019 <span className='heart'>&#10084;</span> All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
