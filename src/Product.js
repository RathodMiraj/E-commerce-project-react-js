import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { Container, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Style/Product.css';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import imae from "./Image/asdf.jpg"
import QRCode from 'react-qr-code';

const Product = () => {
    const [sortOrder, setSortOrder] = useState('asc');
    const [alldata, setData] = useState([]);

    const [filteredData, setFilteredData] = useState([]);

    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [cartCount, setCartCount] = useState(0);

    const [selectedBrands, setSelectedBrands] = useState([]);


    useEffect(() => {
        const cartCountFromLocalStorage = localStorage.getItem('cartCount');

        if (cartCountFromLocalStorage) {
            setCartCount(parseInt(cartCountFromLocalStorage));
        }
    }, []);

    const handleCheckboxChange = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter((item) => item !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    useEffect(() => {
        const filteredProducts = alldata.filter((product) => {
            if (selectedBrands.length === 0) {
                return true;
            }
            return selectedBrands.includes(product.brand);
        });

        setFilteredData(filteredProducts);
    }, [selectedBrands, alldata]);


    const product = () => {
        navigate('/product');
    }
    const about = () => {
        navigate('/about');
    }

    const profile = () => {
        navigate('/profile');
    }
    const home = () => {
        navigate('/index');
    }
    const contact = () => {
        navigate('/contact');
    }
    const cart = () => {
        navigate('/cart');
    }
    const order = () => {
        navigate('/allUserOrder');
    }


    let expand = 'sm';

    useEffect(() => {
        let data = [];

        if (localStorage.getItem('product')) {
            data = JSON.parse(localStorage.getItem('product'));
            setData(data);
            setFilteredData(data);
        }
    }, []);


    const UserProduct = (id) => {
        navigate("/user-product/" + id);
        // localStorage.setItem('id', id);
    };
    const logOut = () => {
        const confirmLogout = window.confirm("Do you really want to logout?");
        if (confirmLogout) {
            alert("Logout confirmed!");
            navigate('/')
        }
    }

    const sortData = (order) => {
        const sortedData = [...filteredData];
        if (order === 'asc') {
            sortedData.sort((a, b) => a.price - b.price);
        } else {
            sortedData.sort((a, b) => b.price - a.price);
        }

        setFilteredData(sortedData);
        setSortOrder(order);
    };

    const filterByPriceRange = (minPrice, maxPrice) => {
        const filtered = alldata.filter((product) => {
            const price = parseFloat(product.price.replace("$", "").replace(",", ""));
            return price >= minPrice && price <= maxPrice;
        });
        setFilteredData(filtered);
    };

    const handlePriceFilter = (value) => {
        switch (value) {
            case 'all':
                setFilteredData(alldata);
                break;
            case '0 to 1000':
                filterByPriceRange(0, 1000);
                break;
            case '1000 to 2000':
                filterByPriceRange(1000, 2000);
                break;
            case '2000 to 3000':
                filterByPriceRange(2000, 3000);
                break;
            case '3000 to 50000000':
                filterByPriceRange(3000, 50000000);
                break;
            default:
                setFilteredData(alldata);
                break;
        }
    };

    const filterByCategory = (choice) => {
        if (choice === 'all') {
            setFilteredData(alldata);
        } else {

            const filteredByChoice = alldata.filter((item) => item.choice == choice);
            setFilteredData(filteredByChoice);
        }
    };


    return (
        <>
            <Navbar key={expand} expand={expand} className='asad' style={{ background: ' #1A1E25' }}>
                <Container fluid>
                    <Navbar.Brand onClick={home} href="">
                        <div className='bg-image '></div>
                    </Navbar.Brand>
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
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 ms-2">
                                <Nav.Link href="" style={{ color: 'white' }} onClick={home}>Home</Nav.Link>
                                {/* <Nav.Link href="" style={{color:'white'}} onClick={about}>About</Nav.Link> */}
                                <Nav.Link href="" style={{ color: 'white' }} onClick={product}>Product</Nav.Link>
                                {/* <Nav.Link href="" style={{color:'white'}} onClick={cart}>Cart</Nav.Link> */}
                                {/* <Nav.Link href="" style={{color:'white'}} onClick={contact}>Contact</Nav.Link> */}
                                <Nav.Link href="" style={{ color: 'white' }} onClick={order}>MyOrder</Nav.Link>
                            </Nav>
                            <div className='serchDiv'>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2 "
                                        aria-label="Search"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </Form>
                            </div>

                            <div className='dadasadasdas'>
                                <Link to={'/cart'}>
                                    <i className="bi bi-cart4 text-light fs-3"></i>
                                </Link>
                            </div>
                            <Dropdown className='cxz'>
                                <Dropdown.Toggle style={{ border: 'none' }} className='ms-lg-4 bg-light ms-md-5  cxz ms-sm-5'>
                                    <i class="bi bi-person-circle  text-dark ms-2 "></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <Dropdown.Item onClick={profile} href="">Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={logOut} href="">Logout <i class="bi bi-box-arrow-right ms-1"></i></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div className="sidenavbar ">
                <div className="price-filter ">
                    <div className=''>
                        <h5> filter Price :</h5>
                        <button variant="" className='show-btn-price bg-dark text-light p-0 m-0  border-0' onClick={() => sortData('asc')}>
                            L to H <i class="bi bi-arrow-down ms-2"></i>
                        </button>
                        <br />

                        <button variant="" className='show-btn-price bg-dark text-light pt-2 p-0 m-0 border-0' onClick={() => sortData('desc')}>
                            H to L <i className="bi bi-arrow-up ms-2"></i>
                        </button>
                    </div>
                    <br />

                    <div className='pb-4'>
                        <input
                            type="checkbox"
                            id="HP"
                            name="brand"
                            value="HP"
                            checked={selectedBrands.includes('HP')}
                            onChange={() => handleCheckboxChange('HP')}
                        />
                        <label htmlFor="HP" className='ms-2'>
                            HP
                        </label>
                        <br />

                        <input
                            type="checkbox"
                            id="DELL"
                            name="brand"
                            value="DELL"
                            checked={selectedBrands.includes('DELL')}
                            onChange={() => handleCheckboxChange('DELL')}
                        />
                        <label htmlFor="DELL" className='ms-2'>
                            DELL
                        </label>
                        <br />
                        <input
                            type="checkbox"
                            id="SAMSUNG"
                            name="brand"
                            value="SAMSUNG"
                            checked={selectedBrands.includes('SAMSUNG')}
                            onChange={() => handleCheckboxChange('SAMSUNG')}
                        />
                        <label htmlFor="SAMSUNG" className='ms-2'>
                            SAMSUNG
                        </label>
                        <br />
                        <input
                            type="checkbox"
                            id="LENOVO"
                            name="brand"
                            value="LENOVO"
                            checked={selectedBrands.includes('LENOVO')}
                            onChange={() => handleCheckboxChange('LENOVO')}
                        />
                        <label htmlFor="LENOVO" className='ms-2'>
                            LENOVO
                        </label>
                        <br />

                    </div>

                    <div className='pb-4'>
                        <h5>Choice :</h5>
                        <button
                            className=" clsss p-0 border-0 bg-dark text-light"
                            style={{ cursor: 'pointer' }}
                            onClick={() => filterByCategory('LAPTOP')}
                        >
                            Laptop
                        </button>
                        <br />
                        <button
                            className="mt-2 clsss p-0 border-0 bg-dark text-light"
                            style={{ cursor: 'pointer' }}
                            onClick={() => filterByCategory('COMPUTER')}
                        >
                            Computer
                        </button>

                    </div>

                    <div>
                        <h5> Price :</h5>
                        <button className=' p-0 clsss border-0 bg-dark text-light' style={{ cursor: 'pointer' }} value={'all'} onClick={(e) => handlePriceFilter(e.target.value)}>
                            AllProduct
                        </button>
                        <br />
                        <button className='mt-2 p-0 clsss border-0 bg-dark text-light' style={{ cursor: 'pointer' }} value={'0 to 1000'} onClick={(e) => handlePriceFilter(e.target.value)}>
                            ₹ 0 to ₹ 1000
                        </button>
                        <button className='mt-2 p-0 clsss border-0 bg-dark text-light' style={{ cursor: 'pointer' }} value={'1000 to 2000'} onClick={(e) => handlePriceFilter(e.target.value)}>
                            ₹ 1000 to ₹ 2000
                        </button>
                        <button className='mt-2 p-0 clsss border-0 bg-dark text-light' style={{ cursor: 'pointer' }} value={'2000 to 3000'} onClick={(e) => handlePriceFilter(e.target.value)}>
                            ₹ 2000 to ₹ 3000
                        </button>
                        <button className='mt-2 p-0 clsss border-0 bg-dark text-light' style={{ cursor: 'pointer' }} value={'3000 to 50000000'} onClick={(e) => handlePriceFilter(e.target.value)}>
                            ₹  3000 to ₹ all
                        </button>
                    </div>
                </div>
            </div>

            <Container fluid>
                <div id='product' className="mainsse llllll pt-div pt-5 pb-4">
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => {
                            if (item.choice.includes(searchQuery) || item.brand.includes(searchQuery)) {
                                const qrCodeValue = `${item.choice},${item.brand},${item.price}`;
                                return (
                                    <div
                                        onClick={() => UserProduct(item.id)}
                                        className='dasd m-3 pt-4'
                                        key={item.id}

                                    >
                                        <img className='dfdf' src={item.img[0]} alt="" />
                                        <div className='pt-3 pb-3'>
                                            <h6 className='pt-2'>{item.choice}</h6>
                                            <h6 className='pt-2'>{item.brand}</h6>
                                            <h6 className='pt-2'> ₹{item.price}</h6>
                                        </div>

                                        {   /* <Link >
                                            <QRCode className='vnvn'  value={qrCodeValue} />
                                        </Link>
                                         */}
                                    </div>
                                );
                            }
                            return null;
                        })
                    ) : (
                        <>
                            <h1>No Product </h1>
                        </>
                    )}
                </div>
            </Container>

            {/* 
            <div className='footer-div'>
                <div style={{ background: '#1A1E25', paddingRight: 50 }} id="">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 offset-lg-3">
                                <div class="contact-content text-center">

                                    <div class="contact-social">
                                        <ul>
                                            <li><a class="hover-target" href=""><i class="bi bi-linkedin"></i></a></li>
                                            <li><a class="hover-target" href=""><i class="bi bi-facebook"></i></a></li>
                                            <li><a class="hover-target" href=""><i class="bi bi-instagram"></i></a></li>
                                            <li><a class="hover-target" href=""><i class="bi bi-whatsapp"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className='p-0 m-0' style={{ background: '#1A1E25' }}>
                    <div className='copyright text-center'>
                        <p className='m-0'>Copyright &copy; 2019 <span className='heart'>&#10084;</span> All Rights Reserved.</p>
                    </div>
                </footer>

            </div> */}
        </>
    );
};

export default Product;
