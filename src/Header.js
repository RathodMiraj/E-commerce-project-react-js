import React, { useEffect, useState } from 'react';
import './Style/Index1.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { Dropdown } from 'react-bootstrap';
import imae from "./Image/asdf.jpg"
import ToggleTheme from './TogglePage';

const Header = () => {
    const navigate = useNavigate();
    const [cartCount, setCartCount] = useState(0);

    const [addressData, setAddressData] = useState([]);
    const [showAddressModal, setShowAddressModal] = useState(false);

    const [editAddressModalVisible, setEditAddressModalVisible] = useState(false);
    const [editedAddress, setEditedAddress] = useState('');
    const [editedPinCode, setEditedPinCode] = useState('');
    const [editedContactNumber, setEditedContactNumber] = useState('');
    const [selectedAddressId, setSelectedAddressId] = useState(null);

    const [showPopup, setShowPopup] = useState(false);

    const [address, setAddress] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    let expand = 'sm';

    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        let user = JSON.parse(localStorage.getItem('alldata'));
        let Login = localStorage.getItem('LoginId')

        const cartCountFromLocalStorage = localStorage.getItem('cartCount');

        const Uid = localStorage.getItem('Uid');

        if (cartCountFromLocalStorage) {
            setCartCount(parseInt(cartCountFromLocalStorage));
        }


        let MayAddress = []

        for (let i = 0; i < user.length; i++) {
            if (user[i].CorUserid == Login) {
                MayAddress = user[i].Address

                setAddressData(MayAddress)

            }
        }

    }


    const editAddress = (address) => {
        setEditedAddress(address.address);
        setEditedPinCode(address.pinCode);
        setEditedContactNumber(address.contactNumber);
        setSelectedAddressId(address.id);
        setEditAddressModalVisible(true);

        setShowAddressModal(false)
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();

        let registerData = JSON.parse(localStorage.getItem('alldata'));
        let usrId = registerData.findIndex(i => i.CorUserid == localStorage.getItem('LoginId'));

        const updatedAddress = {
            address: editedAddress,
            pinCode: editedPinCode,
            contactNumber: editedContactNumber,
        };

        const updatedAddressIndex = registerData[usrId].Address.findIndex((address) => address.id === selectedAddressId);
        registerData[usrId].Address[updatedAddressIndex] = updatedAddress;

        localStorage.setItem('alldata', JSON.stringify(registerData));
        setEditAddressModalVisible(false);

        alert('Address updated successfully');

        getData()
    }

    const login = () => {
        navigate('/login');
    }

    const profile = () => {
        navigate('/profile');
    }

    const product = () => {
        navigate('/product');
    }

    const homes = () => {
        // navigate('/index');
        window.location.href = '/index'
    }

    const home = () => {
        navigate('/index');
    }

    const cart = () => {
        navigate('/cart');
    }

    const order = () => {
        navigate('/allUserOrder');
    }

    const ShowaddressClick = () => {
        setShowAddressModal(true);
    }

    const logOut = () => {
        const confirmLogout = window.confirm("Do you really want to logout?");
        if (confirmLogout) {
            alert("Logout confirmed!");
            localStorage.removeItem('LoginEmail')
            localStorage.removeItem('LoginId')
            navigate('/')
        }
    }


    const click = () => {
        setShowAddressModal(false)
        setShowPopup(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let registerData = JSON.parse(localStorage.getItem('alldata'));
        let usrId = registerData.findIndex(i => i.CorUserid == localStorage.getItem('LoginId'));

        const userData = {
            address,
            pinCode,
            contactNumber,
            id: Date.now()
        }

        registerData[usrId].Address.push(userData);
        localStorage.setItem('alldata', JSON.stringify(registerData));

        alert('You Added Address')
        setShowPopup(false);

        getData()
    };

    return (
        <div>
            <Navbar key={expand} expand={expand} className='asad' style={{ background: '#1A1E25' }}>
                <Container fluid>
                    <Navbar.Brand href="">
                        <div onClick={homes} className='bg-image ps-2'></div>
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


                            <button onClick={ShowaddressClick} className='bg-light rounded p-2 ms-lg-4 ms-md-4  ms-sm-4 tpst6yd'>Address</button>
                            {/* <button onClick={login} className='btn btn-primary ms-lg-4  ms-md-4  ms-sm-4'>Login</button> */}
                            <div className='dadasadasdas'>
                                <Link to={'/cart'}>
                                    <i className="bi bi-cart4 fs-3 tops text-light"></i>
                                </Link>

                            </div>
                            <Dropdown className='cxz'>
                                <Dropdown.Toggle style={{ border: 'none' }} className=' ms-lg-4 bg-light cxz ms-md-5 mt-1  ms-sm-5'>
                                    <i class="bi bi-person-circle text-dark ms-2 "></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <Dropdown.Item href="" onClick={profile}>Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={logOut} href="">Logout <i class="bi bi-box-arrow-right ms-1"></i></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>


            <Modal show={showAddressModal} onHide={() => setShowAddressModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>User Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {addressData.length > 0 ? (
                        <>
                            {addressData.map((address) => (
                                <div key={address.id}>
                                    <h6 className="pb-2">Address : {address.address}</h6>
                                    <h6 className="pb-2">Pin Code: {address.pinCode}</h6>
                                    <h6 className="pb-2">Contact Number: {address.contactNumber}</h6>
                                    <button className='btn btn-primary mt-2' onClick={() => editAddress(address)}>Edit Address</button>
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            <h5>No Address</h5>
                            <button className='btn btn-primary mt-3' onClick={click}>Add Address</button>
                        </>
                    )}
                </Modal.Body>
            </Modal>
            <Popup open={showPopup} onClose={() => setShowPopup(false)}>
                <div className='p-4'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group pb-4">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group pb-4">
                            <label htmlFor="pinCode">Pin Code</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pinCode"
                                value={pinCode}
                                onChange={(e) => setPinCode(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group pb-4">
                            <label htmlFor="contactNumber">Contact Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="contactNumber"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </Popup>

            <Modal show={editAddressModalVisible} onHide={() => setEditAddressModalVisible(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleEditSubmit}>
                        <div className="form-group pb-4">
                            <label htmlFor="editedAddress"> Address</label>
                            <input
                                type="text"
                                className="form-control mt-2"
                                id="editedAddress"
                                value={editedAddress}
                                onChange={(e) => setEditedAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group pb-4">
                            <label htmlFor="editedPinCode">Pin Code</label>
                            <input
                                type="text"
                                className="form-control mt-2"
                                id="editedPinCode"
                                value={editedPinCode}
                                onChange={(e) => setEditedPinCode(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group pb-4">
                            <label htmlFor="editedContactNumber">Contact Number</label>
                            <input
                                type="text"
                                className="form-control mt-2"
                                id="editedContactNumber"
                                value={editedContactNumber}
                                onChange={(e) => setEditedContactNumber(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Update Address</button>
                    </form>
                </Modal.Body>
            </Modal>

        </div>
    );
};

export default Header;
