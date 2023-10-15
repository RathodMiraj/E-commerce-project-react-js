import React from 'react';
import Layout from './Layout';
import './Style/App.css';


import logo from './Image/slide1.jpg';
const About = () => {

    return (
        <div>
            <Layout>

                <div id="about" className=" about m-0 ">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default About;