import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Style/AllProduct.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import imae from "./Image/asdf.jpg"
import ToggleTheme from './TogglePage';
const AllProduct = () => {

    const [alldata, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        let data = []

        if (localStorage.getItem('product')) {
            data = JSON.parse(localStorage.getItem('product'))
            setData(data)
        }

    }, [])

    const Product = (id) => {

        navigate("/product-details/" + id)
        // localStorage.setItem('id', id)
    }

    let expand = 'sm'

    return (
        <>
            <ToggleTheme />

            <Navbar key={expand} expand={expand} className="asdf">
                <Container fluid>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        style={{ backgroundColor: '#1A1E25' }}
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <img width={130} src={imae} alt="" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <div className="offcanvas-body ms-2">
                            <ul className="navbar-nav justify-content-end  flex-grow-1 pe-3">
                                <li className="nav-item adsdasdasda sidenavs mt-2">
                                    <Link className='asd' to={'/admin'}>
                                        Add Product
                                    </Link>
                                </li>
                                <li class="nav-item adsdasdasda mt-2">
                                    <Link className='asd' to={'/allProduct'}>
                                        All Product
                                    </Link>
                                </li>

                                <li class="nav-item adsdasdasda mt-2">
                                    <Link className='asd' to={'/adminOrder'}>
                                        Order Page
                                    </Link>
                                </li>

                                <li class="nav-item adsdasdasda mt-2">
                                    <Link className='asd' to={'/index'}>
                                        WebPage
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div style={{ backgroundColor: '#1A1E25' }} className="sidenav ">
                <div style={{ position: 'relative', left: 5 }} className='bg-image mt-2'></div>
                <Link className='ms-2' to={'/admin'}>
                    <i class="bi bi-house-add-fill me-3"></i>
                    Add Product
                </Link>
                <Link className='ms-2' to={'/allProduct'}>
                    <i class="bi bi-clipboard-data  me-3"></i>
                    All Product
                </Link>
                <Link className='ms-2' to={'/adminOrder'}>
                    <i class="bi bi-bag-check-fill me-3"></i>
                    Order Page
                </Link>
                <Link className='ms-2' to={'/index'}>
                    <i class="bi bi-browser-chrome me-3"></i>
                    Web Page
                </Link>

            </div>

            <div className="mainsss mmm">
                {alldata && alldata.length > 0 ?
                    alldata && alldata.length > 0 && alldata.map((value) => (
                        <div onClick={() => Product(value.id)} className='dasd m-2'>
                            <img className='dfdf' src={value.img[0]} alt="" />
                            <div className='pt-3'>
                                <h5>{value.choice}</h5> <br />
                                <h5>{value.brand}</h5> <br />
                                <h5> ₹ {value.price}</h5> <br />
                            </div>
                        </div>
                    )) :

                    (
                        <h1 className='d-flex text-center align-items-center pt-5 justify-content-center'> No Product , Please Product Add</h1>
                    )
                }
            </div>
        </>
    );
};

export default AllProduct;

